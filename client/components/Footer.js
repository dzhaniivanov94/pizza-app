import styles from "../styles/Footer.module.css";
import Image from "next/image";


const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" layout="fill" alt="" objectFit="cover" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        WELL BAKED SLICE OF PIZZA!
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        FIND OUR RESTAURANTS
                    </h1>
                    <p className={styles.text}>
                        1654 R. Don road #304.
                        <br />New York , 85022
                        <br /> +1 23 456
                    </p>
                    <p className={styles.text}>
                        1256 K. Laquite road #235.
                        <br />New York , 85022
                        <br /> +1 23 456
                    </p>
                    <p className={styles.text}>
                        1654 E. Erwin road #104.
                        <br />New York , 85022
                        <br /> +1 23 456
                    </p>
                    <p className={styles.text}>
                        1614 W. Carrol st #125.
                        <br />New York , 85022
                        <br /> +1 23 456
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br />9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br />12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
