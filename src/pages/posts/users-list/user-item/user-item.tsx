import {observer} from "mobx-react-lite";
import "./user-item.scss";
import UsersStore, {IUser} from "../../../../utils/store/Users.store";
import PostsStore from "../../../../utils/store/Posts.store";

export const UserItem = observer((props: { userData: IUser }) => {
    let activeUser = UsersStore.selectedUser;

    const handleSelectUser = () =>{
        UsersStore.setSelectedUser(props.userData.id === activeUser ? "" : props.userData.id);
        PostsStore.setFilteredPostByUser();
    }

    return <article className={activeUser === props.userData.id ? "user_profile active" : "user_profile"} onClick={handleSelectUser}>
        <span className="user_name">{props.userData.name}</span>
        <span className="user_value">{props.userData.posts}</span>
    </article>
});
