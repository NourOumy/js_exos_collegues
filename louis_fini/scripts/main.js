let input1 = document.querySelector('.input1'),
    input2 = document.querySelector('.input2'),
    button = document.querySelector('.button'),
    result = document.querySelector('.result')

    function compareEmail(email1,email2){
        if(email1 == email2){
            result.innerHTML=`Adresse mail correcte`

        }else{
            result.innerHTML=`Adresse mail incorrecte, veuillez réessayer`
            input2.value= ""
        }
    }

    button.addEventListener("click", function(){
        compareEmail(input1,input2)
    })