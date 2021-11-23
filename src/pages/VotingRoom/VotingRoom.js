import React, {Component} from 'react';
import {Button, Container, TextField} from '@material-ui/core';
// import {getSocket} from '../../utils/ws';
// import {CREATE_ROOM, ROOM_CREATED, EXCEPTION, JOIN_USER, USER_JOINED, USER_JOINED_TO_ROOM, RECEIVE_MESSAGE, SEND_MESSAGE} from '../../constants/ws-events';
// import { MissingAuthDataError } from '../../errors/missing-auth-data.error';
import {isLoggedIn} from '../../utils/auth';
import {withStyles} from "@material-ui/core/styles";
import {VotingRoomStyles} from "./VotingRoomStyles";
import {withRouter} from "react-router-dom";
import {Routes} from "../../utils/routing";

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

    componentDidMount() {
        if (!isLoggedIn()) {
            this.redirectToAuth();
            return;
        }
        this.init();
    }

    init = () => {
        const {match} = this.props;
        // 1. Забираем room id к которому хотим подключиться
        const roomId = match.params.id;
        // 2. Пробуем подключаться к комнате с указанным id
        // Если подключиться не получается, то обрабатываем ошибку
        // Если подключение прошло успешно, то инициализируем интерфейс комнаты:
        // - загружаем состояние комнаты
        // - загружаем участников комнаты
        console.log('--- init_connection ---', this.props);
    }

    redirectToAuth = () => {
        const {history, location} = this.props;
        history.push(Routes.AUTH, {
            referer: location?.pathname
        });
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
