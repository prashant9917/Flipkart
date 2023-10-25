import { Box, Typography, styled, Button } from '@mui/material'
import React from 'react'

import { addEllipsis } from '../../utils/common-utils';
import ButtonGroup from './ButtonGroup';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';

const Component = styled(Box)`
border-top:1px solid #f0f0f0;
display:flex;
background:white;
`;

const LeftComponent = styled(Box)`
margin:20px;
display:flex;
flex-direction:column;
`;
const SmallText = styled(Typography)`
color:#878787;
margin-top:10px;
font-size:14px;
 `;
const Remove = styled(Button)`
margin-top:20px;
font-size:16px;
color:black;
font-weight:600;
`

function CartItem({ item }) {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch();

    const removeItemFromCart=(id)=>{
        dispatch(removeFromCart(id));
    }
    return (
        <Component>
            <LeftComponent>
                <img src={item.url} alt='product' style={{height:110, width:110}} />
                <ButtonGroup/>
            </LeftComponent>
            <Box style={{margin:20}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                    <Box component='span'><img src={fassured} alt='flipkart-assurerd' style={{ width: 50, marginLeft: 10 }} /></Box>
                </SmallText>
                <Typography style={{margin:'20px 0'}}>
                    <Box component='span' style={{ fontWeight: 600, fontSize:18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{ color: 'green' }}>{item.price.discount} off</Box>
                </Typography>
                <Remove onClick={()=>removeItemFromCart(item.id)}>Remove</Remove>
            </Box>
        </Component>
    )
}

export default CartItem