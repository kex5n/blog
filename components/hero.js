import styles from '../styles/hero.module.css'
import Image from 'next/image'
import cube from '../images/cube.jpg'

export default function Hero({ title, subtitle, imageOn = false }) {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.text}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                {imageOn && <figure> [画像] </figure>}
            </div>
            {imageOn && (
                <figure>
                    <Image src={cube} alt='' layout='responsive' priority placeholder='blur'/>
                </figure>
            )}
        </div>
    )
}