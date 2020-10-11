import { CollectionView } from "../views/CollectionView";
import { User, UserProps } from "../models/User";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
  renderItem(parentElement: Element, model: User) {
    new UserShow(parentElement, model).render();
  }
}
