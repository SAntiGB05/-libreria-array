
let libros = [
   {
        titulo : 'Cien años de soledad', 
        autor : 'Gabriel García Márquez',
        genero : 'Ficción',
        idioma : 'Español',
        precio : 18.99,
        formato : 'Tapa blanda',
        isbn : '978-0307474728',
        descripcion : 'La novela narra la historia de la familia Buendía a lo largo de siete generaciones en el ficticio pueblo de Macondo.', 
        estado : 'nuevo',
        ubicacion : 'Bogotá, Colombia',
        fecha : 1967,
        editorial : 'Editorial Sudamericana',
        paginas : 417, 
        dimensiones : '13 x 2.8 x 19.8 cm',
        peso : '340 gramos'
    },

    {  
        titulo : "Sapiens: De animales a dioses", 
        autor : 'Yuval Noah Harari',
        genero : 'No ficción, Historia',
        idioma : 'Español',
        precio : 22.50,
        formato : 'Ebook',
        isbn : '978-8499926223',
        descripcion : 'Un recorrido por la historia de la humanidad desde los primeros Homo sapiens hasta las revoluciones del siglo XXI', 
        estado : 'Nuevo',
        ubicacion : 'Madrid, España',
        fecha : 2014,
        editorial : 'Editorial Sudamericana',
        paginas : 496, 
        dimensiones : ' N/A (formato digital)',
        peso : 'N/A (formato digital)'
    },

    {
        titulo : "1984", 
        autor : 'George Orwell',
        genero : 'Ciencia ficción, Distopía',
        idioma : 'Inglés',
        precio : 7.99,
        formato : 'Tapa dura',
        isbn : '978-0451524935',
        descripcion : 'La novela presenta una sociedad totalitaria bajo la vigilancia constante del Gran Hermano', 
        estado : 'Usado, como nuevo',
        ubicacion : 'Londres, Reino Unido',
        fecha : 1949,
        editorial : 'Editorial Sudamericana',
        paginas : 328, 
        dimensiones : '14 x 2.5 x 21 cm',
        peso : '420 gramos'
    },

    {
        titulo: "El Alquimista",
        autor: 'Paulo Coelho',
        genero: 'Ficción, Aventura',
        idioma: 'Español',
        precio: 15.00 ,
        formato: 'Tapa blanda',
        isbn: '978-0062315007',
        descripcion: 'La historia de Santiago, un joven pastor andaluz en busca de un tesoro en las pirámides de Egipto.',
        estado: 'Nuevo',
        ubicacion: 'Buenos Aires, Argentina',
        fecha_publicacion: 1988,
        editorial : 'Editorial Sudamericana',
        paginas: 208,
        dimensiones: '13.5 x 1.3 x 20.3 cm',
        peso: '200 gramos'
    },

    {
        titulo: "To Kill a Mockingbird",
        autor: 'Harper Lee',
        genero: 'Ficción, Drama',
        idioma: 'Inglés',
        precio: 14.99, 
        formato: 'Tapa blanda',
        isbn: '978-0061120084',
        descripcion: 'Una novela sobre la injusticia racial en el sur de Estados Unidos, vista a través de los ojos de Scout Finch.',
        estado: 'Nuevo',
        ubicacion: 'Nueva York, EE.UU.',
        fecha_publicacion: 1960,
        editorial : 'Editorial Sudamericana',
        paginas: 336,
        dimensiones: '10.5 x 2.5 x 17.5 cm',
        peso: '290 gramos'
    },

    {
        titulo: "Matar a un ruiseñor",
        autor: 'Harper Lee',
        genero: 'Ficción, Drama',
        idioma: 'Español',
        precio: 16.95,
        formato: 'Tapa dura',
        isbn: '978-8497873178',
        descripcion: 'La traducción al español de "To Kill a Mockingbird", una crítica social sobre la injusticia racial.',
        estado: 'Nuevo',
        ubicacion: 'Barcelona, España',
        fecha_publicacion: 1960,
        editorial: 'Ediciones B',
        paginas: 384,
        dimensiones: '14 x 3 x 21 cm',
        peso: '350 gramos'
    },

    {
        titulo: "El diario de Ana Frank",
        autor: "Ana Frank",
        genero: "Memorias",
        idioma: "Español",
        precio: 15.99,
        formato: "Físico",
        isbn: "978-0-451-eda60-9",
        descripcion: "Un libro que narra la historia de Ana Frank, una joven judía que se escondió con su familia en un ático en Amsterdam durante la Segunda Guerra Mundial.",
        estado: "Usado",
        ubicacion: "Estante 1, Biblioteca de la Ciudad",
        fecha_publicacion: "25 de junio de 1947",
        editorial: 'Ediciones B',
        paginas: 218,
        dimensiones: "20.5 x 13.5 x 2.5 cm",
        peso: "350 gramos"
    },

    {
        titulo: "La isla del tesoro",
        autor: "Robert Louis Stevenson",
        genero: "Aventura",
        idioma: "Español",
        precio: 12.99,
        formato: "Físico",
        isbn: "978-0-451-eda60-9",
        descripcion: "Una novela clásica que narra la historia de un joven llamado Jim Hawkins que se embarca en un viaje para encontrar un tesoro en una isla misteriosa.",
        estado: "Usado",
        ubicacion: "Estante 2, Biblioteca de la Ciudad",
        fecha_publicacion: "1883",
        editorial: 'Ediciones B',
        paginas: 240,
        dimensiones: "20.5 x 13.5 x 2.5 cm",
        peso: "350 gramos"
    },

    {
        titulo: "El código de Da Vinci",
        autor: "Dan Brown",
        genero: "Thriller",
        idioma: "Inglés",
        precio: 15.99,
        formato: "Digital",
        isbn: "978-0-385-50420-5",
        descripcion: "Una novela que sigue la historia de un profesor de simbología que se ve envuelto en un misterio relacionado con la Iglesia Católica y el Santo Grial.",
        estado: "Nuevo",
        ubicacion: "Biblioteca digital",
        fecha_publicacion: "18 de marzo de 2003",
        editorial: 'Ediciones B',
        paginas: 454,
        dimensiones: "N/A",
        peso: "N/A"
    },

    {
        titulo: "El hombre en busca de sentido",
        autor: "Viktor Frankl",
        genero: "Ensayo",
        idioma: "Español",
        precio: 12.99,
        formato: "Físico",
        isbn: "978-0-451-eda60-9",
        descripcion: "Un libro que narra la experiencia del autor en los campos de concentración nazis y su teoría sobre la logoterapia.",
        estado: "Usado",
        ubicacion: "Estante 3, Biblioteca de la Ciudad",
        fecha_publicacion: "1946",
        editorial: 'Ediciones B',
        paginas: 160,
        dimensiones: "20.5 x 13.5 x 2.5 cm",
        peso: "350 gramos"
    },

    {
        titulo: "El código de Da Vinci",
        autor: "Dan Brown",
        genero: "Thriller",
        idioma: "Inglés",
        precio: 15.99,
        formato: "Digital",
        isbn: "978-0-385-50420-5",
        descripcion: "Una novela que sigue la historia de un profesor de simbología que se ve envuelto en un misterio relacionado con la Iglesia Católica y el Santo Grial.",
        estado: "Nuevo",
        ubicacion: "Biblioteca digital",
        fecha_publicacion: "18 de marzo de 2003",
        editorial: "Doubleday",
        paginas: 454,
        dimensiones: "N/A",
        peso: "N/A"
    },

    {
        titulo: "Pride and Prejudice",
        autor: 'Jane Austen',
        genero: 'Ficción, Romance',
        idioma: 'Inglés',
        precio: 5.99 ,
        formato: 'Tapa blanda',
        isbn: '978-0141040349',
        descripcion: 'La historia de Elizabeth Bennet y su relación con el aristocrático Fitzwilliam Darcy.',
        estado: 'Nuevo',
        ubicacion: 'Londres, Reino Unido',
        fecha_publicacion: 1813,
        editorial: "Doubleday",
        paginas: 480,
        dimensiones: '12.9 x 2.5 x 19.8 cm',
        peso: '340 gramos'
    },

    {
        titulo: "El principito",
        autor: 'Antoine de Saint-Exupéry',
        genero: 'Ficción, Infantil',
        idioma: 'Español',
        precio: 12.00 ,
        formato: 'Tapa dura',
        isbn: '978-0156013987',
        descripcion: 'Un cuento poético que narra las aventuras de un pequeño príncipe que viaja de planeta en planeta.',
        estado: 'Nuevo',
        ubicacion: 'Ciudad de México, México',
        fecha_publicacion: 1943,
        editorial: "Doubleday",
        paginas: 96,
        dimensiones: '12.7 x 1.3 x 19 cm',
        peso: '200 gramos'
    },

    {
        titulo: "The Great Gatsby",
        autor:'F. Scott Fitzgerald',
        genero: 'Ficción, Clásico', 
        idioma: 'Inglés',
        precio: 10.99,
        formato: 'Tapa blanda',
        isbn: '978-0743273565',
        descripcion: 'La historia de Jay Gatsby y su amor por Daisy Buchanan en los años 20 en Estados Unidos.',
        estado: 'Nuevo',
        ubicacion: 'Los Ángeles, EE.UU.',
        fecha_publicacion: 1925,
        editorial: "Doubleday",
        paginas: 180,
        dimensiones: '13.3 x 1.3 x 20.3 cm',
        peso: '200 gramos'
    },

    {
        titulo: "The Catcher in the Rye",
        autor: 'J.D. Salinger',
        genero: 'Ficción, Drama',
        idioma: 'Inglés',
        precio: 8.99 ,
        formato: 'Tapa blanda',
        isbn: '978-0316769488',
        descripcion: 'La historia de Holden Caulfield, un adolescente rebelde que ha sido expulsado de varias escuelas.',
        estado: 'Nuevo',
        ubicacion: 'Chicago, EE.UU.',
        fecha_publicacion: 1951,
        editorial: "Doubleday",
        paginas: 277,
        dimensiones: '10.6 x 1.8 x 17.4 cm',
        peso: '220 gramos'
    },

    {
        titulo: "Brave New World",
        autor: 'Aldous Huxley',
        genero: 'Ciencia ficción, Distopía',
        idioma: 'Inglés',
        precio: 13.50 ,
        formato: 'Tapa blanda',
        isbn: '978-0060850524',
        descripcion: 'Una visión distópica del futuro donde la tecnología controla todos los aspectos de la vida humana.',
        estado: 'Nuevo',
        ubicacion: 'San Francisco, EE.UU.',
        fecha_publicacion: 1932,
        editorial: 'Harcourt, Inc',
        paginas: 288,
        dimensiones: '13 x 1.8 x 20.3 cm',
        peso: '240 gramos',
    },

    {
        titulo : "1984", 
        autor : 'George Orwell',
        genero : 'Ciencia ficción, Distopía',
        idioma : 'Inglés',
        precio : 7.99,
        formato : 'Tapa dura',
        isbn : '978-0451524935',
        descripcion : 'La novela presenta una sociedad totalitaria bajo la vigilancia constante del Gran Hermano', 
        estado : 'Usado, como nuevo',
        ubicacion : 'Londres, Reino Unido',
        fecha : 1949,
        editorial: 'Harcourt, Inc',
        paginas : 328, 
        dimensiones : '14 x 2.5 x 21 cm',
        peso : '420 gramos'
    },

    {
        titulo: "Matar a un ruiseñor",
        autor: 'Harper Lee',
        genero: 'Ficción, Drama',
        idioma: 'Español',
        precio: 16.95,
        formato: 'Tapa dura',
        isbn: '978-8497873178',
        descripcion: 'La traducción al español de "To Kill a Mockingbird", una crítica social sobre la injusticia racial.',
        estado: 'Nuevo',
        ubicacion: 'Barcelona, España',
        fecha_publicacion: 1960,
        editorial: 'Harcourt, Inc',
        paginas: 384,
        dimensiones: '14 x 3 x 21 cm',
        peso: '350 gramos'
    },

    {
        titulo: "El principito",
        autor: 'Antoine de Saint-Exupéry',
        genero: 'Ficción, Infantil',
        idioma: 'Español',
        precio: 12.00 ,
        formato: 'Tapa dura',
        isbn: '978-0156013987',
        descripcion: 'Un cuento poético que narra las aventuras de un pequeño príncipe que viaja de planeta en planeta.',
        estado: 'Nuevo',
        ubicacion: 'Ciudad de México, México',
        fecha_publicacion: 1943,
        editorial: 'Harcourt, Inc',
        paginas: 96,
        dimensiones: '12.7 x 1.3 x 19 cm',
        peso: '200 gramos'
    }
    
]    

