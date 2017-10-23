/* jshint esversion:6 */

// convert markdown to HTML
Handlebars.registerHelper("markdown", function(text) {
    var converter = new showdown.Converter();
    var renderedRecipe = converter.makeHtml(text);
    return renderedRecipe;
});

// left pad serial with zeroes
Handlebars.registerHelper("padSerial", function(text) {
    return leftPadSerial(text);
});

// convert given date into days remaining until/negative days past
Handlebars.registerHelper("daysFromNow", function(date) {
    var today = new Date();
    var then = new Date(date);
    var timeDiff = then - today;
    var dayDiff = Math.floor(((((timeDiff / 1000) / 60)  + today.getTimezoneOffset()) / 60) / 24) + 1;

    return dayDiff;
});

function leftPadSerial(serial, serialPadding = 4){
    return ("000000000000" + serial).substr(-serialPadding, serialPadding);
}

function getCleanFirstRecipeLine(recipe) {
    // scrub markdown from first line (short description) of recipe
    return recipe.split('\n')[0].replace(new RegExp('## ', 'g'), '');
}

// draw a given batch
function drawBatch(batch) {
    // inject recipe
    batch.recipe = recipes[batch.recipeName];

    // inject batch name from recipe
    batch.type = getCleanFirstRecipeLine(batch.recipe);

    // inject gravity calculations
    if (batch.gravReadings.length > 0) {
        var originalGravity = batch.gravReadings[0][1];
        batch.gravReadings = batch.gravReadings.map(function(gravReading) {
            let abv = Math.round((originalGravity - gravReading[1]) * 13271.5) / 100;
            gravReading.push(abv);
            return gravReading;
        });
    }

    // compile template
    var source = $('#meadTemplate').html();
    var template = Handlebars.compile(source);
    var html = template(batch);
    $('#pageContent').html(html);

    // generate QR code
    var qrOptions = {
        render: 'image',
        crisp: true,
        ecLevel: 'H',
        size: 512,
        back: '#f6c729',
        fill: '#000',
        text: window.location.href,
        mode: 'image',
        mSize: 50,
        mPosX: 50,
        mPosY: 50,
        image: document.getElementById('kiwiBuffer'),
        minVersion: 5,
    };
    var el = kjua(qrOptions);

    // render into place on the page and add batch text
    var qrCodeContainer = document.getElementById('qrCode');
    qrCodeContainer.innerHTML = '<h3>' + batch.id + '</h3>';
    qrCodeContainer.prepend(el);

    // convert to canvas -> data URI and render into image that includes code and batch/bottle
    html2canvas(qrCodeContainer, {
        onrendered: function(canvas) {
            document.getElementById('qrCode').innerHTML = '<img src="' + canvas.toDataURL() + '">';
        }
    });

    // materialize init
    $('.collapsible').collapsible();
    $('.slider').slider();
}

// check if valid batch; return index if so and -1 if not
function checkValidBatch(batchID) {
    var batchIDs = meadData.map(function(batch) {
        return batch.batchID;
    });

    return batchIDs.indexOf(batchID);
}

// check if valid batch; return index if so and -1 if not
function checkValidBottle(bottleID) {
    for (var i = 0; i < meadData.length; i++) {
        if (bottleID >= meadData[i].bottleRangeMin && bottleID <= meadData[i].bottleRangeMax) {
            return i;
        }
    }

    return -1;
}

// validate ID and call draw function
function lookup() {
    var rawID = $('#serial').val(); // full ID
    var idType = rawID[0].toUpperCase(); // first char (B or F)
    var idNumber = Number(rawID.slice(1)); // numerical component

    // check correct bottle/batch accordingly
    var dataID = -1;
    if (idType === 'B') {
        dataID = checkValidBottle(idNumber);
    } else if (idType === 'F') {
        dataID = checkValidBatch(idNumber);
    }

    if (dataID === -1) {
        Materialize.toast('Non-existent or malformed ID number; please try again.', 4000);
        return;
    }

    // generate padded serial and set shortlink
    var paddedSerial = idType + leftPadSerial(idNumber);
    window.location.hash = paddedSerial;

    // inject padded serial
    meadData[dataID].id = paddedSerial;

    // draw the batch
    drawBatch(meadData[dataID]);
}

function drawRecipes() {
    for (var recipe in recipes) {
        var converter = new showdown.Converter();
        var renderedRecipe = converter.makeHtml(recipes[recipe]);
        var usedIn = [];
        /* jshint ignore:start */
        meadData.forEach(function(batch) {
            if (batch.recipeName === recipe) {
                usedIn.push("F" + leftPadSerial(batch.batchID) + " (" + batch.timeline[0][0] + ")");
            }
        });
        /* jshint ignore:end */

        var usedInString = 'Not used';
        if (usedIn.length > 0) {
            usedInString = "Batch usage: " + usedIn.join(', ');
        }

        $('#recipeEntryContainer').append(`<li>
            <div class="collapsible-header"><strong>${recipe}</strong>&nbsp;${getCleanFirstRecipeLine(recipes[recipe])} (${usedInString})</div>
            <div class="collapsible-body">${renderedRecipe}</div>
        </li>`);
    }
}


$(document).ready(function() {
    // initialize modal handling and focus the input field
    $('.modal').modal();
    $('#serial').focus();

    // check for shortlink presence
    if (window.location.hash.length > 1) {
        var id = window.location.hash.slice(1);
        $('#serial').val(id);
        lookup();
    }

    // compile template and render current status
    var source = $('#currentStatusTemplate').html();
    var template = Handlebars.compile(source);
    var html = template(meadData);
    $('#currentStatusContainer').html(html);

    drawRecipes();
});

// handle enter keypress in input box
$("#serial").on('keyup', function(e) {
    if (e.keyCode == 13) {
        lookup();
    }
});

// hacky fix to make the page relaod when you click links to different meads
window.onhashchange = function() {
    window.location.reload();
};
