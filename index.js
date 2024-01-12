let xp = 0
let name = 'Hai'
let rank = ''//rank em branco pra ir atualizando conforme o loop

console.log(`O heroi ${name} tem ${String(xp)} pontos de experiencia!! Vamos derrotar alguns monstros`); //log inicial com as variaveis predefinidas com infos do heroi

while(xp < 10001) { //criei um loop aqui pra rodar o codigo e ir atualizando a xp e o rank 
    let monster = 500 // valor de xp de cada monstro abatido
    xp += monster
    
    if(xp <= 1000){ //aqui só consegui utilizando if/else if. Tentei de outras formas mas sozinho e sem pesquisar nada só fiz rodar assim.. não fiquei satisfeito com isso :(
        rank = 'ferro'
    } else if(xp <= 2000) {
        rank = 'bronze'
    } else if(xp <= 3000) {
        rank = 'prata'
    } else if(xp <= 5000) {
        rank = 'ouro'
    } else if(xp <= 6000) {
        rank = 'platina'
    } else if(xp <= 7000) {
        rank = 'diamante'
    } else if(xp <= 8000) {
        rank = 'mestre'
    } else if(xp <= 9000) {
        rank = 'ascendente'
    } else if(xp <= 10000) {
        rank = 'radiante'
    } else {
        xp <= 10500
        rank = 'imortal'
        console.log('estoy cansado jefe!')
    }
    console.log(`${name} é rank ${rank}! com ${String(xp)} pontos de experiencia`)
    console.log('Matando monstros!')
};

console.log(`O heroi ${name} termina sua jornada com uma xp acumulada de "${String(xp)}" pontos de experiencia!! Foi uma aventura memoravel e muito desafiadora :)`); //log final com todo o resultado da aventura em display

console.log(`O Herói de nome ${name} está no nível de ${rank}`)