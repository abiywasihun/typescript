"use strict";
let sales = 123456789;
let course = 'Typescript';
let is_published = true;
let level;
level = 1;
level = "a";
let numbers = [1, 2, 3];
let user = [1, 'Abiy'];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 3,
    name: 'Abiy',
    retire: (date) => {
        console.log(date);
    }
};
let emp = {
    id: 3,
    name: 'Abiy',
    retire: (date) => {
        console.log(date);
    }
};
function KgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
KgToLbs(10);
KgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function getCusotmer(id) {
    return id === 0 ? null : { BirthDate: new Date() };
}
let customer = getCusotmer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.BirthDate);
//# sourceMappingURL=index.js.map