import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultadosiete',
  templateUrl: './resultadosiete.page.html',
  styleUrls: ['./resultadosiete.page.scss'],
})
export class ResultadosietePage implements OnInit {

  constructor(public actRoute: ActivatedRoute) { }

  mens1: any; mens2: any; mens3: any; mens4: any;
  epe1: any; epe2: any; epe3: any; epe4: any;
  eva1: any; eva2: any; eva3: any; eva4: any; prom: any;
  prome: any; prueba: any; a: any;
  b: any; c: any; mens: any;
  ngOnInit() {
    this.prome = this.actRoute.snapshot.paramMap.get('promeEx');
    if (this.prome == "" || this.prome<= 0.12) {
      this.prueba = "No debes dar examen";
      this.a = "";
    } else {
      this.prueba = "";
      this.a = this.prome;
    }
    if (this.prome > 7) {
      this.b = "La nota del examen es superior a ";
      this.c = "7, Has reprobado completamente";
    } else {
      this.b = "";
    }

    this.epe1 = this.actRoute.snapshot.paramMap.get('EPE1');
    this.epe2 = this.actRoute.snapshot.paramMap.get('EPE2');
    this.epe3 = this.actRoute.snapshot.paramMap.get('EPE3');
    this.epe4 = this.actRoute.snapshot.paramMap.get('EPE4');
    this.eva1 = this.actRoute.snapshot.paramMap.get('EVA1');
    this.eva2 = this.actRoute.snapshot.paramMap.get('EVA2');
    this.eva3 = this.actRoute.snapshot.paramMap.get('EVA3');
    this.eva4 = this.actRoute.snapshot.paramMap.get('EVA4');
    this.prom = this.actRoute.snapshot.paramMap.get('promedio');

    if (this.epe1 < 4 && this.epe2 < 4 && this.epe3 < 4 && this.epe4 < 4) {
      this.mens = "Tienes solemnes Rojas:";
      this.mens1 = "EPE1";
      this.mens2 = ", EPE2";
      this.mens3 = ", EPE3";
      this.mens4 = ", EPE4";

    } else if (this.epe1 < 4 && this.epe2 < 4 && this.epe3 < 4) {
      this.mens = "Tienes solemnes Rojas:";
      this.mens1 = "EPE1";
      this.mens2 = ", EPE2";
      this.mens3 = ", EPE3";

    } else if (this.epe1 < 4 && this.epe2 < 4 && this.epe4 < 4) {
      this.mens = "Tienes solemnes Rojas:";
      this.mens1 = "EPE1";
      this.mens2 = ", EPE2";
      this.mens4 = ", EPE4";

    } else if (this.epe1 < 4 && this.epe3 < 4 && this.epe4 < 4) {
      this.mens = "Tienes solemnes Rojas:";
      this.mens1 = "EPE1";
      this.mens3 = ", EPE3";
      this.mens4 = ", EPE4";

    } else if (this.epe2 < 4 && this.epe3 < 4 && this.epe4 < 4) {
      this.mens = "Tienes solemnes Rojas:";
      this.mens2 = "EPE2";
      this.mens3 = ", EPE3";
      this.mens4 = ", EPE4";

    } else if (this.epe1 < 4 && this.epe2 < 4) {

      this.mens = "Tienes solemnes Rojas:";
      this.mens1 = "EPE1";
      this.mens2 = ", EPE2";

    } else if (this.epe1 < 4 && this.epe3 < 4) {

      this.mens = "Tienes solemnes Rojas:";
      this.mens1 = "EPE1";
      this.mens3 = ", EPE3";

    } else if (this.epe1 < 4 && this.epe4 < 4) {
      this.mens = "Tienes solemnes Rojas:";
      this.mens1 = "EPE1";
      this.mens4 = ", EPE4";
    } else if (this.epe2 < 4 && this.epe3 < 4) {
      this.mens = "Tienes solemnes Rojas:";
      this.mens2 = "EPE2";
      this.mens3 = ", EPE3";
    }else if (this.epe2 < 4 && this.epe4 < 4) {
      this.mens = "Tienes solemnes Rojas:";
      this.mens2 = "EPE2";
      this.mens4 = ", EPE4";
    }else if (this.epe3 < 4 && this.epe4 < 4) {
      this.mens = "Tienes solemnes Rojas:";
      this.mens3 = "EPE3";
      this.mens4 = ", EPE4";
    } else if (this.epe1 < 4) {
      this.mens = "Tienes una solemnes Roja:";
      this.mens1 = "EPE1";
    } else if (this.epe2 < 4) {
      this.mens = "Tienes una solemnes Roja:";
      this.mens2 = "EPE2";
    } else if (this.epe3 < 4) {
      this.mens = "Tienes una solemnes Roja:";
      this.mens3 = "EPE3";
    }else if (this.epe4 < 4) {
      this.mens = "Tienes una solemnes Roja:";
      this.mens4 = "EPE4";
    } else {
      this.mens = "";
      this.mens1 = "";
      this.mens2 = "";
      this.mens3 = "";
      this.mens4 = "";

    }
  }

}

