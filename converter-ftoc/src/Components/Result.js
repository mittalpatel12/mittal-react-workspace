import React,{ Component } from 'react';

class Result extends Component {
    render(){
        return(
            <div>
                <h3>{this.props.result}</h3>
            </div>
        );
    }

}
export default Result;