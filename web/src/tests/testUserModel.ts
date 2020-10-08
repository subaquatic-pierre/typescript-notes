import { User } from "../models/User";

const testCreateUser = () => {
  const user = new User({ name: "Peter Pan", age: 18 });

  const name = user.get("name");
  const age = user.get("age");

  console.log(`User name is ${name}`);
  console.log(`User in memory age ${age}`);
};

const testSaveNewUser = async () => {
  const user = User.buildUser({ name: "Peter Pan", age: 18 });

  console.log("Saving user ...");
  user.save();

  console.log("User successfully saved");
};

const testSaveExistingUser = async () => {
  const user = new User({ id: 1, name: "Peter Pan", age: 18 });

  console.log("Saving user ...");
  user.save();

  console.log("User successfully saved");
  user.delete();
};

const testUpdateUser = () => {
  const user = new User({ name: "Peter Pan", age: 18 });
  console.log("Saving user ...");

  console.log(`The current username is ${user.get("name")}`);
  console.log("Updating username");

  user.set({ name: "Updated username" });

  const newName = user.get("name");

  console.log(`New username is ${newName}`);
};

const testFetchUser = async () => {
  const user = new User({ name: "Peter Pan", age: 18 });

  console.log("Saving user ...");
  await user.save();

  console.log("Fetching user ");
  user.fetch();

  console.log("User successfully fetched");

  await user.delete();
};

const testDeleteUser = () => {
  const user = new User({ name: "Peter Pan", age: 18 });

  console.log("Saving user ...");
  user.save();

  console.log("Fetching user ");
  user.fetch();
  console.log("User successfully fetched");

  user.delete();
  console.log("User successfully deleted");
};

export default {
  // testCreateUser,
  testSaveNewUser,
  // testSaveExistingUser,
  // testUpdateUser,
  // testFetchUser,
  // testDeleteUser,
};
