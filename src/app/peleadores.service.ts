import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeleadoresService {

  constructor() { }

  getPeleadores() {
    return [
      {
        nombre : 'kingteka',
        fotoCara : 'kingteka-cara.png',
        fotoMascara: 'participantes/kingteka.png',
        viendoA: 'izquierda',
        rival: 'smash',
        href: 'https://x.com/LaNocheDorada/status/1886598884790620591',
        audio: 'audios/kingteka.wav',
        metadata: {
          nombre:'kingteka',
          peso:'45',
          categoriaDePeso:'Peso Mosca Ligero',
          estatura:'170',
          manoDominante:'Derecha',
          entrenador:'Padre Domingo',
          puntoFuerte:'Dota2',
          puntoDebil:'Rust',
          guanteTamano:'Mediano',
        }
      },
      {
        nombre : 'lapiinky',
        fotoCara : 'lapiinky-cara.png',
        fotoMascara: 'participantes/lapiinky.png',
        viendoA: 'izquierda',
        rival: 'zully',
        href: 'https://x.com/LaNocheDorada/status/1886594461339128178',
        audio: 'audios/lapinky.wav',
        metadata: {
          nombre:'lapiinky',
          peso:'46',
          categoriaDePeso:'Peso Mosca',
          estatura:'171',
          manoDominante:'Izquierda',
          entrenador:'Emikukis',
          puntoFuerte:'Dota2',
          puntoDebil:'Rust',
          guanteTamano:'Mediano',
        }
      },
      {
        nombre : 'zully',
        fotoCara : 'zully-cara.png',
        fotoMascara: 'participantes/zully.png',
        viendoA: 'derecha',
        rival: 'lapiinky',
        href: 'https://x.com/LaNocheDorada/status/1886594461339128178',
        audio: 'audios/sully.wav',
        metadata: {
          nombre:'zully',
          peso:'47',
          categoriaDePeso:'Peso Gallo',
          estatura:'172',
          manoDominante:'Derecha',
          entrenador:'sivy',
          puntoFuerte:'Dota2',
          puntoDebil:'Rust',
          guanteTamano:'Mediano',
        }
      },
      {
        nombre : 'gloglo',
        fotoCara : 'gloglo-cara.png',
        fotoMascara: 'participantes/gloglo.png',
        viendoA: 'derecha',
        rival: 'shadoune',
        href: 'https://x.com/LaNocheDorada/status/1886590093189648410',
        audio: 'audios/glogloking.wav',
        metadata: {
          nombre:'gloglo',
          peso:'48',
          categoriaDePeso:'Peso Ligero',
          estatura:'173',
          manoDominante:'Izquierda',
          entrenador:'Darick',
          puntoFuerte:'Dota2',
          puntoDebil:'Rust',
          guanteTamano:'Mediano',
        }
      },
      {
        nombre : 'shadoune',
        fotoCara : 'shadoune-cara.png',
        fotoMascara: 'participantes/shadoune.png',
        viendoA: 'izquierda',
        rival: 'gloglo',
        href: 'https://x.com/LaNocheDorada/status/1886590093189648410',
        audio: 'audios/shadune.wav',
        metadata: {
          nombre:'shadoune',
          peso:'49',
          categoriaDePeso:'Peso Welter Ligero',
          estatura:'174',
          manoDominante:'Derecha',
          entrenador:'zein',
          puntoFuerte:'Dota2',
          puntoDebil:'Rust',
          guanteTamano:'Mediano',
        }
      },
      {
        nombre : 'smash',
        fotoCara : 'smash-cara.png',
        fotoMascara: 'participantes/smash.png',
        viendoA: 'derecha',
        rival: 'kingteka',
        href: 'https://x.com/LaNocheDorada/status/1886598884790620591',
        audio: 'audios/smash.wav',
        metadata: {
          nombre:'smash',
          peso:'50',
          categoriaDePeso:'Peso Welter',
          estatura:'175',
          manoDominante:'Izquierda',
          entrenador:'sandra',
          puntoFuerte:'Dota2',
          puntoDebil:'Rust',
          guanteTamano:'Mediano',
        }
      },
      {
        nombre : 'fanodrick',
        fotoCara : 'fanodrick-cara.png',
        fotoMascara: 'participantes/fanodric.png',
        viendoA: 'derecha',
        rival: 'dafonseka',
        href: 'https://x.com/LaNocheDorada/status/1886602754325393871',
        audio: 'audios/fanodrik.wav',
        metadata: {
          nombre:'fanodrick',
          peso:'51',
          categoriaDePeso:'Peso Medio',
          estatura:'176',
          manoDominante:'Derecha',
          entrenador:'el mas guapo',
          puntoFuerte:'Dota2',
          puntoDebil:'Rust',
          guanteTamano:'Mediano',
        }
      },
      {
        nombre : 'cristorata',
        fotoCara : 'cristorata-cara.png',
        fotoMascara: 'participantes/cristorata.png',
        viendoA: 'derecha',
        rival: 'canita',
        href: 'https://x.com/LaNocheDorada/status/1886610577331458357',
        audio: 'audios/cristorata.wav',
        metadata: {
          nombre:'cristorata',
          peso:'52',
          categoriaDePeso:'Peso Semipesado',
          estatura:'177',
          manoDominante:'Izquierda',
          entrenador:'el guapo',
          puntoFuerte:'Dota2',
          puntoDebil:'Rust',
          guanteTamano:'Mediano',
        }
      },
      {
        nombre : 'canita',
        fotoCara : 'canita-cara.png',
        fotoMascara: 'participantes/canita.png',
        viendoA: 'izquierda',
        rival: 'cristorata',
        href: 'https://x.com/LaNocheDorada/status/1886610577331458357',
        audio: 'audios/canita.wav',
        metadata: {
          nombre:'canita',
          peso:'53',
          categoriaDePeso:'Peso Crucero',
          estatura:'178',
          manoDominante:'Derecha',
          entrenador:'cañito',
          puntoFuerte:'Dota2',
          puntoDebil:'Rust',
          guanteTamano:'Mediano',
        }
      },
      {
        nombre : 'dafonseka',
        fotoCara : 'dafonseka-cara.png',
        fotoMascara: 'participantes/dafonseka.png',
        viendoA: 'izquierda',
        rival: 'fanodrick',
        href: 'https://x.com/LaNocheDorada/status/1886602754325393871',
        audio: 'audios/dafonseka.wav',
        metadata: {
          nombre:'dafonseka',
          peso:'54',
          categoriaDePeso:'Peso Pesado',
          estatura:'179',
          manoDominante:'Izquierda',
          entrenador:'gerardo',
          puntoFuerte:'Dota2',
          puntoDebil:'Rust',
          guanteTamano:'Mediano',
        }
      },
    ]
  }
}
