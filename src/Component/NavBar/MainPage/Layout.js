import React, { Component } from 'react'
import "./Mainpage.css"
import { Grid } from '@mui/material';
import LeftSide from './LeftSidePanel/LeftSide';
import RightSide from './RightPanel/RightSide';
import UploadPost from './MiddlePanel/UploadPost/UploadPost';
import PostContainer from './MiddlePanel/PostContainer/PostContainer';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className='mainpage__container'>
                <Grid container>
                    <Grid item xs={3}>
                        <LeftSide/>
                    </Grid>
                    <Grid item xs={6} className='middleContainer'>
                        <UploadPost/>
                        <PostContainer/>
                    </Grid>
                    <Grid item xs={3}>
                        <RightSide/>
                    </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default Layout;