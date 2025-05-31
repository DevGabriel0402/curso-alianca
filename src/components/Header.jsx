import { HeaderWrapper, Logo } from "@/styles/StyledComponents";
import CursoLogo from "@/assets/logo-transparent.png";

const Header = () => (
  <HeaderWrapper>
    <Logo>
      <img src={CursoLogo} alt="logo" />
    </Logo>
  </HeaderWrapper>
);

export default Header;
