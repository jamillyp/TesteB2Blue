import styled from "styled-components";

export const Container = styled.div`
    height: 150px;
    width: 100%;
    height: 100px;
    bottom: 0 !important;
    background: #F5F5F5;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    img {
        width: 10%;
        margin-left: 30px;
    }

    @media (max-height: 300px){
        position: relative;
        
    }

    @media (min-width: 1200px) {
        margin-top: 100px;
    }

    @media(max-width: 1380px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    background-color: #333;
`;

export const Content = styled.div`
    color: #c1c1c1;
    text-align: left;

   p {
        font-weight: 400;
        font-size: 14px;
    }

    @media(max-width: 1380px) {
        text-align: center;
        justify-content: center;
    }
`;