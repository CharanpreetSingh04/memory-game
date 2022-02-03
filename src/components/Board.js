import React, { useState } from "react";
import Card from './Card';

function Board(props) {
    const [images,setImages] = useState({});
    return(
    <div className='Board'>
        <Card images={images} push={(newImages)=> setImages(newImages)} increaseScore={()=>props.increaseScore()} initializeScore = {()=>{setImages({}); props.initializeScore()}}/>
        <Card images={images} push={(newImages)=> setImages(newImages)} increaseScore={()=>props.increaseScore()} initializeScore = {()=>{setImages({}); props.initializeScore()}}/>
        <Card images={images} push={(newImages)=> setImages(newImages)} increaseScore={()=>props.increaseScore()} initializeScore = {()=>{setImages({}); props.initializeScore()}}/>
        <Card images={images} push={(newImages)=> setImages(newImages)} increaseScore={()=>props.increaseScore()} initializeScore = {()=>{setImages({}); props.initializeScore()}}/>
        <Card images={images} push={(newImages)=> setImages(newImages)} increaseScore={()=>props.increaseScore()} initializeScore = {()=>{setImages({}); props.initializeScore()}}/>
        <Card images={images} push={(newImages)=> setImages(newImages)} increaseScore={()=>props.increaseScore()} initializeScore = {()=>{setImages({}); props.initializeScore()}}/>
        <Card images={images} push={(newImages)=> setImages(newImages)} increaseScore={()=>props.increaseScore()} initializeScore = {()=>{setImages({}); props.initializeScore()}}/>
        <Card images={images} push={(newImages)=> setImages(newImages)} increaseScore={()=>props.increaseScore()} initializeScore = {()=>{setImages({}); props.initializeScore()}}/>
        <Card images={images} push={(newImages)=> setImages(newImages)} increaseScore={()=>props.increaseScore()} initializeScore = {()=>{setImages({}); props.initializeScore()}}/>
        <Card images={images} push={(newImages)=> setImages(newImages)} increaseScore={()=>props.increaseScore()} initializeScore = {()=>{setImages({}); props.initializeScore()}}/>
    </div>
    )
}
export default Board;