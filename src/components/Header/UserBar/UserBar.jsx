import {ContainerUser,ContainerSvg,UserSvg,UserText} from './UserBar.stuled'
import sprite from '../../../assets/sprite.svg'

function UserBar({userName,iconcolor}) {
  return (
    <ContainerUser>
    <UserText iconcolor={iconcolor}>{userName}</UserText>
  <ContainerSvg iconcolor={iconcolor}>
  <UserSvg  iconcolor={iconcolor}>
      <use href={`${sprite}#icon-gridicons_user`} />
    </UserSvg>
  </ContainerSvg>
  </ContainerUser>
  )
}

export default UserBar;