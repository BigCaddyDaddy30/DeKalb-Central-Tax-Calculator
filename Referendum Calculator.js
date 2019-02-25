//Global variables that can change from user input
var gav = 0;
var older = "";
var olderCircuit = "";
var propertyType = "Homestead";
var township = "";

//Township variables
var currentTotalRate = 0.0;
var currentExemptRate = 0.0;
var currentNonExemptRate = 0.0;
var futureTotalRate = 0.0;
var nonExemptZero = 0.0;
var nonExemptOne = 0.0;
var nonExemptTwo = 0.0;

//Deduction Variables
var homesteadDeduction = 0.0;
var deductionOne = 0.0;
var deductionTwo = 0.0;
var olderDeduction = 12480.0;
var netav = 0.0;

//Tax Amount Variables
var maxTaxAmount = 0.0;
var exemptTaxAmount = 0;
var taxCap = 0.0;
var grossTax = 0.0;
var actualTax = 0.0;
var maxTaxAmountZero = 0.0;
var exemptTaxAmountZero = 0.0;
var taxCapZero = 0.0;
var grossTaxZero = 0.0;
var actualTaxZero = 0.0;
var maxTaxAmountOne = 0.0;
var exemptTaxAmountOne = 0.0;
var taxCapOne = 0.0;
var grossTaxOne = 0.0;
var actualTaxOne = 0.0;
var maxTaxAmountTwo = 0.0;
var exemptTaxAmountTwo = 0.0;
var taxCapTwo = 0.0;
var grossTaxTwo = 0.0;
var actualTaxTwo = 0.0;

//Result variables
var monthlyZero = 0.0;
var monthlyTwo = 0.0;
var monthlyOne = 0.0;

//Global variables that are static 
var homesteadStandardDeduction = 45000;
var taxRateChange = -0.0153;
var twentyTwentyConstructionRate = 0.0498;
var homesteadRate = 0.01;
var agricultureRate = 0.02;
var businessRate = 0.03;
var homesteadDeductionPercent = 0.6;
var exemptRateZero = twentyTwentyConstructionRate;
var exemptRateOne = 0.0757;
var exemptRateTwo = 0.0822;

//Brings in the user input from HTML -- Complete
function inputValues() {
    gav = parseFloat(document.getElementById("gav").value);

    if (document.getElementById("propertyType1").checked) {
        propertyType = "Homestead";
    }
    else if (document.getElementById("propertyType2").checked) {
        propertyType = "Agriculture";
    }
    else if (document.getElementById("propertyType3").checked) {
        propertyType = "Business";
    }

    if (document.getElementById("olderTrue").checked) {
        older = true;
    }
    else {
        older = false;
    }

    if (document.getElementById("olderCircuitTrue").checked) {
        olderCircuit = true;
    }
    else {
        olderCircuit = false;
    }

    if (document.getElementById("township1").checked) {
        township = "Fairfield";
    }
    else if (document.getElementById("township2").checked) {
        township = "Grant-Auburn";
    }
    else if (document.getElementById("township3").checked) {
        township = "Grant";
    }
    else if (document.getElementById("township4").checked) {
        township = "Jackson-Auburn";
    }
    else if (document.getElementById("township5").checked) {
        township = "Jackson";
    }
    else if (document.getElementById("township6").checked) {
        township = "Union-Auburn";
    }
    else if (document.getElementById("township7").checked) {
        township = "Richland";
    }
    else if (document.getElementById("township8").checked) {
        township = "Corunna";
    }
    else if (document.getElementById("township9").checked) {
        township = "Smithfield";
    }
    else if (document.getElementById("township10").checked) {
        township = "Grant-Waterloo";
    }
    else if (document.getElementById("township11").checked) {
        township = "Union";
    }
    else if (document.getElementById("township12").checked) {
        township = "Smithfield-Waterloo";
    }
    else if (document.getElementById("township13").checked) {
        township = "Ashley";
    }
    else if (document.getElementById("township14").checked) {
        township = "Ashley-Steuben";
    }
}

