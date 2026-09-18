import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Page',
  description: 'Esta es la pagina de nosotros',
};

export default function contact() {
    return(
        <>
        <span className='text-7x1'>Pagina acerca de.</span>
        </>
    )
}