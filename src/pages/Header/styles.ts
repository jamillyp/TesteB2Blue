import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 30px 50px 30px 50px;
    color: #fff;
    background-color: #2aabe1;
`;

export const Image = styled.img`
    width: 15%;
    cursor: pointer;
    text-align: center;

    @media(max-width: 1380px) {
        width: 25%;
    }
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;