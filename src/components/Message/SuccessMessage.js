import { MessageSuccesContainer } from './SuccessMessage.style';

export const SuccessMessage = ({ children }) => {
  return <MessageSuccesContainer className="success">{children}</MessageSuccesContainer>;
};
