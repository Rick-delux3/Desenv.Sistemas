// Criando um Objeto/instancia

const p = new Pessoa();


p.nome = "Chico";
p.CPF = "123.123.123.33";
p.celular = "(15) 996503774";


// p.nome = usar a função get nome
// alert(p.nome);
// Usar a função personalizada criada lá dentro
//alert(p.exibirNome())

//const a = new Aluno();
//a.nome = prompt("Insira um nome:")
//a.CPF = "123.123.123.33"
//a.celular = "15 996503774";
//a.turma = "Div 2";
//a.curso = "DS";
//a.nota1 = 8;
//a.nota2 = 9;
//console.log(a.exibirNome());
//document.writeln(a.calcularMedia());
//document.writeln(a.exibirNotas());
//document,writeln(`Celular: ${a.celular}`);

// Crie uma nova instancia para a Classe Professor
// Exiba a area, nome, cpf, celular, e função exibir titulação

const pro = new Professor();
pro.nome = prompt("Digite seu nome");
pro.CPF = String(prompt("Digite um cpf"));
pro.celular = String(prompt("Digite um celular"));
pro.area = prompt("Digite sua area");
pro.titulação = prompt("Digite sua títulação: (Exemplo: M (Mestre))").toUpperCase();
console.log(pro.exibirNome());
console.log(pro.exibirTitulação())
console.log(`CPF: ${pro.CPF}`)
console.log(`Celular: ${pro.celular}`)