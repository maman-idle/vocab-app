import styled from "styled-components";

/* Use wrapper -> content -> misc. format */
export const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    background-color: var(--greyBlue);
    margin: auto;    
    width: 500px;
    h1{        
        text-align: center;
        color: var(--aliceBlue);
    }
`

export const Form = styled.form`
    width: 100%;
    margin: 35px 0;
    text-align: center ;
    
    label{        
        text-align: left;
        color: var(--darkBlue);
        display: block;
        margin: 5px 40px;
    }

    input[type=email]{
        display: block;
        width: 85%;    
        padding: 5px 5px;
        margin: 0 auto 25px;        
    }

    input[type=password]{
        display: inline-block;
        width: 85%;    
        padding: 5px 5px;
        margin: 0 auto 25px;
    }

    input[type=submit]{
        display: inline-block;
        width: 20%;
        padding: 5px 10px;
        margin-top: 15px;
        color: var(--darkBlue);
        background-color: var(--aliceBlue);
        border-radius: 20px;
        border: none;
        cursor: pointer;
    }

    input[type=submit]:hover{
        background-color: var(--aero);
    }
`

