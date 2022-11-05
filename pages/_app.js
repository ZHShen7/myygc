import '../styles/globals.css'
import { useEffect } from 'react'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	const setHtmlFontSize = () => {
		const htmlWidth =
			document.documentElement.clientWidth || document.body.clientWidth;
		//1024 以下为移动端  
		if (htmlWidth <= 1024) {
			const htmlDom = document.getElementsByTagName("html")[0];
			htmlDom.style.fontSize = (htmlWidth / 375) * 100 + "px";
		}
	}
	useEffect(() => {
		setHtmlFontSize();
		window.onresize = function () {
			setHtmlFontSize();
		};
		return () => {
			window.onresize = null;
		}
	}, [])
	return <>
		<Head>
			<title>燕归巢</title>
		</Head>
		<Component {...pageProps} />
	</>

}

export default MyApp