function AgregarLibro() {

    let newlibro = {

        titulo : prompt('titulo'), 
        autor : prompt('autor'),
        genero : prompt('genero'),
        idioma : prompt('idioma'),
        precio : prompt('precio'),
        formato : prompt('formato'),
        isbn : prompt('isbn'),
        descripcion : prompt('descripcion'), 
        estado : prompt('estado'),
        ubicacion : prompt('ubicacion'),
        fecha : prompt('fecha'),
        editorial : prompt('editorial'),
        paginas : prompt('paginas'), 
        dimensiones : prompt('dimensiones'),
        peso : prompt('peso')
    }

    libros.push(newlibro)
    console.log('libro agregado');
    console.log(newlibro); 
}

function EliminarLibros() {

    libroEliminado = libros.pop()
    console.log('libro eliminado:');
    console.log(libroEliminado);
}

function VerLibros() {
    console.log('pila actual de libros');
    console.log(libros);
}

function Menu() {
    menu = 'Menu libreria\n\n'
    menu += '1: agregar nuevo libro\n'
    menu += '2: Eliminar libro\n'
    menu += '3: Mostrar pila de libros\n'
    menu += '4: Mostrar titulo\n'
    menu += '5: Mostrar idioma\n'
    menu += '6: Mostrar descripcion\n'
    menu += '7: Mostrar genero\n'
    menu += '8: Mostrar precio\n'
    menu += '9: Mostrar ubicacion\n'
    menu += '10: Mostrar fecha publicacion\n'
    menu += '11: Mostrar dimensiones\n'
    menu += '12: Mostrar peso\n'
    menu += '13: Mostrar isbn\n'
    menu += '14: Mostrar estado\n'
    menu += '15: Mostrar descuento\n\n'
    menu += 'elija una opcion\n'
    let codigo = parseInt(prompt(menu))

    return codigo
}

