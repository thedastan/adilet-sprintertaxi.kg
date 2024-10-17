import { PHONE_NUMBER_557, WHATSAPP_LINK_557 } from '@/app/admin/admin';
import { CONTAINER_WIDTH } from '@/config/_variables.config';
import { Box, Button, Container, Flex,  Text  } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { IoIosAdd } from 'react-icons/io';

const Price = () => {
    return (
         <>
         <Box
          backgroundImage="linear-gradient(to right, rgba(2, 0, 0, 0.604), rgba(2, 0, 0, 0.604)), url('https://images5.alphacoders.com/997/thumb-1920-997930.jpg')"
          color="black"
          bgSize="cover"
          bgPosition="center"
          // height="100vh" 
          width="100%"  
          >
        <Container maxW={CONTAINER_WIDTH}> 

          <Box p="20px 0" display="flex" gap={10} flexDirection="column" justifyContent="center" alignItems="center">
          <Text p={{lg:3,base:3}} fontWeight={700} borderRadius={6} w={{lg:"40%",base:"100%"}} textAlign="center" fontSize={{lg:30,base:20}} color="orange" bg="white" border="solid 2px orange">С нами - Выгодно!</Text>
          <Text textAlign="center" color="white" fontSize={{lg:20,base:16}}>Мы предоставляем самые выгодные условия для покупателей наших услуг.</Text>
  
           <Flex flexDirection={{lg:"row",base:"column"}} w="100%" justifyContent="center" alignItems={{lg:"start",base:"center"}} mt={20}>
            <Flex flexDirection="column" justifyContent="center" alignItems={{lg:"start",base:"center"}} gap={10}>
              <Text w={{lg:"70%",base:"100%"}}  display="flex" alignItems="start" gap={{lg:10,base:2}} color="white" fontSize={{lg:30,base:24}} fontWeight={700}><span style={{display:"flex", borderRadius:"50%", background:"rgb(19, 242, 30)", color:"white", padding:"8px", fontSize:"20px",marginTop:"6px"}}><IoIosAdd/></span>Лучшая цена на перевозку</Text>
  
              <Text w={{lg:"70%",base:"100%"}} display="flex" alignItems="start" gap={{lg:10,base:2}} color="white" fontSize={{lg:30,base:24}} fontWeight={700}><span style={{display:"flex", borderRadius:"50%", background:"rgb(19, 242, 30)", color:"white", padding:"8px", fontSize:"20px",marginTop:"6px"}}><IoIosAdd/></span>Внимание к пожеланием и просьбам</Text>
  
              <Text w={{lg:"70%",base:"100%"}} display="flex" alignItems="start" gap={{lg:10,base:2}} color="white" fontSize={{lg:30,base:24}} fontWeight={700}><span style={{display:"flex", borderRadius:"50%", background:"rgb(19, 242, 30)", color:"white", padding:"8px", fontSize:"20px",marginTop:"6px"}}><IoIosAdd/></span>Переезды без поэтажной оплаты</Text>
              
  
                <Flex flexDirection="column" gap={4} w="70%"  textAlign="center">
               <Text fontSize={26} fontWeight={600} color="rgb(14, 114, 213)">Быстрая подача спринтера</Text>
  
              <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
               <Text fontSize={32} fontWeight={700} color="orange" >{PHONE_NUMBER_557}</Text>
               </Link>
  
               </Flex>
  
            </Flex>
  
          <Box w={320} mt={{lg:0,base:20}}>
            <Box borderRadius="10px 10px 0 0" w="100%" bg="rgb(19, 242, 30)">
              <Text fontSize={16} fontWeight={600} textAlign="center"  color="black" p={5}>ЛЮБЫЕ УСЛУГИ ПО ПЕРЕВОЗКЕ! ДЕШЁВО, КАЧЕСТВЕННО, НАДЁЖНО! ПЕРЕЕЗДЫ ДОМОВ, ОФИСОВ</Text>
            </Box>
  
            <Box borderRadius="0 0 10px 10px" p={5}  display="flex" gap={10} flexDirection="column" justifyContent="center" alignItems="center" bg="white" w="100%">
              <Button cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="10px 20px" fontSize={18} borderRadius={30} color="white">996 557 901 912</Button>
              <Text color="black" fontSize={14} fontWeight={400}>Стаж мастера 7 лет</Text>
            </Box>
          </Box>
           </Flex>
          </Box>
          </Container>
      </Box>
  
      
      </>
    );
};

export default Price;