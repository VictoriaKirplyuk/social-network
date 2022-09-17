import { IResponseError } from '../../../../types/api-types/error-types/error-types';
import { PageResponse } from '../../../../types/api-types/page-types/page-types';

export type MessagesResponse = PageResponse<IMessageSuccess>;
export type MessageResponse = IMessageSuccess & IResponseError;

interface IMessageSuccess {
  id: number;
  type: string;
  sender: string;
  createAt: string;
  updateAt: string;
  isRead: true;
}
