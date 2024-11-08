import { CONTAINER_WIDTH } from "@/config/_variables.config";
import { Box,Heading, Button,Link, Container, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Script from "next/script"; // Импортируем Script из next/script
import React from "react";

const Home = () => {
	return (
		<>
			<Head>
				<title>Портер Такси Бишкек</title> {/* Добавьте заголовок, если это необходимо */}
				<meta name="description" content="Быстрый заказ грузовой. Ждем Вашего звонка." /> {/* Добавьте описание, если это необходимо */}
			</Head>
			{/* Используем компонент Script для загрузки Google Analytics */}
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-RTW7S775B0"
			/>
			<Script
				id="google-analytics"
				dangerouslySetInnerHTML={{
					__html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RTW7S775B0');
    `,
				}}
			/>
			<Box
				color="black"
				bgSize="cover"
				bgPosition="center"
				height="100vh"
				width="100%">
				<Container maxW={CONTAINER_WIDTH}>
				 <Box justifyContent='center' alignItems='center' mt='200px'>
					<Heading display='flex'> СПРИНТЕР ТАКСИ ПО БИШКЕКУ - <Link href='tel:+996700767575'> 0(700)767-575</Link></Heading>
					<Button><Link href='tel:+996700767575'>Быстрый звонок</Link></Button>
				 </Box>
				</Container>
			</Box>
		</>
	);
};

export default Home;