//Sets the static township values -- Complete
function setTownshipValues(userTownship) {
    if (userTownship == "Fairfield") {
        currentTotalRate = 1.5595;
        currentExemptRate = 0.0;
        currentNonExemptRate = currentTotalRate - currentExemptRate;
        futureTotalRate = 1.5442;
        nonExemptZero = futureTotalRate - exemptRateZero;
        nonExemptOne = futureTotalRate - exemptRateOne;
        nonExemptTwo = futureTotalRate - exemptRateTwo;
    }
    else if (userTownship == "Grant") {
        currentTotalRate = 1.803;
        currentExemptRate = 0.0;
        currentNonExemptRate = currentTotalRate - currentExemptRate;
        futureTotalRate = 1.7877;
        nonExemptZero = futureTotalRate - exemptRateZero;
        nonExemptOne = futureTotalRate - exemptRateOne;
        nonExemptTwo = futureTotalRate - exemptRateTwo;
    }
    else if (userTownship == "Jackson") {
        currentTotalRate = 1.5034;
        currentExemptRate = 0.0;
        currentNonExemptRate = currentTotalRate - currentExemptRate;
        futureTotalRate = 1.4881;
        nonExemptZero = futureTotalRate - exemptRateZero;
        nonExemptOne = futureTotalRate - exemptRateOne;
        nonExemptTwo = futureTotalRate - exemptRateTwo;
    }
    else if (userTownship == "Richland") {
        currentTotalRate = 1.5306;
        currentExemptRate = 0.0;
        currentNonExemptRate = currentTotalRate - currentExemptRate;
        futureTotalRate = 1.5153;
        nonExemptZero = futureTotalRate - exemptRateZero;
        nonExemptOne = futureTotalRate - exemptRateOne;
        nonExemptTwo = futureTotalRate - exemptRateTwo;
    }
    else if (userTownship == "Smithfield") {
        currentTotalRate = 1.525;
        currentExemptRate = 0.0;
        currentNonExemptRate = currentTotalRate - currentExemptRate;
        futureTotalRate = 1.5097;
        nonExemptZero = futureTotalRate - exemptRateZero;
        nonExemptOne = futureTotalRate - exemptRateOne;
        nonExemptTwo = futureTotalRate - exemptRateTwo;
    }
    else if (userTownship == "Union") {
        currentTotalRate = 2.0248;
        currentExemptRate = 0.0;
        currentNonExemptRate = currentTotalRate - currentExemptRate;
        futureTotalRate = 2.0095;
        nonExemptZero = futureTotalRate - exemptRateZero;
        nonExemptOne = futureTotalRate - exemptRateOne;
        nonExemptTwo = futureTotalRate - exemptRateTwo;
    }
    else if (userTownship == "Ashley") {
        currentTotalRate = 2.6224;
        currentExemptRate = 0.0;
        currentNonExemptRate = currentTotalRate - currentExemptRate;
        futureTotalRate = 2.6071;
        nonExemptZero = futureTotalRate - exemptRateZero;
        nonExemptOne = futureTotalRate - exemptRateOne;
        nonExemptTwo = futureTotalRate - exemptRateTwo;
    }
    else if (userTownship == "Grant-Auburn") {
        currentTotalRate = 2.6997;
        currentExemptRate = 0.0;
        currentNonExemptRate = currentTotalRate - currentExemptRate;
        futureTotalRate = 2.6844;
        nonExemptZero = futureTotalRate - exemptRateZero;
        nonExemptOne = futureTotalRate - exemptRateOne;
        nonExemptTwo = futureTotalRate - exemptRateTwo;
    }
    else if (userTownship == "Jackson-Auburn") {
        currentTotalRate = 2.6757;
        currentExemptRate = 0.0;
        currentNonExemptRate = currentTotalRate - currentExemptRate;
        futureTotalRate = 2.6604;
        nonExemptZero = futureTotalRate - exemptRateZero;
        nonExemptOne = futureTotalRate - exemptRateOne;
        nonExemptTwo = futureTotalRate - exemptRateTwo;
    }
    else if (userTownship == "Union-Auburn") {
        currentTotalRate = 2.674;
        currentExemptRate = 0.0;
        currentNonExemptRate = currentTotalRate - currentExemptRate;
        futureTotalRate = 2.6587;
        nonExemptZero = futureTotalRate - exemptRateZero;
        nonExemptOne = futureTotalRate - exemptRateOne;
        nonExemptTwo = futureTotalRate - exemptRateTwo;
    }
    else if (userTownship == "Corunna") {
        currentTotalRate = 3.269;
        currentExemptRate = 0.0;
        currentNonExemptRate = currentTotalRate - currentExemptRate;
        futureTotalRate = 3.2537;
        nonExemptZero = futureTotalRate - exemptRateZero;
        nonExemptOne = futureTotalRate - exemptRateOne;
        nonExemptTwo = futureTotalRate - exemptRateTwo;
    }
    else if (userTownship == "Grant-Waterloo") {
        currentTotalRate = 3.5809;
        currentExemptRate = 0.0;
        currentNonExemptRate = currentTotalRate - currentExemptRate;
        futureTotalRate = 3.5656;
        nonExemptZero = futureTotalRate - exemptRateZero;
        nonExemptOne = futureTotalRate - exemptRateOne;
        nonExemptTwo = futureTotalRate - exemptRateTwo;
    }
    else if (userTownship == "Smithfield-Waterloo") {
        currentTotalRate = 3.5744;
        currentExemptRate = 0.0;
        currentNonExemptRate = currentTotalRate - currentExemptRate;
        futureTotalRate = 3.5591;
        nonExemptZero = futureTotalRate - exemptRateZero;
        nonExemptOne = futureTotalRate - exemptRateOne;
        nonExemptTwo = futureTotalRate - exemptRateTwo;
    }
    else if (userTownship == "Steuben-Ashley") {
        currentTotalRate = 2.4301;
        currentExemptRate = 0.0;
        currentNonExemptRate = currentTotalRate - currentExemptRate;
        futureTotalRate = 2.4148;
        nonExemptZero = futureTotalRate - exemptRateZero;
        nonExemptOne = futureTotalRate - exemptRateOne;
        nonExemptTwo = futureTotalRate - exemptRateTwo;
    }
}

