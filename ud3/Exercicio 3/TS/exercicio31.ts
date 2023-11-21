const nomeApelidos: string =
    prompt(
        'Introduce nome e apelidos. Limita tanto o nome como os apelidos a só unha palabra cada un.'
    ) || 'Nome Apelido Apelido';

document.write(`Tamaño total: ${nomeApelidos!.length}<br/>`);

const nomeApelidosSenEspazos = nomeApelidos!.replace(/\s/g, '');
document.write(`Tamaño sen espazos: ${nomeApelidosSenEspazos!.length}<br/>`);

document.write(
    `Nome completo en minúsculas: ${nomeApelidos!.toLowerCase()}<br/>`
);
document.write(
    `Nome completo en maiúsculas: ${nomeApelidos!.toUpperCase()}<br/>`
);

let nomePartido: string[] = nomeApelidos!.split(' ');
let nome: string = nomePartido[0];
let apelido1: string = nomePartido[1];
let apelido2: string = nomePartido[2];
document.write(`Nome: ${nome}<br/>`);
document.write(`Apelido 1: ${apelido1}<br/>`);
document.write(`Apelido 2: ${apelido2}<br/>`);

let propostaUser: string = `${nome.toLowerCase()}${apelido1
    .toUpperCase()
    .charAt(0)}${apelido2.toUpperCase().charAt(0)}`;
document.write(`Usuario: ${nome}${apelido2}<br/>`);
