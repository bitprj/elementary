import React, {Component} from 'react';
import { connect } from 'react-redux'
import { compose } from 'recompose'
import {Grid, Typography, TextField, Input} from '@material-ui/core'
import {reduxForm, formValueSelector, Field} from "redux-form";
import {passingData} from "./actions";
import Button from "@material-ui/core/Button";

class studentSignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            joinCode: '',
        }
    }


    render() {

        const handleChange = prop => event => {
            this.setState({[prop]: event.target.value });
        };

        const {name, joinCode} = this.state
        const {handleData} = this.props
        return(
            <div style={{flexGrow: 1, marginTop: '35vh'}}>
                <Grid container
                      justify={"center"}
                      direction={"row "}
                      alignItems={"center"}
                      spacing={2}
                      style={{margin: 'auto', width: '50%'}}
                >
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4">
                            Name
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input
                            value={name}
                            onChange={handleChange('name')}
                            // disableUnderline={true}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4">
                            Join Code
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input
                            value={joinCode}
                            onChange={handleChange('joinCode')}
                            // disableUnderline={true}
                        />
                    </Grid>
                    <Button onClick={e => {
                        e.preventDefault()
                        handleData(this.state)
                    }}>
                        Login
                    </Button>
                </Grid>
            </div>
        )
    }
}


const mapState = state => {
    console.log(state)
    return {

    }
}

const mapDispatch = dispatch => {
    return {
        handleData: (value) => {
            dispatch(passingData(value))
        }
    }
}

export default compose(connect(
    mapState,
    mapDispatch
    ),
)(studentSignIn)
