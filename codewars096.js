// Parameters or Edge cases: base cost is $40 per day at 7 or more days you get $50 off your total at 3 or more days you get $20 off your total
// Return: number cost of rent for car in x days
// Examples:
// Psuedo code: if days equal 1-6 multiply by number of days by $40 then subtract $20
//              if days are 7 or more multiply by number of days then subtract $70

// my answer
function rentalCarCost(d) {
    if(d < 3){
        return 40*d
    } else if (3 <= d && d < 7) {
        return 40*d - 20
    } else {
        return 40*d - 50
    }
}

// best practices easily readable by accounting
function baseCost(days, rate) {
    return days * rate;
}

function discountRate(days) {
    if ( days >= 7 ) {
        return 50;
    }
    else if ( days >= 3 ) {
        return 20;
    }
    else {
        return 0;
    }
}

function rentalCarCost(days) {
    return baseCost(days, 40) - discountRate(days);
}

// most clever
// since days will always be greater than 0 this is truthy meaning no equals needed for ternary
const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));