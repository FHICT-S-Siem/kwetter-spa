import React, { Component } from 'react'
import "./PostContainer.css"
import Post from './Post';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
        <div>
            <Post />
            <Post />
        </div> );
    }
}
 
export default PostContainer;