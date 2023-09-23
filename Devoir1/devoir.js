var selects = document.getElementsByTagName('select');
var elms = document.getElementsByTagName('p').querySelectorAll("[id='sos']");
function requis() {
    for(let i =0;i<selects.length; i++){
        if (selects[i].selectedIndex == ""){
            var ide = elms[i].id;
            document.getElementById(ide).innerHTML = "Champs requis";
            
            
        }
    }
    
    window.location = select.options[select.selectedIndex].getAttribute('href');
}
function effacer(){
    for(let i=0;i<selects.length;i++){
        selects[i].selectedIndex = "0";
    }
}
