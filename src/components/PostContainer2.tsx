import React, {useState} from 'react';
import {postAPI} from "../services/PostsService";
import PostItem from "./PostItem";

const PostContainer2 = () => {
    const [limit, setLimit] = useState(80)
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit)



    return (
        <div className="post-list">
            {isLoading && <h1> Идет загрузка.....</h1>}
            {error && <h1> Ошибка.....</h1>}
            {/*{ posts && posts.map((el) =>*/}
            {/*    (*/}
            {/*        <div key={el.id} style={{height: "fit-content"}} >*/}
            {/*            <PostItem post={el} />*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*)}*/}
        </div>
    );
};

export default PostContainer2;