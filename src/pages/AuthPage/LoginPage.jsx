import {
    WelcomePicture,
    WrapperMain,
    Text,
    WelcomeImg,
    PictureWrap,
  } from "./AuthPage.stuled";
  
  import Login from "../../components/Login/Login"
  
  import illustrationMobile1x from '../../assets/illustration.png'
  import illustrationMobile2x from '../../assets/illustration2x.png'
  
  import illustrationDesktop1x from '../../assets/illustrationDesktop.png'
  import illustrationDesktop2x from '../../assets/illustrationDesktop2x.png'

function LoginPage() {
  return (
    <WrapperMain>
      <Login id={"login"} />
    <PictureWrap id={"login"}>
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
        <Text>Word · Translation · Grammar · Progress</Text>
    </PictureWrap>
  </WrapperMain>
  )
}

export default LoginPage