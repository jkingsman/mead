/* jshint esversion:6 */

// fields that should NOT be automatically filled
var nonAutofillFields = ['ingredients', 'timeline', 'gravReadings', 'images'];

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

// draw a given batch into the modal
function drawBatch(batch) {
    $("[id^='meadData_']").each(function(elem) {
        $(this).empty();
    });

    // draw autofills -- fields whose name matches 1-1 with a page field
    for (var field in batch) {
        if (nonAutofillFields.indexOf(field) === -1) {
            var lineBreaksReplaced = String(batch[field]).replaceAll("\n", "<br />");
            $('#meadData_' + field).html(lineBreaksReplaced);
        }
    }

    // populate ingredients
    batch.ingredients.forEach(function(ingredient) {
        $('#meadData_ingredients').append('<li>' + ingredient + '</li>');
    });

    // populate timeline ingredients
    batch.timeline.forEach(function(entry) {
        $('#meadData_timeline').append('<li><strong>' + entry[0] + '</strong>: ' + entry[1] + '</li>');
    });

    // calculate ABV and populate SG
    var originalGravity = batch.gravReadings[0][1];
    batch.gravReadings.forEach(function(gravReading) {
        let abv = Math.round((originalGravity - gravReading[1]) * 13125) / 100;
        $('#meadData_gravity').append('<li><strong>' + gravReading[0] + '</strong>: ' + gravReading[1] + ' (' + abv + '% ABV); ' + gravReading[2] + '</li>');
    });

    // populate recipe
    var converter = new showdown.Converter();
    var renderedRecipe = converter.makeHtml(recipes[batch.recipeName]);
    $('#meadData_recipe').html(renderedRecipe);

    // dynamically add images to page
    if(batch.images.length > 0){
        $('#meadData_imageContainer').append('<div class="slider"><ul class="slides" id="meadData_images"></ul></div>');
        batch.images.forEach(function(image) {
            $('#meadData_images').append('<li><img src="img/' + image + '"></li>');
        });

        $('.slider').slider();
    }

    new QRCode(document.getElementById('meadData_qrcode'), window.location.href);
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


function drawRecipes(){
    for(var recipe in recipes){
        var converter = new showdown.Converter();
        var renderedRecipe = converter.makeHtml(recipes[recipe]);
        var usedIn = [];
        meadData.forEach(function(batch){
            if(batch.recipeName === recipe){
                usedIn.push(batch.batchID);
            }
        });

        var usedInString = 'Not used';
        if(usedIn.length > 0){
            usedInString = "Batch usage: " + usedIn.join(', ');
        }

        $('#recipeEntryContainer').append(`<li>
            <div class="collapsible-header">${recipe} -- ${recipes[recipe].split('\n')[0]} (${usedInString})</div>
            <div class="collapsible-body">${renderedRecipe}</div>
        </li>`);
    }
}


$(document).ready(function() {
    // initialize modal handling and focus the input field
    $('.modal').modal();
    $('#serial').focus();

    if(window.location.hash.length > 1){
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