//Calculates tax changes
function calculate() {
    if (propertyType == "Homestead") {

        //Calculating Net AV
        homesteadDeduction = gav * 0.6;
        if (homesteadDeduction > homesteadStandardDeduction) {
            homesteadDeduction = homesteadStandardDeduction;
        }
        netav = gav - homesteadDeduction;
        if (netav >= 600000) {
            deductionOne = 599999 * 0.35;
            deductionTwo = (netav - 599999) * 0.25;
            netav = netav - deductionOne - deductionTwo;
        }
        else {
            deductionOne = netav * 0.35;
            netav = netav - deductionOne;
            if (gav < 182340 && older == true) {
                netav = netav - olderDeduction; 
            }
        }
        netav = netav - 3000;

        //Tax Amounts and Caps
        maxTaxAmount = gav * homesteadRate;
        taxCap = maxTaxAmount + exemptTaxAmount;
        grossTax = (netav / 100) * currentTotalRate;
        if (grossTax < taxCap) {
            actualTax = grossTax;
        }
        else {
            actualTax = taxCap;
        }

        //Tax Amounts and Caps for "Year Zero" 2020
        maxTaxAmountZero = maxTaxAmount;
        exemptTaxAmountZero = (netav / 100) * exemptRateZero;
        taxCapZero = maxTaxAmountZero + exemptTaxAmountZero;
        grossTaxZero = (netav / 100) * futureTotalRate
        if (grossTaxZero < taxCapZero) {
            actualTaxZero = grossTaxZero;
        }
        else {
            actualTaxZero = taxCapZero;
        }
        if (olderCircuit == true && gav<160000) {
            var olderCap = actualTax * 1.02;
            if (olderCap < actualTax) {
                actualTax = olderCap;
            }
        }
        monthlyZero = (actualTaxZero - actualTax) / 12;

        //Tax Amounts and Caps for "Year One" 2021
        maxTaxAmountOne = maxTaxAmount;
        exemptTaxAmountOne = (netav / 100) * exemptRateOne;
        taxCapOne = maxTaxAmountOne + exemptTaxAmountOne;
        grossTaxOne = (netav / 100) * futureTotalRate
        if (grossTaxOne < taxCapOne) {
            actualTaxOne = grossTaxOne;
        }
        else {
            actualTaxOne = taxCapOne;
        }
        if (olderCircuit == true && gav < 160000) {
            var olderCap = actualTaxZero * 1.02;
            if (olderCap < actualTaxOne) {
                actualTaxOne = olderCap;
            }
        }
        monthlyOne = (actualTaxOne - actualTax) / 12;

        //Tax Amounts and Caps for "Year Two" 2022
        maxTaxAmountTwo = maxTaxAmount;
        exemptTaxAmountTwo = (netav / 100) * exemptRateTwo;
        taxCapTwo = maxTaxAmountTwo + exemptTaxAmountTwo;
        grossTaxTwo = (netav / 100) * futureTotalRate
        if (grossTaxTwo < taxCapTwo) {
            actualTaxTwo = grossTaxTwo;
        }
        else {
            actualTaxTwo = taxCapTwo;
        }
        if (olderCircuit == true && gav < 160000) {
            var olderCap = actualTaxOne * 1.02;
            if (olderCap < actualTaxTwo) {
                actualTaxTwo = olderCap;
            }
        }
        monthlyTwo = (actualTaxTwo - actualTax) / 12;
    }
    else if (propertyType == "Agriculture" || propertyType == "Business") {

        //Calculating Net AV
        netav = gav
 
        //Tax Amounts and Caps

        if (propertyType == "Agriculture") {
            maxTaxAmount = gav * agricultureRate;
        }
        else if (propertyType == "Business") {
            maxTaxAmount = gav * businessRate;
        }
        taxCap = maxTaxAmount + exemptTaxAmount;
        grossTax = (netav / 100) * currentTotalRate;
        if (grossTax < taxCap) {
            actualTax = grossTax;
        }
        else {
            actualTax = taxCap;
        }

        //Tax Amounts and Caps for "Year Zero" 2020
        maxTaxAmountZero = maxTaxAmount;
        exemptTaxAmountZero = (netav / 100) * exemptRateZero;
        taxCapZero = maxTaxAmountZero + exemptTaxAmountZero;
        grossTaxZero = (netav / 100) * futureTotalRate
        if (grossTaxZero < taxCapZero) {
            actualTaxZero = grossTaxZero;
        }
        else {
            actualTaxZero = taxCapZero;
        }
        
        monthlyZero = (actualTaxZero - actualTax) / 12;

        //Tax Amounts and Caps for "Year One" 2021
        maxTaxAmountOne = maxTaxAmount;
        exemptTaxAmountOne = (netav / 100) * exemptRateOne;
        taxCapOne = maxTaxAmountOne + exemptTaxAmountOne;
        grossTaxOne = (netav / 100) * futureTotalRate
        if (grossTaxOne < taxCapOne) {
            actualTaxOne = grossTaxOne;
        }
        else {
            actualTaxOne = taxCapOne;
        }
        
        monthlyOne = (actualTaxOne - actualTax) / 12;

        //Tax Amounts and Caps for "Year Two" 2022
        maxTaxAmountTwo = maxTaxAmount;
        exemptTaxAmountTwo = (netav / 100) * exemptRateTwo;
        taxCapTwo = maxTaxAmountTwo + exemptTaxAmountTwo;
        grossTaxTwo = (netav / 100) * futureTotalRate
        if (grossTaxTwo < taxCapTwo) {
            actualTaxTwo = grossTaxTwo;
        }
        else {
            actualTaxTwo = taxCapTwo;
        }
        
        monthlyTwo = (actualTaxTwo - actualTax) / 12;
    }
}

