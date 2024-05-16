
let libros = [

   {
        titulo : '', 
        autor : 'Gabriel García Márquez',
        genero : 'Ficción',
        idioma : 'Español',
        precio : 18.99,
        formato : 'Tapa blanda',
        isbn : '978-0307474728',
        drescripcion : 'La novela narra la historia de la familia Buendía a lo largo de siete generaciones en el ficticio pueblo de Macondo.', 
        estado : 'nuevo',
        ubicacion : 'Bogotá, Colombia',
        fecha : 1967,
        editorial : 'Editorial Sudamericana',
        paginas : 417, 
        dimensiones : '13 x 2.8 x 19.8 cm',
        peso : '340 gramos'
    },
    
]    

let newLibro1 = {
    titulo : "1984", 
    autor : 'George Orwell',
    genero : 'Ciencia ficción, Distopía',
    idioma : 'Inglés',
    precio : 7.99,
    formato : 'Tapa dura',
    isbn : '978-0451524935',
    drescripcion : 'La novela presenta una sociedad totalitaria bajo la vigilancia constante del Gran Hermano', 
    estado : 'Usado, como nuevo',
    ubicacion : 'Londres, Reino Unido',
    fecha : 1949,
    editorial : 'Secker & Warburg',
    paginas : 328, 
    dimensiones : '14 x 2.5 x 21 cm',
    peso : '420 gramos'
}

let newLibro2 = {
    titulo : "Sapiens: De animales a dioses", 
    autor : 'Yuval Noah Harari',
    genero : 'No ficción, Historia',
    idioma : 'Español',
    precio : 22.50,
    formato : 'Ebook',
    isbn : '978-8499926223',
    drescripcion : 'Un recorrido por la historia de la humanidad desde los primeros Homo sapiens hasta las revoluciones del siglo XXI', 
    estado : 'Nuevo',
    ubicacion : 'Madrid, España',
    fecha : 2014,
    editorial : 'Debate',
    paginas : 496, 
    dimensiones : ' N/A (formato digital)',
    peso : 'N/A (formato digital)'
}



console.log(libros.push(newLibro1,newLibro2));
console.log(libros);
