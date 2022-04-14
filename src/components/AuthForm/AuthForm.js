import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import CardContent from "@material-ui/core/CardContent";
import {Avatar, Button, TextField, Typography} from "@material-ui/core";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import {$authErrors, $authForm, doLogin, loginRequestFx, updateAuthForm} from "../../models/auth";
import Card from "@material-ui/core/Card";
import {useStore} from "effector-react";
import {useLocation} from "react-router";
import {makeStyles} from "@material-ui/core/styles";


export const useStyles = makeStyles(() => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: 5,
        backgroundColor: '#6b74b1'
    },
    submit: {
        margin: '2, 0, 2'
    },
}));

export const AuthForm = () => {
    const styles = useStyles();
    const { userName } = useStore($authForm);
    const { state } = useLocation();
    const isLoading = useStore(loginRequestFx.pending);
    const {inputError} = useStore($authErrors);

    const handleSubmit = (e) => {
        e.preventDefault();
        doLogin({userName, referrer: state?.referrer});
    }

    return <Card className={styles.root}>
        {isLoading && <LinearProgress/>}
        <CardContent>
            <form id="authForm" onSubmit={handleSubmit}>
                <div className={styles.content}>
                    <Avatar className={styles.avatar}>
                        <SupervisedUserCircleRoundedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Authorization
                    </Typography>
                    <TextField
                        error={!!inputError.userName}
                        helperText={inputError.userName}
                        value={userName}
                        onChange={(e) => updateAuthForm({
                            key: 'userName',
                            value: e.target.value
                        })}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label="UserName"
                        name="userName"
                        autoFocus
                    />
                    <Button
                        disabled={!userName || isLoading}
                        form="authForm"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={styles.submit}
                    >
                        Войти
                    </Button>
                </div>
            </form>
        </CardContent>
    </Card>
};
