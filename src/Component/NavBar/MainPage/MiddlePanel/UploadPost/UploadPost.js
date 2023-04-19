import React, { Component } from 'react'
import "./UploadPost.css"
import { Avatar, Paper } from '@mui/material';
import image from "../../../../../images/image.png"

class UploadPost extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div>
                <Paper className='upload__container'>
                    <div className='upload__top'>
                        <div>
                            <Avatar className='upload__img' />
                        </div>
                        <div>
                            <input className='upload__box' type='text' placeholder='What`s on your mind?'/>
                        </div>
                    </div>
                    
                    <div className='upload__bottom'>
                        <div className='upload__tabs'>
                            <img src={image} width={35} alt='foto-template'/>
                            <div className='upload__text'>Photo/Video</div>
                        </div>
                    
                    </div>
                </Paper>
            </div> 
        );
    }
}
 
export default UploadPost;