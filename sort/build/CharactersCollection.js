"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharacterCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
        return true;
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split("");
        const tmp = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = tmp;
        this.data = characters.join("");
    }
}
exports.CharacterCollection = CharacterCollection;
