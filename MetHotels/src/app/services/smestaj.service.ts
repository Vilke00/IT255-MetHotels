import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Smestaj } from '../models/Smestaj';

@Injectable({
  providedIn: 'root'
})
export class SmestajService {

  smestaji: Smestaj[];

  constructor() { 
    this.smestaji = [
      {
        id: 1,
        naziv: 'Apartamani Knez',
        mesto: 'Zlatibor',
        ocena: 8.5,
        cena: 6000,
        slika: 'https://loremflickr.com/300/100/apartments ?random=1'
      },
      {
        id: 2,
        naziv: 'Villa Akademik',
        mesto: 'Tara',
        ocena: 7,
        cena: 4500,
        slika: 'https://loremflickr.com/300/100/apartments ?random=2'
      },
      {
        id: 3,
        naziv: 'Kopaonik Resort',
        mesto: 'Kopaonik',
        ocena: 9.3,
        cena: 9999,
        slika: 'https://loremflickr.com/300/100/apartments ?random=3'
      }
    ];
  }

  getSmestaji(): Observable<Smestaj[]> {
    this.smestaji = [
      {
        id: 1,
        naziv: 'Apartamani Knez',
        mesto: 'Zlatibor',
        ocena: 8.5,
        cena: 6000,
        slika: 'https://loremflickr.com/300/100/apartments ?random=1'
      },
      {
        id: 2,
        naziv: 'Villa Akademik',
        mesto: 'Tara',
        ocena: 7,
        cena: 4500,
        slika: 'https://loremflickr.com/300/100/apartments ?random=2'
      },
      {
        id: 3,
        naziv: 'Kopaonik Resort',
        mesto: 'Kopaonik',
        ocena: 9.3,
        cena: 9999,
        slika: 'https://loremflickr.com/300/100/apartments ?random=3'
      }
    ];
    return of(this.smestaji);
  }

  deleteRoom(smestaj: Smestaj) {
    this.smestaji.forEach((curr, i) => {
      if (smestaj.id === curr.id) {
        console.log('Nasao');
        
        this.smestaji.splice(i, 1);
      }
    });
  }

  updateRoom(smestaj: Smestaj) {

    this.smestaji.forEach((curr, i) => {
      if (smestaj.id === curr.id) {
        this.smestaji.splice(i, 1);
      }
    });

    smestaj.naziv = 'Soba ' + this.getRandomInt(10, 20);

    smestaj.cena = this.getRandomInt(55, 95);

    this.smestaji.unshift(smestaj);
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
