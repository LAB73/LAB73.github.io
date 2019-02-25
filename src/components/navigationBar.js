import React from "react";

import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Avatar from '@material-ui/core/Avatar';
import AppBar from "@material-ui/core/AppBar/AppBar";
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton';


const styles = {
    root: {
        flexGrow: '1',
    },
};

class navigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
    }

    componentDidUpdate() {
    }

    menuDidOpen(){}

    render() {
        return [
            <div style={styles.root}>
                <AppBar position={"fixed"} color={"primary"}>
                    <Toolbar>
                    <Avatar
                        src={"favicon.png"}
                        style={{
                            float: 'none',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                    <IconButton
                        color={"primary"}
                        onClick={this.menuDidOpen()}
                        style={{
                            color: 'white',
                        }}>

                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            </div>
        ]
    }

}

export default navigationBar