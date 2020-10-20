import styled from "styled-components";

export const StyledDiv = styled.div`
cursor : pointer;
padding-left: 20px;
display: flex;
align-items: center;
/* background:pink; */
.linkWrapper {
  background:yellow;
  position:relative;
.links {
  background:blue;
  opacity : .8;
  &:hover {
    opacity:1;
  }  
}
.icon {
    opacity:1;
    font-size : 1.2rem;
    margin-left: 15px;
    background:green;
    position:absolute;
    top:3px;
  }
}
.inputWrapper {
  margin-left:10px;
  /* background:red; */
  height:40px;
  display: flex;
  align-items: center;
  border-bottom:2px solid transparent;
  /* opacity : 0; */
  &:hover {
  border-bottom:2px solid #ffffff;
  opacity : .8;
  }
  input {    
    background:transparent;
    background:yellow;
    border:none;
    outline:none;
    width:200px;
    height : 30px;
    padding-left:30px;
  }
 .googleBtn {
    padding:5px;
  }
}
`;
