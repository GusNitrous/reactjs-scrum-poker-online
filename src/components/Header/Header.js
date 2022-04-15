import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {history, Routes} from '../../utils/routing';
import {AuthButton} from "./AuthButton";
import {useStore} from "effector-react";
import {$authUser, doLogout} from "../../models/auth";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(({palette}) => {
    console.log(palette);
    
    return {
    root: {
        borderBottom: `1px solid ${palette.divider}`,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        background: 'linear-gradient(to right, #5175B4, #FF8383)',
        textFillColor: 'transparent',
        backgroundClip: 'text',
    }
}});

const Header = ({title}) => {
    const styles = useStyles();
    const authUser = useStore($authUser);
    const isLoggedIn = !!authUser?.userName;
    
    return <Toolbar className={styles.root}>
        <Container className={styles.header} maxWidth="md">
            <Typography
                component="h1"
                variant="h4"
                color="inherit"
                noWrap
                className={styles.title}
            >
                {title}
            </Typography>
            <AuthButton
                isAuth={isLoggedIn}
                onLogin={() => history.push(Routes.AUTH)}
                onLogout={() => doLogout()}/>
        </Container>
    </Toolbar>
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};



export default Header;
