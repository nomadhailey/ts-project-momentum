import React from "react";
import styled from "styled-components";

export const StyledDiv = styled.div`
  position: fixed;
  top: 60px;
  right: 15px;
  width: 400px;
  height: 178px;
  padding: 21px 21px 18px;
  border-radius: 5px;
  color: #ffffff;
  /* background: rgba(255, 255, 255); */
  background: #0f0f0fec;
  border: 1px solid black;
`;
export const Top = styled.div`
  background: pink;
  display: flex;
`;
export const Center = styled.div`
  background: orange;
  display: flex;
  font-size: 3rem;
  border-bottom: 1px solid #ffffff;
  i {
    margin: auto 0;
    margin-right: 10px;
  }
`;
export const Bottom = styled.div`
  ul {
    display: flex;
  }
`;
