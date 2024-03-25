import { Suspense } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Outlet } from 'react-router-dom';
import {Layout, Nav, NavItem, NavLinkStyle, NavList} from "./Layout.styled.js";

export const AppLayout = () => {
    return (
        <div>
            <header>
                <Layout>
                    <Nav>
                        <NavList>
                            <NavItem>
                                <NavLinkStyle to="/">Home</NavLinkStyle>
                            </NavItem>
                            <NavItem>
                                <NavLinkStyle to="/catalog">Catalog</NavLinkStyle>
                            </NavItem>
                            <NavItem>
                                <NavLinkStyle to="/favorite">Favorite</NavLinkStyle>
                            </NavItem>
                        </NavList>
                    </Nav>
                </Layout>
            </header>

            <main>
                <Suspense fallback={<></>}>
                    <Layout>
                        <Outlet />
                    </Layout>
                </Suspense>
            </main>

            <GlobalStyle />
        </div>
    );
};