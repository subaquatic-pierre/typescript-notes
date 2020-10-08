import userTests from "./tests/testUserModel";
import userCollectionTest from "./tests/testUserCollection";

Object.keys(userTests).forEach((test) => {
  userTests[test]();
});

Object.keys(userCollectionTest).forEach((test) => {
  userCollectionTest[test]();
});
