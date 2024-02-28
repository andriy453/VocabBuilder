import {ContainerUser,ContainerSvg,UserSvg,UserText,SvgLogout,BtnLogOut} from './UserBar.stuled'
import sprite from '../../../assets/sprite.svg'
import { useDispatch } from "react-redux";
import {logout} from '../../../redux/Auth/operations'

function UserBar({userName,iconcolor,svg}) {
  const dispatch = useDispatch();
  return (
    <ContainerUser>
    <UserText iconcolor={iconcolor}>{userName}</UserText>
  <ContainerSvg iconcolor={iconcolor}>
  <UserSvg  iconcolor={iconcolor}>
      <use href={`${sprite}#icon-gridicons_user`} />
    </UserSvg>
  </ContainerSvg>
<BtnLogOut svg={svg} onClick={()=>dispatch(logout())}>
<SvgLogout >
      <use href={sprite + '#icon-log-in-01'} ></use>
    </SvgLogout>
</BtnLogOut>
  </ContainerUser>
  )
}

export default UserBar;