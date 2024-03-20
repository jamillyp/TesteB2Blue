import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: white;

    width: 90%;
    padding: 20px;

    h2 {
        color: #1e7ab9;
    }

    @media(max-width: 1380px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
    height: 50px;
    background-color: #1e7ab9;

    p {
        color: #f1f1f1;
        text-align: center;
        padding-top: 15px;
        font-size: small;
    }
`;

export const ContentBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    margin-top: 50px;

    @media(max-width: 1380px) {
        margin-top: 0;
    }
`;