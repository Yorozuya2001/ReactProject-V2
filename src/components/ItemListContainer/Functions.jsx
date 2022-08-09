let productos = [
    {
        categoria: "procesadores", fabricante: "AMD", id: "A1", titulo: "Procesador AMD A6 7480 3.5GHz FM2+ Dual Core 65W", valor: 8000, imagen: "https://drive.google.com/uc?export=download&id=1X22hNBVa_SD2glo4RaPz8wRdf2FgtB1f",
        descripcion: "Un procesador Advanced Micro Devices (AMD) es un procesador de computadora diseñado o fabricado por AMD, una empresa estadounidense de tecnología y semiconductores. AMD produce principalmente unidades de procesamiento central (CPU) destinadas a competir con las ofertas de su rival"
    },
    {
        categoria: "procesadores", fabricante: "AMD", id: "A2", titulo: "Procesador AMD RYZEN 5 PRO 2600 3.90GHz AM4 OEM Sin Cooler", valor: 26760, imagen: "https://drive.google.com/uc?export=download&id=17ZQa2rZK9RsUEtwATBrRWneSGESjW2x8",
        descripcion: "Un procesador Advanced Micro Devices (AMD) es un procesador de computadora diseñado o fabricado por AMD, una empresa estadounidense de tecnología y semiconductores. AMD produce principalmente unidades de procesamiento central (CPU) destinadas a competir con las ofertas de su rival"
    },
    {
        categoria: "procesadores", fabricante: "AMD", id: "A3", titulo: "Procesador AMD Ryzen 7 5800X 4.7GHz Turbo AM4 - No incluye Cooler", valor: 54149, imagen: "https://drive.google.com/uc?export=download&id=1X22hNBVa_SD2glo4RaPz8wRdf2FgtB1f",
        descripcion: "Un procesador Advanced Micro Devices (AMD) es un procesador de computadora diseñado o fabricado por AMD, una empresa estadounidense de tecnología y semiconductores. AMD produce principalmente unidades de procesamiento central (CPU) destinadas a competir con las ofertas de su rival"
    },
    {
        categoria: "memoriasRam", fabricante: "GeiL", id: "R1", titulo: "Memoria GeiL DDR4 16GB 3000MHz Super Luce RGB Black", valor: 15950, imagen: "https://drive.google.com/uc?export=download&id=12q_sYyLgBT8EFEjG3u2OO7Yi1U3-KJiq",
        descripcion: "GeIL ROG EVO X II DDR4 RAM, 16GB 3000MHz 1.35V XMP2.0, Long DIMM High Speed Desktop Memory, Hardcore Immersive Gaming/Multimedia Content Creation/Quality Live Streaming"
    },
    {
        categoria: "memoriasRam", fabricante: "Elite", id: "R2", titulo: "Memoria Team DDR4 4GB 2400MHz Elite Plus Red", valor: 4050, imagen: "https://drive.google.com/uc?export=download&id=1LE5a9DrHO0Z2pIcVjxIL5SfMcnhoAv13",
        descripcion: "Capacidad 4GB Tipo 288-Pin DDR4 SDRAM Speed ??DDR4 2400 (PC4 19200), marca Team Series Elite Plus Modelo TPD416G2400HC16DC01"
    },
    {
        categoria: "memoriasRam", fabricante: "Corsair", id: "R3", titulo: "Memoria Corsair DDR3 8GB 1600Mhz Vengeance LP", valor: 11398, imagen: "https://drive.google.com/uc?export=download&id=1GlQFOOePf5n9kpL4jY3mOEA5tXUoV97Y",
        descripcion: "Con diseños únicos y modernos, Corsair es una de las marcas más elegidas por los usuarios al momento de comprar una memoria ram. Cargar programas más rápido, aumentar la capacidad de responder y ejecutar aplicaciones de uso intensivo son algunas de las características y ventajas que tendrás al momento de adquirir esta memoria."
    }

]

export const getFetch = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            id ? resolve(productos.find(producto => producto.id === id)) : resolve(productos);
        }, 1000)
    })
}

export const onAdd = (value) => {
    console.log(`Cantidad del producto: ${value}`);
}