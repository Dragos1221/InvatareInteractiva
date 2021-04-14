import { Button, createStyles, FormControlLabel, List, ListItem, ListItemText, Radio, RadioGroup, withStyles } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';
import { createNumericLiteral } from 'typescript';
import { chiestionar, intrebari } from '../paragraph/data2';

export interface TestsProps {
    classes: any;
    chestionar: chiestionar;
    handleBifat:any;
    raspunsuri: Number[];
    next: any;
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

    listItem = (item: intrebari, index: any) => {
        return (
            <ListItem  style = {{display:'flex', flexDirection:'column'}}>
                {console.log(item)}
                <div>
                    {(index + 1) + '. ' + item.intrebare}
                </div>
                <div>
                    <RadioGroup value = {this.props.raspunsuri[index]} onChange={e => this.props.handleBifat(e.target.value, index)}>
                        <FormControlLabel label = {item.variante[0]} control = {<Radio />} value = {1}/>
                        <FormControlLabel label = {item.variante[1]} control = {<Radio />} value = {2}/>
                        <FormControlLabel label = {item.variante[2]} control = {<Radio />} value = {3}/>
                    </RadioGroup>
                </div>
            </ListItem>
        );
    }

    render() {
        const {classes, chestionar} = this.props;
        return (
            <div className = {classes.container}>
                <List style = {{display:'flex', flexDirection:'column'}}>
                    {chestionar.questions.map((item:any, index: any) => (this.listItem(item, index)))}
                </List>
                <div className = {classes.buttonBox}>
                    <Button variant="contained" color="primary" style ={{float:'right', padding:'15px', paddingLeft:'20px', paddingRight:'20px'}} onClick={this.props.next}>
                        Next
                    </Button>
                </div>
            </div>
        );
    }
}
 
export default withStyles(styles)(Tests);