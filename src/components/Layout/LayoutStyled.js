import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const StyledLink = styled(NavLink)`
 text-decoration: none ;
 font-size: 20px;
 color:navy;

 &.active{
     color: orangered;
 }
`
export default StyledLink