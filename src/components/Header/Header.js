import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useStyles} from "./HeaderStyles";
import {history, Routes} from '../../utils/routing';
import {AuthButton} from "./AuthButton";
import {useStore} from "effector-react";
import {$authUser, doLogout} from "../../models/auth";

/**
 * Header component
 */
export default function Header({title}) {
    const classes = useStyles();
    const authUser = useStore($authUser);
    const isLoggedIn = !!authUser?.userName;
    return (
        <>
            <Toolbar className={classes.toolbar}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>
                <AuthButton
                    isAuth={isLoggedIn}
                    onLogin={() => history.push(Routes.AUTH)}
                    onLogout={() => doLogout()}/>
            </Toolbar>
        </>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};
