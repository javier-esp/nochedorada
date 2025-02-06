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
  primerOponente = 'participantes/gloglo.png'
  segundoOponente = 'participantes/shadoune.png'
  voltearPrimera = false
  voltearSegunda = false
  jugador1 = true
  quitardelayenunmomento = true
  cursor = true
  ngOnInit(){
    setTimeout(() => this.quitardelayenunmomento = false, 3500);
  }

  ejecutarAlgo(nombre:string) {
    console.log(nombre);

    const participante = this.listadeparticipantes.find(p => p.nombre === nombre);
    
    if (participante) {
        console.log("Foto:", participante.fotoCara);
        if(this.jugador1 == true){
          
          if(participante.viendoA == 'izquierda'){
            // invertir ostias
            this.voltearPrimera = true
          }else{
            this.voltearPrimera = false
          }
          this.primerOponente = participante.fotoMascara
          this.activarAnimacionizquierda()
        }else{
          
          if(participante.viendoA == 'derecha'){
            // invertir ostias
            this.voltearSegunda = true
          }else{
            this.voltearSegunda = false
          }
          this.segundoOponente = participante.fotoMascara
          this.activarAnimacionderecha()
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
      viendoA: 'izquierda'
    },
    {
      nombre : 'lapiinky',
      fotoCara : 'lapiinky-cara.png',
      fotoMascara: 'lapiinky-cara.png',
      viendoA: 'izquierda'
    },
    {
      nombre : 'zully',
      fotoCara : 'zully-cara.png',
      fotoMascara: 'zully-cara.png',
      viendoA: 'derecha'
    },
    {
      nombre : 'gloglo',
      fotoCara : 'gloglo-cara.png',
      fotoMascara: 'participantes/gloglo.png',
      viendoA: 'derecha'
    },
    {
      nombre : 'shadoune',
      fotoCara : 'shadoune-cara.png',
      fotoMascara: 'participantes/shadoune.png',
      viendoA: 'izquierda'
    },
    {
      nombre : 'smash',
      fotoCara : 'smash-cara.png',
      fotoMascara: 'participantes/smash.png',
      viendoA: 'derecha'
    },
    {
      nombre : 'fanodrick',
      fotoCara : 'fanodrick-cara.png',
      fotoMascara: 'participantes/fanodric.png',
      viendoA: 'derecha'
    },
    {
      nombre : 'cristorata',
      fotoCara : 'cristorata-cara.png',
      fotoMascara: 'participantes/cristorata.png',
      viendoA: 'derecha'
    },
    {
      nombre : 'canita',
      fotoCara : 'canita-cara.png',
      fotoMascara: 'participantes/canita.png',
      viendoA: 'izquierda'
    },
    {
      nombre : 'dafonseka',
      fotoCara : 'dafonseka-cara.png',
      fotoMascara: 'participantes/dafonseka.png',
      viendoA: 'izquierda'
      
    },
  ]
}
