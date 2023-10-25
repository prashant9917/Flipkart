import React from 'react'
import { useEffect } from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import { styled, Box } from '@mui/material';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';


const Component = styled(Box)`
padding:10px 10px;
background:#F2F2F2;
overflow:hidden;
`

function Home() {

    const {products} = useSelector(state => state.getProducts);
    // console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title='Deals Of The Day' timer={true}/>
                <Slide products={products} title='Discounts for You'  timer={false}/>
                <MidSection/> 
                <Slide products={products} title='Suggested Items' timer={false}/>
                <Slide products={products} title='Top Selections' timer={false}/>
                <Slide products={products} title='Recomanded Items' timer={false}/>
                <Slide products={products} title='Trending Offers' timer={false}/>
            </Component>
        </>
    )
}

export default Home