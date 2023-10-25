import React, { useState, useContext } from 'react'
import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material';
import { authenticateSignup, authenticateLogin } from '../service/api';
import { DataContext } from '../context/DataProvider';



const Component = styled(Box)`
height:80vh;
width:90vh;
`;
const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:81.8%;
width:40%;
overflow:hidden;
padding:45px 35px;
& > p, & > h5{
    color:white;
    font-weight:600;
}
`
const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px; 
& > div, &>button,&>p{
    margin-top:10px;
}
`;
const LoginButton = styled(Button)`
text-transform:none;
background:#FB641B;
color:white;
height:48px;
border-radius:3px;
`;
const RequestButton = styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:3px;
box-shadow:0 2px 4px 0 rgb(0,0,0/ 20%);
`;

const Text = styled(Typography)`
font-size:12px;
color:#878787;
`;

const Text2 = styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;
`;

const Error = styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
`


const accountInitialvalues = {
    login: {
        view: 'login',
        heading: "Login",
        subHeading: "By continuing, you agree to flipkart's Terms of use and privacy policy."
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const loginInitialvalues = {
    username: '',
    password: ''
}
function LoginDialog({ open, setOpen }) {
    const [account, toggleAccount] = useState(accountInitialvalues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialvalues);
    const [error, setError] = useState(false);

    const { setAccount } = useContext(DataContext);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialvalues.login);
        setError(false);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialvalues.signup);

    }
    const onChangeValue = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }
    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose();
        setAccount(signup.firstname)
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const loginUser = async() =>{
        let response = await authenticateLogin(login);
        console.log(response);
        if(response.status === 200){
            handleClose();
            setAccount(response.data.data.firstname);
        }else{
            setError(true);
        }
    }

    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <Component>
                    <Box style={{ display: 'flex', height: '100%' }} >
                        <Image>
                            <Typography variant='h5'>{account.heading}</Typography>
                            <Typography style={{ marginTop: 10 }}>{account.subHeading}</Typography>
                        </Image>
                        {
                            account.view === 'login' ?
                                <Wrapper>
                                    <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username' label='Enter username' />
                                    {error && <Error>Please enter valid username or password</Error>}
                                    
                                    <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                                    
                                    <Text>By continuing, you agree to flipkart's Terms of use and privacy policy.</Text>
                                    
                                    <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                                    
                                    
                                    <Typography style={{ textAlign: 'center' }}>OR</Typography>

                                    <RequestButton>Request OTP</RequestButton>
                                    <Text2 onClick={() => toggleSignup()}>New to Flipkart? Create an account</Text2>
                                </Wrapper>
                                :
                                <Wrapper>
                                    <TextField variant='standard' onChange={(e) => onChangeValue(e)} name='firstname' label='Enter Firstname' />
                                    <TextField variant='standard' onChange={(e) => onChangeValue(e)} name='lastname' label='Enter Lastname' />
                                    <TextField variant='standard' onChange={(e) => onChangeValue(e)} name='username' label='Enter Username' />
                                    <TextField variant='standard' onChange={(e) => onChangeValue(e)} name='email' label='Enter Eamil' />
                                    <TextField variant='standard' onChange={(e) => onChangeValue(e)} name='password' label='Enter Password' />
                                    <TextField variant='standard' onChange={(e) => onChangeValue(e)} name='phone' label='Enter phone' />
                                    <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                                </Wrapper>
                        }
                    </Box>
                </Component>
            </Dialog>
        </>
    )
}

export default LoginDialog