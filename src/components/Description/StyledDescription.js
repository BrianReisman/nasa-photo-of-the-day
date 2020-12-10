import styled from "styled-components";

const StyledDescription = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  footer {
    color: ${(props) => props.theme.accentColor};
    text-shadow: 2px;
    width: 20%;
  }
  div {
    width: 40%;
  }
  div:hover {
    font-size: 20px;
    width: 70%;
    }
  }
`;

export default StyledDescription;
