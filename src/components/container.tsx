import styled, { css } from 'styled-components';

interface Props {
  maxWidth?: number;
}

const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  height: 100%;
  max-width: 100%;

  ${(props: Props) =>
    css`
      width: ${props.maxWidth}px };
    `};
`;

Container.defaultProps = {
  maxWidth: 1000,
};

export default Container;
