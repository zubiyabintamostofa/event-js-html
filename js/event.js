function makePink(){
    document.body.style.background='pink'
}



const blueButton=document.getElementById('blue-button');
        blueButton.onclick= makeBlue;

        function makeBlue(){
            document.body.style.background='blue'
        }


        const greenButton=document.getElementById('make-green-button');
        //anonymous function er niyom
        greenButton.onclick=function m(){
            document.body.style.background='green'
        }
    


        const goldenButton=document.getElementById('make-goldenrod');
        goldenButton.addEventListener('click',makeGoldenrod)
        function makeGoldenrod(){
         document.body.style.background='darkCyan'
        }
//addevenlisener


        const paleButton=document.getElementById('make-pale')
        paleButton.addEventListener('click',function makePale()
        {
           document.body.style.backgroundColor='paleTurquoise' 
        })

        //direct shutcut
        document.getElementById('make-t').addEventListener('click' ,function(){
            document.body.style.backgroundColor='Tomato'
        })