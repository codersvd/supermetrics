import {observer} from "mobx-react-lite";
import "./post-item.scss";
import {IPost} from "../../../../utils/store/Posts.store";

export const PostItem = observer((props: {postData: IPost}) => {
    const dateTime = new Date(props.postData.created_time).toUTCString();

    return <article className="post">
        <span className="post_date">{dateTime}</span>
        <span className="post_desc">{props.postData.message}</span>
    </article>
});
