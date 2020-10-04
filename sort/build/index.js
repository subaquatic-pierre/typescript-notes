"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const NumbersCollection_1 = require("./NumbersCollection");
const numbers = new NumbersCollection_1.NumbersCollection([3, 7, -1, 5, -2, 9]);
const word = new CharactersCollection_1.CharacterCollection("XaacbyQusvRe");
const linkedList = new LinkedList_1.LinkedList();
word.sort();
/*

Interface vs Abstract class

Interface:
- Promotes loose coupling
- Creates contract between different classes to follow

Abstract Class:
- Cannot be instantiated
- Good to use if parent class is similar to children
- Cant exist on its own
- Strongly couples parent and child

*/
