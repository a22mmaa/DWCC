// Clase
class Disco {
    constructor(titulo, artista, ano, tipo, prestado) {
        this.titulo = titulo;
        this.artista = artista;
        this.ano = ano;
        this.tipo = tipo;
        this.prestado = prestado;
    }
    cargarDatos(titulo, artista, ano, tipo, prestado) {
        this.titulo = titulo;
        this.artista = artista;
        this.ano = ano;
        this.tipo = tipo;
        this.prestado = prestado;
    }
    imprimir() {
        const { titulo, artista, ano, tipo, prestado } = this;
        console.log(`Título:\t\t${titulo}`);
        console.log(`Artista:\t${artista}`);
        console.log(`Ano:\t\t${ano}`);
        console.log(`Tipo:\t\t${tipo}`);
        if (prestado) {
            console.log(`Prestado:\tSi`);
        } else console.log(`Prestado:\tNon`);
        console.log('---');
    }
}

// Biblioteca de discos
const bibliotecaDiscos = [];
function agregarDisco(disco) {
    if (!bibliotecaDiscos.includes(disco)) {
        bibliotecaDiscos.push(disco);
        console.log(
            `${disco.titulo} (${disco.ano}) foi engadido á biblioteca.`
        );
    } else
        console.log(
            `❌ ${disco.titulo} (${disco.ano}) xa forma parte da biblioteca!`
        );
};
function listarBiblioteca() {
    const listaBiblioteca = []
    for (disco of bibliotecaDiscos) {
        listaBiblioteca.push(disco.titulo);
    }
    console.log(`Discos engadidos á biblioteca: ${listaBiblioteca}.`);
}

// Creo 4 discos
const disco1_crash = new Disco(
    'CRASH',
    'Charli XCX',
    2022,
    ['Pop', 'HyperPop', 'Electropop'],
    false
);
const disco2_craprisongs = new Disco(
    'CAPRISONGS',
    'FKA twigs',
    2022,
    ['Pop', 'Art Pop'],
    true
);
const disco3_classicobjects = new Disco(
    'Classic Objects',
    'Jenny Hval',
    2022,
    ['Avant-garde', 'Art Pop', 'Electronic'],
    false
);
const disco4_quitaroaire = new Disco();

// Sumo información ao 4
disco4_quitaroaire.cargarDatos(
    'Quitar o aire',
    'Caamaño & Ameixeiras',
    2023,
    ['Folk'],
    true
);

// Imprimo os 4 discos na consola usando o novo método
disco1_crash.imprimir();
disco2_craprisongs.imprimir();
disco3_classicobjects.imprimir();
disco4_quitaroaire.imprimir();

// Engado os discos 1 e 2 (este dúas veces) á biblioteca.
agregarDisco(disco1_crash);
agregarDisco(disco2_craprisongs);
agregarDisco(disco2_craprisongs);

// Imprimo a biblioteca, primeiro con console.log e logo coa función específica.
console.log(bibliotecaDiscos);
listarBiblioteca()

