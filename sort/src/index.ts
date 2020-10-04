import { CharacterCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const numbers = new NumbersCollection([3, 7, -1, 5, -2, 9]);
const word = new CharacterCollection("XaacbyQusvRe");
const linkedList = new LinkedList();

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
