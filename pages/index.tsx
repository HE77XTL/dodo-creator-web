import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import * as React from "react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <h2>this is home page</h2>
        <main>
            <Link href="/login">
                <button className="ui-button">to login</button>
            </Link>
        </main>

    </div>
  )
}

export default Home
