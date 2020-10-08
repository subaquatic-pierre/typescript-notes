import { User } from "../models/User";

const testGetAllUsers = () => {
  const collection = User.buildUserCollection();

  collection.events.on("change", () => {
    console.log(collection);
  });

  collection.fetch();
};

export default {
  testGetAllUsers,
};
