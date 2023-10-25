import React from 'react'
import { Box, Typography, styled } from '@mui/material';
import { navData } from '../../constants/data';


const Component = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '55px 130px 0 130px',
  justifyContent: 'space-between',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    margin: 0
  }
}));

const Container = styled(Box)`
paddng:12px 8px;
text-align:center;
`
const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-faimily:inherit;
`
function NavBar() {
  return (

    <Box style={{ background: 'white' }}>
      <Component>
        {
          navData.map(data => (
            < Container>
              <img src={data.url} alt='navigation' style={{ width: 65 }} />
              <Text>{data.text}</Text>
            </ Container>
          ))
        }
      </Component>
    </Box>
  )
}

export default NavBar