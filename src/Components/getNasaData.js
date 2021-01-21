/*<<----- importing react with state and effect hook ----->>*/
import React, {useState, useEffect} from 'react'; 

/*<<----- importing axios to fetch the data with end point ---->>*/
import axios from 'axios';

/*<<---- import keys and url from Constants/Index ---->>*/
import {BASE_URL, API_KEY} from '../Constants/Index'

/*<-----import styled and keyframe for animation from styled-components---->*/
import styled, { keyframes } from 'styled-components';



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
        <DivStyled>
            <Title>{picture.title}</Title>
            <p>{picture.date}</p>
            <Rotate /*style={{width: 390, height: 487}} */
                 src={picture.url} 
                 alt={picture.title}>
            </Rotate>
            <p>{picture.explanation}</p>
        </DivStyled>
    )
}
const DivStyled = styled.div `
    background-color: lightyellow;

`
const rotate = keyframes`
    from{
        transfrom: rotate(0deg);
    }
    to{
        transform: rorate(360deg);
    }
`;
const Rotate = styled.img`
    //animation: ${rotate} 5s linear;
    width: 390;
    height: 487
`;

const Title = styled.h1`
    color: ${(pr) => pr.theme.primaryColor}
    font-family: 'Tangerine', serif;
`

export default GetPictureData;