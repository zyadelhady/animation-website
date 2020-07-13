import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.bg};
  z-index: 50;
  a {
    font-size: 14rem;
    color: ${(props) => props.theme.colors.white};
    border-bottom: 3px solid ${(props) => props.theme.colors.white};
  }

  p {
    color: ${(props) => props.theme.colors.grey};
  }
`;
