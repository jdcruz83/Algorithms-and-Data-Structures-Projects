/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
    let register = { status: "", change: [] }
    let change = cash * 100 - price * 100;
    let cidAmount = 0;

    for (let i of cid) {
        cidAmount += i[1] * 100;
    };
    if (change > cidAmount) {
        register.status = "INSUFFICIENT_FUNDS";
        register.change = [];
        return register;

    } else if (change === cidAmount) {
        register.status = "CLOSED";
        register.change = cid;
        return register;

    } else {
        let currentValue = [0, 0];
        let result = [];
        cid = cid.reverse();

        let currencyUnits = { 
            "PENNY": 1, 
            "NICKEL": 5, 
            "DIME": 10, 
            "QUARTER": 25, 
            "ONE": 100, 
            "FIVE": 500, 
            "TEN": 1000, 
            "TWENTY": 2000, 
            "ONE HUNDRED": 10000 
        };

        for (let i of cid) {
            currentValue = [i[0], 0];

            i[1] = i[1] * 100;
            while (change >= currencyUnits[i[0]] && i[1] > 0) {
                change -= currencyUnits[i[0]];
                i[1] -= currencyUnits[i[0]];
                currentValue[1] += currencyUnits[i[0]] / 100;
            };
            if (currentValue[1] > 0) {
                result.push(currentValue);
            };
        };
        if (change > 0) {
            register.status = "INSUFFICIENT_FUNDS";
            register.change = [];
            return register;
        };
        register.status = "OPEN";
        register.change = result;
        return register;
    };
};

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); //should return {status: "INSUFFICIENT_FUNDS", change: []}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); //should return {status: "INSUFFICIENT_FUNDS", change: []}.

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])); //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

/*
Currency Unit	    Amount
Penny	            $0.01 (PENNY)
Nickel	            $0.05 (NICKEL)
Dime	            $0.1 (DIME)
Quarter	            $0.25 (QUARTER)
Dollar	            $1 (ONE)
Five Dollars	    $5 (FIVE)
Ten Dollars	        $10 (TEN)
Twenty Dollars	    $20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
*/