import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tresdos',
  templateUrl: './tresdos.page.html',
  styleUrls: ['./tresdos.page.scss'],
})
export class TresdosPage implements OnInit {

  constructor(public toastCtrl : ToastController, public navCtrl : NavController){}

  EPE1:any;
  EPE2:any;
  EPE3:any;
  EVA1:any;
  EVA2:any;
  EX:any;
  promedio:any;
  promeEx:any;
  promepon:any;
  ngOnInit() {}

  async Calculo(){

    this.promedio=(this.EPE1*0.1)+(this.EPE2*0.2)+(this.EPE3*0.3)+(this.EVA1*0.2)+(this.EVA2*0.2)-0.000000000000001;
    this.promepon=(this.EPE1*0.07)+(this.EPE2*0.14)+(this.EPE3*0.21)+(this.EVA1*0.14)+(this.EVA2*0.14)+0.15;
    //Validar campos undefined (en blanco)
    if (this.EPE1 == undefined || this.EPE2 == undefined || this.EPE3 == undefined ||
      this.EVA1==undefined || this.EVA2==undefined) {
      const toast = await this.toastCtrl.create({
        message: 'Falta campos por rellenar',
        duration: 1500,
        position: 'bottom'
      });
      toast.present();
      //Validar si los numeros ingresados estan dentro de los parametros de la calificacion chilena
    } else if (this.EPE1>7 || this.EPE1<1 || this.EPE2>7 || this.EPE2<1 ||
      this.EPE3>7 || this.EPE3<1 || this.EVA1>7 || this.EVA1<1 || this.EVA2>7 || this.EVA2<1) {
      const mens = await this.toastCtrl.create({
        message: 'Ingrese notas entre 1 y 7',
        duration:1500,
        position: 'bottom'
      });
      mens.present();
      
    } else if (this.promedio<5.5 || this.EPE1<4 || this.EPE2<4 || this.EPE3<4   ) {
 

      this.promeEx = ((4 - this.promepon)/0.3);
      
      this.navCtrl.navigateForward(`/resultadouno/${this.EPE1}
      /${this.EPE2}/${this.EPE3}/${this.EVA1}/${this.EVA2}/${this.promedio}/${this.promeEx}`);

    }else{

      this.promeEx="";

      this.navCtrl.navigateForward(`/resultadouno/${this.EPE1}
      /${this.EPE2}/${this.EPE3}/${this.EVA1}/${this.EVA2}/${this.promedio}/${this.promeEx}`);
    }
      
    }

  async CalculoEx(){
    this.promedio=(this.EPE1*0.1)+(this.EPE2*0.2)+(this.EPE3*0.3)+(this.EVA1*0.2)+(this.EVA2*0.2)-0.000000000000001;
    this.promepon=(this.EPE1*0.07)+(this.EPE2*0.14)+(this.EPE3*0.21)+(this.EVA1*0.14)+(this.EVA2*0.14)+(this.EX*0.3)+0.1;
    //Validar campos undefined (en blanco)
    if (this.EPE1 == undefined || this.EPE2 == undefined || this.EPE3 == undefined ||
      this.EVA1==undefined || this.EVA2==undefined || this.EX==undefined) {
      const toast = await this.toastCtrl.create({
        message: 'Falta campos por rellenar',
        duration: 1500,
        position: 'bottom'
      });
      toast.present();
      //Validar si los numeros ingresados estan dentro de los parametros de la calificacion chilena
    } else if (this.EPE1>7 || this.EPE1<1 || this.EPE2>7 || this.EPE2<1 ||
      this.EPE3>7 || this.EPE3<1 || this.EVA1>7 || this.EVA1<1 || this.EVA2>7 || this.EVA2<1 || this.EX>7 || this.EX<0) {
      const mens = await this.toastCtrl.create({
        message: 'Ingrese notas entre 1 y 7',
        duration:1500,
        position: 'bottom'
      });
      mens.present();
      
    } else {
      this.navCtrl.navigateForward(`/resultadodos/${this.EPE1}/${this.EPE2}/${this.EPE3}/${this.EVA1}/${this.EVA2}/${this.EX}/${this.promepon}/${this.promedio}`);
    }
}}
/*this.EPE1>7 || this.EPE1<1, this.EPE2>7 || this.EPE2<1, 
      this.EPE3>7 || this.EPE3<1, this.EVA1>7 || this.EVA1<1, this.EVA2>7 || this.EVA2<1 
      
      this.EPE2 == undefined,this.EPE1 == undefined,this.EPE3 == undefined,this.EVA1 == undefined*/