import React from 'react';
import styled from 'styled-components';
import emitter from 'event-emitter';

const Error = styled.div`
    background-color: #FF0000;
    color: white;
    padding: 16px;
    position: absolute;
    top: ${props => props.top}px;
    right: 16px;
    z-index: 999;
    transition: top 0.5s ease;
`;

const Success = styled.div`
    background-color: #14F22A;
    color: white;
    padding: 16px;
    position: absolute;
    top: ${props => props.top}px;
    right: 16px;
    z-index: 999;
    transition: top 0.5s ease;
`;

const emit = new emitter();

export function notify(msg) {
    emit.emit('notification', msg);
}


export default class Notifications extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            top: -100,
            msg: ''
        };

        this.timeout = null;

        emit.on('notification', (msg) => {
            this.onShow(msg)
        });

        this.showNotification = this.showNotification.bind(this);
        this.onShow = this.onShow.bind(this);
    }

    onShow(msg) {
        if(this.timeout) {
            clearTimeout(this.timeout);
            this.setState({top: -100}, () => {
                this.timeout = setTimeout(() => {
                    this.showNotification(msg);
                }, 500)
            })
        } else this.showNotification(msg);
    }

    showNotification(msg) {
        this.setState({
                top: 16,
                msg
            }, () => {
               this.timeout = setTimeout(() => {
                    this.setState({top: -100});
                }, 3000);
            }
        );
    }

    render() {
        return (
            <React.Fragment>
                <Error top={this.state.top}>Taki użytkownik już istnieje! </Error>
            </React.Fragment>
        );
    }
}


