import type { Metadata } from "next";

export const metadata: Metadata={
    title: "pagina de contacto",
    description: "Esta es mi pagina de los precios de los productos",
    keywords:["Next-js",
        "manuel Hernandez",
        "Programacion web",
        "sitemas computacionales"]
}

export default function Home() {
    return(
        <>
        <span className="text-7x1"> pagina de Pricing</span> 
        </>
    )    
}