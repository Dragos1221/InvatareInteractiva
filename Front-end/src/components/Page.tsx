import { Button, withStyles } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { AnyCnameRecord, AnyPtrRecord } from 'node:dns';
import * as React from 'react';
import { Component } from 'react';

export interface PageProps {
    title?: string;
    text?: string;
    classes: any;
    next:any;
}
 
export interface PageState {
    params: string;
}

const styles = createStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        borderLeft:'3px solid #3F51B5',
        textAlign:'center',
        backgroundColor: '#fff3e6',
        borderRadius:'5px',
    },
    text: {
        marginTop:'1.5%',
        borderLeft:'3px solid #3F51B5',
        textIndent: '7%',
        padding:'3%',
        backgroundColor: '#fff3e6',
        borderRadius:'5px',

    },
    buttonBox : {
        marginTop:'1.5%',
    }
});
 
class Page extends React.Component<PageProps, PageState> {
    constructor(props: PageProps) {
        super(props);
    }

    render() { 
        const {title, text, classes} = this.props;
        return (
            <div>
                <div className = {classes.container}>
                    <div className = {classes.title}>
                        <h2>{title}</h2>
                    </div>
                    <div className = {classes.text}>
                        {text}
                    </div>
                    <div className = {classes.buttonBox}>
                        <Button variant="contained" color="primary" style ={{float:'right', padding:'15px', paddingLeft:'20px', paddingRight:'20px'}} onClick={(e:any)=>this.props.next()}>
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withStyles(styles)(Page);