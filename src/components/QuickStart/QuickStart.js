import React, {Component} from 'react';
import {
    Button,
    Card,
    CardContent,
    Container,
    CssBaseline,
    Divider,
    Grid,
    TextField,
    Typography
} from '@material-ui/core';
import {QuickStartStyles} from "./QuickStartStyles";
import {withStyles} from "@material-ui/core/styles";
import {createRoom, joinToRoom} from "../../models/room";
import {socketInit} from "../../models/ws";

/**
 * QuickStart page component.
 */
class QuickStart extends Component {
    state = {
        roomId: '',
    };

    componentDidMount() {
        console.log('--- quick_start_mount ---', this.props.socket);
        socketInit();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('--- quick_start_update ---', this.props.socket);
    }

    createRoom = () => {
        createRoom(this.props.socket);
    }

    joinToRoom = () => {
        joinToRoom({ws: this.props.socket, roomId: this.state.roomId});
    }

    setRoomId = (roomId) => {
        this.setState({roomId});
    }

    render() {
        const {roomId} = this.state;
        const {classes} = this.props;
        return <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Card>
                {/*{isLoading && <LinearProgress/>}*/}
                <CardContent>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Готовы начать голосование?
                        </Typography>
                        <Button
                            type="buttom"
                            onClick={this.createRoom}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Создать комнату
                        </Button>

                        <Grid
                            className={classes.splitter}
                            container
                            direction="row"
                            alignItems="center"
                            justifyContent="center">
                            <Grid item xs={3}>
                                <Divider/>
                            </Grid>
                            <Grid item xs={6} className={classes.middleText}>
                                Уже есть комната?
                            </Grid>
                            <Grid item xs={3}>
                                <Divider/>
                            </Grid>
                        </Grid>

                        <TextField
                            value={roomId}
                            onInput={(e) => this.setRoomId(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="roomId"
                            label="RoomId"
                            name="roomId"
                        />
                        <Button
                            disabled={!roomId}
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={this.joinToRoom}
                            className={classes.submit}
                        >
                            Присоединиться
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </Container>;
    }
}

export default withStyles(QuickStartStyles)(QuickStart);
