import React from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const Container = styled.div `
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)),
        url("https://img5.goodfon.ru/original/5120x3200/b/62/vozdushnyi-sharik-ruka-prazdnik.jpg") center;
        `

const Wrapper = styled.div `            
        width: 430px;`

const Title = styled.h3 `
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 5px;
`

function Bar() {
    return (
        <Box
            sx={{
                height: 20,

            }}
        />
    );
}

const Login = () => {
    return (
        <Container>

            <Wrapper>
                <Title> Sign In </Title>
                <Bar />

                <TextField fullWidth label="email" id="fullWidth"/>
                <Bar />
                <TextField fullWidth label="password" id="fullWidth"/>
                <Bar />

                <Stack direction="row" spacing={9}>
                    <Link href="#">Forgot password?</Link>  <Link href="#">Create a new account</Link><Button variant="outlined">Login</Button>
                </Stack>
            </Wrapper>
        </Container>
    );
};

export default Login;