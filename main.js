let board = [];
let positionR = "";
let positionC= "";
for (let i = 0; i< 10; i++) {
    board[i] = [".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."];
}
let savePositionXO = [positionR + positionC];
let data= "";
for (let i= 0; i< board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        data+= board[i][j]+ " ";
    }
    data+= "<br>";
}
document.getElementById("caroGame").innerHTML= data;
function inputPosition() {
    positionR= parseInt(prompt("W = ", ''));
    positionC= parseInt(prompt("H = ", ''));
}
function checkPostion() {       //Ham kiem tra vi tri player nhap vao da duoc nhap trc do chua.
    for (let i = 0; i < savePositionXO.length; i++){
        if (savePositionXO[i] === (positionR + positionC)) {
            return false;
        }
    }
    return true;
}

function fillX() {
    savePositionXO.push(positionR + positionC);
    board[positionR][positionC]= "x";
    data= "";
    for (let i= 0; i< board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            data += board[i][j] + " ";
        }
        data += "<br>";
    }
    document.getElementById("caroGame").innerHTML= data;
}
function fillO() {
    savePositionXO.push(positionR + positionC);
    board[positionR][positionC]= "o";
    data= "";
    for (let i= 0; i< board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            data += board[i][j] + " ";
        }
        data += "<br>";
    }
    document.getElementById("caroGame").innerHTML= data;
}
function player1() {
    inputPosition();
    while (!checkPostion()) {
        alert('Vi tri ban chon da ton tai')
        inputPosition();
    }
    fillX();
}
function player2() {
    inputPosition();
    while (!checkPostion()) {
        alert('Vi tri ban chon da ton tai')
        inputPosition();
    }
    fillO();
}