import { LoadingContainer } from "./styles";

import LoadingAnimation from "@/assets/gifs/heroe-loading.gif";

const Loading = () => {
  return (
    <LoadingContainer>
      <h1>Carregando</h1>
      <img src={LoadingAnimation} alt="Carregando" />
    </LoadingContainer>
  );
};

export default Loading;
