import { InputBase, Box, styled, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';



const SearchContainer = styled(Box)`
background:white;
width:38%;
border-radius:3px;
margin-left:10px;
display:flex;
`;
const InputSerachBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`;
const SearchIconWrapper = styled(Box)`
color:black;
padding:5px;
display:flex;
`;

const Listwrapper = styled(List)`
position:absolute;
color:black;
background:white;
margin-top:36px;
`

function Search() {

    const [text, setText] = useState('');

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    const getText = (text) => {
        setText(text);
    }

    return (
        <>
            <SearchContainer>
                <InputSerachBase
                    placeholder='Search for products, brands and more'
                    onChange={(e) => getText(e.target.value)}
                    value={text}
                />
                <SearchIconWrapper >
                    <SearchIcon />
                </SearchIconWrapper >
                {
                    text &&
                    <Listwrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <ListItem>
                                    <Link
                                    to={`/product/${product.id}`}
                                    onClick={()=>setText('')}
                                    style={{textDecoration:'none', color:'inherit'}}
                                    >
                                        {product.title.longTitle}
                                    </Link>

                                </ListItem>
                            ))
                        }
                    </Listwrapper>
                }
            </SearchContainer>
        </>
    )
}

export default Search