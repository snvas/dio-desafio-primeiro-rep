function getAdmins(map){
	let admins = [];
	for ([key, value] of map) {
		if (value === 'Admin') {
			admins.push(key);
		}
	}
	return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'User');
usuarios.set('Soraia', 'Admin');
usuarios.set('Daniel', 'Admin');

console.log(getAdmins(usuarios));


const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresunicos(arr) {
	const mySet = new Set(arr);

	return [...mySet];
}

console.log(valoresunicos(meuArray));