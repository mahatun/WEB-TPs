var inputs = document.getElementsByTagName('input');
function checkRadio(){
    var radios = document.getElementsByName('civilite');

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return true;
        }
    }

    return false;
}
function check(elem){

    if ( elem == inputs[3]){
        if (checkRadio() == false){
            alert("Check one radio button please !");
        }
        
    }
    else{
        for(i=4;i<inputs.length;i++){
            if( inputs[i-1].value == ""){
                inputs[i-1].focus();
                break;
               
            
                
            }
            
        }
    }


}

/*var selectmois = document.getElementById('mois');
var selectannee = document.getElementById('annee');
*/


/*var mois = document.getElementById("jour").innerHTML;
var annee= document.getElementById("jour").innerHTML;
*/

/*var date = new Date("0"+jour.toString()+"/"+"0"+mois.toString()+"/"+annee.toString());
var month_diff = Date.now() - date.getTime();  
var age_dt = new Date(month_diff);   
var year = age_dt.getUTCFullYear();  
var age = Math.abs(year - 1970); 
*/
function age(){
    var selectjour = document.getElementById('jour');
    var jour =selectjour.options[selectjour.selectedIndex].innerHTML;

    var selectmois = document.getElementById('mois');
    var mois = selectmois.options[selectmois.selectedIndex].innerHTML;

    var selectannee = document.getElementById('annee');
    var annee = selectannee.options[selectannee.selectedIndex].innerHTML;


    var date = new Date("0"+jour.toString()+"/"+"0"+mois.toString()+"/"+annee.toString());
    var month_diff = Date.now() - date.getTime();  
    var age_dt = new Date(month_diff);   
    var year = age_dt.getUTCFullYear();  
    var age = Math.abs(year - 1970); 
    alert(age);

}




