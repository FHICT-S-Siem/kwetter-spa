import React, { Component, useEffect, useState } from 'react'
import "./PostContainer.css"
import { Avatar, Paper } from '@mui/material'
import post from "../../../../../images/post.jpeg"
import like from "../../../../../images/like.png"
import likebutton from "../../../../../images/likebutton.png"
import commentbutton from "../../../../../images/comment.png"
import sharebutton from "../../../../../images/share.png"


export default function Post({ getKweets, kweets }) {
    
    useEffect(() => {
        getKweets()
    }, [kweets])

    return (
        <div>
            {kweets.map((kweet) => {
                return (
                    <Paper className='post__container'>
                        {/* Header */}
                        <div className='post__header'>
                            <div className='post__header_img'>
                                <Avatar className='post_img' />
                            </div>
                            <div className='post__header_text'>
                                Siem228
                            </div>
                        </div>
                        {/* Description */}
                        <div className='post__description'>
                            {kweet.message}
                        </div>
                        {/* Image */}
                        <div className='post__image'>
                            <img src={post} width={600} alt='post-foto' />
                        </div>
                        {/* Like count */}
                        <div className='post__likeCountContainer'>
                            <div className='post__like'>
                                <img src={like} className='post__img' alt='like-count' />
                            </div>
                            <div className='post__likeCount'>
                                0
                            </div>
                        </div>
                        {/* Like share box */}
                        <div className='post__likeShare'>
                            <div className='post__tab'>
                                <div className='post__tabfirst'>
                                    <img className='post__tabimg' src={likebutton} alt='like-button' />
                                </div>
                                <div className='post__tabtext'>
                                    Like
                                </div>
                            </div>

                            <div className='post__tab'>
                                <div className='post__tabfirst'>
                                    <img className='post__tabimg' src={commentbutton} alt='like-button' />
                                </div>
                                <div className='post__tabtext'>
                                    Comment
                                </div>
                            </div>

                            <div className='post__tab'>
                                <div className='post__tabfirst'>
                                    <img className='post__tabimg' src={sharebutton} alt='like-button' />
                                </div>
                                <div className='post__tabtext'>
                                    Share
                                </div>
                            </div>
                        </div>
                        {/* Comment box */}
                        <div className='upload__comment'>
                            <div className='upload__top'>
                                <div>
                                    <Avatar className='upload__img' />
                                </div>
                                <div>
                                    <input className='upload__box' type='text' placeholder='Write a comment...' />
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            }
            )}

        </div>
    );
}
