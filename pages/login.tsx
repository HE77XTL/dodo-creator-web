import {NextPage} from "next";
import * as React from "react";
import styles from '../styles/Login.module.scss';
import PageHead from '../components/PageHead';


const Login: NextPage = () => {
    return <div className={styles.loginPage}>
        <PageHead/>
        <main className={styles.mainContent}>
            <div>
                <div>login form</div>
                <button className="ui-button">默认按钮</button>
            </div>
            <div>img</div>
        </main>
    </div>;
};
export default Login;
