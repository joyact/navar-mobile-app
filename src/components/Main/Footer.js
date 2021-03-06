import React from 'react';
import { HelpBar, HelpBarItem } from '../shared/HelpBar';
import { FooterContainer, FooterLogoImage } from './elements/Footer';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import logoFooter from '../../images/logo-footer.png';

function Footer() {
  const { user } = useUserContext();
  const { setUser } = useUserContext();
  const history = useHistory();

  const handleLogOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    history.replace('./');
  };

  return (
    <FooterContainer>
      <HelpBar center borderNone paddingNone>
        {user ? (
          <HelpBarItem text="로그아웃" onClick={handleLogOut} />
        ) : (
          <HelpBarItem to="/login" text="로그인" />
        )}
        <HelpBarItem text="전체서비스" />
        <HelpBarItem text="PC버전" />
      </HelpBar>
      <HelpBar center borderNone paddingNone>
        <HelpBarItem text="이용약관" />
        <HelpBarItem text="개인정보처리방침" />
        <HelpBarItem text="고객센터" />
      </HelpBar>
      <FooterLogoImage src={logoFooter} alt="푸터로고" />
    </FooterContainer>
  );
}

export default Footer;
