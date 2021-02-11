import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuIcon } from '../icons';

// hamburger
export const Hamburger = styled(MenuIcon)`
  width: 25px;
  color: #555;
`;

// search box
export const InputBox = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #1fcf89;
  border-radius: 3px;
  padding-left: 12px;
  box-sizing: border-box;

  &::placeholder {
    color: #dadada;
    font-size: 16px;
  }
`;

// webtoon list
export const WebtoonContainer = styled.div`
  display: inline-block;
  width: 38%;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const Image = styled.img`
  width: 100%;
  vertical-align: top;
  background: transparent;
  color: #41403e;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: 3px solid #41403e;

  & + ul {
    margin-top: 9px;
  }
`;

export const TextWrapper = styled.ul``;

export const Title = styled.li`
  font-size: 15px;
  font-weight: bold;
  color: #333;
  letter-spacing: -1px;
`;

export const Author = styled.li`
  margin-top: 4px;
  font-size: 14px;
  color: #797b84;
`;

export const RecommendTitle = styled.h3`
  padding: 15px 0;
  font-size: 14px;
  color: #797b84;
  border-top: 1px solid #eee;
`;

export const RecommendRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 10px;
    background-color: #eee;
  }

  &:last-child::after {
    opacity: 0;
  }
`;

export const ImgWrapper = styled.div`
  width: 25%;
  padding-right: 15px;
`;

export const WatchNow = styled.div`
  b {
    font-weight: bold;
  }

  margin-left: auto;
  font-size: 13px;
  line-height: 1.4;
  letter-spacing: -1px;
  color: #797b84;
`;

// webtoon links
export const LinkWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fafc;
  border-top: 1px solid #eee;
  cursor: pointer;
`;

export const WebtoonLink = styled.li`
  width: 33.33%;
  height: 45px;
  line-height: 45px;
  color: #777;
  text-align: center;
  font-size: 15px;
`;

// npay
export const PayWrapper = styled.div`
  padding: 18px 15px;
  border: 1px solid #03c75a;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  b {
    font-weight: bold;
  }
`;

export const StartPayText = styled.p`
  font-size: 15px;
  letter-spacing: -1px;
  color: #333;
`;

export const StartPayButton = styled.div`
  width: 20px;
  height: 20px;
  font-size: 16px;
  border-radius: 50%;
  background-color: #03c75a;
  color: #fff;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserPayText = styled.div`
  flex: 1;
  display: block;
  font-size: 14px;
  color: #888;
  letter-spacing: -1px;
  p {
    margin-top: 6px;
    color: #333;

    b {
      font-size: 20px;
    }
  }
`;

export const UserPayButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 15px;
  border-radius: 20px;
  background-color: #09b65a;
  cursor: pointer;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: bold;
  padding-right: 8px;
  color: #fff;
  outline: none;
  position: relative;

  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.5px;

  &:last-child {
    padding-right: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 4px;
    width: 1px;
    background-color: #fff;
    opacity: 0.5;
  }

  &:last-child::after {
    opacity: 0;
  }
`;

// footer
export const FooterContainer = styled.div`
  padding: 60px 0;
  background: #eff2f8;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    margin-bottom: 13px;
  }

  @media (max-width: 500px) {
    margin: 0px -20px;
  }
`;

export const FooterLogoImage = styled.img`
  display: inline-block;
  margin-top: 15px;
  width: 80px;
  height: 15px;
`;
