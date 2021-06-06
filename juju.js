var numero;
var reloj;
var cuenta=60;
var ganador;

function jugar(){

   numero= Math.floor(Math.random()*1000)+1;
   reloj= setInterval(cronos,1000);
   cuenta=61;
   ganador=false;
   p1.disabled = false;
   p2.disabled = false;
   document.getElementById("mensaje").innerHTML="";
   document.getElementById("user1").value=0;
   document.getElementById("user2").value=0;
}

function cronos(){
   cuenta--;
   document.getElementById("tiempo").innerHTML=cuenta;
   if (cuenta==0 || ganador==true){
       clearInterval(reloj);
        if (ganador==false){
            document.getElementById("mensaje").innerHTML="No hay ganador :( ";
            document.getElementById("men2").innerHTML="  El numero oculto era " + numero;
            p1.disabled = true;
            p2.disabled = true;
        }
   }
}

function comparar(jugador){
    var numplay;
    if (jugador==1){
      numplay=document.getElementById("user1").value;
    }else{
      numplay=document.getElementById('user2').value;
    }

 if (numero==numplay){
     document.getElementById("mensaje").innerHTML="GANA EL JUGADOR " + jugador;
     ganador==true;
     p1.disabled = true;
     p2.disabled = true;
     clearInterval(reloj);
 }else if (numero>numplay){
      document.getElementById("mensaje").innerHTML="El numero aleatorio es mayor";
    }else{
  document.getElementById("mensaje").innerHTML="El  numero aleatorio es menor";
  }
}