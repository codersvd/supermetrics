import "./post-order-buttons.scss";
import PostsStore from "../../../../utils/store/Posts.store";
import {observer} from "mobx-react-lite";

export const PostOrderButtons = observer(() => {
    const handleUpOrder = () => {
        PostsStore.setOrder(true);
        PostsStore.setFilteredPostByUser();
    }

    const handleDownOrder = () => {
        PostsStore.setOrder(false);
        PostsStore.setFilteredPostByUser();
    }

    return <div id="post-order-buttons">
        <div className="up" onClick={handleUpOrder}>^</div>
        <div className="down" onClick={handleDownOrder}>^</div>
    </div>
});
