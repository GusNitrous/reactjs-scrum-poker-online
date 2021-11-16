import {Avatar, Button, Container, CssBaseline, TextField, Typography} from '@material-ui/core';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {withStyles} from '@material-ui/core/styles';
import React, {Component} from 'react';
import * as AuthAPI from '../../rest-api/auth';
import LinearProgress from '@material-ui/core/LinearProgress';
import {BAD_REQUEST} from '../../constants/http-status';
import {isLoggedIn} from "../../utils/auth";
import {Redirect, withRouter} from "react-router-dom";
import {AuthStyles} from "./AuthStyles";

/**
 * Auth component.
 */
class Auth extends Component {
    state = {
        isLoading: false,
        userName: '',
        errors: {},
    };

    setIsLoading = (isLoading) => {
        this.setState({isLoading});
    }

    setUserName = (userName) => {
        this.setState({userName});
    }

    setErrors = (errors) => {
        this.setState({errors});
    }

    signIn = () => {
        const {history} = this.props;
        const {userName} = this.state;
        this.setIsLoading(true);
        AuthAPI.register(userName)
            .then(() => {
                const {location} = this.props;
                const path = location.state?.referer ?? '/quickstart';
                history.replace(path);
            })
            .catch((err) => {
                this.setIsLoading(false);
                if (err.status === BAD_REQUEST) {
                    this.setErrors({userName: err.data.message});
                }
            });
    };

    render() {
        console.log('--- auth_props ---', this.props);
        // Если пользователь авторизован, то сразу редиректим на quickstart
        if (isLoggedIn()) {
            return <Redirect to='/quickstart'/>;
        }

        const {classes} = this.props;
        const {errors, isLoading, userName} = this.state;
        return <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Card className={classes.card}>
                {isLoading && <LinearProgress/>}
                <CardContent>
                    <div className={classes.content}>
                        <Avatar className={classes.avatar}>
                            <SupervisedUserCircleRoundedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Авторизация
                        </Typography>
                        <TextField
                            error={!!errors.userName}
                            helperText={errors.userName}
                            value={userName}
                            onInput={(e) => this.setUserName(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="userName"
                            label="UserName"
                            name="userName"
                            autoFocus
                        />
                        <Button
                            disabled={!userName || isLoading}
                            type="buttom"
                            onClick={this.signIn}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Войти
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </Container>
    }
}

export default withRouter(withStyles(AuthStyles)(Auth));
