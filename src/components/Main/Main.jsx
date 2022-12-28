import React from "react";
import styled from "styled-components";

import Goals from "./Goals";

const flexCenter = `
    // display: flex;
    // justify-content: center;
    // align-items: center;
`

////////////////////// MAIN //////////////////////
const MainContainer = styled.div`
    // height: 50vh;

    ${flexCenter}
`;

const Main = () => {
    return (
        <MainContainer>
            <Goals />
            {/* <div>Oh, hey Jonny what's up?</div> */}
        </MainContainer>
    );
};

export default Main;
