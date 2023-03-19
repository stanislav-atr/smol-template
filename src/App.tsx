import React from 'react';
import styled from 'styled-components';

const Screen = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: #95DABB;
`;

const Splash = styled.img`
    height: 300px;
    width: 300px;
`;

const Container = styled.div`
    height: 95vh;
    display: flex;
    flex-flow: row-reverse wrap-reverse;
`;

export const App: React.FunctionComponent = () => (
    <>
        <Screen />
        <Container>
            <Splash src="join.svg" alt="Welcome" />
        </Container>
    </>
);
