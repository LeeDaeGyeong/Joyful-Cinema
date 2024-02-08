import styled from "styled-components";
import logo from "../../assets/image/logo.png";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <LogoImg src={logo} alt="Logo" />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LogoImg = styled.img`
  width: 300px;
  margin: 10px;
  cursor: pointer;
`;
