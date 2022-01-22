/* styling Header components */
import styled from "styled-components";



/* Component styling goes here */
export const Wrapper = styled.div`
    background: var(--greyBlue);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;

export const VocabLogo = styled.img`
    width: 150px;

    /* For mobile, if width < 500px -> set image width to 150px*/
    @media screen and (max-width: 500px){
        width: 100px;
    }
`;