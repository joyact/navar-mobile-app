import styled from 'styled-components';

// webtoon list
export const WebtoonContainer = styled.div`
  display: inline-block;
  width: 38%;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 15px;
  }

  @media (min-width: 600px) {
    width: 28%;
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
  font-size: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    font-size: 17px;
    padding-right: 5px;
  }
`;
