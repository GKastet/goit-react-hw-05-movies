import { Outlet } from 'react-router-dom';
import StyledLink, { NavStyled } from './LayoutStyled';

export const Layout = () => {
  return (
    <div>
      <NavStyled>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </NavStyled>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
