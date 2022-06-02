let newP = document.querySelector('p')


let showBtn = document.getElementById('dodaj').onclick = function(){
    newP.textContent = "Naciśni przycisk usuń"
}
let closeBtn = document.getElementById('usun').onclick = function(){
    newP.textContent = ""
}