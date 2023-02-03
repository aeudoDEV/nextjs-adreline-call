import { styled } from "@stitches/react";


export const Container = styled('main', {
    backgroundColor:'green',
    maxWidth:540,
    height:278,
    margin:'0 auto',

    header:{
        
    }
})

export const Form = styled('form', {
    width:'100%',
    height:'100%',
    backgroundColor:'$gray800',
    borderRadius:8,
    border:'1px solid $gray600',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    label:{
        display:'flex',
        flexDirection:'column',
        marginBottom:'0.5rem',
        span:{
            color:'$gray100',
        },
        div:{
            background:'$gray900',
            border:'none',
            borderRadius:8,
            height:46,

            display:'flex',
            flexDirection:'row',
            alignItems: 'center',
            width:'100%',
            input:{
                background:'transparent',
                width:'calc(100% - 1rem)',
                border:'none',
                outline:'none',
                color:'$gray300',

            },
            span:{
                fontSize:'smaller',
                marginLeft:'1rem',
                color:'$gray200',
            },
            
        },
      
    },

    span:{
        padding:'0.2rem 0',
    },
    div:{
        display:'flex',
        justifyContent: 'center',
        flexDirection:'column',
        width:492,
    },
    button:{

        
    }
});

export const Button = styled('button', {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap:5,
    marginTop:'1',
    height:46,
    background:'$green600',
    border:'none',
    borderRadius:8,
    color:'white',
    cursor:'pointer',
    '&:hover':{
        background:'$green100',
    },
    "&:disabled":{
        cursor: 'notAllowed',
        background:'red',
    },
})

export const FormError = styled('span', {
    fontSize:'smaller',
})