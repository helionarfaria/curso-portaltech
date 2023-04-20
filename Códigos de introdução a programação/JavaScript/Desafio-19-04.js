let usuario1 = {
    id: 1,
    nome: 'Helionar',
    idade: 24,
    sexo: 'masculino',
    senha: 'inconstitucionalissimamente',
}

let usuario2 = {
    id: 2,
    nome: 'Helionar',
    idade: 24,
    sexo: 'masculino',
    senha: 'inconstitucionalissimamente',
}

let usuario3 = {
    id: 3,
    nome: 'Helionar',
    idade: 24,
    sexo: 'masculino',
    senha: 'inconstitucionalissimamente',
}

usuario1.nome = 'Helio' /* Alteração do nome do usuario1 para teste e fins didáticos */
const admin1 = false
const admin2 = true
const admin3 = true

console.log('Usuário 1:','\n', 'nome:',usuario1.nome,'\n','id:', usuario1.id,'\n','idade:', usuario1.idade,'\n','sexo:',usuario1.sexo)

console.log('Realizando login de usuário 1...')

    if (usuario1.nome == 'Helio' && usuario1.senha == 'inconstitucionalissimamente' && admin1 == true) {
        console.log('Por favor, insira sua nova senha')
        console.log('Bem-vindo(a) à área de administrador')
}
    else if (usuario1.nome == 'Helio' && usuario1.senha == 'inconstitucionalissimamente' && admin1 != true) {
        console.log('Por favor, insira sua nova senha')
        console.log('Você não tem permissão para acessar esta área do sistema')
    }
    else  if (usuario1.nome != 'Helio' || usuario1.senha != 'inconstitucionalissimamente') {
        console.log('Usuário / senha incorretos')
}

console.log('\n')

console.log('Usuário 2:','\n', 'nome:',usuario2.nome,'\n','id:', usuario2.id,'\n','idade:', usuario2.idade,'\n','sexo:',usuario2.sexo)

console.log('Realizando login de usuário 2...')


usuario2.senha = 'inconstitucionalissimamente'

if (usuario2.nome == 'Helionar' && usuario2.senha == 'inconstitucionalissimamente' && admin2 == true) {
    console.log('Por favor, insira sua nova senha')
    console.log('Bem-vindo(a) à área de administrador')
}
else if (usuario2.nome == 'Helionar' && usuario2.senha == 'inconstitucionalissimamente' && admin2 != true) {
    console.log('Por favor, insira sua nova senha')
    console.log('Você não tem permissão para acessar esta área do sistema')
}
else  if (usuario2.nome != 'Helionar' || usuario2.senha != 'inconstitucionalissimamente') {
    console.log('Usuário / senha incorretos')
}

usuario3.senha = 'constitucionalissimamente'

console.log('\n')

console.log('Usuário 3:','\n', 'nome:',usuario3.nome,'\n','id:', usuario3.id,'\n','idade:', usuario3.idade,'\n','sexo:',usuario3.sexo)

console.log('Realizando login de usuário 3...')

if (usuario3.nome == 'Helionar' && usuario3.senha == 'inconstitucionalissimamente' && admin2 == true) {
    console.log('Por favor, insira sua nova senha')
    console.log('Bem-vindo(a) à área de administrador')
}
else if (usuario3.nome == 'Helionar' && usuario3.senha == 'inconstitucionalissimamente' && admin2 != true) {
    console.log('Por favor, insira sua nova senha')
    console.log('Você não tem permissão para acessar esta área do sistema')
}
else  if (usuario3.nome != 'Helionar' || usuario3.senha != 'inconstitucionalissimamente') {
    console.log('Usuário / senha incorretos')
}

console.log('\n')

console.log('Alterando a senha do usuário 3...')
usuario3.senha = 'inconstitucionalissimamente'
console.log('Senha alterada com sucesso!')

console.log('\n')

console.log('Usuário 3:','\n', 'nome:',usuario3.nome,'\n','id:', usuario3.id,'\n','idade:', usuario3.idade,'\n','sexo:',usuario3.sexo)

console.log('Realizando login de usuário 3...')

if (usuario3.nome == 'Helionar' && usuario3.senha == 'inconstitucionalissimamente' && admin2 == true) {
    console.log('Por favor, insira sua nova senha')
    console.log('Bem-vindo(a) à área de administrador')
}
else if (usuario3.nome == 'Helionar' && usuario3.senha == 'inconstitucionalissimamente' && admin2 != true) {
    console.log('Por favor, insira sua nova senha')
    console.log('Você não tem permissão para acessar esta área do sistema')
}
else  if (usuario3.nome != 'Helionar' || usuario3.senha != 'inconstitucionalissimamente') {
    console.log('Usuário / senha incorretos')
}