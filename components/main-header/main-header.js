import Link from "next/link";
import MainHeaderBackground from "@/components/main-header/main-header-brackground";
import logiImg from '@/assets/logo.png';
import classes from './main-header.module.css';
import Image from "next/image";
import NavLink from "@/components/main-header/nav-link";

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
                        <NavLink href="/meals">
                            Browse Meals
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">
                            Foodies Community
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
}