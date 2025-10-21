import Link from "next/link";
import MainHeaderBackground from "@/components/main-header/main-header-brackground";
import logiImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from "next/image";


export default function MainHeader() {
    return <>
        <MainHeaderBackground/>
        <header className={classes.header}>
            <Link className={classes.logo} href='/public'>
                <Image src={logiImg} alt="A plate with food on it." priority/>
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href='/meals'>Browse Meals</Link>
                    </li>
                    <li>
                        <Link href='/community'>Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
}