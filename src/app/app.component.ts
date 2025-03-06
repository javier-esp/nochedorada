import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'noche-dorada';
  primerOponente = 'participantes/fanodric.png'
  primerOponenteNombre = 'fanodrick'
  segundoOponente = 'participantes/dafonseka.png'
  segundoOponenteNombre = 'dafonseka'
  voltearPrimera = false
  voltearSegunda = false
  jugador1 = true
  quitardelayenunmomento = true
  cursor = true
  mostrarversus = false
  mostrarversusTime:any
  sonido = new Audio('participante.audio')
  linkhref = 'https://x.com/LaNocheDorada/status/1886602754325393871'
  ngOnInit(){
    setTimeout(() => this.quitardelayenunmomento = false, 3500);
    
    this.mostrarversusTime = setTimeout(() => this.mostrarversus = true, 2800);

  }
  peleadores = true
  imagenDerechaClick(data:string){
    console.log("shadoune click")

    this.abrirEstadisticas('derecha')

    console.log(data)
  }

  abrirEstadisticas(lado:string){
    if(lado == 'derecha'){
      this.peleadores = false
      this.mostrarizquierda = false
      this.mostrarversus = false
    }
  }

  ejecutarAlgo(nombre:string) {
    this.sonido.pause()
    // console.log(nombre);

    const participante = this.listadeparticipantes.find(p => p.nombre === nombre);
    
    if (participante) {
        // console.log("Foto:", participante.fotoCara);
        if(this.jugador1 == true){
          
          if(participante.viendoA == 'izquierda'){
            // invertir ostias
            this.voltearPrimera = true
          }else{
            this.voltearPrimera = false
          }
          this.primerOponente = participante.fotoMascara
          this.primerOponenteNombre = participante.nombre
          this.activarAnimacionizquierda()
        }else{
          
          if(participante.viendoA == 'derecha'){
            // invertir ostias
            this.voltearSegunda = true
          }else{
            this.voltearSegunda = false
          }
          this.segundoOponente = participante.fotoMascara
          this.segundoOponenteNombre = participante.nombre
          this.activarAnimacionderecha()
        }

        // ejecutar sonido

        this.sonido = new Audio(participante.audio)
        this.sonido.play()

        if(this.primerOponenteNombre == participante.rival || this.segundoOponenteNombre == participante.rival){
          this.mostrarversus = true
          this.linkhref = participante.href
        }else{
          this.mostrarversus = false
          clearTimeout(this.mostrarversusTime);
        }
        
        this.jugador1 = !this.jugador1
        this.cursor = this.jugador1
    } else {
        console.log("No se encontró el participante.");
    }
}
mostrarizquierda = true;
mostrarderecha = true;
activarAnimacionizquierda() {
  this.mostrarizquierda = false; 
  setTimeout(() => this.mostrarizquierda = true, 1);
}
activarAnimacionderecha() {
  this.mostrarderecha = false;
  setTimeout(() => this.mostrarderecha = true, 1);
}
  listadeparticipantes = [
    {
      nombre : 'kingteka',
      fotoCara : 'kingteka-cara.png',
      fotoMascara: 'participantes/kingteka.png',
      viendoA: 'izquierda',
      rival: 'smash',
      href: 'https://x.com/LaNocheDorada/status/1886598884790620591',
      audio: 'audios/kingteka.wav'
    },
    {
      nombre : 'lapiinky',
      fotoCara : 'lapiinky-cara.png',
      fotoMascara: 'participantes/lapiinky.png',
      viendoA: 'izquierda',
      rival: 'zully',
      href: 'https://x.com/LaNocheDorada/status/1886594461339128178',
      audio: 'audios/lapinky.wav'
    },
    {
      nombre : 'zully',
      fotoCara : 'zully-cara.png',
      fotoMascara: 'participantes/zully.png',
      viendoA: 'derecha',
      rival: 'lapiinky',
      href: 'https://x.com/LaNocheDorada/status/1886594461339128178',
      audio: 'audios/sully.wav'
    },
    {
      nombre : 'gloglo',
      fotoCara : 'gloglo-cara.png',
      fotoMascara: 'participantes/gloglo.png',
      viendoA: 'derecha',
      rival: 'shadoune',
      href: 'https://x.com/LaNocheDorada/status/1886590093189648410',
      audio: 'audios/glogloking.wav'
    },
    {
      nombre : 'shadoune',
      fotoCara : 'shadoune-cara.png',
      fotoMascara: 'participantes/shadoune.png',
      viendoA: 'izquierda',
      rival: 'gloglo',
      href: 'https://x.com/LaNocheDorada/status/1886590093189648410',
      audio: 'audios/shadune.wav'
    },
    {
      nombre : 'smash',
      fotoCara : 'smash-cara.png',
      fotoMascara: 'participantes/smash.png',
      viendoA: 'derecha',
      rival: 'kingteka',
      href: 'https://x.com/LaNocheDorada/status/1886598884790620591',
      audio: 'audios/smash.wav'
    },
    {
      nombre : 'fanodrick',
      fotoCara : 'fanodrick-cara.png',
      fotoMascara: 'participantes/fanodric.png',
      viendoA: 'derecha',
      rival: 'dafonseka',
      href: 'https://x.com/LaNocheDorada/status/1886602754325393871',
      audio: 'audios/fanodrik.wav'
    },
    {
      nombre : 'cristorata',
      fotoCara : 'cristorata-cara.png',
      fotoMascara: 'participantes/cristorata.png',
      viendoA: 'derecha',
      rival: 'canita',
      href: 'https://x.com/LaNocheDorada/status/1886610577331458357',
      audio: 'audios/cristorata.wav'
    },
    {
      nombre : 'canita',
      fotoCara : 'canita-cara.png',
      fotoMascara: 'participantes/canita.png',
      viendoA: 'izquierda',
      rival: 'cristorata',
      href: 'https://x.com/LaNocheDorada/status/1886610577331458357',
      audio: 'audios/canita.wav'
    },
    {
      nombre : 'dafonseka',
      fotoCara : 'dafonseka-cara.png',
      fotoMascara: 'participantes/dafonseka.png',
      viendoA: 'izquierda',
      rival: 'fanodrick',
      href: 'https://x.com/LaNocheDorada/status/1886602754325393871',
      audio: 'audios/dafonseka.wav'
    },
  ]
}
