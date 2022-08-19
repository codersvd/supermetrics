import {makeAutoObservable} from "mobx";

export interface IUser {
    id: string;
    name: string;
    posts?: number;
}

class UsersStore {
    users: IUser[] = [];
    selectedUser = "";
    filteredUsers: IUser[] | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setFilteredUsers(text: string | null): void {
        if (!text) {
            this.filteredUsers = null;
        } else {
            this.filteredUsers = this.users.filter(obj => {
                return obj.name.toLowerCase().startsWith(text)
            }).sort((a, b) => {
                return a.name.localeCompare(b.name)
            });
        }
    }

    setUsers(data: IUser[]): void {
        this.users = [...data].sort((a, b) => {
            return a.name.localeCompare(b.name)
        });
    }

    setSelectedUser(userId: string): void {
        this.selectedUser = userId;
    }
}
export default new UsersStore();
