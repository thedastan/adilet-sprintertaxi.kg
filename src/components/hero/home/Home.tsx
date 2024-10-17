import { PHONE_NUMBER_557, PHONE_NUMBER_707, WHATSAPP_LINK_557, WHATSAPP_LINK_707 } from '@/app/admin/admin';
import { CONTAINER_WIDTH } from '@/config/_variables.config';
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Home = () => {
    return (
        <Box
        backgroundImage="linear-gradient(to right, rgba(2, 0, 0, 0.455), rgba(2, 0, 0, 0.455)), url('https://forry.ru/wp-content/uploads/2019/11/jrmoqulo.jpg')"
        color="black"
        bgSize="cover"
        bgPosition="center"
        height="100vh" 
        width="100%"  
        >
        <Container maxW={CONTAINER_WIDTH}>
          <Box fontFamily="sans-serif" display="flex" gap="20px" flexDirection="column" justifyContent="center" fontWeight={700} alignItems="center" p="100px 0">
            <Text p={{lg:10,base:5}} borderRadius={6} w={{lg:"80%",base:"100%"}}textAlign="center" fontSize={{lg:42,base:33}} color="white" bg="orange">такси портер бишкек грузовые перевозки по Кыргызстану и за ее пределы.</Text>
            <Text p={{lg:10,base:5}} borderRadius={6} w={{lg:"45%",base:"100%"}} textAlign="center" fontSize={{lg:30,base:20}} color="white" bg="orange">ЛЮБЫЕ УСЛУГИ ПО ПЕРЕВОЗКЕ! ДЕШЁВО, КАЧЕСТВЕННО, НАДЁЖНО! ПЕРЕЕЗДЫ ДОМОВ, ОФИСОВ</Text>
            <Flex gap={10} flexWrap="wrap" justifyContent="center">
  
              <Link href={WHATSAPP_LINK_707} target={"_blank"}> 
                <Button cursor="pointer" bg="rgb(51, 188, 57)" border="none" p="10px 20px" fontSize={18} borderRadius={30} color="white">{PHONE_NUMBER_707}</Button>
              </Link> 
  
              <Link href={WHATSAPP_LINK_707} target={"_blank"}> 
                <Button cursor="pointer" bg="rgb(177, 28, 177)" border="none" p="10px 20px" fontSize={18} borderRadius={30} color="white">WhatsApp</Button>
              </Link> 
              
              <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                <Button cursor="pointer" bg="rgb(51, 188, 57)" border="none" p="10px 20px" fontSize={18} borderRadius={30} color="white">{PHONE_NUMBER_557}</Button>
              </Link> 
            
            </Flex>
            <Text  p={{lg:5,base:5}} borderRadius={6} fontWeight={400} w={{lg:"25%",base:"100%"}} textAlign="center" fontSize={{lg:20,base:18}} color="white" bg="orange">Стаж 7 лет | работаем 24/7</Text>
          </Box>
        </Container>
        
      </Box>
    );
};

export default Home;