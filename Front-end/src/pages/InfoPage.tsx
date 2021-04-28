import classes from '*.module.css';
import { createStyles, withStyles } from '@material-ui/core';
import { eventNames } from 'node:process';
import * as React from 'react';
import { useHistory, withRouter } from 'react-router';
import AppBar from '../components/Bars/AppBar';
import NavBar from '../components/Bars/NavBar';
import Page from '../components/Page';
import Tests from '../components/Tests';
import data from '../paragraph/data';
import data2 from '../paragraph/data2';

export interface InfoPageProps {
}
 
export interface InfoPageState {
    title:any;
    text:any;
    data:any;
    data2:any;
    curent:any;
    test:boolean;
    chestionar: any;
    rBif: any;
    raspunsuri: Number[];
}

const txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex dolor, elementum eu tempor quis, finibus id dui. Donec efficitur at sapien in luctus. Proin pretium enim metus, at pretium felis tincidunt non. Nulla justo leo, scelerisque ac sapien pretium, sodales scelerisque ipsum. Donec odio arcu, vehicula id feugiat eget, tempor vel leo. Curabitur fermentum dignissim diam, in convallis ligula maximus a. Nunc quis nisl at est egestas dictum. Vestibulum nibh orci, lacinia finibus aliquam in, interdum ac felis. Suspendisse potenti. Sed pretium dapibus felis sed venenatis. Vestibulum posuere urna ut hendrerit cursus Donec sodales orci ut orci egestas, sit amet porttitor lacus vulputate. Fusce in quam vitae felis luctus ullamcorper eget nec urna. Ut sed odio non mauris auctor aliquet. Aliquam non nisl volutpat, placerat tellus in, pharetra ipsum. Nam luctus eleifend magna, eget ullamcorper orci venenatis eget. Proin quis dui nulla. Aenean non nulla et ligula vestibulum blandit facilisis eu est. Phasellus a pulvinar nunc. Nam dignissim lectus lorem. Etiam nec tristique est, a cursus nunc. Ut lacus nibh, laoreet et tellus ac, tempus ultrices ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam lorem augue, cursus tincidunt pharetra vel, elementum non dolor. Sed magna nunc, volutpat quis ante ut, sagittis pretium nunc. Nam egestas urna at enim ullamcorper, pellentesque euismod magna commodo. Donec aliquet non mi vitae sagittis. Morbi lacinia euismod nisi quis rhoncus. Nam tincidunt venenatis mattis. Cras rhoncus maximus lectus, eget malesuada justo porta non. Cras sed orci quis justo dignissim eleifend. Pellentesque eu metus sapien. Aenean in rhoncus dolor. Fusce dignissim viverra orci, eu porta orci tristique vitae. Nunc vitae nulla vitae ipsum finibus imperdiet eu ut mi. Curabitur non urna eu eros fermentum interdum. Etiam commodo at erat quis elementum. Cras id condimentum est, sit amet posuere est. In hac habitasse platea dictumst. Morbi volutpat sapien vitae velit egestas, id consequat enim interdum. Etiam eu sagittis dui, a lacinia lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ultrices odio massa, tincidunt molestie erat consectetur vel. Donec sit amet lorem ut arcu porttitor porttitor at et massa. Aenean interdum vel urna a sagittis. Mauris in luctus mauris. Pellentesque tempor lorem id semper egestas. Integer pretium dignissim metus, vitae rhoncus ante. Vivamus at quam vel ex finibus aliquam. Sed vitae eleifend erat. Pellentesque posuere ultricies felis vel laoreet. Ut id laoreet mi, ut viverra eros. Curabitur lobortis ex quis ante rhoncus, id blandit dui feugiat. In hac habitasse platea dictumst. Integer eget lectus tellus. Proin aliquam, est eget commodo consectetur, enim mi aliquam ante, in congue nibh orci id justo. "
class InfoPage extends React.Component<InfoPageProps, InfoPageState> {

    constructor(props: InfoPageProps) {
        super(props);
        this.state={
            title:'',
            text:'',
            data:[],
            data2:[],
            curent:0,
            test:false,
            chestionar: null,
            rBif: null,
            raspunsuri: [],
        }
    }

    componentDidMount()
    {  
        let params = new URLSearchParams(document.location.search.substring(1));
        let id = params.get("id") || 0;
        let r2 = []
        for(var i = 0; i < data2[0].questions.length; ++i) {
            r2[i] = 0;
        }
        this.setState({
            title:data[Number(id)].title,
            text:data[Number(id)].paragraphs[0],
            data:data[Number(id)].paragraphs,
            curent:0,
            data2:data2,
            chestionar: data2[0],
            rBif: 0,
            raspunsuri: r2,
        });
        console.log(this.state.data);
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

    handleBifat = (event: any, index: number) => {
        let r2 = this.state.raspunsuri;
        r2[index] = Number(event);
        this.setState({raspunsuri: r2})
    };

    returnage= ()=>  <Page title = {this.state.title} text = {this.state.text} next={this.next} />

    returnTest= ()=> <Tests chestionar={this.state.chestionar} handleBifat={this.handleBifat} raspunsuri = {this.state.raspunsuri} next={this.nextAfterTest}/>

    nextAfterTest = () => {
        console.log("am ajuns");
        let r = this.state.chestionar.raspunsuri;
        let v = this.state.raspunsuri;

        let sum = 0;
        for(var i = 0; i < v.length; ++i) {
            if(r[i] == v[i])
                sum += 1;
        }

        let med = sum / v.length * 100;
        console.log(med);
        window.location.assign('./main');
    }

    render() {
        console.log('chestionar', this.state.chestionar);
        return (
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{display:'inline-flex',flexDirection:'column',width:'100%',}}>
                    <div>
                        <AppBar firstname='Marcel' lastname = 'Popescu' />
                    </div>
                    <div style = {{position: 'static', marginLeft: '10px', marginTop: '10px'}}>
                        <div style={{margin:'auto',width:'90%',marginTop:'2%'}}>
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
 
export default InfoPage;