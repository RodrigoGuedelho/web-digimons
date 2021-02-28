import { Component, OnInit } from '@angular/core';
import { Digimon } from 'src/app/shared/models/Digimon. model';
import { DigimonService } from 'src/app/shared/service/digimon.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  digimons : Digimon [] = [];

  constructor(public api: DigimonService) {

   }

  ngOnInit(): void {
    this.findAllDigimons();
  }

  findAllDigimons() {
    this.api.findAllDigimon().subscribe(data => {
      this.digimons = data;
      console.log(this.digimons);
    });
  }

}
