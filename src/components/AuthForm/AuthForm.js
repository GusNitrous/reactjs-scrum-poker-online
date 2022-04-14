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
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import cx from 'clsx';


export const useStyles = makeStyles(({spacing}) => ({
    root: {
        marginTop: spacing(8),
        borderRadius: spacing(1)
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
        margin: spacing(2, 0, 2),
        transition: 'filter 250ms',
    },
    disabled: {
        opacity: '0.5'
    },
    avatar: {
        margin: 5,
        backgroundColor: '#6b74b1'
    },
}));

export const AuthForm = () => {
    const styles = useStyles();
    const shadowStyles = useOverShadowStyles();
    const { state } = useLocation();
    const { userName } = useStore($authForm);
    const {inputError} = useStore($authErrors);
    const isLoading = useStore(loginRequestFx.pending);
    const isDisabled = !userName || isLoading;

    const handleSubmit = (e) => {
        e.preventDefault();
        doLogin({userName, referrer: state?.referrer});
    }

    return <Card className={cx(styles.root, shadowStyles.root)}>
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
                        disabled={isDisabled}
                        form="authForm"
                        type="submit"
                        fullWidth
                        className={
                            isDisabled 
                            ? cx("MuiButton--gradient MuiButton--gradient-label", styles.submit, styles.disabled)
                            : cx("MuiButton--gradient MuiButton--gradient-label", styles.submit)
                        }
                    >
                        Login
                    </Button>
                </div>
            </form>
        </CardContent>
    </Card>
};
