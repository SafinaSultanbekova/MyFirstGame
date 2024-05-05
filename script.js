let send = document.createElement("a")
    send.innerHTML = "Отправить"
    send.setAttribute("onClick", "work1()")
    send.style.fontSize = "40px"
    send.style.padding = "15px"
    send.style.backgroundColor = "grey"
    send.style.borderRadius = "10px"

let gamebox = document.getElementById("gamebox"); 

function work(){ 
    let input = document.getElementById("diasUberiTelefon") 
    let name = input.value; 
    let newText = document.createElement("h2"); 
    newText.innerHTML = "Привет, " + name + "! В Алматы прилетел метеор, на котором сидел инопланетянин, твои действия:"; 
 
    let actions = document.createElement("input");
    actions.placeholder = "Мои действия";


    gamebox.appendChild(newText) 
    gamebox.appendChild(actions)
    gamebox.appendChild(send)
}


function work1(){
    let win = document.createElement("h1")
    win.innerHTML = "Давай так и сделаем!"
    gamebox.appendChild(win)
}