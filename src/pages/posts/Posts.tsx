import {UsersList} from "./users-list/UsersList";
import {PostsList} from "./posts-list/PostsList";
import "./posts.scss";
import {urlApi} from "../../data/constans";
import {useEffect} from "react";
import PostsStore, {IPost} from "../../utils/store/Posts.store";
import UsersStore from "../../utils/store/Users.store";
import useToken from "../../hooks/useToken";

export const Posts = () => {
    const {token} = useToken();

    useEffect(() => {
        fetch(urlApi + "/posts?sl_token=" + token)
            .then(res => res.json())
            .then(
                (result) => {
                    const posts = result.data.posts;
                    const users: any = {};
                    posts.forEach((value: IPost) => {
                        if (!users[value.from_id]) {
                            users[value.from_id] = {id: value.from_id, name: value.from_name, posts: 1};
                        } else {
                            users[value.from_id].posts += 1;
                        }
                    })
                    UsersStore.setUsers(Object.values(users));
                    PostsStore.setPost(posts)
                    PostsStore.setFilteredPostByUser();
                },
                (error) => {
                    throw new Error("Request error");
                }
            )
    }, [])

    return (
        <div id="posts-page">
            <UsersList/>
            <PostsList/>
        </div>
    )
}
