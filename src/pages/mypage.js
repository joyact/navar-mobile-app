import React from 'react';
import { UserInfo, Navbar, Logout, InfoLinks } from '../components';
import { Container, PageWrapper } from '../globalStyles';

function MyPage() {
  return (
    <PageWrapper graybg>
      <Navbar />
      <UserInfo />
      <InfoLinks />
      <Container padding={{ tb: 20 }}>
        <Logout />
      </Container>
    </PageWrapper>
  );
}

export default MyPage;
