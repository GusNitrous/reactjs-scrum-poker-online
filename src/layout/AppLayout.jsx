import React from "react";
import Header from "./Header/Header";
import Container from "@material-ui/core/Container";
import Footer from "./Footer/Footer";
import {AppAlert} from "../components";
import {useStyles} from "./AppLayout.styles";


export function AppLayout({children, appName, description}) {
    const styles = useStyles();
    return <div className={styles.root}>
        <Header title={appName}/>
        <Container component="main" className={styles.container} maxWidth="md">
            {children}
        </Container>
        <Footer title={appName} description={description}/>
        <AppAlert/>
    </div>;
}
