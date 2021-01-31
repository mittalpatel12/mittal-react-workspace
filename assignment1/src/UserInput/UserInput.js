import React from "react";

const userInput = (props) => {
    
    const style = {
        border: '4px solid red'
    };
        return (
            <input type="text" value={props.currentName} onChange={props.changed} style={style} />
        )
 
};

export default userInput;