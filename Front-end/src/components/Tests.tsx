import { Button, createStyles, FormControlLabel, List, ListItem, ListItemText, Radio, RadioGroup, withStyles } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';

export interface TestsProps {
    classes: any;
    intrebare: string;
    raspunsuri: string[];
    raspunsBifat: any;
    qNo: any;
    handleBifat:any;
}
 
export interface TestsState {
    
}

const styles = createStyles({
    container : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    intrebari : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2%',
    },
    buttonBox : {
        marginTop:'1.5%',
    }
})
 
class Tests extends React.Component<TestsProps, TestsState> {
    constructor(props: TestsProps) {
        super(props);
    }

    render() { 
        const {raspunsuri, classes} = this.props;
        return (
            <div className = {classes.container}>
                <div>
                    <div>
                        {this.props.qNo + '. ' + this.props.intrebare}
                    </div>
                    <div className = {classes.intrebari}>
                        <RadioGroup value = {this.props.raspunsBifat} onChange={this.props.handleBifat('handleBifat')}>
                            <FormControlLabel label = {raspunsuri[0]} control = {<Radio />} value = {1}/>
                            <FormControlLabel label = {raspunsuri[1]} control = {<Radio />} value = {2}/>
                            <FormControlLabel label = {raspunsuri[2]} control = {<Radio />} value = {3}/>
                        </RadioGroup>
                    </div>
                </div>
                <div className = {classes.buttonBox}>
                    <Button variant="contained" color="primary" style ={{float:'right', padding:'15px', paddingLeft:'20px', paddingRight:'20px'}}>
                        Next
                    </Button>
                </div>
            </div>
        );
    }
}
 
export default withStyles(styles)(Tests);