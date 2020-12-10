import styled from 'styled-components';

const StyledTitle = styled.div`
  background: ${props => props.theme.backgroundColor};
  margin: 0px;

  h1, p{
    margin: 0;
  }
  h1:hover{
    color: blue;
  }
  h1:before, h1:after{
    content: "'";
    color: ${props => props.theme.accentColor};
  }
  p{
    text-shadow: 1px 1px ${props => props.theme.accentColor};
  }
`

export default StyledTitle;