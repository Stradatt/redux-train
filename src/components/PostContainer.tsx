import React, {useState} from 'react';
import {postAPI} from "../services/PostsService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    const handleCreate =  async () => {
        const title = prompt("Введи заголовок поста");
        const bodyPost = prompt("Введи текст поста");
        await createPost({title, body: bodyPost} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    };

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    };
    return (
        <div className="post-list">
            <button onClick={handleCreate} style={{margin: '20px', padding: '6px 10px'}}>
                add post
            </button>
            {isLoading && <h1> Идет загрузка.....</h1>}
            {error && <h1> Ошибка.....</h1>}
            { posts && posts.map((el) =>
                (
                    <div key={el.id}  style={{height: "fit-content"}}>
                        <PostItem post={el} remove={handleRemove} update={handleUpdate}/>
                    </div>
                )
            )}
        </div>
    );
};

export default PostContainer;