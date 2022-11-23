import { IPageData } from '../../../../common/types/page-types';
import { IUserContent } from '../../../../common/types/user-types';

export interface IFriends {
  friendList: IPageData<IUserContent>;
}
