import { NavLink, Outlet } from 'react-router-dom';

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
        <NavLink to="/">To Home page</NavLink>
        <NavLink to="/movies">To movies page</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
