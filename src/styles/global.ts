import { createStitches, globalCss } from "@stitches/react";

export const { styled, css, getCssText } = createStitches({
    theme:{
        colors:{
            gray100:'#E1E1E6',
            gray200:'#A9A9B2',
            gray400:'#7C7CBA',
            gray600:'#323238',
            gray800:'#202024',
            gray900:'#121214',
            
            green100:'#00B37E',
            green600:'#00875F'
        },
        space: {

        },
        fontSizes: {
            
        },
        sizes: {
            
        },
    },
})

export const globalStyles = globalCss({
    '*':{
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
    },
    body:{
        backgroundColor:'$gray900',
        color:'$gray100',
        '-webkit-font-smoothing': 'antialiased',
        fontFamily:'Roboto'
    },

})