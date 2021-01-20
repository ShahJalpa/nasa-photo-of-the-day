/*<<----- importing react with state and effect hook ----->>*/
import React, {useState, useEffect} from 'react'; 

/*<<----- importing axios to fetch the data with end point ---->>*/
import axios from 'axios';

/*<<---- import keys and url from Constants/Index ---->>*/
import {BASE_URL, API_KEY} from '../Constants/Index'

function GetPictureData (){
    const [picture, setPicture] = useState([]); //using a state hook to initialize the picture of empty array 

    useEffect(() => {
        axios
        .get(`${BASE_URL}?api_key=${API_KEY}`)
        .then((response) => {
            console.log(response);
            setPicture(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []) 

    return(
        <div>
            <h1>{picture.title}</h1>
            <p>{picture.date}</p>
            <img style={{width: 390, height: 487}} 
                 src={picture.url} 
                 alt={picture.title}>
            </img>
            <p>{picture.explanation}</p>
        </div>
    )
}

export default GetPictureData;