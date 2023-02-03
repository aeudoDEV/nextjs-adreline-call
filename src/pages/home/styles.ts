import { styled } from "@stitches/react";

export const Container = styled('main',{

    maxWidth:'calc(100vw - (100vw - 1160px)/2)',
    height:'100vh',
    marginLeft:'auto',
 

    display: 'flex',
    alignItems: 'center', 
    overflow:'hidden', 
});

export const ContainerPhases = styled('div',{

    maxWidth:480,
    padding: '2.5rem',

    h1:{
        fontSize:"xxx-large",
        marginBottom:'1rem',

    },
    span:{
        color:'$gray200',
        fontSize:'large',
    }
});

export const ImgageContainer = styled('div',{
    
});
