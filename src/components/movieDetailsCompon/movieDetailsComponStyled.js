import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieStyled = styled.div`
  display: flex;
  padding: 20px;

  img {
    display: block;
  }
  div {
    padding: 0 20px;
  }
`;
export const LinkStyled = styled(Link)`
  display: block;
  margin-left: 20px;
  padding: 10px;
  font-size: 18px;
`;
export default MovieStyled;
