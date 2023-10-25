import React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItem, styled } from '@mui/material';
import Search from './Search';
import CustomButton from './CustomButton';

import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';



const StyledHeader = styled(AppBar)`
background:#2874f0;
height:55ps;
`;

const BoxBar = styled(Link)`
margin-left:12%;
line-height:0;
text-decoration:none;
color:inherit;
`
const TypographyHeading = styled(Typography)`
font-size:12px;
font-style:italic;
cursor:pointer;
`

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4,
    marginTop: 4,
    cursor: 'pointer'
});

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));


function Header() {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const list = () =>(
        <Box style={{width:200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButton/>
                </ListItem>
            </List>
        </Box>
    )
    return (
        <>
            <StyledHeader>
                <Toolbar style={{ minHeight: 55 }}>
                    <MenuButton color='inherit' onClick={handleOpen}>
                        <Menu />
                    </MenuButton>
                    <Drawer open={open} onClose={handleClose} >
                        {list()}
                    </Drawer>

                    <BoxBar to='/'>
                        <img src={logoURL} alt='logo' style={{ width: 75 }} />
                        <Box style={{ display: "flex" }}>
                            <TypographyHeading>Explore&nbsp;
                                <Box component="span" style={{ color: 'yellow' }}>Plus</Box>
                            </TypographyHeading>
                            <PlusImage src={subURL} alt='sub-logo' />
                        </Box>
                    </BoxBar>
                    <Search />
                    <CustomButtonWrapper>
                        <CustomButton />
                    </CustomButtonWrapper>
                </Toolbar>
            </StyledHeader>
        </>
    )
}

export default Header