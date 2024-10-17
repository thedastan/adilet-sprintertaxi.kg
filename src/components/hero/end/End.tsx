import { PHONE_NUMBER_557, WHATSAPP_LINK_557 } from '@/app/admin/admin';
import { CONTAINER_WIDTH } from '@/config/_variables.config';
import { Box, Button, Container, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

const End = () => {
    return (
        <Box 
         backgroundImage="linear-gradient(to right, rgba(80, 80, 80, 0.455), rgba(80, 80, 80, 0.455)), url('https://transport-um.ru/wp-content/uploads/2023/07/car.webp')"
        color="black"
        bgSize="cover"
        bgPosition="center"
        height="100vh" 
        width="100%"  
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
        <Container maxW={CONTAINER_WIDTH}> 

          <Box mt={20} p="20px 0" display="flex" gap={10} flexDirection="column" justifyContent="center" alignItems="center">
          <Text p={{lg:3,base:3}} fontWeight={700} borderRadius={6} w={{lg:"40%",base:"100%"}} textAlign="center" fontSize={{lg:30,base:20}} color="blue" bg="white" border="solid 2px orange">Eще остались вопросы? <span style={{color:"orange"}}>Не теряйте время зря</span></Text>
  
          <Text p={{lg:3,base:3}} fontWeight={700} borderRadius={6} w={{lg:"80%",base:"100%"}}  textAlign="center" fontSize={{lg:30,base:20}}  color="blue" bg="white" border="solid 2px orange">Работаем официально, есть патент. Социальные Отчисления. Готовы сотрудничать с фирмами.</Text>
  
           <Flex flexDirection={{lg:"row",base:"column"}}  w="100%" justifyContent="space-around">
           <Flex>
            <Box display={{lg:"flex",base:"none"}}  flexDirection="column" gap={10} w={{lg:"70%",base:"100%"}}   textAlign="center">
               <Text borderRadius="10px" w="60%" fontSize={26} fontWeight={600} bg="orange" p={5} color="white">Мы работаем 24/7</Text>
               <Text   textAlign="start" fontSize={28} fontWeight={700} color="orange" >Всего 30 минут и Портер уже на месте. Опыт работы в Без опозданий!
               </Text>
               <Text textAlign="start" color="white" fontSize={18} fontWeight={400}  >Мы работаем 24/7</Text>
            </Box>
  
            </Flex> 
  
              {/* <Box> */}
               <Flex flexDirection="column" alignItems="center" gap={{lg:10,base:4}} p={{lg:10,base:5}} w={{lg:"400px",base:"100%"}}  borderRadius="10px" bg="white"  >
                  <Text textAlign="center" color="blue" fontSize={20} fontWeight={700}>Мы предоставляем самые выгодные условия для покупателей наших услуг.</Text>
              
                  <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                    <Button   cursor="pointer" bg="rgb(19, 242, 30)"  border="none" p="10px 20px" fontSize={14} borderRadius={30} color="white">{PHONE_NUMBER_557}</Button>
                  </Link>
               </Flex>
              {/* </Box> */}

              
            </Flex>
          </Box>
          </Container>
      </Box>
      
    );
};

export default End;