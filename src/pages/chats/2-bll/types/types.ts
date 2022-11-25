import { IChatInfo } from '../../../../common/types/chat-types';
import { IPageData } from '../../../../common/types/page-types';

export interface IChats {
  chatList: IPageData<IChatInfo>;
}
