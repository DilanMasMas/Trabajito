import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { zip } from 'rxjs';
@Component({
  selector: 'app-resultadodos',
  templateUrl: './resultadodos.page.html',
  styleUrls: ['./resultadodos.page.scss'],
})

export class ResultadodosPage implements OnInit {

  constructor(public actRoute: ActivatedRoute) { }

  epe1:any;
  epe2:any;
  epe3:any;
  eva1:any;
  eva2:any;
  prom:any;
  prome:any;
  prueba:any;
  exa:any;
  z:any;
  ngOnInit() {
    
    
    this.epe1= this.actRoute.snapshot.paramMap.get('EPE1');
    this.epe2= this.actRoute.snapshot.paramMap.get('EPE2');
    this.epe3= this.actRoute.snapshot.paramMap.get('EPE3');
    this.eva1= this.actRoute.snapshot.paramMap.get('EVA1');
    this.eva2= this.actRoute.snapshot.paramMap.get('EVA2');
    this.prom= this.actRoute.snapshot.paramMap.get('promedio');
    this.exa= this.actRoute.snapshot.paramMap.get('EX');
    this.prueba= this.actRoute.snapshot.paramMap.get('promepon');
    if (this.prueba <= 3.94  ) {
      this.z="has reprobado"
    }else{
      this.z="has Aprobado!";
    }
    
    
  }

}

