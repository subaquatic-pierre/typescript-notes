import userTests from "./tests/testUserModel";
import userCollectionTest from "./tests/testUserCollection";
import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ id: 1, name: "Peter Pan", age: 40 });
const userForm = new UserForm(document.getElementById("root"), user);

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
