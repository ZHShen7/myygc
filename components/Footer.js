import { SmileOutline, UserOutline, CompassOutline } from 'antd-mobile-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './footer.module.css'


export default function Footer () {
	const pathname = useRouter().pathname;
	return (
		<div className={styles.container}>
			<Link href="/contents/homePage" className={styles.link}>
				<div className={styles.icon}>
					<SmileOutline fontSize={'.24rem'} color={(pathname==='/contents/homePage')?'green':'grey'}/>
					<p style={(pathname==='/contents/homePage')?{'color':'green'}:{'color':'grey'}}>我的巢</p>
				</div>
			</Link>
			<Link href="/contents/community" className={styles.link}>
				<div className={styles.icon}>
					<CompassOutline fontSize={'.24rem'} color={(pathname==='/contents/community')?'green':'grey'}/>
					<p style={(pathname==='/contents/community')?{'color':'green'}:{'color':'grey'}}>家燕社区</p>
				</div>
			</Link>
			<Link href="/contents/user" className={styles.link}>
				<div className={styles.icon}>
					<UserOutline fontSize={'.24rem'} color={(pathname==='/contents/user')?'green':'grey'}/>
					<p style={(pathname==='/contents/user')?{'color':'green'}:{'color':'grey'}}>用户主页</p>
				</div>
			</Link>
		</div>
	)
}
