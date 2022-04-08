import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Smestaj } from 'src/app/models/Smestaj';
import { SmestajService } from 'src/app/services/smestaj.service';

@Component({
  selector: 'app-smestaj',
  templateUrl: './smestaj.component.html',
  styleUrls: ['./smestaj.component.css'],
})
export class SmestajComponent implements OnInit {
  pretrazivac: string;
  @Output() passValue = new EventEmitter();
  @Output() zaBrisanje: EventEmitter<any> = new EventEmitter();

  smestaj: Smestaj = {
    id: null,
    naziv: '',
    mesto: '',
    ocena: null,
    cena: null,
  };

  showUserForm: boolean = false;
  smestaji: Smestaj[];
  enableAdd: boolean = true;

  constructor(private smestajService: SmestajService) {
    this.pretrazivac = '';
  }

  ngOnInit(): void {
    this.smestajService.getSmestaji().subscribe((smestaji) => {
      this.smestaji = smestaji;
    });
  }

  addSmestaj(smestaj: Smestaj) {
    this.smestaji.unshift(smestaj);
  }

  onDelete(smestaj: Smestaj) {
    if (confirm('Da li zaista zelite da obrisete ovaj zapis?')) {
      this.zaBrisanje.emit();
      this.smestajService.deleteRoom(smestaj);
    }
  }

  onUpdate(smestaj: Smestaj) {
    this.smestajService.updateRoom(smestaj);
  }

  pretrazi(): void {
    this.passValue.emit(this.pretrazivac);
  }

  promesaj() {
    let index = this.smestaji.length;
    let randomIndex;

    while (index != 0) {
      randomIndex = Math.floor(Math.random() * index);
      index--;

      [this.smestaji[index], this.smestaji[randomIndex]] = [
        this.smestaji[randomIndex],
        this.smestaji[index],
      ];
    }
  }

  kupi(smestaj: Smestaj) {

    const brojNoci: number = +prompt('Broj noci:');
    console.log(`Ukupna cena: ${this.smestajService.getPrice(brojNoci, smestaj)}`);
  }
}
