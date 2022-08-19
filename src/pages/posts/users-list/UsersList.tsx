import "./users-list.scss";
import {UserItem} from "./user-item/user-item";
import {observer} from "mobx-react-lite";
import UsersStore, {IUser} from "../../../utils/store/Users.store";
import {UserSearch} from "./user-search/user-search";

export const UsersList = observer(() => {

    const listUsers = (UsersStore.filteredUsers !== null ? UsersStore.filteredUsers : UsersStore.users).map((user: IUser) => {
        return (<UserItem key={user.id} userData={user}></UserItem>);
    });

    return <div id="users-list">
        <UserSearch/>
        <article className="users">
            <main className="users__profiles">
                {listUsers}
            </main>
        </article>
    </div>
})
