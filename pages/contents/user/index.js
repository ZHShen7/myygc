import Layout from "../../../components/Layout"
import swallow from '/public/images/swallow.jpg'
import { ScanningOutline, RightOutline, CalendarOutline, StarOutline, FileOutline, MailOutline } from 'antd-mobile-icons'
import styles from './user.module.scss'
import { useRouter } from 'next/router'


export default function user() {
	const router = useRouter()
	const { username } = router.query;
	return (
		<Layout>
			<div className={`com-layout-container ${styles.user}`}>				
				<div className={styles['user-title']}>燕归巢 <ScanningOutline /></div>
				<div className={styles['user-portrait']}><img loading="lazy" src={swallow.src} /></div>
				<div className={styles['user-name']}> {username}  <RightOutline /></div>
				<div className={styles['user-relevant']}>
					<div className={`${styles['user-relevant-g']} ${styles['user-relevant-item']}`}>
						<p>关注</p>
						<span>211</span>
					</div>
					<div className={`${styles['user-relevant-f']} ${styles['user-relevant-item']}`}>
						<p>粉丝</p>
						<span>30</span>
					</div>
					<div className={`${styles['user-relevant-z']} ${styles['user-relevant-item']}`}>
						<p>赞和收藏</p>
						<span>21122</span>
					</div>
				</div>
				<div className={styles['user-operation']}>
					<div className={styles['user-operation-item']}>
						<div className={styles['user-operation-left']}>
							<CalendarOutline />
							<span>签到</span>
						</div>
						<RightOutline className={styles['user-operation-left']} />
					</div>
					<div className={styles['user-operation-item']}>
						<div className={styles['user-operation-left']}>
							<StarOutline />
							<span>收藏</span>
						</div>
						<RightOutline className={styles['user-operation-left']} />
					</div>
					<div className={styles['user-operation-item']}>
						<div className={styles['user-operation-left']}>
							<FileOutline />
							<span>管理我 "认养" 的巢</span>
						</div>
						<RightOutline className={styles['user-operation-left']} />
					</div>
					<div className={styles['user-operation-item']}>
						<div className={styles['user-operation-left']}>
							<MailOutline />
							<span>邀请</span>
						</div>
						<RightOutline className={styles['user-operation-left']} />
					</div>
				</div>
			</div>
		</Layout>
	)
}
