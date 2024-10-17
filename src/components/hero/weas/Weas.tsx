import { Box, Container, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

 
import image1 from "../../../assets/image copy 2.png"
import image2 from "../../../assets/image copy 3.png"
import image3 from "../../../assets/image.png"
import image4 from "../../../assets/image copy.png"
import { CONTAINER_WIDTH } from '@/config/_variables.config';



const Weas = () => {
    return (
        <Box bg="white" p="40px">
        <Container maxW={CONTAINER_WIDTH}> 

          <Flex flexDirection={{lg:"row",base:"column"}} gap={{lg:0,base:20}} color="black">
            <Box display="flex" gap={10} justifyContent="center" alignItems="center" flexDirection="column" textAlign="center">
              <Image width={150} height={150} src={image1} alt="" />
              <Text w="60%" textAlign="center">Всего 30 минут и Портер уже на месте.
              Опыт работы в Без опозданий!</Text>
            </Box>
  
            <Box display="flex" gap={10} justifyContent="center" alignItems="center" flexDirection="column" textAlign="center">
              <Image width={150} height={150} src={image2} alt="" />
              <Text w="60%" textAlign="center">Адекватная стоимость. Никаких дополнительных платежей.</Text>
            </Box>
  
            <Box display="flex" gap={10} justifyContent="center" alignItems="center" flexDirection="column" textAlign="center">
              <Image width={150} height={150} src={image3} alt="" />
              <Text w="60%" textAlign="center">Оперативность обслуживания. Мы всё надёжно упакуем и бережно доставим.</Text>
            </Box>
  
            <Box display="flex" gap={10} justifyContent="center" alignItems="center" flexDirection="column" textAlign="center">
              <Image width={150} height={150} src={image4} alt="" />
              <Text w="60%" textAlign="center">Приветливые диспетчеры, грузчики Безопасность и законность</Text>
            </Box>
          </Flex>
          </Container>
      </Box>
    );
};

export default Weas;