//Displays results to HTML -- Complete
function displayResults() {
    document.getElementById("monthlyZero").innerHTML = monthlyZero.toFixed(2);
    document.getElementById("annualZero").innerHTML = (monthlyZero * 12).toFixed(2);
    document.getElementById("monthlyOne").innerHTML = monthlyOne.toFixed(2);
    document.getElementById("annualOne").innerHTML = (monthlyOne * 12).toFixed(2);
    document.getElementById("monthlyTwo").innerHTML = monthlyTwo.toFixed(2);
    document.getElementById("annualTwo").innerHTML = (monthlyTwo * 12).toFixed(2);
}

//Test output -- Complete
function testInputValues() {
    console.log("GAV is ", gav);
    console.log("Property Type is ", propertyType);
    console.log("Older boolean is ", older);
    console.log("Older Circuit boolean is ", olderCircuit);
    console.log("Township is ", township);
}

//Test township values -- Complete
function testTownshipValues() {
    console.log("Current total rate is ", currentTotalRate);
    console.log("Future total rate is ", futureTotalRate);
}

//Test Calculation Values -- Complete
function testCalculationValues() {
    console.log("Gross AV is ", gav);
    console.log("Deduction 1 is ", deductionOne);
    console.log("Homestead deduction is ", homesteadDeduction);
    console.log("Net AV is ", netav);
    console.log("Gross Tax 2019 is ", grossTax);
    console.log("Actual Tax 2019 is ", actualTax);
    console.log("Actual Tax 2020 is ", actualTaxZero);
    console.log("Actual Tax 2021 is ", actualTaxOne);
    console.log("Actual Tax 2022 is ", actualTaxTwo);
}

//Uses above functions on HTML button press
function pressButton() {
    inputValues();
    //testInputValues();
    setTownshipValues(township);
    //testTownshipValues();
    calculate();
    //testCalculationValues();
    displayResults();
}