import classes from '*.module.css';
import { createStyles, withStyles } from '@material-ui/core';
import * as React from 'react';
import { withRouter } from 'react-router';
import AppBar from '../components/Bars/AppBar';
import NavBar from '../components/Bars/NavBar';
import Page from '../components/Page';
import data from '../paragraph/data';

export interface InfoPageProps {
    classes: any;
}
 
export interface InfoPageState {
    title:any;
    text:any;
    data:any;
    curent:any;
    test:boolean;
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
    },
    continut: {
        margin:'auto',
        width:'90%',
        marginTop:'2%'
    }
});

const txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex dolor, elementum eu tempor quis, finibus id dui. Donec efficitur at sapien in luctus. Proin pretium enim metus, at pretium felis tincidunt non. Nulla justo leo, scelerisque ac sapien pretium, sodales scelerisque ipsum. Donec odio arcu, vehicula id feugiat eget, tempor vel leo. Curabitur fermentum dignissim diam, in convallis ligula maximus a. Nunc quis nisl at est egestas dictum. Vestibulum nibh orci, lacinia finibus aliquam in, interdum ac felis. Suspendisse potenti. Sed pretium dapibus felis sed venenatis. Vestibulum posuere urna ut hendrerit cursus Donec sodales orci ut orci egestas, sit amet porttitor lacus vulputate. Fusce in quam vitae felis luctus ullamcorper eget nec urna. Ut sed odio non mauris auctor aliquet. Aliquam non nisl volutpat, placerat tellus in, pharetra ipsum. Nam luctus eleifend magna, eget ullamcorper orci venenatis eget. Proin quis dui nulla. Aenean non nulla et ligula vestibulum blandit facilisis eu est. Phasellus a pulvinar nunc. Nam dignissim lectus lorem. Etiam nec tristique est, a cursus nunc. Ut lacus nibh, laoreet et tellus ac, tempus ultrices ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam lorem augue, cursus tincidunt pharetra vel, elementum non dolor. Sed magna nunc, volutpat quis ante ut, sagittis pretium nunc. Nam egestas urna at enim ullamcorper, pellentesque euismod magna commodo. Donec aliquet non mi vitae sagittis. Morbi lacinia euismod nisi quis rhoncus. Nam tincidunt venenatis mattis. Cras rhoncus maximus lectus, eget malesuada justo porta non. Cras sed orci quis justo dignissim eleifend. Pellentesque eu metus sapien. Aenean in rhoncus dolor. Fusce dignissim viverra orci, eu porta orci tristique vitae. Nunc vitae nulla vitae ipsum finibus imperdiet eu ut mi. Curabitur non urna eu eros fermentum interdum. Etiam commodo at erat quis elementum. Cras id condimentum est, sit amet posuere est. In hac habitasse platea dictumst. Morbi volutpat sapien vitae velit egestas, id consequat enim interdum. Etiam eu sagittis dui, a lacinia lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ultrices odio massa, tincidunt molestie erat consectetur vel. Donec sit amet lorem ut arcu porttitor porttitor at et massa. Aenean interdum vel urna a sagittis. Mauris in luctus mauris. Pellentesque tempor lorem id semper egestas. Integer pretium dignissim metus, vitae rhoncus ante. Vivamus at quam vel ex finibus aliquam. Sed vitae eleifend erat. Pellentesque posuere ultricies felis vel laoreet. Ut id laoreet mi, ut viverra eros. Curabitur lobortis ex quis ante rhoncus, id blandit dui feugiat. In hac habitasse platea dictumst. Integer eget lectus tellus. Proin aliquam, est eget commodo consectetur, enim mi aliquam ante, in congue nibh orci id justo. "
class InfoPage extends React.Component<InfoPageProps, InfoPageState> {

    constructor(props: InfoPageProps) {
        super(props);
        this.state={
            title:'',
            text:'',
            data:[],
            curent:0,
            test:false,
        }
    }

    componentDidMount()
    {  
        let params = new URLSearchParams(document.location.search.substring(1));
        let id = params.get("id") || 0; 
        this.setState({
            title:data[Number(id)].title,
            text:data[Number(id)].paragraphs[0],
            data:data[Number(id)].paragraphs,
            curent:0,
        })
    }


    next =()=>{
        var { curent , data} = this.state;
        if(curent < data.length-1)
        {
            console.log("dsaddas");
            curent+=1;
            this.setState({
                text:data[curent],
                curent:curent,
            })
        }
        else{
            this.setState({
                test:true,
            })
        }
    }

    returnage= ()=>  <Page title = {this.state.title} text = {this.state.text} next={this.next} />

    returnTest= ()=><div>Dragos</div>; 

    

    render() { 
        const {classes} = this.props;
        return (
            <div className={classes.pageBox}>
                <div className = {classes.container}>
                    <div>
                        <AppBar firstname='Marcel' lastname = 'Popescu' />
                    </div>
                    <div style = {{position: 'static', marginLeft: '10px', marginTop: '10px'}}>
                        <div className = {classes.continut}>
                            {
                                this.state.test === false? this.returnage():this.returnTest()
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withStyles(styles)(InfoPage);