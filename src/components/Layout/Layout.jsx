import { Outlet } from 'react-router-dom';
import StyledLink from './LayoutStyled';

// for styled
//  const StyledLink = styled(NavLink)`
// color:#212121
// &.active{
//     color: orangered;
// }
//`
export const Layout = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/">To Home page</StyledLink>
        <StyledLink to="/movies">To movies page</StyledLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
