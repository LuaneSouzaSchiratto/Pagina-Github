//Selecionando Elementos HTML
const turnOnOff = document.getElementById ( 'turnOnOff' );

const lamp = document.getElementById ( 'lamp' );

// Função que verifica se a lâmpada está quebrada
function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

//Função para ligar a lâmpada
function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = '../img/ligada.jpg';
    }
}

//Função para desligar a lâmpada
function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = '../img/desligada.jpg';
        turnOnOff.textContent = 'Ligar';
    }
}

//Função para quebrar a lâmpada
function lampBroken () {
    lamp.src = '../img/quebrada.jpg';
}

//Função para alternar entre ligada/desligada
function lampOnOff () {
    if ( turnOnOff.textContent == 'Ligar' ) {
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

//Eventos de usuário
turnOnOff.addEventListener ( 'click', lampOnOff );

lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );