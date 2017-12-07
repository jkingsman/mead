function genericComboFinalVal() {
    const vol1 = Number(document.getElementById('comboFinalVal_Vol1').value);
    const val1 = Number(document.getElementById('comboFinalVal_Val1').value);
    const vol2 = Number(document.getElementById('comboFinalVal_Vol2').value);
    const val2 = Number(document.getElementById('comboFinalVal_Val2').value);
    const result = ((vol1 * val1) + (vol2 * val2)) / (vol1 + vol2);
    const roundedResult = Math.round(result * 100) / 100;

    document.getElementById('comboFinalVal_finalVal').value = roundedResult;
    Materialize.updateTextFields();
}

function genericComboAdditiveVol() {
    const vol1 = Number(document.getElementById('comboVol2_vol1').value);
    const val1 = Number(document.getElementById('comboVol2_val1').value);
    const val2 = Number(document.getElementById('comboVol2_val2').value);
    const valFinal = Number(document.getElementById('combovol2_finalVal').value);
    const result = (vol1 * (valFinal - val1)) / (val2 - valFinal);
    const roundedResult = Math.round(result * 100) / 100;

    document.getElementById('comboVol2_vol2').value = roundedResult;
    Materialize.updateTextFields();
}

function genericComboAdditiveVal() {
    const vol1 = Number(document.getElementById('comboVal2_vol1').value);
    const val1 = Number(document.getElementById('comboVal2_val1').value);
    const vol2 = Number(document.getElementById('comboVal2_vol2').value);
    const valFinal = Number(document.getElementById('comboval2_finalVal').value);
    const result = ((vol1 * (valFinal - val1)) / vol2) + valFinal;
    const roundedResult = Math.round(result * 100) / 100;

    document.getElementById('comboVal2_val2').value = roundedResult;
    Materialize.updateTextFields();
}

function residualSugar() {
    const tolerance = Number(document.getElementById('finalSG_yeastABV').value);
    const og = Number(document.getElementById('finalSG_MustOG').value);
    const k = Number(document.getElementById('finalSG_OEApprox').value);

    const maxABV = _abv(og, 1, k);
    document.getElementById('finalSG_maxABV').value = `${maxABV}%`;

    // check for sugar exhaustion below tolerance
    if (maxABV < tolerance) {
        document.getElementById('finalSG_finalABV').value = `${maxABV}%`;
        document.getElementById('finalSG_finalSG').value = '1.00';
        document.getElementById('finalSG_warnings').value = 'Must sugar exhausted!';
    } else if (maxABV > tolerance) {
        const fg = og - (tolerance / k);
        document.getElementById('finalSG_finalABV').value = `${tolerance}%`;
        document.getElementById('finalSG_finalSG').value = Math.round(fg * 100) / 100;
        document.getElementById('finalSG_warnings').value = 'Yeast exhausted!';
    } else {
        document.getElementById('finalSG_finalABV').value = `${tolerance}%`;
        document.getElementById('finalSG_finalSG').value = '1.00';
        document.getElementById('finalSG_warnings').value = 'Yeast and sugar exhausted!';
    }

    Materialize.updateTextFields();
}

function _abv(og, fg, k) {
    return Math.round((k * (og - fg)) * 100) / 100;
}

function abv() {
    const og = Number(document.getElementById('abv_MustOG').value);
    const fg = Number(document.getElementById('abv_MustFG').value);
    const k = Number(document.getElementById('abv_OEApprox').value);

    document.getElementById('abv_finalABV').value = `${_abv(og, fg, k)}%`;
    Materialize.updateTextFields();
}

function extendDate(weeks) {
    const now = new Date();
    now.setDate(now.getDate() + (weeks * 7));
    const dateString = now.toISOString().slice(0, 10);

    document.getElementById('date_result').value = dateString;
    Materialize.updateTextFields();
}

// originalUnit can be ml, l, floz, gal
function _convertToMl(volume, originalUnit) {
    switch (originalUnit) {
    case 'ml':
        return volume;
    case 'l':
        return volume * 1000;
    case 'floz':
        return volume * 29.5735296;
    case 'gal':
        return volume * 3785.41178;
    default:
        console.error('No such unit!');
    }
}

function abvConversion() {
    const volume = Number(document.getElementById('abvConversion_volume').value);
    const unit = document.getElementById('abvConversion_unit').value;
    const abv = Number(document.getElementById('abvConversion_abv').value);

    const ethanolMl = _convertToMl(volume, unit) * (abv / 100);
    const liquorShots = ethanolMl / 20.7014707; // 1.75fl.oz = 51.7536767 ml * .4 = 20.7014707 mL ethanol=
    const wineBottles = ethanolMl / 97.5; // 750 ml * .13 = 97.5 mL ethanol=
    const beerBottles = ethanolMl / 24.8417649; // 12fl.0z = 354.882355 ml * .07 = 24.8417649 mL ethanol=

    document.getElementById('abv_resultEthanol').value = Math.round(ethanolMl * 100) / 100;
    document.getElementById('abv_resultLiquor').value = Math.round(liquorShots * 100) / 100;
    document.getElementById('abv_resultWine').value = Math.round(wineBottles * 100) / 100;
    document.getElementById('abv_resultBeer').value = Math.round(beerBottles * 100) / 100;

    initializeMaterialize();
}
