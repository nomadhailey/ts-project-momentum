import styled from "styled-components";

const GlobalContainer = styled.div`
  background: url(https://source.unsplash.com/collection/9585833/1600x900/daily);
  background-size: cover;
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
    /* border: 1px solid red; */
  }
  .hidden {
    display: none;
  }
  .a11yHidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
`;
export const Header = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: relative;
  /* background: pink; */
`;
export const Main = styled.div`
  margin: 0 auto;
  height: 225px;
  width: 100vw;
  text-align: center;
  /* border: 1px solid blue; */
  color: white;
`;
export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  position: relative;
  height: 50px;
`;
export default GlobalContainer;
