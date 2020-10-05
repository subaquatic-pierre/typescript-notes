import { User } from "../models/User";
export function testUser() {
    const user = new User({ name: "Peter Pan", age: 18 });
    console.log(`The user object is ${user}`);
    const name = user.get("name");
    console.log(`User name is ${name}`);
    user.set({ age: 99 });
    const newAge = user.get("age");
    console.log(`New age is ${newAge}`);
}
