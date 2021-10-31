function calculaIdade(anos){
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'maria',
	idade: 45
};

const pessoa2 = {
	nome: 'carla',
	idade: 30
};

const animal = {
	nome: 'Fiona',
	idade: 5,
	raca: 'Pug',
};

console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.call(animal, 5));

console.log(calculaIdade.apply(pessoa1, [10]));