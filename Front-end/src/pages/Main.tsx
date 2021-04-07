import classes from '*.module.css';
import { createStyles, withStyles } from '@material-ui/core';
import * as React from 'react';
import AppBar from '../components/Bars/AppBar';
import NavBar from '../components/Bars/NavBar';

export interface MainProps {
    classes: any;
}
 
export interface MainState {
    
}

const styles = createStyles({
    pageBox : {
        display: 'flex',
        flexDirection: 'row'
    },
    container: {
		display:'inline-flex',
		flexDirection:'column',
		width:'100%',
    },
    navBar : {
        display: 'block',
        paddingRight:'184px'
    }
})
 
class Main extends React.Component<MainProps, MainState> {

    constructor(props: MainProps) {
        super(props);
    }

    render() { 
        const {classes} = this.props;
        return (
            <div className={classes.pageBox}>
                <div className = {classes.navBar}>
                    <NavBar />
                </div>
                <div className = {classes.container}>
                    <div>
                        <AppBar firstname='Marcel' lastname = 'Popescu' />
                    </div>
                    <div style = {{position: 'static', marginLeft: '10px', marginTop: '10px'}}>
                        In div-ul asta scrii si nicaieri altundeva !!!
                        <br />
                        Daca vrei sa faci o pagina noua, copiezi pagina asta asa cum e si tot in div-ul asta scrii !!!
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withStyles(styles)(Main);