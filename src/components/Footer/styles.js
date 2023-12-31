import styled from 'styled-components';


export const FooterBase = styled.footer`
  font-size: 16rem;
  background: var(--black);
  border-top: 4px solid var(--mainColor);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
    font-size:12rem;
  }
`;
