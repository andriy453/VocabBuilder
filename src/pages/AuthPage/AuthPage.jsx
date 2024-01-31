
import {
  WelcomePicture,
  WrapperMain,
  Text,
  WelcomeImg,
  PictureWrap,
  TextRegister,
} from "./AuthPage.stuled";

import { useParams } from "react-router-dom";
import Login from "../../components/Login/Login"
import Register from "../../components/Register/Register"

import illustrationMobile1x from '../../assets/illustration.png'
import illustrationMobile2x from '../../assets/illustration2x.png'

import illustrationDesktop1x from '../../assets/illustrationDesktop.png'
import illustrationDesktop2x from '../../assets/illustrationDesktop2x.png'

function AuthPage() {
  const { id } = useParams();
  return (
    <WrapperMain>
    {id === "login" && <Login id={id} />}
    {id === "register" && <Register id={id}/>}
    <PictureWrap id={id}>
      <WelcomePicture>
        <source
          srcSet={illustrationDesktop2x}
          media="(min-width: 1200px) and (min-resolution: 2dppx)"
        />
        <source
          srcSet={illustrationDesktop1x}
          media="(min-width: 1200px)"
        />
        <source
          srcSet={illustrationMobile2x}
          media="(max-width: 767px) and (min-resolution: 2dppx)"
        />
        <source srcSet={illustrationMobile1x} media="(max-width: 767px)" />
        <WelcomeImg src={illustrationMobile1x} alt="User" />
      </WelcomePicture>
      {id === "register" 
       ? (
        <TextRegister>Word · Translation · Grammar · Progress</TextRegister>
      ) : (
        <Text>Word · Translation · Grammar · Progress</Text>
      )}
    </PictureWrap>
  </WrapperMain>
  )
}

export default AuthPage