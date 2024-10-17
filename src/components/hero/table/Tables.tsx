 
  import { CONTAINER_WIDTH } from '@/config/_variables.config';
  import React from 'react';
  import { Box, Button, Container, Flex,  Text,   } from '@chakra-ui/react';
import Link from 'next/link';
import { WHATSAPP_LINK_557 } from '@/app/admin/admin';
  
  
  const Tables = () => {
      return (
        <Box p="50px 0">
          <Container maxW={CONTAINER_WIDTH}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Text p={{lg:3,base:3}} fontWeight={700} borderRadius={6} w={{lg:"40%",base:"100%"}} textAlign="center" fontSize={{lg:30,base:20}} color="rgb(28, 19, 109)" bg="white" border="solid 2px rgb(19, 242, 30)">Стоимость услуг</Text>
            </Box>
            <Box mt={20} display="flex" justifyContent="center" alignItems={{lg:"start", base:"center"}} flexDirection={{lg:"row", base:"column"}} gap={10}>
              <Text textAlign={{lg:"start", base:"center"}} w={220} h={50} color="rgb(28, 19, 109)" fontSize={22} fontWeight={700} borderBottom="solid 2px orange">Цены на услуги</Text>
          
              <Box w="100%">

              <Flex border="solid 1px #cacaca" bg="rgb(212, 229, 245)" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>По городу часовая оплата</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>1 час = от 800 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Чон-Арык, Орто-Сай</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>1000 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" bg="rgb(212, 229, 245)" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>село.Кок - Жар</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>1000 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Военно - Антоновка</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>1000 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" bg="rgb(212, 229, 245)" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>ГЭС - 2</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>1000 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Лебединовка</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>1000 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" bg="rgb(212, 229, 245)" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Пригородная</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>1000 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Аэропорт Манас</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>3000 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" bg="rgb(212, 229, 245)" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Новопавловка</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>1000 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Байтик</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>2000 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" bg="rgb(212, 229, 245)" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Воронцовка</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>2000 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Услуга Грузчиков часовая оплата</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>350-400 сом (1 час)</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" bg="rgb(212, 229, 245)" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Сокулук, Кант</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>2500 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Беловодск, Аэропорт Манас</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>3000 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" bg="rgb(212, 229, 245)" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Кун-Туу, Мраморное,Нижний СЭЗ</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>2000 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Арашан,Чон-Таш</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>2500 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" bg="rgb(212, 229, 245)" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Дордой , Джал, Ак-Ордо</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>1000 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Горная Маевка ,Мирное,Крас. Речка</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>3500 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" bg="rgb(212, 229, 245)" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Бирлик,Жаны-Жер, Джаны-Пахта, Виноградное, Васильевка, Асыл-Баш</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>3500 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

              <Flex border="solid 1px #cacaca" p={2} alignItems="center" justifyContent="space-between">
                <Text w="300px" color="black"  fontWeight={600} fontSize={16}>Беш-Кунгой,с.Джал, Маловодное, сов Ала-Тоо,Кой Таш,Байтик</Text>
                <Text textAlign={{lg:"start", base:"center"}} w="300px" color="orange" fontWeight={600} fontSize={18}>1500 сом</Text>
                <Link href={WHATSAPP_LINK_557} target={"_blank"}> 
                  <Button display={{lg:"flex", base:"none"}} cursor="pointer" bg="rgb(19, 242, 30)" border="none" p="5px 15px" fontSize={16} borderRadius="50px" color="white">Позвонить нам</Button>
                </Link>
              </Flex>

            </Box>

            </Box>
          </Container>
        </Box>
      );
  };
  
  export default Tables;

 
             
       


