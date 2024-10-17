import React from 'react';
import Weas from './weas/Weas';
import Price from './price/Price';
import End from './end/End';
import Home from './home/Home';
import { Box } from '@chakra-ui/react';
import Tables from './table/Tables';

const Hero = () => {
    return (
        <Box>
            <Home/>
            <Weas/>
            <Price/>
            <Tables/>
            <End/>
        </Box>
    );
};

export default Hero;