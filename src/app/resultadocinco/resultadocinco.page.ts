import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultadocinco',
  templateUrl: './resultadocinco.page.html',
  styleUrls: ['./resultadocinco.page.scss'],
})
export class ResultadocincoPage implements OnInit {

  constructor(public actRoute: ActivatedRoute) { }

  mens1: any; mens2: any; mens3: any; mens4: any;
  epe1: any; epe2: any; epe3: any; ex:any;
  eva1: any; eva2: any; eva3: any; prom: any;
  prome: any; prueba: any; a: any;
  b: any; c: any; mens: any;
  ngOnInit() {

    

    this.epe1 = this.actRoute.snapshot.paramMap.get('EPE1');
    this.epe2 = this.actRoute.snapshot.paramMap.get('EPE2');
    this.epe3 = this.actRoute.snapshot.paramMap.get('EPE3');
    this.eva1 = this.actRoute.snapshot.paramMap.get('EVA1');
    this.eva2 = this.actRoute.snapshot.paramMap.get('EVA2');
    this.eva3 = this.actRoute.snapshot.paramMap.get('EVA3');
    this.ex = this.actRoute.snapshot.paramMap.get('EX');
    this.prom = this.actRoute.snapshot.paramMap.get('promedio');
    this.prueba = this.actRoute.snapshot.paramMap.get('promepon');

    if (this.prueba <= 3.94  ) {
      this.b="has reprobado"
    }else{
      this.b="has Aprobado!";
    }
  }

}

