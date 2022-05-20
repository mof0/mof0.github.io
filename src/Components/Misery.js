import React from "react";
import bgVideo from '../miserable.mp4'

function Misery(){

    return(

    <video autoPlay loop>
        <source src={bgVideo} type="video/mp4"></source>
    </video>

    );
}

export default Misery;
