alert("solo hay tres canciones")

const music1 = document.createElement("audio")
music1.src="RADWIMPS.mp3"
 const music2 =  document.createElement("audio")
music2.src="KANA.mp3"   
const music3=  document.createElement("audio")
music3.src="ASIAN.mp3"

const progresoBarra = document.getElementById('progresoDuracion')
document.createElement('div')


const musicas = [music1,music2,music3]
console.log(musicas)
var playlist=0;
 
 const nombres=[{
 	title:'audio1',
 	img:'asasa'
 },{
 	title:'audio2',
 	img:'asasa'
 },{
 	title:'audio3',
 	img:'asasa'
 }]
 var  im=0;

 /*const card_music= document.querySelector('.card-music')
 const text= document.createElement('div')
 text.innerHTML=`
 			<div class="primer_aud">
					<h3>Music in course..${nombres[0].title}</h3>
				</div>

 `;
 card_music.appendChild(text);
*/



//play music
const play = document.querySelector('.play')
play.addEventListener('click', function reproducir(){
	
if (playlist < musicas.length) {
	 musicas[playlist].play();
	 musicas[playlist].addEventListener('ended', siguiente)
}
	function siguiente(){
		if (musicas[playlist].paused) {
			musicas[playlist].pause();
	        playlist++;
	        reproducir()
		}
	 
}
 
document.querySelector('.play').classList.add('ocultar')
document.getElementById('pausa').removeAttribute("hidden")

})

//pausar canciones
const pasued = document.getElementById('pausa')
pasued.addEventListener('click', function(){
	musicas[playlist].pause();
	if (musicas[playlist].pause) {
		console.log('music in pause')
	}
	document.querySelector('.play').classList.remove('ocultar')

})
 


//barra de duracon
music1.addEventListener('timeupdate', function(){
	const duracionTotal = music1.duration;
	const tiempoActual = music1.currentTime;
	const porcentajeProgreso = (tiempoActual / duracionTotal) * 100;
	progresoDuracion.style.width = porcentajeProgreso + '%';
});
music2.addEventListener('timeupdate', function(){
	const duracionTotal = music2.duration;
	const tiempoActual = music2.currentTime;
	const porcentajeProgreso = (tiempoActual / duracionTotal) * 100;
	progresoDuracion.style.width = porcentajeProgreso + '%';
})
music3.addEventListener('timeupdate', function(){
	const duracionTotal = music3.duration;
	const tiempoActual = music3.currentTime;
	const porcentajeProgreso = (tiempoActual / duracionTotal) * 100;
	progresoDuracion.style.width = porcentajeProgreso + '%';
})
//verificar el segundo actual
music1.addEventListener("timeupdate", () => {
  console.log("Current second: ", Number.parseInt(music1.currentTime));
});


//sirve para cambiar musica
const next = document.querySelector('.next')

next.addEventListener('click', function(){
	musicas[playlist].pause();
	musicas[playlist].currentTime = 0;
 if (playlist < musicas.length - 1) {	 
  playlist++;

  musicas[playlist].play();
}
})
//retrocer canciones

const before = document.querySelector('.before')
before.addEventListener('click', function(){
	musicas[playlist].pause();
	musicas[playlist].currentTime = 0;
 if (playlist > 0) {	 
  playlist--;

  musicas[playlist].play();
}
})
 
console.log(musicas.length)
 
 









 
 
 