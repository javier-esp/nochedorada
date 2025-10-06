import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PeleadoresService } from './peleadores.service';

interface DataEstadisticas {
  nombre: string;
  peso: string;
  categoriaDePeso: string;
  estatura: string;
  manoDominante: string;
  entrenador: string;
  puntoFuerte: string;
  puntoDebil: string;
  guanteTamano: string;
}

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private peleadoresService: PeleadoresService) {}
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
  estadisticasDeDerecha = true
  estadisticasAbiertas = false
  dataEstadisticas : DataEstadisticas | undefined
  ngOnInit(){
    setTimeout(() => this.quitardelayenunmomento = false, 3500);

    this.mostrarversusTime = setTimeout(() => this.mostrarversus = true, 2800);
    setTimeout(() => {
      let imagen = document.getElementById('imagen_opacidad');
      if(imagen != null)
        imagen.style.display = 'none'
    }, 3500);

  }
  peleadores = true
  imagenDerechaClick(data:string){
    
    if(!this.estadisticasAbiertas){
      let listadeparticipantes = this.peleadoresService.getPeleadores();
      const participante = listadeparticipantes.find(p => p.fotoMascara === data);
      this.dataEstadisticas = participante?.metadata
      this.estadisticasAbiertas = true
      console.log("shadoune click");
      let imagen = document.getElementById('imagenamover');
      if(imagen != null){
        (imagen as any).style.viewTransitionName = 'imagen-seleccionada';
        (document as any).startViewTransition(() => {
          this.abrirEstadisticas('derecha')
        });
      }
      
      

      console.log(data)
    }
    
  }

  imagenIzquierdaClick(data:string){
    console.log(this.estadisticasAbiertas)
    if(!this.estadisticasAbiertas){
      let listadeparticipantes = this.peleadoresService.getPeleadores();
      const participante = listadeparticipantes.find(p => p.fotoMascara === data);
      this.dataEstadisticas = participante?.metadata
      this.estadisticasAbiertas = true
      let imagen = document.getElementById('iamgenDeIzquierda');
      if(imagen != null){
        (imagen as any).style.viewTransitionName = 'imagen-seleccionada';
        (document as any).startViewTransition(() => {
          this.abrirEstadisticas('izquierda')
        });
      }
    }
    
  }

  async imagenDetalle(){
    console.log('imagenDetalleIzquierda');
    let animacion = (document as any).startViewTransition(() => {
      if(this.estadisticasDeDerecha){
        this.cerrarEstadisticas('derecha')
      }
      else{
        this.cerrarEstadisticas('izquierda')
      }
    });
    await animacion.finished
    let imagen = null
    if(this.estadisticasDeDerecha){
      imagen = document.getElementById('imagenamover');
    }else{
      imagen = document.getElementById('iamgenDeIzquierda');
    }
    if(imagen != null){
      (imagen as any).style.viewTransitionName = 'none';
    }
    this.estadisticasAbiertas = false
  }

  cerrarEstadisticas(lado:string){
    let imagenIzquierda = document.getElementById('iamgenDeIzquierda')
    let objetivo = document.getElementById('mostrarDerecha')
    let imagen = document.getElementById('imagenamover')
    let logoversus = document.getElementById('logoversus')
    let peleadores = document.getElementById('peleadores')
    let botonRegresar = document.getElementById('botonRegresar')
    let contenedor = document.getElementById('contenedor')
    if(imagenIzquierda != null && imagen != null && logoversus != null && peleadores != null && botonRegresar != null && contenedor != null){
      logoversus.style.display = 'block'
      peleadores.style.display = 'flex'
      contenedor.style.justifyContent = 'end'
      botonRegresar.style.display = 'none'
      if(lado == 'derecha'){
        if(!this.voltearSegunda){
          imagen.style.transform = 'none'
        }else{
          imagen.style.transform = 'scaleX(-1)'
        }
        console.log('derecha')
        imagenIzquierda.style.display = 'block'
        
        
        
        objetivo?.append(imagen)
      }
      else if(lado == 'izquierda'){
        let objetivo2 = document.getElementById('mostrarIzquierda')
        imagen.style.display = 'block'
        if(!this.voltearPrimera){
          imagenIzquierda.style.transform = 'none'
        }else{
          imagenIzquierda.style.transform = 'scaleX(-1)'
        }
        if(objetivo2 != null){
          objetivo2.append(imagenIzquierda)
        }
        
      }
      
    }
      
  }

  abrirEstadisticas(lado:string){
    let imagen = document.getElementById('imagenamover')
      
    let imagenIzquierda = document.getElementById('iamgenDeIzquierda')
    let objetivo = document.getElementById('mostrarIzquierda')
    let logoversus = document.getElementById('logoversus')
    let peleadores = document.getElementById('peleadores')
    let botonRegresar = document.getElementById('botonRegresar')
    let contenedor = document.getElementById('contenedor')
    if(lado == 'derecha' || lado == 'izquierda'){
      if (imagen != null  && logoversus != null && peleadores != null && contenedor != null){
        // objetivo?.removeChild(imagenIzquierda)
        
        logoversus.style.display = 'none'
        peleadores.style.display = 'none'
        contenedor.style.justifyContent = 'center'
        // boton.innerText = 'hola'
        // objetivo?.append(imagen,boton)
      }
    }
    if(lado == 'derecha'){
      
      // let boton = document.createElement('button')
      if (imagen != null && imagenIzquierda != null && botonRegresar != null ){
        if(this.voltearSegunda){
          imagen.style.transform = 'none'
        }else{
          imagen.style.transform = 'scaleX(-1)'
        }
        // objetivo?.removeChild(imagenIzquierda)
        imagenIzquierda.style.display = 'none'
        botonRegresar.style.display = 'block'
        // boton.innerText = 'hola'
        // objetivo?.append(imagen,boton)
        objetivo?.append(imagen)
        
        console.log(objetivo?.childNodes[1])
      }
      this.estadisticasDeDerecha = true
      // this.peleadores = false
      // this.mostrarizquierda = false
      // this.mostrarversus = false
    }
    else if(lado == 'izquierda'){
      
      let mostrarDerecha = document.getElementById('mostrarDerecha')
      if(mostrarDerecha != null && imagenIzquierda != null && imagen != null && botonRegresar != null){
        if(this.voltearPrimera){
          imagenIzquierda.style.transform = 'none'
        }else{
          imagenIzquierda.style.transform = 'scaleX(-1)'
        }
        imagen.style.display = 'none'
        botonRegresar.style.display = 'block'
        mostrarDerecha.append(imagenIzquierda)
      }
      this.estadisticasDeDerecha = false
    }
  }

  ejecutarAlgo(nombre:string) {
    this.sonido.pause()
    // console.log(nombre);
    let listadeparticipantes = this.peleadoresService.getPeleadores();
    const participante = listadeparticipantes.find(p => p.nombre === nombre);
    
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

}
