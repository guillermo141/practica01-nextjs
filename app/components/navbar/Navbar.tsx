import { React } from 'react'
import link  from "next/link";

const navItems=[
    {path:"/general/contact", 
    label:"Contactos"},
    {path:"/general/pricing", 
    label: "Precios"},
    {path:"/general/about", 
    label:"acerca de"},
]
export const Navbar = () => {
    return(
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

              <link  href="/" className="flex items-center" >

                <span> Home</span>

              </link>
              
              <div className="flex flex-1"></div>
              {
                navItems.map(navItem => (
                    <link
                    key={navItem.path}
                    href={navItem.path}
                    className="mr-2"
                    >
                        {navItem.label}
                    </link>
                ))
              }
            


              {/*esta no es la funcion ideal para navegacion pero funiona
              <a className="mr-2" href="/general/contact"> Contactos</a>
              <a className="mr-2" href="/general/pricing"> Precios</a>
              <a className="mr-2" href="/general/about"> acerca de </a>
              
               <link className="mr-2" href="/general/contact"> Contactos<link>
              <link className="mr-2" href="/general/pricing"> Precios</link>
              <link className="mr-2" href="/general/about"> acerca de <link>

              
              */}
        </nav>
    )
}