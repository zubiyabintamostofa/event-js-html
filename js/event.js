function makePink(){
    document.body.style.background='pink'
}



const blueButton=document.getElementById('blue-button');
        blueButton.onclick= makeBlue;

        function makeBlue(){
            document.body.style.background='blue'
        }


        const greenButton=document.getElementById('make-green-button');
        //anonymous function
        greenButton.onclick=function m(){
            document.body.style.background='green'
        }
    