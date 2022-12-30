import React from "react";
import styled from "styled-components";

// const allRows = [
//     {id: day: 0, }
// ];


const MainContainer = styled.div`
    margin-bottom: 100px;
`;

const GoalsContainer = styled.div`
    margin-top: 30px;
    margin-left: 100px;
    margin-right: 100px;

    // display: flex;
    // flex-direction: row;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    // justify-content: space-between;
    // justify-content: center;
`

const GoalItem = styled.div`
    // width: 150px;
    // margin-left: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    // letter-spacing: 3px;

    // outline: 1px solid red;

    border-right: 1px solid gray;
    border-top: 1px solid gray;
    border-bottom: 3px solid gray;

    :first-child{
        border-left: 1px solid gray;
        border-right: 2px solid gray;
        // margin-left: 100px;
    }
`

/////////////////////////// DAYS ///////////////////////////
const HabitContainer = styled.div`
    margin-left: 100px;
    margin-right: 100px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    // background-color: yellow;
    // outline: 0.5px solid gray;
`;

// `
// //     // background-color: green;
// // `

const DateContainer = styled.div`
    border-right: 2px solid gray;
    border-bottom: 1px solid gray;

    :first-child{
        border-left: 1px solid gray;
        // margin-left: 100px;
    }

    padding-left: 20px;
    // background-color: yellow;
    // font-size: 30px;

    display: flex;
    // justify-content: center;
`;
const DayNum = styled.div`
    // background-color: yellow;
    font-size: 30px;
    // font-weight: 500;
`;

const DayDate = styled.div`
    font-size: 16px;
    margin-left: 7px;
`;

const DayName = styled.div``

// const SecondRow = styled.div`
//     display: flex;
// `

const Date = styled.div`
    text-align: center;
`

const HabitBox = styled.div`
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;

    :first-child{
        border-left: 1px solid gray;
        // margin-left: 100px;
    }

    :hover {
        cursor: pointer
    }
`

