import styles from './footer.module.css'
import { SmileOutline, UserOutline, CompassOutline } from 'antd-mobile-icons'
import Link from 'next/link'
import { useState } from 'react'


export default function Footer(props) {

	const handleColor = (flag) => {
		if (flag){
			return 'green'
		}
		else{
			return 'grey'
		}
	}
	return (
		<div className={styles.container}>
			<Link href="/contents/homePage/homePage" >
				<div className={styles.icon}>
					<SmileOutline fontSize={'1.5rem'} color={handleColor(props.active==='homepage')}/>
					<p>我的巢</p>
				</div>
			</Link>
			<Link href="/contents/community/community">
				<div className={styles.icon}>
					<CompassOutline fontSize={'1.5rem'} color={handleColor(props.active==='community')}/>
					<p>家燕社区</p>
				</div>
			</Link>
			<Link href="/contents/user/user">
				<div className={styles.icon}>
					<UserOutline fontSize={'1.5rem'} color={handleColor(props.active==='user')}/>
					<p>用户主页</p>
				</div>
			</Link>
		</div>
	)
}
