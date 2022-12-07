import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';

import { Nullable } from '../../common/types/nullable';
import { getJwtToken } from '../jwt/jwt';

const handlers: Function[] = [];

let stompClient: Nullable<any> = null;

export const addHandler = (handler: Function): void => {
  handlers.push(handler);
};

export const connect = (): void => {
  const socket = new SockJS(
    `https://${process.env.REACT_APP_HOST}/websocket/messages?access_token=${getJwtToken()?.replace(/"/g, '')}`,
  );

  stompClient = Stomp.over(socket, { protocols: ['v12.stomp'] });

  stompClient.connect(
    {},
    () => {
      console.log('Connected');

      stompClient?.subscribe('/topic/messages', (messages: any) => {
        // handlers.forEach(handler => handler(JSON.parse(messages)));
        console.log(JSON.parse(messages));
      });
    },
    (error: any) => {
      console.log(error);
    },
  );
};

export const disconnect = (): void => {
  if (stompClient !== null) stompClient.disconnect();
  console.log('Disconnected');
};

export const sendMessage = (message: any): void => {
  stompClient?.send('/websocket/messages', {}, JSON.stringify(message));
};
