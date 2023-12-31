import React from 'react'
import { Typography, Box, styled, Table, TableBody, TableRow, TableCell } from '@mui/material';


import { LocalOffer as Badge } from '@mui/icons-material';

const SmallText = styled(Box)`
font-size:14px;
vertical-align:baseline;
& > p{
    font-size:14px; 
    margin-top:10px;
}
`;

const StyleBadge = styled(Badge)`
margin-right:10px;
color:green; 
font-size:15px;
`;

const ColomnText = styled(TableRow)`
font-size:14px;
vertical-align:baseline;
& > td:{
    font-size:14px;
    margin-top:10px;
    border:none;
}
`

function ProductDetail({ product }) {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                8 Rating & Reviews
                <Box component='span'><img src={fassured} style={{ width: 77, marginLeft: 20 }} /></Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: 'green' }}>{product.price.discount} off</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyleBadge />Get extra 20% off upto ₹50 on one item (s) T&C</Typography>
                <Typography><StyleBadge />Get extra 13% off (price inclusive of discount) T&C</Typography>
                <Typography><StyleBadge />Sign up for Flipkart Pay Leter and  get Flipkart Gift Card worth ₹100* Know more</Typography>
                <Typography><StyleBadge />Buy 2 Items save 5%; Buy 3 or more save 10% T&C</Typography>
                <Typography><StyleBadge />5% Cashback on Flipkart Axis Bank card</Typography>
                <Typography><StyleBadge />No Cost EMI on Bajaj Finserv EMI card on Cart value above ₹2499 T&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColomnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery By {date.toDateString()} | ₹40</TableCell>
                    </ColomnText>
                    <ColomnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColomnText>
                    <ColomnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <Box component='span' style={{ color: '#2874f0' }}>SuperComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColomnText>
                    <ColomnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{width:390}} alt='SuperCoins'/>
                        </TableCell>
                    </ColomnText>
                    <ColomnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColomnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail