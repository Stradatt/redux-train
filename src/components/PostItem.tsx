import React, {FC} from 'react';
import {IPost} from "../models/IPost";


interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}
const PostItem: FC<PostItemProps> = ({post, remove, update}) => {


    const HandleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }

    const HandleUpdate = (event: React.MouseEvent) => {
        const title = prompt('Напишите новый заголовок') || ""
        update({...post, title})
    }

    return (
        <div className="post-item" onClick={HandleUpdate}>
            <div>
                {post.title}
                <br/>
                {post.body}
            </div>
            <button onClick={HandleRemove}>
                Delite
            </button>
        </div>
    );
};

export default PostItem;