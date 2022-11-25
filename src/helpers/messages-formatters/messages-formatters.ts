export const lastMessageFormatter = (lastMessage: string): string => {
  const messageCharacterLimit: number = 40;
  const cleanMessage: string = cleanUpMessage(lastMessage);

  if (lastMessage.length > messageCharacterLimit) {
    return `${cleanMessage.split('').splice(0, messageCharacterLimit).join('')}...`;
  }

  return lastMessage;
};

export const cleanUpMessage = (message: string): string => {
  return message.replace(/ +/g, ' ').trim();
};
