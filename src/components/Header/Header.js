import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useStyles} from "./HeaderStyles";
import {history} from '../../utils/routing';
import {AuthButton} from "./AuthButton";
import {useStore} from "effector-react";
import {$authUser} from "../../models/auth";

/**
 * Header component
 */
export default function Header({title}) {
    const classes = useStyles();
    const authUser = useStore($authUser);

    console.log('--- authUser ---', authUser);

    const isLoggedIn = !!authUser?.userName;

    return (
        <React.Fragment>
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
                <AuthButton isAuth={isLoggedIn} history={history}/>
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};
