// import userTests from "./tests/testUserModel";
// import userCollectionTest from "./tests/testUserCollection";
import { UserEdit } from "./views/UserEdit";
import { User, UserProps } from "./models/User";
import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { DB_URL } from "./constants";
// import { MenuView } from "./views/Menu";

// Models
// const user = User.buildUser({ name: "Something", age: 40 });
const users = User.buildUserCollection();
// Views
const root = document.getElementById("root");
if (root) {
  users.fetch();

  users.on("change", () => {
    new UserList(root, users).render();
  });
}

// const menu = new MenuView(document.querySelector("header"));

// Render views
// menu.render();

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
