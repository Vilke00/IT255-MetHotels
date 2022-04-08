import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Smestaj } from 'src/app/models/Smestaj';


@Component({
  selector: 'app-smestaj',
  templateUrl: './smestaj.component.html',
  styleUrls: ['./smestaj.component.css']
})
export class SmestajComponent implements OnInit {

  pretrazivac: string;
  @Output() passValue = new EventEmitter();

  smestaj: Smestaj = {
    naziv: '',
    mesto: '',
    ocena: null,
    cena: null
  };

  showUserForm: boolean = false;
  smestaji: Smestaj[];
  enableAdd: boolean = true;

  constructor() { this.pretrazivac = ""}

  ngOnInit(): void {
    this.smestaji = [
      {
        naziv: 'Apartamani Knez',
        mesto: 'Zlatibor',
        ocena: 8.5,
        cena: 6000,
        slika: 'https://loremflickr.com/300/100/apartments ?random=1'
      },
      {
        naziv: 'Villa Akademik',
        mesto: 'Tara',
        ocena: 7,
        cena: 4500,
        slika: 'https://loremflickr.com/300/100/apartments ?random=2'
      },
      {
        naziv: 'Kopaonik Resort',
        mesto: 'Kopaonik',
        ocena: 9.3,
        cena: 9999,
        slika: 'https://loremflickr.com/300/100/apartments ?random=3'
      }
    ];
  }
  id = 3;

  dodajApartman(){
    this.smestaj.slika = `https://loremflickr.com/300/100/apartments ?random=${this.id}`;
    this.id++;
    this.smestaji.unshift(this.smestaj);

    this.smestaj = {
      naziv: '',
      mesto: '',
      ocena: null,
      cena: null
    };
  }

  onSubmit(e) {
    e.preventDefault();
  }

  pretrazi(): void {
    this.passValue.emit(this.pretrazivac);
  }

  promesaj() {
    let index = this.smestaji.length
    let randomIndex;

    while (index != 0) {
      randomIndex = Math.floor(Math.random() * index);
      index--;

      [this.smestaji[index],
       this.smestaji[randomIndex]] = [
        this.smestaji[randomIndex],
         this.smestaji[index]
        ];
    }
  }

}
