import userTests from "./tests/testUserModel";
import userCollectionTest from "./tests/testUserCollection";
import { UserForm } from "./views/UserForm";

const userForm = new UserForm(document.getElementById("root"));

userForm.render();

// Object.keys(userTests).forEach((test) => {
//   userTests[test]();
// });

// Object.keys(userCollectionTest).forEach((test) => {
//   userCollectionTest[test]();
// });

// async function test() {
//   await userTests.testSaveNewUser();

//   await userTests.testDeleteUsers();
// }

// test();
