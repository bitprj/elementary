import React, {Component} from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'

class fillInTheBlank extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                q2
            </div>
        )
    }
}

const mapState = state => {
    return {

    }
}

const mapDispatch = dispatch => {
    return {

    }
}


export default compose(connect(
    mapState,
    mapDispatch
    ),
)(fillInTheBlank)