import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Button, Section, Icon, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FaWhatsapp } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Фабрика Рекламы "Мега" - FabricaMega
			</title>
			<meta name={"description"} content={"Рекламное агентство в Дагестане с 2007 года. "} />
			<meta property={"og:title"} content={"Фабрика Рекламы \"Мега\" - FabricaMega"} />
			<meta property={"og:description"} content={"Рекламное агентство в Дагестане с 2007 года. "} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/Vector.png?v=2023-11-13T14:30:01.768Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/favicon-32x32.png?v=2023-11-13T14:43:14.593Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/apple-icon-152x152.png?v=2023-11-13T14:43:26.555Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/apple-icon-152x152.png?v=2023-11-13T14:43:26.555Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/apple-icon-152x152.png?v=2023-11-13T14:43:26.555Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/apple-icon-152x152.png?v=2023-11-13T14:43:26.555Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/ms-icon-150x150.png?v=2023-11-13T14:43:42.846Z"} />
			<meta name={"msapplication-TileColor"} content={"#00E0FF"} />
		</Helmet>
		<Section padding="18px 0 18px 0" quarkly-title="Header" background="--color-lightD1">
			<Override slot="SectionContent" justify-content="space-around" flex-direction="row" align-items="center" />
			<Image
				src="https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/DagMega.png?v=2023-11-13T15:04:03.181Z"
				width="25%"
				height="auto"
				lg-max-width="150px"
				sm-width="50%"
				max-width="200px"
				max-height="80px"
				srcSet="https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/DagMega.png?v=2023-11-13T15%3A04%3A03.181Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/DagMega.png?v=2023-11-13T15%3A04%3A03.181Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/DagMega.png?v=2023-11-13T15%3A04%3A03.181Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/DagMega.png?v=2023-11-13T15%3A04%3A03.181Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/DagMega.png?v=2023-11-13T15%3A04%3A03.181Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/DagMega.png?v=2023-11-13T15%3A04%3A03.181Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/DagMega.png?v=2023-11-13T15%3A04%3A03.181Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Box
				display="flex"
				md-margin="0px 0px 15px 0px"
				sm-flex-direction="column"
				justify-content="flex-start"
				align-items="center"
				grid-gap="24px"
				sm-align-self="center"
				sm-justify-content="center"
				sm-align-content="center"
				sm-padding="16px 0px 32px 0px"
				sm-margin="0px 0px 0 0px"
			>
				<Box display="flex" grid-gap="8px" align-items="center" sm-font="normal 700 50px/1.2 --fontFamily-googleManrope">
					<Text margin="0px 0px 0px 0px" font="--base" color="--darkL1" sm-font="--headline4">
						Телефон:
					</Text>
					<Link
						href="tel:+79882931800"
						color="--darkL1"
						text-decoration-line="initial"
						font="normal 300 16px/1.5 --fontFamily-sans"
						display="block"
						margin="0px 0px 0px 0px"
						hover-color="#a78bfa"
						target="_blank"
						sm-font="--headline4"
						sm-text-decoration-line="underline"
					>
						+7 (988) 293-18-00
					</Link>
				</Box>
				<Box display="flex" grid-gap="8px" align-items="center">
					<Text margin="0px 0px 0px 0px" color="--darkL1" font="--base" sm-font="--headline4">
						E-mail:
					</Text>
					<Link
						href="mailto:dagmega@mail.ru?С сайта"
						color="--darkL2"
						text-decoration-line="initial"
						font="normal 300 16px/1.5 --fontFamily-sans"
						display="block"
						margin="0px 0px 0px 0px"
						hover-color="#a78bfa"
						target="_blank"
						sm-font="--headline4"
						sm-text-decoration-line="underline"
					>
						dagmega@mail.ru
					</Link>
				</Box>
			</Box>
			<Button
				display="flex"
				type="button"
				href="https://wa.me/79882931800"
				target="_blank"
				border-radius="300px"
				width="min-content"
				align-items="center"
				justify-content="center"
				font="normal 500 18px/1.5 --fontFamily-googleManrope"
				border-width="2px"
				background="rgba(0, 119, 204, 0)"
				border-style="solid"
				color="#000000"
			>
				Связаться
			</Button>
		</Section>
		<Section padding="60px 0 20px 0" quarkly-title="HeroBlock" min-height="min-content">
			<Text
				color="--dark"
				lg-font="normal 800 40px/1.2 &quot;Manrope&quot;, sans-serif"
				md-font="normal 800 28px/1.2 &quot;Manrope&quot;, sans-serif"
				margin="0px 0px 0px 0px"
				font="--headline1"
			>
				Будущее бренда начинается с нас: креативная реклама, которая работает.
			</Text>
			<Image
				max-height="600px"
				object-position="0% 80%"
				md-max-height="200px"
				src="https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_3.jpg?v=2023-11-13T15:20:31.931Z"
				width="100%"
				object-fit="cover"
				margin="32px 0px 0px 0px"
				srcSet="https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_3.jpg?v=2023-11-13T15%3A20%3A31.931Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_3.jpg?v=2023-11-13T15%3A20%3A31.931Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_3.jpg?v=2023-11-13T15%3A20%3A31.931Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_3.jpg?v=2023-11-13T15%3A20%3A31.931Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_3.jpg?v=2023-11-13T15%3A20%3A31.931Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_3.jpg?v=2023-11-13T15%3A20%3A31.931Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_3.jpg?v=2023-11-13T15%3A20%3A31.931Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Section>
		<Section padding="28px 0 74px 0" md-padding="28px 0 28px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="40%"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--headline2"
					color="--dark"
					lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
				>
					Наша философия
				</Text>
			</Box>
			<Box
				md-width="100%"
				empty-min-height="64px"
				empty-border-color="LightGray"
				padding="0px 0px 0px 10%"
				width="60%"
				display="flex"
				md-padding="0px 0px 0px 0px"
				md-margin="32px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--headline4"
					color="--dark"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					С 2007 года наше рекламное агентство с лёгкостью овладевает хаосом наружной рекламы, тканью городских ландшафтов. Мы не просто создаём объявления; мы вырабатываем стратегии, освещаем контекст и проникаем в эссенцию бренда.{" "}
				</Text>
			</Box>
		</Section>
		<Section padding="54px 0 74px 0" md-padding="30px 0 30px 0" background="--color-lightD2">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				padding="0px 16px 0px 0px"
				width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
			>
				<Text
					md-font="normal 600 18px/1.2 &quot;Manrope&quot;, sans-serif"
					md-margin="0px 0px 24px 0px"
					margin="0px 0px 48px 0px"
					font="--headline2"
					color="--dark"
					lg-font="normal 600 24px/1.2 &quot;Manrope&quot;, sans-serif"
				>
					Оборудование
				</Text>
			</Box>
			<Box
				padding="0px 0px 0px 16px"
				md-width="50%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
			>
				<Image
					object-fit="cover"
					width="100%"
					lg-min-height="390px"
					sm-min-height="221px"
					src="https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_2%20%281%29.jpg?v=2023-11-13T15:41:47.789Z"
					min-height="778px"
					object-position="23%"
					srcSet="https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_2%20%281%29.jpg?v=2023-11-13T15%3A41%3A47.789Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_2%20%281%29.jpg?v=2023-11-13T15%3A41%3A47.789Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_2%20%281%29.jpg?v=2023-11-13T15%3A41%3A47.789Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_2%20%281%29.jpg?v=2023-11-13T15%3A41%3A47.789Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_2%20%281%29.jpg?v=2023-11-13T15%3A41%3A47.789Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_2%20%281%29.jpg?v=2023-11-13T15%3A41%3A47.789Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_2%20%281%29.jpg?v=2023-11-13T15%3A41%3A47.789Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="33.333%"
				empty-min-width="64px"
				padding="32px 16px 0px 16px"
				md-width="50%"
				md-padding="32px 0px 0px 16px"
			>
				<Image
					lg-min-height="177px"
					src="https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_1.jpg?v=2023-11-13T15:41:47.785Z"
					min-height="353px"
					object-fit="cover"
					object-position="40% 0%"
					width="100%"
					max-width="400px"
					srcSet="https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_1.jpg?v=2023-11-13T15%3A41%3A47.785Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_1.jpg?v=2023-11-13T15%3A41%3A47.785Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_1.jpg?v=2023-11-13T15%3A41%3A47.785Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_1.jpg?v=2023-11-13T15%3A41%3A47.785Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_1.jpg?v=2023-11-13T15%3A41%3A47.785Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_1.jpg?v=2023-11-13T15%3A41%3A47.785Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_1.jpg?v=2023-11-13T15%3A41%3A47.785Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Image
				min-height="450px"
				object-fit="cover"
				object-position="40% 0%"
				src="https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_3%20%281%29%20%281%29.jpg?v=2023-11-13T16:43:41.144Z"
				width="66%"
				lg-min-height="225px"
				md-max-width="none"
				md-max-height="325px"
				sm-max-height="188px"
				srcSet="https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_3%20%281%29%20%281%29.jpg?v=2023-11-13T16%3A43%3A41.144Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_3%20%281%29%20%281%29.jpg?v=2023-11-13T16%3A43%3A41.144Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_3%20%281%29%20%281%29.jpg?v=2023-11-13T16%3A43%3A41.144Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_3%20%281%29%20%281%29.jpg?v=2023-11-13T16%3A43%3A41.144Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_3%20%281%29%20%281%29.jpg?v=2023-11-13T16%3A43%3A41.144Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_3%20%281%29%20%281%29.jpg?v=2023-11-13T16%3A43%3A41.144Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_3%20%281%29%20%281%29.jpg?v=2023-11-13T16%3A43%3A41.144Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Box
				padding="32px 0px 0px 16px"
				md-padding="32px 0px 0px 0px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-border-style="solid"
			/>
		</Section>
		<Section padding="60px 0 0px 0" quarkly-title="Statistics-7">
			<Box min-width="100px" min-height="100px" display="flex" md-flex-direction="column">
				<Box
					min-width="100px"
					min-height="100px"
					width="50%"
					md-width="100%"
					md-margin="0px 0px 50px 0px"
					sm-margin="0px 0px 35px 0px"
				>
					<Image
						src="https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_2.jpg?v=2023-11-13T15:41:47.780Z"
						display="block"
						width="auto"
						height="750px"
						max-width="100%"
						object-fit="cover"
						object-position="55% 50%"
						md-height="600px"
						sm-height="400px"
						srcSet="https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_2.jpg?v=2023-11-13T15%3A41%3A47.780Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_2.jpg?v=2023-11-13T15%3A41%3A47.780Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_2.jpg?v=2023-11-13T15%3A41%3A47.780Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_2.jpg?v=2023-11-13T15%3A41%3A47.780Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_2.jpg?v=2023-11-13T15%3A41%3A47.780Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_2.jpg?v=2023-11-13T15%3A41%3A47.780Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/65522efb8d4a0c0020269b43/images/Leonardo_Diffusion_XL_In_a_bustling_workshop_skilled_craftsmen_2.jpg?v=2023-11-13T15%3A41%3A47.780Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					width="50%"
					padding="0px 0px 0px 90px"
					display="flex"
					flex-direction="column"
					justify-content="center"
					lg-padding="0px 0px 0px 50px"
					md-width="100%"
					md-padding="0px 35px 80px 35px"
					sm-padding="0px 35px 0 35px"
				>
					<Text margin="0px 0px 10px 0px" color="#564aec" font="normal 400 20px/1.5 --fontFamily-sansHelvetica">
						Наша цель
					</Text>
					<Text margin="0px 0px 30px 0px" color="--dark" font="normal 700 40px/1.2 --fontFamily-sans" sm-font="normal 700 38px/1.2 --fontFamily-sans">
						Наша цель - быть лучшими в своем деле
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						font="--headline4"
						color="#75767d"
						sm-font="--headline4"
						md-font="--base"
					>
						Мы стремимся к тому, чтобы каждая реклама становилась неотъемлемой частью городской эстетики. Наша цель — не просто видимость, а влияние, которое оставляет след в сердцах и умах. С 2007 года мы творим не просто рекламу, а истории, которые переплетаются с жизнью.{"\n\n"}
					</Text>
					<Box
						min-width="100px"
						min-height="100px"
						margin="60px 0px 0px 0px"
						display="grid"
						grid-template-columns="repeat(2, 1fr)"
						grid-template-rows="repeat(2, 1fr)"
						lg-margin="50px 0px 0px 0px"
						md-margin="40px 0px 0px 0px"
						sm-grid-template-columns="1fr"
						sm-grid-template-rows="auto"
						sm-display="flex"
						md-display="flex"
					>
						<Box
							min-width="100px"
							min-height="80px"
							padding="0px 0px 0 15px"
							border-width="0 0 0 1px"
							border-style="solid"
							border-color="#d4d5db"
							margin="0px 0px 30px 0px"
						>
							<Text margin="0px 0px 0px 0px" font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
								24,000+
							</Text>
							<Text margin="15px 0px 0px 0px" color="#75767d" font="--headline4">
								Завершенных проектов
							</Text>
						</Box>
						<Box
							min-width="100px"
							padding="0px 0px 0 15px"
							border-width="0 0 0 1px"
							border-style="solid"
							border-color="#d4d5db"
							margin="0px 0px 30px 0px"
							min-height="80px"
						>
							<Text margin="0px 0px 0px 0px" font="normal 600 36px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
								16+
							</Text>
							<Text margin="15px 0px 0px 0px" color="#75767d" font="--headline4">
								Бесперебойной работы
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="54px 0 90px 0" overflow-x="hidden" overflow-y="hidden" background="--color-lightD2">
			<Override slot="SectionContent" />
			<Text
				margin="0px 0px 64px 0px"
				font="normal 800 50px/1.2 --fontFamily-googlePalanquinDark"
				color="--dark"
				lg-font="normal 600 24px/1.2 &quot;Manrope&quot;, sans-serif"
				md-font="normal 600 18px/1.2 &quot;Manrope&quot;, sans-serif"
				display="flex"
				sm-font="--headline3"
			>
				Примеры работ
			</Text>
			<Components.QuarklycommunityKitCarousel
				showLink={false}
				max-width="500px"
				autoPlayIntervalProp="5s"
				overflow-x="visible"
				showHead={false}
				showText={false}
				showDots={false}
				showArrows={false}
				overflow-y="visible"
				autoPlay
				slidesProp="3"
			>
				<Override slot="Slide Head 4">
					Ocean cruising
				</Override>
				<Override slot="Slide Image 7" src="https://images.unsplash.com/photo-1585911735226-1c39d1df845b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=534&q=80" />
				<Override slot="Slide Image 10" src="https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=540&q=80" />
				<Override slot="Slide Head 7">
					Private islands
				</Override>
				<Override slot="Slide Image 9" src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=550&q=80" />
				<Override
					slot="Slide Head"
					color="--dark"
					margin="0px 0px 0px 0px"
					font="600 24px/1.3 --fontFamily-googleManrope"
					lg-font="600 18px/1.3 --fontFamily-googleManrope"
					md-font="600 16px/1.3 --fontFamily-googleManrope"
					width="100%"
					text-align="left"
				>
					Вывеска "ТРОПИКИ"
				</Override>
				<Override slot="Slide Image 1" src="https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20WhatsApp%202022-06-11%20%D0%B2%2014.28.18.jpg?v=2023-11-13T15:41:47.862Z" />
				<Override slot="Slide Image 2" src="https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20WhatsApp%202022-06-03%20%D0%B2%2000.08.59.jpg?v=2023-11-13T15:41:47.783Z" />
				<Override slot="Slide Image 3" src="https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20WhatsApp%202022-10-12%20%D0%B2%2016.00.29%20%281%29.jpg?v=2023-11-13T15:57:07.587Z" />
				<Override slot="Slide Head 5">
					Food & Wine
				</Override>
				<Override slot="Slide Head 8">
					River cruising
				</Override>
				<Override slot="Slide Head 9">
					Safari & wildlife
				</Override>
				<Override slot="Slide Head 10">
					Spa & wellness
				</Override>
				<Override slot="Slide Image" padding="0px 35px 0px 0px" src="https://uploads.quarkly.io/65522efb8d4a0c0020269b43/images/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20WhatsApp%202022-09-30%20%D0%B2%2009.41.11.jpg?v=2023-11-13T15:41:47.799Z" />
				<Override
					slot="Slide Content"
					width="100%"
					padding="0px 35px 0px 0px"
					top="auto"
					bottom="-58px"
					display="flex"
					justify-content="flex-start"
				/>
				<Override slot="Slide Head 1">
					Adventures
				</Override>
				<Override slot="Slide Head 2">
					Beach vacations
				</Override>
				<Override slot="Slide Image 5" src="https://images.unsplash.com/photo-1595057083625-5e33c9372312?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=570&q=80" />
				<Override slot="Slide Head 3">
					Honeymoons
				</Override>
				<Override slot="Slide Image 4" src="https://images.unsplash.com/photo-1598737285721-29346a5c9278?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=559&q=80" />
				<Override slot="Slide Head 6">
					Luxury hotels & resorts
				</Override>
				<Override slot="Slide Image 6" src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=540&q=80" />
				<Override slot="Slide Image 8" src="https://images.unsplash.com/photo-1520587963533-65f1795bde61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=548&q=80" />
				<Override slot="Points" pointer-events="auto" />
			</Components.QuarklycommunityKitCarousel>
			<Button
				display="flex"
				margin="60px 0px 0px 0px"
				type="button"
				href="https://disk.yandex.ru/d/sNqhoB8soiTtcw"
				target="_blank"
				background="#008fa3"
				border-radius="300px"
				width="260px"
				align-items="center"
				justify-content="center"
				font="normal 500 18px/1.5 --fontFamily-googleManrope"
			>
				Посмотреть все работы
			</Button>
		</Section>
		<Section background="--color-darkL2" quarkly-title="Footer-19">
			<Box
				display="flex"
				justify-content="space-between"
				border-color="#232a44"
				md-flex-direction="column"
				align-items="center"
			>
				<Box
					display="flex"
					md-margin="0px 0px 15px 0px"
					sm-flex-direction="column"
					justify-content="flex-start"
					align-items="center"
					grid-gap="24px"
					sm-align-self="center"
					sm-justify-content="center"
					sm-align-content="center"
					sm-padding="16px 0px 32px 0px"
					sm-margin="0px 0px 0 0px"
				>
					<Box display="flex" grid-gap="8px" align-items="center" sm-font="normal 700 50px/1.2 --fontFamily-googleManrope">
						<Text margin="0px 0px 0px 0px" font="--base" color="white" sm-font="--headline4">
							Телефон:
						</Text>
						<Link
							href="tel:+79882931800"
							color="--light"
							text-decoration-line="initial"
							font="normal 300 16px/1.5 --fontFamily-sans"
							display="block"
							margin="0px 0px 0px 0px"
							hover-color="#a78bfa"
							target="_blank"
							sm-font="--headline4"
							sm-text-decoration-line="underline"
						>
							+7 (988) 293-18-00
						</Link>
					</Box>
					<Box display="flex" grid-gap="8px" align-items="center">
						<Text margin="0px 0px 0px 0px" color="white" font="--base" sm-font="--headline4">
							E-mail:
						</Text>
						<Link
							href="mailto:dagmega@mail.ru?С сайта"
							color="--light"
							text-decoration-line="initial"
							font="normal 300 16px/1.5 --fontFamily-sans"
							display="block"
							margin="0px 0px 0px 0px"
							hover-color="#a78bfa"
							target="_blank"
							sm-font="--headline4"
							sm-text-decoration-line="underline"
						>
							dagmega@mail.ru
						</Link>
					</Box>
				</Box>
				<Box
					display="flex"
					grid-template-columns="repeat(5, 1fr)"
					grid-gap="16px 24px"
					md-align-self="flex-start"
					sm-justify-content="center"
					sm-align-self="center"
				>
					<LinkBox href="https://wa.me/79882931800" target="_blank">
						<Icon
							category="fa"
							icon={FaWhatsapp}
							size="48px"
							color="#09ff00"
							hover-color="#a78bfa"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"614ce40335c5c8001f7746de"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});