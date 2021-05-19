import { Checkbox, createStyles, Drawer, List, ListItem, ListItemText, withStyles } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import ReactSpeedometer from "react-d3-speedometer"

export interface NavBarProps {
    classes: any;
    list:any;
}
 
export interface NavBarState {
    list: any;
}

const styles = createStyles({
    paper: {
        background: '#e6e6ff',
        position:"inherit"
    },
})

class NavBar extends React.Component<NavBarProps, NavBarState> {

    lst = [
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

    constructor(props : NavBarProps) {
        super(props);
        this.state = {
            list : this.lst,
        }
    }

    makeItem = (item : any , index:any) => {
        var url = "/page?id="+index;
        const divStyle = {
          
          };
        return (
            <Link to={url}   style={{ textDecoration: 'none', color: 'black' }}>
                <ListItem button>
                    <Checkbox disabled checked = {item[0]} />
                    <ListItemText primary = {item[3]} style = {{marginRight: '10px' , width:"40%"}} />
                    <ListItemText  > 
                        <div style={divStyle}>
                            <ReactSpeedometer
                                maxValue={100}
                                value={item[2]}
                                needleColor="red"
                                startColor="green"
                                segments={5}
                                endColor="blue"
                                paddingHorizontal={0}
                                paddingVertical={0}
                                width={150}
                                height={150}
                            />
                        </div>
                    </ListItemText>
                </ListItem>
            </Link>
        );
    }

    render() { 
        const {list} = this.props;
        const {classes} = this.props;
        return (
            <div>
                <Drawer
                    variant="permanent"
                    anchor="left"
                    classes = {{paper: classes.paper}}
                >
                    <List>
                        <ListItem>
                            <ListItemText style = {{textAlign: 'center', fontWeight: 'bold'}}>
                                Managementul
                                <br/>
                                Cunostintelor
                            </ListItemText>
                        </ListItem>
                        {
                            list.map((item : any, index : any) => (this.makeItem(item,index)))
                        }
                    </List>
                </Drawer>
            </div>
        );
    }
}
 
export default withStyles(styles)(NavBar);