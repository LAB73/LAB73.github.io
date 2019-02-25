import React from "react";
import Card from '@material-ui/core/Card'
import Header from '@material-ui/core/CardHeader'
import Media from '@material-ui/core/CardMedia'
import CardAction from '@material-ui/core/CardActionArea'


const styles = {
    dropdownbutton: {
        justifyContent: 'center',
        display: 'flex',
        width: '100%',

    },
    card: {
        margin: '2rem',
        width: '20rem !important',

    }
}


class projectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    dropdownClicked() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
        return [

            <Card style={styles.card}>
                <CardAction>
                    <Media style={{
                        height: '500px',
                        width: '100vw',
                        overflow: 'hidden',
                        backgroundColor: 'gray'

                    }} image={this.props.image}/>
                    <Header title={this.props.title} subheader={this.props.subheader}/>

                </CardAction>
            </Card>
        ]
    }

}

export default projectCard