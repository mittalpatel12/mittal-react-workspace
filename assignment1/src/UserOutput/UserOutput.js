import React from "react";
import './UserOutput.css';

const userOutput = (props) => {
    
        return (
            <div className="UserOutput"> 
                <p>this is UserOutput Component </p>
                <p>userName: {props.userName}</p>
            </div>
           
        )
    
};

export default userOutput;