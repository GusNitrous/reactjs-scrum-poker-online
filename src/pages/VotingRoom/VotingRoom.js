import React, {Component} from 'react';
import {Button, Container, TextField} from '@material-ui/core';
// import {getSocket} from '../../utils/ws';
// import {CREATE_ROOM, ROOM_CREATED, EXCEPTION, JOIN_USER, USER_JOINED, USER_JOINED_TO_ROOM, RECEIVE_MESSAGE, SEND_MESSAGE} from '../../constants/ws-events';
// import { MissingAuthDataError } from '../../errors/missing-auth-data.error';
import {UNAUTHORIZED} from '../../constants/http-status';
import {clearAuthData, isLoggedIn} from '../../utils/auth';
import {withStyles} from "@material-ui/core/styles";
import {VotingRoomStyles} from "./VotingRoomStyles";
import {Redirect, withRouter} from "react-router-dom";

/**
 * VotingRoom page component.
 */
class VotingRoom extends Component {
    state = {
        isLoading: false,
        createdRoom: '',
        joinedRoom: '',
        roomId: '',
        message: '',
        error: {},
    };

    handleException = (err) => {
        if (err.status === UNAUTHORIZED) {
            clearAuthData();
            this.props.history.replace('/auth');
        } else {
            console.log(err);
        }
    }

    setMessage = (message) => {
        this.setState({message});
    }

    sendMessage = () => {
        const {createdRoom, joinedRoom} = this.state;
        const roomId = createdRoom || joinedRoom;
        // socket().emit(SEND_MESSAGE, {roomId, message});
    }

    renderSendMessage = () => {
        const {message} = this.state;
        const {classes} = this.props;
        return <div>
            <TextField
                value={message}
                onInput={(e) => this.setMessage(e.target.value)}
                variant="outlined"
                margin="normal"
                fullWidth
                id="message"
                label="Message"
                name="message"
            />
            <Button
                disabled={!message}
                type="submit"
                fullWidth
                variant="contained"
                onClick={this.sendMessage}
                className={classes.submit}
            >
                Отправить сообщение
            </Button>
        </div>
    }

    renderCreatedRoom = () => {
        const {createdRoom} = this.state;
        return <Container component="main" maxWidth="xs">
            <div>Созданная комната: {createdRoom}</div>
            <div>{this.renderSendMessage()}</div>
        </Container>
    }

    renderJoinedRoom = () => {
        const {joinedRoom} = this.state;
        return <Container component="main" maxWidth="xs">
            <div>Присоединение к комнате: {joinedRoom}</div>
            <div>{this.renderSendMessage()}</div>
        </Container>;
    }

    render() {
        const {location} = this.props;
        console.log('--- voting_room_location ---', this.props);

        if (!isLoggedIn()) {
            return <Redirect to={{
                pathname: '/auth',
                state: {referer: location?.pathname}
            }}/>;
        }

        const {createdRoom, joinedRoom} = this.state;
        if (createdRoom) {
            return this.renderCreatedRoom(createdRoom);
        }

        if (joinedRoom) {
            return this.renderJoinedRoom(joinedRoom);
        }

        return <h2>Нет созданных или присоединённых комнат</h2>
    }
}

export default withRouter(withStyles(VotingRoomStyles)(VotingRoom));
