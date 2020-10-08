import { User } from "../models/User";

const testCreateUser = () => {
  const user = new User({ name: "Peter Pan", age: 18 });

  const name = user.get("name");

  console.log(`User name is ${name}`);
  console.log(`User in memory age ${user.get("age")}`);

  console.log("Saving user ...");
  user.save();

  setTimeout(() => {
    console.log("Fetching user from database ...");
    user.fetch();
  }, 1000);
  setTimeout(() => {
    console.log("Updating user age...");
    user.set({ age: 400 });
    console.log("Saving user ...");
    user.fetch();
    const newAge = user.get("age");
    console.log(`New user age ${newAge}`);
    // user.delete();
  }, 1000);
};

const testSaveUser = () => {};

const testUpdateUser = () => {};

const testDeleteUser = () => {};

export default {
  testSaveUser,
  testCreateUser,
  testUpdateUser,
  testDeleteUser,
};
