
import ButtonWinx from '../ButtonWinx';
import LogoWinx from '../LogoWinx';
import styled from 'styled-components';

const HeaderWinx = styled.header`
    display: flex;
    justify-content: center;
    background-color: var(--black);
    justify-items:center;
    justify-content: space-between;
    padding: 15px 18px;
    border-bottom: 4px solid var(--mainColor);
    text-decoration: none;

    @media(max-width:780px){
        & > ${LogoWinx}{
            justify-content: center;
            text-align: center;
            height: 35px;
        }
        & > ${ButtonWinx}{
            
            margin-left:-18px;
            background-color: var(--mainColor);
            font-size: 22rem;
            font-weight: 500;
            width: 100vw;
            border: 0;
            bottom: 0;
            position: fixed;
            border-radius: 0;
            padding:20px;
            z-index:100;
            
        }
        
    }
    
`;

export default HeaderWinx;