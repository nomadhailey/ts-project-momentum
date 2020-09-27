import styled from "styled-components";

const GlobalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  .emptySpace {
    width: 100vw;
    /* height: 17vh; */
    height: 150px;
    border: 1px solid red;
  }
`;
export const Header = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
`;
export const Main = styled.div`
  margin: 0 auto;
  height: 225px;
  width: 100vw;
  text-align: center;
  border: 1px solid blue;
  color: white;
`;
export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: green;
  padding: 10px 15px;
`;
export default GlobalContainer;
