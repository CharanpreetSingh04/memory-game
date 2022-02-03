import React from "react";
import amaara from "../images/amaara.jpeg";
import father from "../images/father.jpeg";
import femaleTecher from "../images/female-teacher.jpeg";
import hathori from "../images/hathori.png";
import kenechi from "../images/kenechi.jpeg";
import kio from "../images/kio.jpeg";
import mom from "../images/mom.jpeg";
import shinzo from "../images/shinzo.jpeg";
import shishimanu from "../images/shishimanu.jpeg";
import sonam from "../images/sonam.jpeg";
import teacher from "../images/teacher.png";
import yumico from "../images/yumico.jpeg";
function Card(props) {
    const random = Math.floor(Math.random()*12);
    const image = {};
    image.choice = null;
    switch(random){
        case 0: image.choice = amaara;break;
        case 1: image.choice = father;break;
        case 2: image.choice = femaleTecher;break;
        case 3: image.choice = hathori;break;
        case 4: image.choice = kenechi;break;
        case 5: image.choice = kio;break;
        case 6: image.choice = mom;break;
        case 7: image.choice = shinzo;break;
        case 8: image.choice = shishimanu;break;
        case 9: image.choice = sonam;break;
        case 10: image.choice = teacher;break;
        case 11: image.choice = yumico;break;
        default: image.choice = hathori;
    }

    function clicked(){
        console.log("clicked");
        if(props.images[image.choice] !== undefined){
            console.log("duplicate hit");
            props.initializeScore();
        }
        else{
            const images = props.images;
            images[image.choice] = 1;
            console.log('unique hit')
            props.push(images);
            props.increaseScore();
        }
    }
    return(
        <div onClick={clicked}><img src={image.choice} alt='images'></img></div>
    )
}
export default React.memo(Card);