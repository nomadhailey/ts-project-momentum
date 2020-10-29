import styled from "styled-components";

export const StyledDiv = styled.div`
  cursor: pointer;
  padding-left: 20px;
  display: flex;
  align-items: center;
  /* background:pink; */
  .linkWrapper {
    background: yellow;
    position: relative;
    .links {
      background: blue;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
    .searchIcon {
      opacity: 1;
      font-size: 1.2rem;
      margin-left: 15px;
      background: green;
      position: absolute;
      top: 3px;
      z-index:10;
    }
  }
  .inputWrapper {
    margin-left: 10px;
    /* background:red; */
    height: 40px;
    display: flex;
    align-items: center;
    /* border-bottom: 2px solid transparent; */
    /* opacity : 0; */
    &:hover {
      /* border-bottom: 2px solid #ffffff; */
      /* opacity: 0.8; */
    }
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
        background: transparent;
        background: yellow;
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
        /* z-index: 1; */        
        width: 100%;
        /* border-bottom: 2px solid #fff; */
        border-bottom: 2px solid blue;               
      } 
      .toggledIcon {
        position: absolute;    
        right: 0px;
        bottom: 3px;
        padding: 0 5px;
        /* border: 1px solid black; */      
        .naverBtn {
          position: absolute;
          right: 0;
          bottom: 3px;
        }
      }    
  }
`;
