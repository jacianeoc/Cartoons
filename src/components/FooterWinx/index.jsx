import styled from 'styled-components';
import LogoWinx from '../LogoWinx';

//isso tá aqui só para ocupar espaço mesmo porque era esse que eu 
//tava fazendo 
const FooterWinx = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: var(--black);
    text-align: center;
    font-size: 15rem;
    border-top: 4px solid var(--mainColor);
    color: var(--white);
    padding: 20rem;
    width: 100vw; 
    bottom:0;
    position: fixed;
    

    & > ${LogoWinx}{
        margin:0 auto;
        margin-bottom:10px;
        display:block;
        height: 20px;
    };

    
`;

export default FooterWinx;