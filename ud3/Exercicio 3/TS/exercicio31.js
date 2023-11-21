var nomeApelidos = prompt('Introduce nome e apelidos. Limita tanto o nome como os apelidos a só unha palabra cada un.') || 'Nome Apelido Apelido';
document.write("Tama\u00F1o total: ".concat(nomeApelidos.length, "<br/>"));
var nomeApelidosSenEspazos = nomeApelidos.replace(/\s/g, '');
document.write("Tama\u00F1o sen espazos: ".concat(nomeApelidosSenEspazos.length, "<br/>"));
document.write("Nome completo en min\u00FAsculas: ".concat(nomeApelidos.toLowerCase(), "<br/>"));
document.write("Nome completo en mai\u00FAsculas: ".concat(nomeApelidos.toUpperCase(), "<br/>"));
var nomePartido = nomeApelidos.split(' ');
var nome = nomePartido[0];
var apelido1 = nomePartido[1];
var apelido2 = nomePartido[2];
document.write("Nome: ".concat(nome, "<br/>"));
document.write("Apelido 1: ".concat(apelido1, "<br/>"));
document.write("Apelido 2: ".concat(apelido2, "<br/>"));
var propostaUser = "".concat(nome.toLowerCase()).concat(apelido1
    .toUpperCase()
    .charAt(0)).concat(apelido2.toUpperCase().charAt(0));
document.write("Usuario: ".concat(nome).concat(apelido2, "<br/>"));
