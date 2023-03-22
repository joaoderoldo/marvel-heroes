import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "@/assets/svgs/neural-med-logo.svg";
import { Container } from "@/components";
import { getInitialLetters } from "@/utils";

import { HeaderWrapper } from "./styles";

const userInfo = {
  name: "João Vitor",
  subtitle: "Teste de Front-end",
};

const Header = () => {
  return (
    <HeaderWrapper>
      <Container classes="header-container">
        <Link to="/">
          <Logo />
        </Link>
        <div className="user">
          <div className="user-content">
            <span className="name">{userInfo.name}</span>
            <div className="subtitle">{userInfo.subtitle}</div>
          </div>
          <div className="user-avatar">{getInitialLetters(userInfo.name)}</div>
        </div>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
