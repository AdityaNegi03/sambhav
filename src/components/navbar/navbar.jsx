"use client"
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import logo from "./logo.png";
import Image from "next/image";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Events",
    url: "/events",
  },
  {
    id: 3,
    title: "News",
    url: "/news",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Donate",
    url: "/donate",
  },
];

const navbar = () => {
  return (
   
    <div className={styles.container}>
      <div className={styles.logo}>
      <Image src={logo} alt=""  />
      <Link href="/" className={styles.logotext}>    
       Sambhav Foundation
      </Link>
      </div>
     
      <div className={styles.links}>
      
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
       
      </div>
    </div>
  )
}

export default navbar