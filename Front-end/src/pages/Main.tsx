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
        backgroundImage:"Untitled.png"
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
            var ll:String[]=["Introducere","De ce practicile HRM sunt importante pentru managementul cunoștințelor?","Practici HRM și managementul cunoștințelor","Managementul resurselor umane, retenția personalului și managementul cunoștințelor","Concluzii"]
            const id = localStorage.getItem("id");
            const result = await this.service.getResukts(id);
            console.log(result);
            const l = [result.data.chapter1,result.data.chapter2,result.data.chapter3,result.data.chapter4,result.data.chapter5]
            var list: any[][]=[];
            l.forEach((elem:any , index:any) =>{
                list.push([elem>=50?true:false,index,elem,ll[index]]);
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
                    <div style = {{position: 'static',width:"100%",height:"100%"}}>
                        <div style = {{display:"flex",justifyContent:"center",marginBottom:"80px",marginTop:"10px"}}>
                            <img src="ubb.jpg" alt="Girl in a jacket"  width="400px" height="300px" />
                        </div>
                        <div style = {{display:"flex",justifyContent:"space-around"}}>
                            <img src="mate.png" alt="Girl in a jacket" />
                            <img src="psiho.png" alt="Girl in a jacket"  />
                        </div>
                        <div style = {{display:"flex",justifyContent:"center",marginLeft:"10%",marginRight:"10%" , marginTop:"50px" , fontSize:"40px"}}>
                                <p style = {{fontFamily:"Times New Roman", textAlign:"center" , color:"blue"}}>
                                    Aceasta este o platforma de învățare interactiva pentru însușirea abilităților de management ai cunoștințelor prin practici de resurse umane creata de studentii Facultatii de Matematica si Informatica in colaborare cu masteranzii de la Facultatea de Pshihologie si Stiinte ale Educatiei.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withStyles(styles)(Main);