function EjecutarMenu() {
    let x = Menu()
    switch (x) {
    case 1:
        AgregarLibro()
        EjecutarMenu2()
        break;
    case 2:
        EliminarLibros()
        EjecutarMenu2()
        break;
    case 3:
        VerLibros()
        EjecutarMenu2()
        break;
    case 4:
        console.table(TITULO)
        EjecutarMenu2()
        break;
    case 5:
        console.table(IDIOMA)
        EjecutarMenu2()
        break; 
    case 6:
        console.table(DESCRIPCION)
        EjecutarMenu2()
        break;
    case 7:
        console.table(GENERO)
        EjecutarMenu2()
        break;
    case 8:
        console.table(PRECIO)
        EjecutarMenu2()
        break;
    case 9:
        console.table(UBICACION)
        EjecutarMenu2()
        break;
    case 10:
        console.table(FECHA_PUBLICACION)
        EjecutarMenu2()
        break;  
    case 11:
        console.table(DIMENSIONES)
        EjecutarMenu2()
        break;
    case 12:
        console.table(PESO)
        EjecutarMenu2()
        break;
    case 13:
        console.table(ISBN)
        EjecutarMenu2()
        break;
    case 14:
        console.table(ESTADO)
        EjecutarMenu2()
        break;
    case 15:
        Descuento()
        EjecutarMenu2()
        break; 
    default: 
        false;
        break;
 
    }
}

