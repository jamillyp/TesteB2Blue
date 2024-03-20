import styled from "styled-components";

export const Container = styled.div`
    margin-top: 50px;
    background-color: white;
    height: 200px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);

    h5 {
        margin-bottom: 15px;
    }

    text-align: center;
    min-width: 400px;

    @media(max-width: 1380px) {
        min-width: 100px;
    }
`;

export const ContentButton = styled.div`
    margin-top: 32px;
    text-align: center;
`;