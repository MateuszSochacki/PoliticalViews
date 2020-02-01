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
    background-color: #32cd32;
    color: white;
    padding: 16px;
    position: absolute;
    top: ${props => props.top}px;
    right: 16px;
    z-index: 999;
    transition: top 0.5s ease;
`;

const emit = new emitter();

export function notify(msg, isSuccess) {
    emit.emit('notification', msg, isSuccess);
}


export default class Notifications extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            top: -100,
            msg: '',
            isSuccess: false
        };

        this.timeout = null;

        emit.on('notification', (msg, isSuccess) => {
            this.onShow(msg, isSuccess)
        });

        this.showNotification = this.showNotification.bind(this);
        this.onShow = this.onShow.bind(this);
    }

    onShow(msg, isSuccess) {
        if(this.timeout) {
            clearTimeout(this.timeout);
            this.setState({top: -100}, () => {
                this.timeout = setTimeout(() => {
                    this.showNotification(msg, isSuccess);
                }, 500)
            })
        } else this.showNotification(msg, isSuccess);
    }

    showNotification(msg, isSuccess) {
        this.setState({
                top: 75,
                msg,
                isSuccess
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
                {this.state.isSuccess ? <Success top={this.state.top}>{this.state.msg}</Success>
                : <Error top={this.state.top}>{this.state.msg}</Error>}
            </React.Fragment>
        );
    }
}


