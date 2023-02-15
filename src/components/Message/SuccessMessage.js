import { MessageSuccesContainer } from './SuccessMessage.style';

export const SuccessMessage = () => {
  return (
    <MessageSuccesContainer className="success">
      <p>
        Nous avons bien reçu votre demande d&apos;inscription. Vous recevrez une réponse dans les
        plus bref délais.
      </p>
      <p>A très vite sur Cyrkl !</p>
    </MessageSuccesContainer>
  );
};
