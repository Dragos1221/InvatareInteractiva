import { AppBar, Button, createStyles, Toolbar, Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export interface AppBarProps {
    classes: any;
    firstname?: string;
    lastname?: string;
}
 
export interface AppBarState {
}

const styles = createStyles({
    info: {
        width:'100%'
    },
    itemMargin: {
        marginRight:'10px'
    },
    items: {
        width:'100%', 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    }
})
 
class NavBar extends React.Component<AppBarProps, AppBarState> {
    constructor(props: AppBarProps) {
        super(props);
    }


    render() { 
        const {firstname, lastname, classes} = this.props;
        return (
            <AppBar position = 'static'>
                <Toolbar>
                    <div className = {classes.items}>
                        <div className={classes.itemMargin}>
                            <AccountBoxIcon style ={{paddingTop:'3px'}}/>
                        </div>
                        <div className={classes.itemMargin}>
                            {firstname && lastname && (
                                        <Typography variant="h6" className={classes.username}>
                                            {`${firstname} ${lastname}`}
                                        </Typography>
                            )}
                        </div>
                        <Button variant="contained" color="secondary">Log out</Button>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}
 
export default  withStyles(styles)(NavBar);