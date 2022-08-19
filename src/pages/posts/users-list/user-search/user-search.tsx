import React, {FormEvent} from "react";
import UsersStore from "../../../../utils/store/Users.store";
import "./search.scss";

export const UserSearch = () => {
    const handleSearch = (event: React.FormEvent<HTMLInputElement>) =>{
        const searchInputValue = event.currentTarget.value.toLowerCase();
        if(searchInputValue) {
            UsersStore.setFilteredUsers(searchInputValue);
        }
        else UsersStore.setFilteredUsers(null);
    }

    return <div id="search-user-box">
        <input type="text" placeholder="User search" onChange={handleSearch}/>
    </div>
}
