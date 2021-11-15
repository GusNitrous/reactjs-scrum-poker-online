import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useStyles} from "./HeaderStyles";
import {useHistory} from "react-router-dom";
import {isLoggedIn} from "../../utils/auth";

/**
 * Header component
 */
export default function Header(props) {
    const classes = useStyles();
    const history = useHistory();
    const isAuth = isLoggedIn();
    const {title, render: renderButtons} = props;

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
                {renderButtons({isAuth, history})}
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};
