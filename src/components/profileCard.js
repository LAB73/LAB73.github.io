import React from "react";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import Avatar from '@material-ui/core/Avatar';
import {FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa';
import {IconContext} from "react-icons";
import Chip from '@material-ui/core/Chip'


const styles = {
    card: {
        width: 650,
        margin: "1rem"
    },
    media: {
        height: 400,
    },
    instagramButton: {
        background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
        color: "white",
        fontWeight: "bold",


    },
    githubButton: {
        background: "linear-gradient(45deg, #232526, #414345 100%)",
        color: "white",
        fontWeight: "bold",

    },
    twitterButton: {
        background: "linear-gradient(45deg,  #00aced, #0081ce 100%)",
        color: "white",
        fontWeight: "bold",

    },

    avatar: {
        height: 300,
        width: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '1rem'
    },
    socialMediaButtons: {
        display: 'flex',
        width: '80%',
        justifyContent: 'space-between',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '1rem',


    },
    strich: {
        height: '2px',
        width: '90%',
        marginRight: 'auto',
        marginLeft: 'auto',
        color: 'gray',
        marginTop: '1rem',
        marginBottom: '1rem',
        backgroundColor: 'lightgray'
    },
    skills: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
        display: 'flex',
        justifyContent: 'center'
    }

};


class profileCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            beschreibung: "",
            imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6LciWmVmgr11SKNsaXNgCMN9RhiNg4OMgHsUvVeX2e0_VzGfpGg",
            skills: ["Java", "React", "Swift", "C#"]
        }

    }


    componentDidMount() {
    }

    componentDidUpdate() {
    }


    getSkills() {
        const ChipArray = [];
        var skill_array = [2];
        skill_array = this.props.skills;
        for (let i = 0; i < skill_array.length; i++) {
            const chip = [
                <Chip style={{backgroundColor: 'darkgray', color: 'white'}} label={skill_array[i]}/>
            ];
            ChipArray.push(chip)
        }
        return ChipArray
    }

    render() {
        return [
            <Card style={styles.card} raised={true}>

                <CardActionArea>
                    <Avatar src={this.props.imageURL} style={styles.avatar} alt={this.props.name}/>

                    <CardContent>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.name}
                            </Typography>
                            <Typography component="p">
                                {this.props.beschreibung}
                            </Typography>
                        </CardContent>
                    </CardContent>
                    <CardActions style={styles.skills}>
                        {this.getSkills()}
                    </CardActions>
                    <CardContent>
                        <div style={styles.strich}/>
                    </CardContent>
                    <CardActions>
                        <div style={styles.socialMediaButtons}>
                            <Button size="large" variant={"extendedFab"} color="primary" style={styles.instagramButton}>
                                <IconContext.Provider value={{size: "2rem"}}>
                                    <div>
                                        <FaInstagram/>
                                    </div>
                                </IconContext.Provider>
                            </Button>
                            <Button size="large" variant={"extendedFab"} color="primary" style={styles.githubButton}>
                                <IconContext.Provider value={{size: "2rem"}}>
                                    <div>
                                        <FaGithub/>
                                    </div>
                                </IconContext.Provider>
                            </Button>
                            <Button size="large" variant={"extendedFab"} color="primary" style={styles.twitterButton}>
                                <IconContext.Provider value={{size: "2rem"}}>
                                    <div>
                                        <FaTwitter/>
                                    </div>
                                </IconContext.Provider>
                            </Button>
                        </div>
                    </CardActions>
                </CardActionArea>
            </Card>
        ]
    }

}

export default profileCard