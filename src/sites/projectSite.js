import React from "react";
import './css/info.css';
import ProjectCard from '../components/projectCard';
import Carousel from 'nuka-carousel';
import PhobitBanner from '../sites/img/Phobit_banner.png'
import EinsaetzeBanner from '../sites/img/Einsätze_Banner.png'


import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import Button from '@material-ui/core/IconButton'

const styles = {
    dropdownbutton: {
        justifyContent: 'center',
        display: 'flex',
        width: '100%'
    },


}





class infoSite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: {
                title: ["Phobit", "Ordernize"],
                subheader: ["Your personal accountant.", "Ordering reimagined."],
            },

        }
    }


    render() {
        return [
            <h2 className={"infoHeader"}>Previous work: </h2>,
            <Carousel

                renderCenterLeftControls={({previousSlide}) => (
                    <Button onClick={previousSlide}><FaArrowLeft/></Button>
                )}
                renderCenterRightControls={({nextSlide}) => (
                    <Button onClick={nextSlide}><FaArrowRight/></Button>
                )}

                dragging={true}
                autoplay={true}
                autoplayInterval={5000}
                heightMode={"max"}
                wrapAround={true}
                pauseOnHover={true}
                transitionMode={"scroll"}

            >
                <ProjectCard title={"Phobit"} subheader={"Chaos, zusammengeräumt."} image={PhobitBanner}/>
                <ProjectCard title={"Einsätze OÖ"} subheader={"Immer top informiert."} image={EinsaetzeBanner}/>

            </Carousel>


        ]
    }

}

export default infoSite