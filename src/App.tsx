import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer2";
import SimpleCount from "./components/simpleCount";

function App() {
    const {users,error,isLoading, } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    console.log(users)
  return (
    <div className="App">
        <div style={{flexWrap: "wrap", display: 'flex', gap: '10px'}}>
            {isLoading && (<div>load.....</div>)}
            {error && (<div>error.....</div>)}
            {users.map((el) =>
                (
                    <div key={el.id} style={{border: '1px solid green', padding: '6px', width: '100px', height: '100px'}}>
                        {el.id}
                        {el.name}
                    </div>
                )
            )}
        </div>
        <div>
            {/*<div className="flex">*/}
            {/*    <PostContainer />*/}
            {/*    <PostContainer2 />*/}
            {/*</div>*/}
            <div>
                <SimpleCount />
            </div>
        </div>
    </div>
  );
}

export default App;
