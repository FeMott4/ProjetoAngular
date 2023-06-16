import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class HomePage {
  resultado=0;
  zerar=0;
  numero='number';
  decimal=false;
  decimals=0;

  exibir(n: number) {
		switch (this.numero) {
      case 'number':
        if (this.decimal) {
          this.decimals++;
          this.resultado = this.resultado + n * Math.pow(10, -this.decimals);
        } else {
          this.resultado = this.resultado * 10 + n;
        }
        break;
      case 'operator':
        this.resultado = n;
        this.numero = 'number';
        break;
      case 'result':
        this.zerar = 0;
        this.resultado = n;
        this.numero = 'number';
    }
  }
	}

 

  

