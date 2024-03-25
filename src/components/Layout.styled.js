import styled from 'styled-components';
import {NavLink} from "react-router-dom";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 64px;
`;

export const Nav = styled.nav`
    &:after {
        display: block;
        content: "";
        width: 100%;
        border-bottom: 1px solid rgba(16, 24, 40, 0.2);
    }
`

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 24px;


`
export const NavItem = styled.li`
    padding: 12px 18px;
`
export const NavLinkStyle = styled(NavLink)`
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: var(--main);
    cursor: pointer;
    text-decoration: none;

    &.active {
        color: var(--button);
    }
`