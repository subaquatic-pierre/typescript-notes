import userTests from "./tests/testUserModel";
import userCollectionTest from "./tests/testUserCollection";
import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";
import { MenuView } from "./views/Menu";

// Models
const user = User.buildUser({ name: "Something", age: 40 });

// Views
const userEdit = new UserEdit(document.getElementById("root"), user);
const menu = new MenuView(document.querySelector("header"));

// Render views
menu.render();
userEdit.render();

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
