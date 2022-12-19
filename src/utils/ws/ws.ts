import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';

import { IMessageEvent } from '../../common/types/message-type';
import { Nullable } from '../../common/types/nullable';
import { getJwtToken } from '../jwt/jwt';

let stompClient: Nullable<any> = null;

export const connect = (): void => {
  const socket = new SockJS(
    `https://${process.env.REACT_APP_HOST}/websocket/messages?access_token=${getJwtToken()?.replace(/"/g, '')}`,
  );

  stompClient = Stomp.over(socket, { protocols: ['v12.stomp'] });

  stompClient.connect(
    {},
    () => {
      console.log('Connected');

      stompClient?.subscribe('/topic/messages', (message: IMessageEvent) => {
        console.log(message); // JSON.parse()  await JSON
      });
    },
    (error: any) => {
      console.log(error);
    },
  );
};

export const disconnect = (): void => {
  if (stompClient !== null) stompClient.disconnect();
};

export const sendMessage = (message: any): void => {
  stompClient?.send('/websocket/messages', {}, JSON.stringify(message));
};
