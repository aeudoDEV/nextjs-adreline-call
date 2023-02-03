import { styled } from '@stitches/react';

export const Form = styled('form', {
    background:'$gray800',
    height:'5rem',

    display:'grid',
    gridTemplateColumns:'1fr auto',
    alignItems:'center',
    gap:'0.75rem',

    marginTop:'1rem',
    padding:'1rem',
    borderRadius:8,
    border:'1px solid $gray600',
    div:{
        height:'2rem',
        maxWidth:'15rem',
        background:'$gray900',
        border:'none',
        borderRadius:8,
        color:'$gray300',
        display:'flex',
        alignItems:'center',
        
        
    },
    span:{
        fontSize:'smaller',
        marginLeft:'0.75rem',
    },
    input:{
        background:'transparent',
        border:'none',
        color:'$gray300',
        outline:'none',
        width:'100%',
    },
    button:{
        height:'2rem',
        padding:'0 1rem',
        border:'none',
        borderRadius:8,
        background:'$green600',
        color:'white',
        cursor:'pointer',
        alignItems:'center',
        display: 'flex',
        gap:'0.5rem',

        '&:hover':{
            background:'$green100',
        },   
    },
    
})

export const FormAnnotation = styled('div', {
    span:{
        fontSize:'smaller',
    }
})