let productos = [
    {
        categoria:"procesadores", fabricante: "AMD", id: "A1", titulo: "Procesador AMD A6 7480 3.5GHz FM2+ Dual Core 65W", valor: 8000, imagen: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31690_Procesador_AMD_Ryzen_7_5700X_4.6GHz_Turbo_AM4_-_No_incluye_Cooler_df22f6d7-grn.jpg",
        descripcion: "Un procesador Advanced Micro Devices (AMD) es un procesador de computadora diseñado o fabricado por AMD, una empresa estadounidense de tecnología y semiconductores. AMD produce principalmente unidades de procesamiento central (CPU) destinadas a competir con las ofertas de su rival"
    },
    {
        categoria: "procesadores", fabricante: "AMD", id: "A2", titulo: "Procesador AMD RYZEN 5 PRO 2600 3.90GHz AM4 OEM Sin Cooler", valor: 26760, imagen: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31690_Procesador_AMD_Ryzen_7_5700X_4.6GHz_Turbo_AM4_-_No_incluye_Cooler_df22f6d7-grn.jpg",
        descripcion: "Un procesador Advanced Micro Devices (AMD) es un procesador de computadora diseñado o fabricado por AMD, una empresa estadounidense de tecnología y semiconductores. AMD produce principalmente unidades de procesamiento central (CPU) destinadas a competir con las ofertas de su rival"
    },
    {
        categoria: "procesadores", fabricante: "AMD", id: "A3", titulo: "Procesador AMD Ryzen 7 5800X 4.7GHz Turbo AM4 - No incluye Cooler", valor: 54149, imagen: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31690_Procesador_AMD_Ryzen_7_5700X_4.6GHz_Turbo_AM4_-_No_incluye_Cooler_df22f6d7-grn.jpg",
        descripcion: "Un procesador Advanced Micro Devices (AMD) es un procesador de computadora diseñado o fabricado por AMD, una empresa estadounidense de tecnología y semiconductores. AMD produce principalmente unidades de procesamiento central (CPU) destinadas a competir con las ofertas de su rival"
    },
    {
        categoria: "memoriasRam", fabricante: "GeiL", id: "R1", titulo: "Memoria GeiL DDR4 16GB 3000MHz Super Luce RGB Black", valor: 15950, imagen: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31776_Memoria_GeiL_DDR4_16GB_3000MHz_Super_Luce_RGB_Black_646b61f7-grn.jpg",
        descripcion: "GeIL ROG EVO X II DDR4 RAM, 16GB 3000MHz 1.35V XMP2.0, Long DIMM High Speed Desktop Memory, Hardcore Immersive Gaming/Multimedia Content Creation/Quality Live Streaming"
    },
    {
        categoria: "memoriasRam", fabricante: "Elite", id: "R2", titulo: "Memoria Team DDR4 4GB 2400MHz Elite Plus Red", valor: 4050, imagen: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31776_Memoria_GeiL_DDR4_16GB_3000MHz_Super_Luce_RGB_Black_646b61f7-grn.jpg",
        descripcion: "Capacidad 4GB Tipo 288-Pin DDR4 SDRAM Speed ??DDR4 2400 (PC4 19200), marca Team Series Elite Plus Modelo TPD416G2400HC16DC01"
    },
    {
        categoria: "memoriasRam", fabricante: "Corsair", id: "R3", titulo: "Memoria Corsair DDR3 8GB 1600Mhz Vengeance LP", valor: 11398, imagen: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_3795_Memoria_Corsair_DDR3_8GB_1600Mhz_Vengeance_LP_9bfe8a5b-grn.jpg",
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