import React from "react";
import './css/info.css';
import Profile from '../components/profileCard';
import julkron from './img/kroni.jpeg';
import pawies from './img/wieses.jpg';
import empty from './img/Empty+profile.jpg'
import krenn from './img/krenn.jpg';

const beschreibung = {
    kronlachner: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    krenn: "Dieser Mitarbeiter säuft gerne. Auf seinem Bild ist er gerade extrem abgestürtzt.",
    gangl: "Gangl",
    wiesinger: "Wiesinger"
}

const skills = {
    kronlachner: ["Java", "React", "Swift", "C#"],
    krenn: ["Java", "React", "Swift", "C#"],
    gangl: ["Java", "React", "Swift", "C#"],
    wiesinger: ["Java", "React", "Swift", "C#"],
}

class infoSite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    componentDidMount() {
    }


    componentDidUpdate() {
    }

    componentWillUnmount() {
    }


    render() {


        return [
            <h2 className={"infoHeader"}>Our Team: </h2>,
            <div className={"profile_container"}>
                <Profile name={"Julian Kronlachner"} beschreibung={beschreibung.kronlachner} imageURL={julkron}
                         skills={skills.kronlachner}/>
                <Profile name={"Paul Krenn"} beschreibung={beschreibung.kronlachner} imageURL={krenn}
                         skills={skills.krenn}/>
                <Profile name={"David Gangl"} beschreibung={beschreibung.kronlachner} imageURL={empty}
                         skills={skills.gangl}/>
                <Profile name={"Paul Wiesinger"} beschreibung={beschreibung.kronlachner} imageURL={pawies}
                         skills={skills.wiesinger}/>
            </div>
        ]
    }

}

export default infoSite