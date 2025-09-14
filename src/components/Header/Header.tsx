import { FC } from "react";
import styles from "./Header.module.css"
import Link from "next/link";

const Header:FC = () => {
return (
    <div className={styles.Header}>
        <Link href={'/auth/login'}>login</Link>
    </div>
);}

export default Header;