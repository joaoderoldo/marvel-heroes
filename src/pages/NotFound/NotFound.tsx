import { NotFoundContainer } from "./style";
import NotFoundImage from "@/assets/img/404.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img src={NotFoundImage} alt="Pagina não Encontrada" />
      <Link to="/">Voltar</Link>
    </NotFoundContainer>
  );
};

export default NotFound;
