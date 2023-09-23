let corrAnswers =["A1","B2","A3","C4","A5","B6","C7","C8","A9"];
function getscore(){
    var score =0;
    var radios = document.getElementsByTagName('input');
    var j=0;

    
    for (var i=0; i<radios.length; i++){
        var selValue="";
        
        if (radios[i].type =='radio' && radios[i].checked) {
            
            selValue = radios[i].value;
            
            if(selValue == corrAnswers[j]){
                score = score+1;
                j=j+1
            }
            else{
                score = score-1;
            }
            


        }

    }
    alert("your score is: "+score.toString());
}
function check(){
    count=0;
    var radios = document.getElementsByTagName('input');
    for (var i=0; i<radios.length; i++){
        
        
        if (radios[i].type =='radio' && radios[i].checked) {
            count=coun+1;

            
            
            


        }

    }
    


}