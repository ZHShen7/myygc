import Layout from '../../../components/layout'
import styles from './homePage.module.css'
import { AddOutline } from 'antd-mobile-icons'
import swallow from '../../../public/images/swallow.jpg'
import tem from '../../../public/images/tem.jpg'

export default function homePage() {
	return (
		<Layout>
			<div className={`com-layout-container ${styles.container}`}>
				<div className={`${styles.live}`}>实况 <span className={`${styles.spot}`}></span> Live</div>
				<div className={`${styles.title}`}>
					燕归巢 <span className={`${styles.spot}`}></span> 认养一个巢
					<div className={`${styles.add}`}><AddOutline /></div>
				</div>
				<img className={`${styles.img}`} src={swallow.src} />
				<div className={`${styles.table}`}>
					<div className={`${styles.item}`}>
						<img className={`${styles.iconImg}`} src={tem.src} />
						<div>
							<p>温度</p>
							<p><span className={`${styles.num}`}>26</span> ℃</p>
						</div>
					</div>
					<div className={`${styles.item}`}>
						<img className={`${styles.iconImg}`} src={tem.src} />
						<div>
							<p>湿度</p>
							<p><span className={`${styles.num}`}>60</span>%</p>
						</div>
					</div>
					<div className={`${styles.item}`}>其他信息</div>
					<div className={`${styles.item}`}>尽情期待</div>
				</div>
			</div>
		</Layout>
	)
}
