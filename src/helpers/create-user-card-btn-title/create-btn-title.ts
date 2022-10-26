import { ProfileAttitude } from '../../enums';

export const createUserCardBtnTitle = (attitude: ProfileAttitude): string => {
  if (attitude === ProfileAttitude.NONE || attitude === ProfileAttitude.FRIEND_INCOMING) return 'Add friend';
  if (attitude === ProfileAttitude.FRIEND) return 'Delete friend';
  if (attitude === ProfileAttitude.FRIEND_OUTGOING) return 'You subscribed';

  return '';
};
