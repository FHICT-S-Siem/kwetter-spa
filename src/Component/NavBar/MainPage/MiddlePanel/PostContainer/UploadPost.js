import React, { useState } from 'react';
import './UploadPost.css';
import { Avatar, Paper, Button } from '@mui/material';

export default function UploadPost({ getKweets }) {
  const [msg, setMsg] = useState('');
  const [pic, setPic] = useState('');

  const postKweet = async () => {
    const kweet = {
      userId: localStorage.getItem('userId'),
      message: msg,
      image: pic,
    };

    console.log(kweet);

    fetch('http://localhost:8080/api/v1/kweet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(kweet),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getKweets();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Read the file as a Data URL
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setPic(base64String);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Paper className='upload__container'>
        <div className='upload__top'>
          <div>
            <Avatar className='upload__img' />
          </div>

          <div>
            <input
              className='upload__box'
              onChange={(e) => setMsg(e.target.value)}
              type='text'
              placeholder='What`s on your mind?'
            />
          </div>
        </div>

        <div className='upload__bottom'>
          <div className='upload__choosefile'>
            <input type='file' name='myImage' onChange={handleFileChange} />
          </div>

          <Button onClick={postKweet} variant='contained'>
            Post
          </Button>
        </div>
      </Paper>
    </div>
  );
}