const Goals = () => {
    
    // DELETE
    const allDays = [
        { day: 1, dateDay: 1, dateMonth: 2, dayName: 'Středa' },
        { day: 2, dateDay: 2, dateMonth: 2, dayName: 'Čtvrtek' },
        { day: 3, dateDay: 3, dateMonth: 2, dayName: 'Pátek' },
        { day: 4, dateDay: 4, dateMonth: 2, dayName: 'Sobota' },
        { day: 5, dateDay: 5, dateMonth: 2, dayName: 'Neděle' },
        { day: 6, dateDay: 6, dateMonth: 2, dayName: 'Pondělí' },
        { day: 7, dateDay: 7, dateMonth: 2, dayName: 'Úterý' },
        { day: 8, dateDay: 8, dateMonth: 2, dayName: 'Středa' },
        { day: 9, dateDay: 9, dateMonth: 2, dayName: 'Čtvrtek' },
        { day: 10, dateDay: 10, dateMonth: 2, dayName: 'Pátek' },
        { day: 11, dateDay: 11, dateMonth: 2, dayName: 'Sobota' },
        { day: 12, dateDay: 12, dateMonth: 2, dayName: 'Neděle' },
        { day: 13, dateDay: 13, dateMonth: 2, dayName: 'Pondělí' },
        { day: 14, dateDay: 14, dateMonth: 2, dayName: 'Úterý' },
        { day: 15, dateDay: 15, dateMonth: 2, dayName: 'Středa' },
        { day: 16, dateDay: 16, dateMonth: 2, dayName: 'Čtvrtek' },
        { day: 17, dateDay: 17, dateMonth: 2, dayName: 'Pátek' },
        { day: 18, dateDay: 18, dateMonth: 2, dayName: 'Sobota' },
        { day: 19, dateDay: 19, dateMonth: 2, dayName: 'Neděle' },
        { day: 20, dateDay: 20, dateMonth: 2, dayName: 'Pondělí' },
        { day: 21, dateDay: 21, dateMonth: 2, dayName: 'Úterý' },
        { day: 22, dateDay: 22, dateMonth: 2, dayName: 'Středa' },
        { day: 23, dateDay: 23, dateMonth: 2, dayName: 'Čtvrtek' },
        { day: 24, dateDay: 24, dateMonth: 2, dayName: 'Pátek' },
        { day: 25, dateDay: 25, dateMonth: 2, dayName: 'Sobota' },
        { day: 26, dateDay: 26, dateMonth: 2, dayName: 'Neděle' },
        { day: 27, dateDay: 27, dateMonth: 2, dayName: 'Pondělí' },
        { day: 28, dateDay: 28, dateMonth: 2, dayName: 'Úterý' },
        { day: 29, dateDay: 1, dateMonth: 3, dayName: 'Středa' },
        { day: 30, dateDay: 2, dateMonth: 3, dayName: 'Čtvrtek' },
        { day: 31, dateDay: 3, dateMonth: 3, dayName: 'Pátek' },
        { day: 32, dateDay: 4, dateMonth: 3, dayName: 'Sobota' },
        { day: 33, dateDay: 5, dateMonth: 3, dayName: 'Neděle' },
        { day: 34, dateDay: 6, dateMonth: 3, dayName: 'Pondělí' },
        { day: 35, dateDay: 7, dateMonth: 3, dayName: 'Úterý' },
        { day: 36, dateDay: 8, dateMonth: 3, dayName: 'Středa' },
        { day: 37, dateDay: 9, dateMonth: 3, dayName: 'Čtvrtek' },
        { day: 38, dateDay: 10, dateMonth: 3, dayName: 'Pátek' },
        { day: 39, dateDay: 11, dateMonth: 3, dayName: 'Sobota' },
        { day: 40, dateDay: 12, dateMonth: 3, dayName: 'Neděle' },
        { day: 41, dateDay: 13, dateMonth: 3, dayName: 'Pondělí' },
        { day: 42, dateDay: 14, dateMonth: 3, dayName: 'Úterý' },
        { day: 43, dateDay: 15, dateMonth: 3, dayName: 'Středa' },
        { day: 44, dateDay: 16, dateMonth: 3, dayName: 'Čtvrtek' },
        { day: 45, dateDay: 17, dateMonth: 3, dayName: 'Pátek' },
        { day: 46, dateDay: 18, dateMonth: 3, dayName: 'Sobota' },
        { day: 47, dateDay: 19, dateMonth: 3, dayName: 'Neděle' },
        { day: 48, dateDay: 20, dateMonth: 3, dayName: 'Pondělí' },
        { day: 49, dateDay: 21, dateMonth: 3, dayName: 'Úterý' },
        { day: 50, dateDay: 22, dateMonth: 3, dayName: 'Středa' },
        { day: 51, dateDay: 23, dateMonth: 3, dayName: 'Čtvrtek' },
        { day: 52, dateDay: 24, dateMonth: 3, dayName: 'Pátek' },
        { day: 53, dateDay: 25, dateMonth: 3, dayName: 'Sobota' },
        { day: 54, dateDay: 26, dateMonth: 3, dayName: 'Neděle' },
        { day: 55, dateDay: 27, dateMonth: 3, dayName: 'Pondělí' },
        { day: 56, dateDay: 28, dateMonth: 3, dayName: 'Úterý' },
        { day: 57, dateDay: 29, dateMonth: 3, dayName: 'Středa' },
        { day: 58, dateDay: 30, dateMonth: 3, dayName: 'Čtvrtek' },
        { day: 59, dateDay: 31, dateMonth: 3, dayName: 'Pátek' },
        { day: 60, dateDay: 1, dateMonth: 4, dayName: 'Sobota' },
        { day: 61, dateDay: 2, dateMonth: 4, dayName: 'Neděle' },
        { day: 62, dateDay: 3, dateMonth: 4, dayName: 'Pondělí' },
        { day: 63, dateDay: 4, dateMonth: 4, dayName: 'Úterý' },
        { day: 64, dateDay: 5, dateMonth: 4, dayName: 'Středa' },
        { day: 65, dateDay: 6, dateMonth: 4, dayName: 'Čtvrtek' },
        { day: 66, dateDay: 7, dateMonth: 4, dayName: 'Pátek' },
        { day: 67, dateDay: 8, dateMonth: 4, dayName: 'Sobota' },
        { day: 68, dateDay: 9, dateMonth: 4, dayName: 'Neděle' },
        { day: 69, dateDay: 10, dateMonth: 4, dayName: 'Pondělí' },
        { day: 70, dateDay: 11, dateMonth: 4, dayName: 'Úterý' },
        { day: 71, dateDay: 12, dateMonth: 4, dayName: 'Středa' },
        { day: 72, dateDay: 13, dateMonth: 4, dayName: 'Čtvrtek' },
        { day: 73, dateDay: 14, dateMonth: 4, dayName: 'Pátek' },
        { day: 74, dateDay: 15, dateMonth: 4, dayName: 'Sobota' },
        { day: 75, dateDay: 16, dateMonth: 4, dayName: 'Neděle' },
        { day: 76, dateDay: 17, dateMonth: 4, dayName: 'Pondělí' },
        { day: 77, dateDay: 18, dateMonth: 4, dayName: 'Úterý' },
        { day: 78, dateDay: 19, dateMonth: 4, dayName: 'Středa' },
        { day: 79, dateDay: 20, dateMonth: 4, dayName: 'Čtvrtek' },
        { day: 80, dateDay: 21, dateMonth: 4, dayName: 'Pátek' },
        { day: 81, dateDay: 22, dateMonth: 4, dayName: 'Sobota' },
        { day: 82, dateDay: 23, dateMonth: 4, dayName: 'Neděle' },
        { day: 83, dateDay: 24, dateMonth: 4, dayName: 'Pondělí' },
        { day: 84, dateDay: 25, dateMonth: 4, dayName: 'Úterý' },
        { day: 85, dateDay: 26, dateMonth: 4, dayName: 'Středa' },
        { day: 86, dateDay: 27, dateMonth: 4, dayName: 'Čtvrtek' },
        { day: 87, dateDay: 28, dateMonth: 4, dayName: 'Pátek' },
        { day: 88, dateDay: 29, dateMonth: 4, dayName: 'Sobota' },
        { day: 89, dateDay: 30, dateMonth: 4, dayName: 'Neděle' },
      ]

    const num_to_7 = [1, 2, 3, 4, 5, 6, 7];

    const ironHabits = ["Meditace", "Pohyb", "🚫 ALKOHOL"]

    return (
        <MainContainer>

            <GoalsContainer>
                <GoalItem>Den</GoalItem>

                {/* <GoalItem>Meditace</GoalItem>
                <GoalItem>Pohyb</GoalItem>
                <GoalItem>🚫 ALKOHOL</GoalItem> */}
                {ironHabits.map((hab) => (
                        <GoalItem className="pico">
                            {hab}
                        </GoalItem>
                    ))}


                <GoalItem>DOPROVODNÁ <br/> ZÁSADA 1</GoalItem>
                <GoalItem>DOPROVODNÁ <br/> ZÁSADA 2</GoalItem>
                <GoalItem>DOPROVODNÁ <br/> ZÁSADA 3</GoalItem>
                <GoalItem>POZNÁMKY</GoalItem>
            </GoalsContainer>
            
            {/* { day: 15, dateDay: 15, dateMonth: 2, dayName: 'Středa' }, */}

            {allDays.map((row) => (
                <HabitContainer>
                    <DateContainer>
                        <DayNum>{row.day}</DayNum>
                        <DayDate>
                            <DayName>{row.dayName}</DayName>
                            <Date>{row.dateDay + ". " + row.dateMonth}</Date>
                        </DayDate>
                    </DateContainer>

                    {num_to_7.map((row2) => (
                        <HabitBox>
                            {/* {row2} */}
                        </HabitBox>
                    ))}
                </HabitContainer>
            ))}

        </MainContainer>
    );
};

export default Goals;




// MODIFYING GOALS --> https://youtu.be/1ycsS_7e3R4?t=360 (6:00 -> 20:00)
// const GoalRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 45px;
//   :last-child {
//     margin-bottom: 0;
//   }
// `;
// const Name = styled.div`
//   text-transform: uppercase;
// `;
// const Action = styled.div`
//   display: flex;
//   align-items: center;
//   img {
//     max-width: 20px;
//     margin-right: 8px;
//   }
// `;

// const ErrorSection = styled.div`
//   color: red;
// `;

// const AllHabits = [ // AllGoals
//     {id: 0, name:"Doprovodná zásada 1"},
//     {id: 1, name:"Doprovodná zásada 2"},
//     {id: 2, name:"Doprovodná zásada 3"},
// ];

// {goalsList &&
//     goalsList
//       .slice()
//       .sort((a, b) => a.id - b.id)
//       .map((goal) => (
//         <GoalRow key={`goal-number-` + goal.id}>
//           <Name>{goal.name}</Name>
//           <Action>
//             <UpdateGoalButton goalID={goal.id} />
//             <DeleteGoalButton goalID={goal.id} goalName={goal.name} />
//           </Action>
//         </GoalRow>
//       ))}
