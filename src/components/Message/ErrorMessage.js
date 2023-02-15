import { ErrorMessageContainer } from './ErrorMessage.style';

export const ErrorMessage = ({ children }) => {
  return <ErrorMessageContainer className="error">{children}</ErrorMessageContainer>;
};
