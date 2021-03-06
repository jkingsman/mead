function leftPadSerial(serial, serialPadding = 4) {
    return (`000000000000${serial}`).substr(-serialPadding, serialPadding);
}

// convert markdown to HTML
Handlebars.registerHelper('markdown', (text) => {
    const converter = new showdown.Converter();
    const renderedRecipe = converter.makeHtml(text);
    return renderedRecipe;
});

// left pad serial with zeroes
Handlebars.registerHelper('padSerial', text => leftPadSerial(text));

// convert given date into days remaining until/negative days past
Handlebars.registerHelper('daysFromNow', (date) => {
    const today = new Date();
    const then = new Date(date);
    const timeDiff = then - today;
    const dayDiff = ((((timeDiff / 1000) / 60) + today.getTimezoneOffset()) / 60) / 24;

    return Math.floor(dayDiff) + 1;
});

function setTab(title, search) {
    history.replaceState(null, `Mead Kiwi | ${title}`, `${window.location.origin}/?${search}${window.location.hash}`);
}

function initializeMaterialize() {
    $('ul.tabs').tabs({
        onShow(tab) {
            switch (tab[0].id) {
            case 'pageContent':
                setTab('Batch Data', tab[0].id);
                break;
            case 'recipes':
                setTab('Recipes', tab[0].id);
                break;
            case 'calculators':
                setTab('Calculators', tab[0].id);
                break;
            default:
                break;
            }
        },
    });

    $('select').material_select();
    $('.collapsible').collapsible();
    $('.slider').slider();
    Materialize.updateTextFields();
}

// draw a given batch
function drawBatch(batchToDraw) {
    // inject recipe
    const batch = batchToDraw;
    batch.recipe = recipes[batch.recipeName];

    // inject gravity calculations
    if (batch.gravReadings.length > 0) {
        const originalGravity = batch.gravReadings[0][1];
        batch.gravReadings = batch.gravReadings.map((gravReading) => {
            const abv = Math.round((originalGravity - gravReading[1]) * 13271.5) / 100;
            gravReading.push(abv);
            return gravReading;
        });
    }

    // compile template
    const source = $('#meadTemplate').html();
    const template = Handlebars.compile(source);
    const html = template(batch);
    $('#pageContent').html(html);

    // generate QR code
    const qrOptions = {
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
    const el = kjua(qrOptions);
    el.style.width = '100%';
    el.style.height = 'auto';

    // render into place on the page and DON'T add batch text
    const qrCodeContainer = document.getElementById('qrCode');
    qrCodeContainer.prepend(el);
}

// check if valid batch; return index if so and -1 if not
function checkValidBatch(batchID) {
    const batchIDs = meadData.map(batch => batch.batchID);

    return batchIDs.indexOf(batchID);
}

// check if valid batch; return index if so and -1 if not
function checkValidBottle(bottleID) {
    for (let i = 0; i < meadData.length; i += 1) {
        if (bottleID >= meadData[i].bottleRangeMin && bottleID <= meadData[i].bottleRangeMax) {
            return i;
        }
    }

    return -1;
}

// validate ID and call draw function
function lookup() {
    const rawID = $('#serial').val(); // full ID
    const idType = rawID[0].toUpperCase(); // first char (B or F)
    const idNumber = Number(rawID.slice(1)); // numerical component

    // check correct bottle/batch accordingly
    let dataID = -1;
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
    const paddedSerial = idType + leftPadSerial(idNumber);
    if (window.location.hash.length < 1) {
    // if this is a direct entry, set the hash and ignore search
        history.replaceState(null, `Mead Kiwi | ${paddedSerial}`, `${window.location.origin}/#${paddedSerial}`);
    } else {
    // if it's a link, just set the title
        document.title = `Mead Kiwi | ${paddedSerial}`;
    }


    // inject padded serial
    meadData[dataID].id = paddedSerial;

    // draw the batch
    drawBatch(meadData[dataID]);
}

function drawRecipes() {
    const source = $('#recipeTemplate').html();
    const template = Handlebars.compile(source);
    for (const recipe in recipes) {
    // determine which recipes it was used in
        const usedIn = [];
        /* jshint ignore:start */
        meadData.forEach((batch) => {
            if (batch.recipeName === recipe) {
                usedIn.push(`F${leftPadSerial(batch.batchID)} (${batch.timeline[0][0]})`);
            }
        });
        /* jshint ignore:end */

        let usedInString = 'Not used';
        if (usedIn.length > 0) {
            usedInString = `Batch usage: ${usedIn.join(', ')}`;
        }

        // roll into big object for display
        const rolledRecipe = recipes[recipe];
        rolledRecipe.name = recipe;
        rolledRecipe.usedInString = usedInString;
        $('#recipeEntryContainer').append(template(rolledRecipe));
    }
}

$(document).ready(() => {
    // initialize modal handling and focus the input field
    $('.modal').modal();
    $('#serial').focus();

    if (window.location.search.length > 0) {
    // check for tab jump
        const tabName = window.location.search.substr(1);
        $('ul.tabs').tabs('select_tab', tabName);
    }

    if (window.location.hash.length > 1) {
    // check for shortlink presence
        const id = window.location.hash.slice(1);
        $('#serial').val(id);
        lookup();
    }

    // compile template and render current status
    const source = $('#currentStatusTemplate').html();
    const template = Handlebars.compile(source);
    const html = template(meadData);
    $('#currentStatusContainer').html(html);

    drawRecipes();
    initializeMaterialize();
});

// handle enter keypress in input box
$('#serial').on('keyup', (e) => {
    if (e.keyCode === 13) {
        lookup();
    }
});

// hacky fix to make the page relaod when you click links to different meads
window.onhashchange = () => window.location.reload();
