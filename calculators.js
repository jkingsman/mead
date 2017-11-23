function genericComboFinalVal(){
    const vol1 = Number(document.getElementById('comboFinalVal_Vol1').value);
    const val1 = Number(document.getElementById('comboFinalVal_Val1').value);
    const vol2 = Number(document.getElementById('comboFinalVal_Vol2').value);
    const val2 = Number(document.getElementById('comboFinalVal_Val2').value);
    const result = ((vol1 * val1) + (vol2 * val2)) / (vol1 + vol2);
    const roundedResult = Math.round(result * 100) / 100;

    document.getElementById('comboFinalVal_finalVal').value = roundedResult;
    Materialize.updateTextFields();
}

function genericComboAdditiveVol(){
    const vol1 = Number(document.getElementById('comboVal2_vol1').value);
    const val1 = Number(document.getElementById('comboVal2_val1').value);
    const val2 = Number(document.getElementById('comboVal2_val2').value);
    const valFinal = Number(document.getElementById('comboval2_finalVal').value);
    const result = (vol1 * (valFinal - val1)) / (val2 - valFinal);
    const roundedResult = Math.round(result * 100) / 100;

    document.getElementById('comboVal2_vol2').value = roundedResult;
    Materialize.updateTextFields();
}

function residualSugar(){
    const tolerance = Number(document.getElementById('finalSG_yeastABV').value);
    const og = Number(document.getElementById('finalSG_MustOG').value);
    const k = Number(document.getElementById('finalSG_OEApprox').value);

    const maxABV = _abv(og, 1, k);
    document.getElementById('finalSG_maxABV').value = maxABV + '%';

    // check for sugar exhaustion below tolerance
    if(maxABV < tolerance){
        document.getElementById('finalSG_finalABV').value = maxABV + '%';
        document.getElementById('finalSG_finalSG').value = "1.00";
        document.getElementById('finalSG_warnings').value = "Must sugar exhausted!";
    } else if(maxABV > tolerance){
        const fg = og - (tolerance / k);
        document.getElementById('finalSG_finalABV').value = tolerance + '%';
        document.getElementById('finalSG_finalSG').value = Math.round(fg * 100) / 100;
        document.getElementById('finalSG_warnings').value = "Yeast exhausted!";
    } else {
        document.getElementById('finalSG_finalABV').value = tolerance + '%';
        document.getElementById('finalSG_finalSG').value = "1.00"
        document.getElementById('finalSG_warnings').value = "Yeast and sugar exhausted!";
    }

    Materialize.updateTextFields();
    return;



}

function _abv(og, fg, k){
    return Math.round((k * (og - fg)) * 100) / 100;
}

function abv(){
    const og = Number(document.getElementById('abv_MustOG').value);
    const fg = Number(document.getElementById('abv_MustFG').value);
    const k = Number(document.getElementById('abv_OEApprox').value);

    document.getElementById('abv_finalABV').value = _abv(og, fg, k) + "%";
    Materialize.updateTextFields();
}

function extendDate(weeks){
    var now = new Date();
    now.setDate(now.getDate() + (weeks * 7));
    const dateString = now.toISOString().slice(0, 10);

    document.getElementById('date_result').value = dateString;
    Materialize.updateTextFields();
}
