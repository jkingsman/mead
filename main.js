/* jshint esversion:6 */

Handlebars.registerHelper("markdown", function(text) {
    var converter = new showdown.Converter();
    var renderedRecipe = converter.makeHtml(text);
    return renderedRecipe;
});

// draw a given batch into the modal
function drawBatch(batch) {
    // inject recipe
    batch.recipe = recipes[batch.recipeName];

    // inject gravity calculations
    var originalGravity = batch.gravReadings[0][1];
    batch.gravReadings = batch.gravReadings.map(function(gravReading) {
        let abv = Math.round((originalGravity - gravReading[1]) * 13271.5) / 100;
        gravReading.push(abv);
        return gravReading;
    });

    // compile template
    var source = $('#meadTemplate').html();
    var template = Handlebars.compile(source);
    var html = template(batch);
    $('#pageContent').html(html);

    // populate QR code
    var qrOptions = {
        render: 'image',
        crisp: true,
        ecLevel: 'H',
        size: 512,
        back: '#ffd100',
        fill: '#000',
        text: window.location.href,
        mode: 'image',
        mSize: 40,
        mPosX: 50,
        mPosY: 50,
        image: document.getElementById('kiwiBuffer'),
        minVersion: 5,
    };

    var el = kjua(qrOptions);
    el.style = 'width: 512px; height: 512px;';
    document.getElementById('qrCode').innerHTML = '';
    document.getElementById('qrCode').appendChild(el);

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
    var rawID = $('#serial').val();
    var idType = rawID[0].toUpperCase();
    var idNumber = Number(rawID.slice(1));

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

    window.location.hash = rawID;
    drawBatch(meadData[dataID]);
    $('#dataModal').modal('open');
}


function drawRecipes() {
    for (var recipe in recipes) {
        var converter = new showdown.Converter();
        var renderedRecipe = converter.makeHtml(recipes[recipe]);
        var usedIn = [];
        /* jshint ignore:start */
        meadData.forEach(function(batch) {
            if (batch.recipeName === recipe) {
                usedIn.push(batch.batchID);
            }
        });
        /* jshint ignore:end */

        var usedInString = 'Not used';
        if (usedIn.length > 0) {
            usedInString = "Batch usage: " + usedIn.join(', ');
        }

        $('#recipeEntryContainer').append(`<li>
            <div class="collapsible-header"><strong>${recipe}</strong>&nbsp;${recipes[recipe].split('\n')[0]} (${usedInString})</div>
            <div class="collapsible-body">${renderedRecipe}</div>
        </li>`);
    }
}


$(document).ready(function() {
    // initialize modal handling and focus the input field
    $('.modal').modal();
    $('#serial').focus();

    if (window.location.hash.length > 1) {
        var id = window.location.hash.slice(1);
        $('#serial').val(id);
        lookup();
    }

    drawRecipes();
});

// handle enter keypress in input box
$("#serial").on('keyup', function(e) {
    if (e.keyCode == 13) {
        lookup();
    }
});
