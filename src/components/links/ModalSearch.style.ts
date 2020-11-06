import styled from 'styled-components';

export const StyledDiv = styled.div`
background:rgba(255,255,255,0.98);
position:fixed;
color:#333;
top: 60px;
left: 215px;
padding:10px 0;
border-radius:5px;
box-shadow: 0 1px 8px rgba(0,0,0,.25);
&:before {
    content:'';
    position:absolute;
    width:0;
    height:0;
    bottom : 100%;
    right : 1.5em;
    border:.5rem solid transparent;
    border-top:none;
    border-bottom-color:#ffffff;
    background: transparent;
}
h3{
    font-size:.7rem;
    color:gray;
    font-weight:normal;
    padding-left:20px;
    padding-bottom:5px;
}
ul {
    li {
        cursor : pointer;
        padding : 5px 30px 5px 20px;
        border:1px solid red;
        &:hover {
            background:#ECECEC;
        }
        img {
            width : 18px;
            height : 18px;
        }
        span {
            margin-left:10px;
            background:yellow;
        }
    }
}

`;
