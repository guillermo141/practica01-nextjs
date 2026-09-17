import type { Metadata } from "next";

export const metadata: Metadata={
    title: "pricing page",
    descripcion: "Esta es mi pagina de los precios de los productos"
}


export default function Pricing() {
    return(
        <>
        <span className="text-7x1"> pagina de Pricing</span> 
        </>
    )    
}