import styled from "styled-components";

export const StyledDiv = styled.div`
  cursor: pointer;
  padding-left: 20px;
  display: flex;
  align-items: center;
  position:absolute;
  top: 20px;
    left: 10px;
  .linkWrapper {
    position: relative;
    .links {
      /* background: blue; */
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
    .searchIcon {
      opacity: 1;
      font-size: 1.2rem;
      margin-left: 15px;
      /* background: green; */
      position: absolute;
      top: 3px;
      z-index:10;
    }
  }
  .inputWrapper {
    margin-left: 10px;
    height: 40px;
    display: flex;
    align-items: center;
    .form {
      position: relative;
      cursor : pointer;      
      opacity : 0;      
      &:hover {
        opacity : 0.8;
      }   
      &.style {
        opacity : 1;
      }
      input {
        outline:none;
        background: transparent;
        /* background: yellow; */
        border: none;
        outline: none;
        width: 200px;
        height: 30px;
        padding: 0 30px;
        &:focus {
        cursor : text;
      }
      }
      .underline {
        position: absolute;
        bottom : 0;
        left:0;        
        width: 100%;
        /* border-bottom: 2px solid blue;                */
      } 
      .toggledIcon {
        position: absolute;    
        right: 0px;
        bottom: 3px;
        padding: 0 5px;        
        .naverBtn {
          position: absolute;
          right: 0;
          bottom: 3px;
        }
      }    
  }
`;
