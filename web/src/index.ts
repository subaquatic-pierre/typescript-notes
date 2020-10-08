import userTests from "./tests/testUserModel";

Object.keys(userTests).forEach((test) => {
  userTests[test]();
});
