import React from 'react'
import { FooterSimple } from './FooterSimple'
import { HeaderResponsive } from './HeaderResponsive'

const Layout = ({ children }: any) => {
    return (
        <>
            <HeaderResponsive links={[{
                link: "/",
                label: "Startseite"
            },
            {
                link: "/personal",
                label: "Personal"
            },
            {
                link: "/produktionsleitung",
                label: "Produktionsleitung"
            },
            {
                link: "/lagerwesen",
                label: "Lagerwesen"
            }]} />
            <main>{children}</main>
            <FooterSimple links={[
                {
                    "link": "/impressum",
                    "label": "Impressum"
                },
            ]} />
        </>
    )
}

export default Layout