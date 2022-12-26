import React from "react";
import styled from "styled-components";

import Goals from "components/Goals";

const GridContainer = styled.div`
    // display: grid;
    // min-height: 100vh;
    // grid-tamplate-areas:
    //     "nav"
    //     "header"
    //     "main"
    //     "footer";
    // grid-template-columns: 1fr;
    // grid-template-rows: 50% 50%;
`;

////////////////////// NAV BAR //////////////////////
const NavContainer = styled.div`
    // grid-area: "nav";
    height: 10vh;

    background-color: #999;

    display: flex;
    justify-content: space-between;
`;

const flexCenter = `
    display: flex;
    justify-content: center;
    align-items: center;
`

 // ${flexCenter};

    // display: flex;
    // justify-content: center;
    // align-items: center;

const Title = styled.div`
    height: 100%;
    // width: 100px;
    overflow: hidden;
    // background-color: green;
    margin-left: 40px;

    ${flexCenter};

    img {
        height: 80%;
        border-radius: 50%;

        background-color: #ddd;

        // DELETE
        padding: 3px;
        border: 1px solid;

        :hover {
            cursor: pointer;
            background-color: #fff;
        }
      }
`;

// inspired by: https://www.w3schools.com/howto/howto_css_navbar_icon.asp

const Navbar = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    /////// DELETE!!!! ///////
    padding-right:100px;
`;

const NavbarItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    // margin-right: 50px;
    padding-left: 25px;
    padding-right: 25px;

    height: 100%;
    // :last-child{
    //     padding: 0;
    // }

    font-size: 18px;
    font-weight: 700;
    color: white;

    :hover {
        background-color: #000;
        cursor: pointer;
    }
`

const MainContainer = styled.div`
    // grid-area: "main";
`;


////////////////////// HEADER //////////////////////

const HeaderContainer = styled.div`
    height: 25vh;

    // flexbox
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ProfileContainer = styled.div`
    height: 100%;
    width: 200px;


    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ProfilePicture = styled.div`
    height: 50%;
    width: 100px;

    ${flexCenter}

    pointer-events: none;

    // add no text selection

    img {
        height: 100%;
        border-radius: 10%;
    }
`

const ProfileName = styled.div`
    margin-top: 5px;
    font-size: 20px;
`

const WhyContainer = styled.div`
    height: 100%;
    width: 100px;
`

const MyHabitsDesktop = () => {
    return (
       <GridContainer>
            <NavContainer>
                <Title>
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/5290/5290363.png" alt="MonkIcon"/> */}
                    <img src="./monkIcon.png" alt="MonkIcon"/>
                </Title>
                <Navbar>
                    <NavbarItem>NÁVYKY</NavbarItem>
                    <NavbarItem>MATERIÁLY</NavbarItem>
                    <NavbarItem>ZÁSADY</NavbarItem>
                    <NavbarItem>KALENDÁŘ</NavbarItem>
                    <NavbarItem>FAQ</NavbarItem>
                    <NavbarItem>SLACK</NavbarItem>
                    <NavbarItem>KONTAKTY</NavbarItem>
                </Navbar>
            </NavContainer>

            <HeaderContainer>
                <ProfileContainer>
                    <ProfilePicture>
                        <img src="./profile.jpeg" alt="MonkIcon"/>
                    </ProfilePicture>
                    <ProfileName>
                        Josef
                    </ProfileName>
                </ProfileContainer>

                <WhyContainer>
                    Oh, hi Mark!
                </WhyContainer>
            </HeaderContainer>

            <MainContainer>
                <Goals/>
            </MainContainer>
       </GridContainer>
    );
};

export default MyHabitsDesktop;
