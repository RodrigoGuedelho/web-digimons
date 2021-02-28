import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Digimon } from 'src/app/shared/models/Digimon. model';
import { DigimonService } from 'src/app/shared/service/digimon.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  digimons : Digimon [] = [];
  digimonSorteio : Digimon = {"name":"Koromon","img":"https://digimon.shadowsmith.com/img/koromon.jpg","level":"In Training"};
  public digimonForm : FormGroup = new FormGroup({});

  constructor(
      private fb : FormBuilder,
      public api: DigimonService
    ) {

   }

  ngOnInit(): void {

    this.findAllDigimons();
    this.digimonForm = this.fb.group({name: [""]});
  }

  findAllDigimons() {
    this.api.findAllDigimon().subscribe(data => {
      this.digimons = data;
    });
  }

  pesquisar() : void {
    if  (this.digimonForm.value.name !== "" &&  this.digimonForm.value.name !== undefined
      && this.digimonForm.value.name !== null) {
        this.api.findByNameDigimon(this.digimonForm.value.name).subscribe(data => {
          this.digimons = data;
        });
    } else  {
      this.findAllDigimons();
    }
  }

  async sorteio() {
    let numeroSorteio = Math.floor(Math.random() * this.digimons.length);

    await this.digimons.forEach(digimon => {

      setTimeout( () => {
        this.digimonSorteio = digimon;
      },  1000);

    });

    setTimeout( () => {
      this.digimonSorteio = this.digimons[numeroSorteio];
    },  2000);


  }
}
