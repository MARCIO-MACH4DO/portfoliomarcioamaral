/* Para descobrir se o campo input está vazio ou preenchido vamos usar
	'let nomeDaVariavel = document.forms["nomeForm"]["nomeInput"].value;'
*/



function validaForm(){
	let validaCod = document.forms["cadastrar"]["codigo"].value;
	let validaData = document.forms["cadastrar"]["data"].value;
	let validaTitulo = document.forms["cadastrar"]["titulo"].value;
	let validaDir = document.forms["cadastrar"]["diretor"].value;
	let validaAtor = document.forms["cadastrar"]["atorPrinc"].value;
	let validaNota = document.forms["cadastrar"]["nota"].value;
	let validaRadio = document.forms["cadastrar"]["radio"].value;
	
	if (validaCod == ""){
		alert("O código deve ser preenchido!");
		return false;
	}

	if (validaData == ""){
		alert("A data deve ser preenchida!");
		return false;
	}

	if (validaTitulo == ""){
		alert("O título deve ser preenchido!");
		return false;
	}

	if (validaDir == ""){
		alert("O nome do diretor deve ser preenchido!");
		return false;
	}

	if (validaAtor == ""){
		alert("O nome do ator/atriz principal deve ser preenchido!");
		return false;
	}

	if (validaNota == ""){
		alert("A nota IMDb deve ser preenchida!");
		return false;
	}

	if (validaRadio == ""){
		alert("O gênero deve ser marcado!");
		return false;
	}

}

function insere(){
	let cod = document.forms["cadastrar"]["codigo"].value;
	let data = document.forms["cadastrar"]["data"].value;
	let titulo = document.forms["cadastrar"]["titulo"].value;
	let diretor = document.forms["cadastrar"]["diretor"].value;
	let ator = document.forms["cadastrar"]["atorPrinc"].value;
	let nota = document.forms["cadastrar"]["nota"].value;
	let radio = document.forms["cadastrar"]["radio"].value;

	let inserir = window.document.getElementById("inserirTabela");
	inserir.innerHTML = `<th scope="row">${cod}</th>`;
	inserir.innerHTML +=	`<td>${titulo}</td>`;
	inserir.innerHTML += `<td>${diretor}</td>`;
	inserir.innerHTML += `<td>${data}</td>`;
	inserir.innerHTML += `<td>${radio}</td>`;
	inserir.innerHTML += `<td>${ator}</td>`;
	inserir.innerHTML += `<td>${nota}</td>`;
	
}