import { IResponseError } from '../../../../common/types/api-types/error-types';
import { PageResponse } from '../../../../common/types/api-types/page-types';
import { IMessageData } from '../../../../common/types/message-type';

export type MessagesResponse = PageResponse<IMessageData>;
export type MessageResponse = IMessageData & IResponseError;
