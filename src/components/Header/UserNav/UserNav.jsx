import {StyledLink,NavContainer} from './UserNav.stuled'
import { useLocation  } from "react-router-dom";


function UserNav() {
  const location = useLocation();
  return (
    <NavContainer>
      <StyledLink to="/dictionary" activ={location.pathname === "/dictionary"  ? 'active' : ''}  >Dictionary</StyledLink>
      <StyledLink to="/recommend"  activ={location.pathname ===  "/recommend"  ? 'active' : ''} >Recommend</StyledLink>
      <StyledLink to="/training"  activ={location.pathname === "/training"  ? 'active' : ''} >Training</StyledLink>
    </NavContainer>
  )
}

export default UserNav