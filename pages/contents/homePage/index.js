import Layout from '../../../components/Layout'
import styles from './homePage.module.css'
import { AddOutline, EnvironmentOutline } from 'antd-mobile-icons'
import swallow from '../../../public/images/swallow.jpg'
import tem from '../../../public/images/tem.jpg'
import { arrayBufferToBase64 } from '../../../utils/toBase64'
import { useEffect, useState } from 'react'
import socket from '../../../models/socket'

export default function homePage() {
	const wsUrl = "ws://47.109.50.153:5765/";
	const [img1,setImg1] = useState(null)
	const [temp, setTemp] = useState(null);
	const [hum, setHum] = useState(null);
	const [loc, setLoc] = useState(null);

	useEffect(() => {
		const websocket = new WebSocket(wsUrl);
		websocket.onopen = (evt) => {
			console.log('open')
			console.log(evt.data)
		};
		websocket.onclose = () => {
			console.log('close')
		};

		websocket.onerror = () => {
			console.log('error')
		}
		websocket.binaryType = "arraybuffer";
		websocket.onmessage = (event) => {
			console.log('shoudao')
			let url = arrayBufferToBase64(event.data);
			setImg1('data:image/jpeg;base64,' + url)
		};
		let timer = setInterval(() => {
			socket.emit('getData', '1', (res) => {
				console.log('res= ', res)
				setHum(res.data.hum)
				setTemp(res.data.tem)
				setLoc(res.data.loc)
				// if (res.code === '200') {
				//     console.log(res.data);
				// }
			})
		}, 1000)
		return () => {
			clearInterval(timer)
		}
	}, []);

	return (
		<Layout>
			<div className={`com-layout-container ${styles.container}`}>
				<div className={`${styles.live}`}>实况 <span className={`${styles.spot}`}></span> Live</div>
				<div className={`${styles.title}`}>
					燕归巢 <span className={`${styles.spot}`}></span> 认养一个巢
					<div className={`${styles.add}`}><AddOutline /></div>
				</div>
				<div style={{fontSize:'0.13rem'}}>实时影像</div>
				<img loading="lazy" className={`${styles.img}`} src={(img1) ? img1: swallow.src} />
				<div className={`${styles.table}`}>
					<div className={`${styles.item}`}>
						<img className={`${styles.iconImg}`} src={tem.src} />
						<div>
							<p>温度</p>
							<p><span className={`${styles.num}`}>{temp}</span> ℃</p>
						</div>
					</div>
					<div className={`${styles.item}`}>
						<img className={`${styles.iconImg}`} src={tem.src} />
						<div>
							<p>湿度</p>
							<p><span className={`${styles.num}`}>{hum}</span>%</p>
						</div>
					</div>
					<div className={`${styles.item1}`}>
						<div className={`${styles.locicon}`}>
							<EnvironmentOutline fontSize={36} color={'rgb(8,141,230)'}/>
						</div>
						<div className={`${styles.loc}`}>
							<p>位置信息</p>
							<p><span className={`${styles.num}`}>{loc}</span></p>
						</div>
						<div></div>
					</div>
					{/* <div className={`${styles.item}`}>尽情期待</div> */}
				</div>
			</div>
		</Layout>
	)
}
