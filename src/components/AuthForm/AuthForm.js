import LinearProgress from "@material-ui/core/LinearProgress";
import CardContent from "@material-ui/core/CardContent";
import {Avatar, Button, TextField, Typography} from "@material-ui/core";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import {$authErrors, $authForm, doLogin, loginRequestFx, updateAuthForm} from "../../models/auth";
import Card from "@material-ui/core/Card";
import React from "react";
import {useStyles} from "./AuthFormStyles";
import {useStore} from "effector-react";

/**
 * AuthForm.
 */
export const AuthForm = () => {
    const styles = useStyles();
    const { userName } = useStore($authForm);
    const isLoading = useStore(loginRequestFx.pending);
    const {inputError} = useStore($authErrors);

    return <Card className={styles.card}>
        {isLoading && <LinearProgress/>}
        <CardContent>
            <div className={styles.content}>
                <Avatar className={styles.avatar}>
                    <SupervisedUserCircleRoundedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Авторизация
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
                    type="button"
                    onClick={() => doLogin(userName)}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={styles.submit}
                >
                    Войти
                </Button>
            </div>
        </CardContent>
    </Card>
};
