import leftImage from '../../assets/left-header-img.svg'
import rightImage from '../../assets/right-header-img.svg'
import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={leftImage} alt="" />
      <img src={logo} alt="" />
      <img src={rightImage} alt="" />
    </HeaderContainer>
  )
}
