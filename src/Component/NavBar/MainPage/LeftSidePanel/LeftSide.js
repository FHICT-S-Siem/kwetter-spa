import React, { Component } from 'react'
import "./LeftSide.css" 

class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div>
                <button>Download user data</button>
                <button>Delete user data</button>
            </div>
         );
    }
}
 
export default LeftSide;