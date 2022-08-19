import {makeAutoObservable} from "mobx";
import UsersStore from "./Users.store";

export interface IPost {
    id: number;
    created_time: string;
    message: string;
    from_id: string,
    from_name: string
}

class PostsStore {
    posts: IPost[] = [];
    filteredPosts: IPost[] = [];
    order = false;

    constructor() {
        makeAutoObservable(this);
    }

    setOrder(value: boolean): void {
        this.order = value;
    }

    setPost(data: IPost[]): void {
        this.posts = data;
    }

    setFilteredPostByUser(): void {
        let activeUser = UsersStore.selectedUser;
        this.filteredPosts = this.posts;
        if (activeUser) {
            this.filteredPosts = this.posts.filter(obj => {
                return obj.from_id === activeUser
            });
        }

        this.filteredPosts.sort((a, b) => {
            if (this.order) return a.created_time.localeCompare(b.created_time);
            return b.created_time.localeCompare(a.created_time);
        });
    }
}

export default new PostsStore();
