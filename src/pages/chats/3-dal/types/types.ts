import { IResponseError } from '../../../../common/types/api-types/error-types';
import { PageResponse } from '../../../../common/types/api-types/page-types';
import { IChat, IChatInfo } from '../../../../common/types/chat-types';

export type ChatsResponse = PageResponse<IChatInfo>;
export type ChatResponse = IChat & IResponseError;
