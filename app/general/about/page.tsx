import type { Metadata } from "next";

export const metadata: Metadata={
    title: "Contact About",
    descripcion: "Esta es la pagina acerca de nosostros...."
}

export default function contact() {
    return(
        <>
        <span className='text-7x1'>Pagina acerca de.</span>
        </>
    )
}