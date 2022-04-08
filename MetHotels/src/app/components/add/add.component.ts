import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Smestaj } from 'src/app/models/Smestaj';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  public roomForm: FormGroup;

  @Output() roomToAdd: EventEmitter<Smestaj> = new EventEmitter();

  smestaj: Smestaj = {};

  smestaji: Smestaj[];

  constructor() {}

  ngOnInit(): void {}

  id = 3;

  dodajApartman() {
    this.smestaj.slika = `https://loremflickr.com/300/100/apartments ?random=${this.id}`;

    this.smestaj.id = 4;

    this.roomToAdd.emit(this.smestaj);
  }

  onSubmit(e) {
  }
}
