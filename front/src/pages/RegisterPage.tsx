import React from 'react';
import styles from "./RegisterPage.module.css";

import {AuthPage} from "./AuthPage";

const RegisterPage: React.FC = () => {
    return (
        <>
            <div className={styles.SorryText}>
                К&nbsp;сожалению, регистрация на&nbsp;мероприятие закрыта
            </div>
            <AuthPage />
        </>
    );
}

export {RegisterPage};