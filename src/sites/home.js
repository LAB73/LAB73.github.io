import React from "react";
import './css/home.css';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import TopBar from '../components/navigationBar';
import Header from '../components/main_header';
import Info from './infoSite';
import Projekt from './projectSite';
import IconButton from '@material-ui/core/IconButton';
import Drawer from 'react-motion-drawer';



import DownButton from '@material-ui/icons/ArrowDownward'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000'
        },
        secondary: {
            main: '#274e9c',
        },

    },
});


class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrollButton: true,
            bouncyButtonState: "downButton bounce",
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }



    componentDidUpdate() {
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(){
        if(window.scrollY > window.innerHeight - 50){
            this.setState({
                isScrollButton : false
            })
        }else{
            this.setState({
                isScrollButton : true
            })
        }
    }


    removeView() {
        window.scrollTo({
            top: window.innerHeight - 40,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        if (this.state.isScrollButton) {
            return [

                <MuiThemeProvider style={{height: '100% !important'}} theme={theme}>
                    <TopBar/>,
                    <div className={"header"}>
                        <Header/>
                        <IconButton disableRipple={true} className={"downButton"} onClick={this.removeView}>
                            <DownButton id={"downButton"} fontSize={"large"} className={this.state.bouncyButtonState}/>
                        </IconButton>
                    </div>
                    <div className={"site_background"}>
                        <Projekt/>
                        <Info/>
                    </div>
                    <Drawer open={true}>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Settings</li>
                        </ul>
                    </Drawer>
                </MuiThemeProvider>


            ]
        }
        else {
            return [

                <MuiThemeProvider style={{height: '100% !important'}} theme={theme}>
                    <TopBar/>,
                    <div className={"header"}>
                        <Header/>
                    </div>
                    <div className={"site_background"}>
                        <Projekt/>
                        <Info/>
                    </div>
                </MuiThemeProvider>


            ]
        }
    }

}

export default home