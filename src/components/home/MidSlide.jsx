import React from 'react';
import Slide from './Slide';

import { Box, styled } from '@mui/material';

const Component = styled(Box)`
display:flex;
`;
 const LeftComponet = styled(Box)(({theme})=>({
width:'83%',
[theme.breakpoints.down('md')]:{
    width:'100%'
}
}));

 const RightComponent = styled(Box)(({theme})=>({
background:'#FFFFFF',
padding:5,
marginTop:10,
marginLeft:10,
width:'17%',
textAlign:'center',
[theme.breakpoints.down('md')]:{
    diaplay:'none'
}
}));

function MidSlide({ products, title, timer }) {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Component>
            <LeftComponet>
                <Slide products={products}
                    title={title}
                    timer={timer}
                />
            </LeftComponet>
            <RightComponent>
                <img src={adURL} alt='ad' style={{width:270}}/>
            </RightComponent>
        </Component>
    )
}

export default MidSlide