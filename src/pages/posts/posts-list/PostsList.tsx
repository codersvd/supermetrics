import "./posts-list.scss";
import {PostItem} from "./post-item/post-item";
import {observer} from "mobx-react-lite";
import PostsStore from "../../../utils/store/Posts.store";
import {PostOrderButtons} from "./post-order-buttons/post-order-buttons";

export const PostsList = observer(() => {
    const listPosts = PostsStore.filteredPosts.map((post) => {
        return (<PostItem key={post.id} postData={post}></PostItem>);
    });

    return <div id="posts-list">
        <div>
            <PostOrderButtons/>
        </div>
        <article className="users">
            <main className="users__profiles">
                {listPosts}
            </main>
        </article>
    </div>
});
