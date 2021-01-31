import React,{ Component } from 'react';

class Inputvalues extends Component {

    render() {
        return(
            <div>
                <input type="number" name="text1" value={this.props.text1} onChange={this.props.onTextChange}></input>
                <button onClick={this.props.onClick}>Convert</button>
            </div>
        );
    }
}

export default Inputvalues;