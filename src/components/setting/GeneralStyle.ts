import styled from "styled-components";

export const StyledDiv = styled.div`
  padding: 20px;
  padding-top: 0px;
`;
export const StyledHeader = styled.header`
  margin-bottom: 15px;
  p {
    opacity: 0.7;
  }
`;
export const StyledUl = styled.ul`
  h4 {
    margin-bottom: 10px;
  }
  li {
    position: relative;
    padding: 10px;
    border-bottom: 1px solid #ededed;
    &:nth-of-type(1) {
      border-top: 1px solid #ededed;
    }
    label {
      opacity: 0.9;
      cursor: pointer;
      &.active {
        .viewCtr {
          background: #4cbf3f;
          .btn {
            left: 55%;
          }
        }
      }
      .viewCtr {
        display: flex;
        position: absolute;
        top: 12px;
        right: 7px;
        border-radius: 15px;
        width: 35px;
        height: 20px;
        background: rgba(255, 255, 255, 0.25);
        input {
          opacity: 0;
        }
        span {
          position: absolute;
          top: 4px;
          left: 4px;
          width: 12px;
          height: 12px;
          background: #ffffff;
          border-radius: 10px;
          transition: 0.3s;
        }
      }
    }
  }
`;
