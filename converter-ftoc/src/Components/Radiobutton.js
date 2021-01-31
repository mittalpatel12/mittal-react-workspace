import React,{ Component } from "react";

class Button extends Component {
render() {
    return(
        <div onChange={this.props.onChangeValue}>
        <input type="radio" value="CTOF" name="gender" /> CTOF
        <input type="radio" value="FTOC" name="gender" /> FTOC
        
      </div>
    );
}
}

export default Button;