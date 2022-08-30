import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { HeanderContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeanderContainer>
      <img src={logo} alt="logo" />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeanderContainer>
  )
}
