import LoadingAnimation from "@/assets/gifs/hero-loading.gif";

import { LoadingContainer } from "./styles";

const Loading = () => {
  return (
    <LoadingContainer>
      <h1>Carregando</h1>
      <img src={LoadingAnimation} alt="Carregando" />
    </LoadingContainer>
  );
};

export default Loading;
