import Layout from "../../../components/layout"
import { AddOutline, SearchOutline, TagOutline, HeartFill, MessageOutline } from 'antd-mobile-icons'
import styles from './community.module.scss'
import swallow1 from '/public/images/swallow1.jpeg'
import swallow from '/public/images/swallow.jpg'

export default function community() {
    return (
        <Layout>
            <div className={`com-layout-container ${styles.container}`}>
                <div className={`${styles.title}`}>燕归巢社区 <AddOutline className={styles.titleAddIcon} /></div>
                <div className={`${styles.search}`}>
                    <SearchOutline className={styles['search-icon']} color="#9ba19d" />
                    <input placeholder="请输入搜索内容" />
                </div>
                <div className={`${styles.hot}`}>
                    <p className={`${styles.hotName}`}>热门推荐</p>
                    <div className={`${styles.hotContent}`} >
                        <div className={`${styles.hotContentLeft}`} >
                            <img src={swallow1.src} />
                        </div>
                        <div className={`${styles.hotContentRight}`}>
                            <div><img src={swallow1.src} /></div>
                            <div><img src={swallow1.src} /></div>
                        </div>
                    </div>
                </div>
                <p className={`${styles['circle-title']}`}>燕友圈</p>
                <div className={`${styles['circle-content']}`}>
                    <div className={`${styles['content-title']}`}>
                        <img className={`${styles['content-logo']}`} src={swallow1.src} />
                        <div className={`${styles['content-info']}`}>
                            <p>小邓</p>
                            <p>2 minutes ago</p>
                        </div>
                        <TagOutline />
                    </div>
                    <div className={`${styles['swallow-img']}`}>
                        <img src={swallow.src} />
                    </div>
                    <div className={`${styles['circle-footer']}`}>
                        <div className={`${styles['circle-footer-left']}`}><HeartFill color="#99ce3f" />  1k</div>
                        <div className={`${styles['circle-footer-right']}`}>
                            <MessageOutline />
                            12
                            <span>comment</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
