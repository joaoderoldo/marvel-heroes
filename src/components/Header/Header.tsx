import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "@/assets/svgs/neural-med-logo.svg";
import { Container } from "@/components";
import { getInitialLetters } from "@/utils";

import { HeaderWrapper } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper test-id="header-component">
      <Container classes="header-container">
        <Link to="/">
          <Logo test-id="logo-header-component" />
        </Link>
        <div className="user">
          <div className="user-content">
            <span className="name">João Vitor</span>
            <div className="subtitle">Teste de Front-end</div>
          </div>
          <div className="user-avatar">{getInitialLetters("João Vitor")}</div>
        </div>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
