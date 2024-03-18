class Disco {
    static biblioteca = [];

    constructor(nome, grupo, ano, tipo, prestado) {
        this.nome = nome;
        this.grupo = grupo;
        this.ano = ano;
        this.tipo = tipo;
        this.prestado = prestado;
        Disco.biblioteca.push(this);
    }

    cargarDatos(nome, grupo, ano, tipo, prestado) {
        this.nome = nome;
        this.grupo = grupo;
        this.ano = ano;
        this.tipo = tipo;
        this.prestado = prestado;
    }

    imprimir() {
        console.log(
            `Nome: ${this.nome}, Grupo: ${this.grupo}, Ano: ${this.ano}, Xénero: ${this.tipo}, Prestado ${this.prestado}`
        );
    }

    static listarDiscos() {
        Disco.biblioteca.forEach((disco) => {
            disco.imprimir();
        });
    }
}

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

console.log('\n--\nImprimo todo\n');

Disco.listarDiscos();