function Menu2() {
    let menu = 'Desea continuar en el menu\n\n';
    menu += '1: si\n';
    menu += '2: no\n\n';
    menu += 'Elija una opcion: ';
    let codigo = parseInt(prompt(menu));

    return codigo;
}

function EjecutarMenu2() {
    let continuar = true;
    while (continuar) {
        let x = Menu2();
        switch (x) {
            case 1:
                EjecutarMenu();
                break;
            case 2:
                alert('Salio del menu');
                continuar = false;
                break;
            default:
                alert('Opcion no valida. Intente de nuevo.');
                break;
        }
    }
}

    const TITULO = libros.map(function(libros){
    return{
        titulo: libros.titulo, 
        autor: libros.autor, 
        editorial: libros.editorial, 
        precio: libros.precio
    }
    });


const IDIOMA = libros.map(function(libros){
    return{
        titulo: libros.titulo, 
        autor: libros.autor, 
        idioma: libros.idioma
    }
});

const DESCRIPCION = libros.map(function(libros){
    return{
        titulo: libros.titulo, 
        autor: libros.autor, 
        descripcion: libros.descripcion
    }
});

const GENERO = libros.map(function(libros){
    return{
        titulo: libros.titulo, 
        autor: libros.autor, 
        genero: libros.genero
    }
});

const PRECIO = libros.map(function(libros){
    return{
        titulo: libros.titulo, 
        autor: libros.autor, 
        precio: libros.precio,
    }
});

const UBICACION = libros.map(function(libros){
    return{
        titulo: libros.titulo, 
        autor: libros.autor, 
        ubicacion: libros.ubicacion
    }
});

const FECHA_PUBLICACION = libros.map(function(libros){
    return{
        titulo: libros.titulo, 
        autor: libros.autor, 
        fecha_publicacion: libros.fecha_publicacion,
    }
});

const DIMENSIONES = libros.map(function(libros){
    return{
        titulo: libros.titulo, 
        autor: libros.autor, 
        dimensiones: libros.dimensiones,
    }
});

const PESO = libros.map(function(libros){
    return{
        titulo: libros.titulo, 
        autor: libros.autor, 
        peso: libros.peso,
    }
});

const ISBN = libros.map(function(libros){
    return{
        titulo: libros.titulo, 
        autor: libros.autor, 
        isbn: libros.isbn,
    }
});

const ESTADO = libros.map(function(libros){
    return{
        titulo: libros.titulo, 
        autor: libros.autor, 
        estado: libros.estado,
    }
});

function Descuento() {
    const DESCUENTO = libros.map(function(libro) {
        return {
            ...libro,
            descuento: 20,
            precio_final: libro.precio - (libro.precio * 0.2)
        };
    });

    const DESCUENTO_PRECIO = DESCUENTO.map(function(libro) {
        return {
            titulo: libro.titulo, 
            autor: libro.autor, 
            editorial: libro.editorial, 
            precio: libro.precio,
            descuento: libro.descuento,
            precio_final: libro.precio_final
        };
    });

    return console.table(DESCUENTO_PRECIO);
}

EjecutarMenu();
