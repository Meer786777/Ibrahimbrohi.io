import React from 'react';
import './css/body.css'
import Map from './Map'
import Text1 from './Text';
import Video from './Video1'
import Proinfo from './Proinfo'
import ImgCard from './ImgCard'
import Text2 from './Text2'
import Text3 from './Text3';
import Imgcon from './imgcov';
function Body() {
    return (
        <>
            <div className='grid-parent'>
                <Map/>
                <Text1/>
                <Video/>
                <Proinfo/>
                <ImgCard/>
                <Text2/>
                <Text3/>
                <Imgcon/>
            </div>
        </>
    );
}

export default Body;
