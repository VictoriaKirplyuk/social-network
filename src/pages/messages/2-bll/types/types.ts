import { IMessageData } from '../../../../common/types/message-type';
import { IPageData } from '../../../../common/types/page-types';
import { IUserContent } from '../../../../common/types/user-types';

export interface IMessagesState {
  messageList: IPageData<IMessageData>;
  targetProfile: IUserContent;
}
