"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringToDate(date) {
    var dateParts = date.split("/").map(function (value) {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}
exports.default = stringToDate;
