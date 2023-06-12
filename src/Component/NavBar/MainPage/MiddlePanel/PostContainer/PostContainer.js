import React, { Component, useState } from 'react'
import "./PostContainer.css"
import Post from './Post';
import UploadPost from './UploadPost';

function PostContainer() {
    const [kweets, setKweets] = useState([])

    const getKweets = async () => {
        fetch('http://localhost:8080/api/v1/kweet', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setKweets(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }


    return (
        <div>
            <UploadPost getKweets={getKweets}/>
            <Post getKweets={getKweets}  kweets={kweets}/>
        </div>);

}

export default PostContainer;