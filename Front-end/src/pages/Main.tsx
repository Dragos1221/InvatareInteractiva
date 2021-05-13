import classes from '*.module.css';
import { createStyles, withStyles } from '@material-ui/core';
import * as React from 'react';
import AppBar from '../components/Bars/AppBar';
import NavBar from '../components/Bars/NavBar';
import ServiceApi from '../remote/ServiceApi'

export interface MainProps {
    classes: any;
}
 
export interface MainState {
    appBarList: any;
    
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
        width:"27%"
       // paddingRight:'184px'
    }
})
 
class Main extends React.Component<MainProps, MainState> {
    private service: ServiceApi;
    constructor(props: MainProps) {
        super(props);
        this.state={
            appBarList:[
                [false, 1, 27],
                [false, 2, 25],
                [true, 3, 56],
                [true, 4, 80],
                [false, 5, 27],
                [true, 6, 89],
                [true, 7, 60],
                [false, 8, 1],
                [true, 9, 99],
                [true, 10, 100],
            ]
        }
        this.service = new ServiceApi();
    }

    
    async componentDidMount(){
        try{
            const id = localStorage.getItem("id");
            const result = await this.service.getResukts(id);
            console.log(result);
            const l = [result.data.chapter1,result.data.chapter2,result.data.chapter3,result.data.chapter4,result.data.chapter5]
            var list: any[][]=[];
            l.forEach((elem:any , index:any) =>{
                list.push([elem>=50?true:false,index,elem]);
            })
            console.log(list);
            this.setState({
                appBarList:list,
            })
        }catch(err)
        {
            console.log(err);
        }
    }
    render() { 
        const {classes} = this.props;
        return (
            <div className={classes.pageBox}>
                <div className = {classes.navBar}>
                    <NavBar list={this.state.appBarList}/>
                </div>
                <div className = {classes.container}>
                    <div>
                        <AppBar firstname='Marcel' lastname = 'Popescu' />
                    </div>
                    <div style = {{position: 'static', marginLeft: '10px', marginTop: '10px'}}>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withStyles(styles)(Main);