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
  // declarações
  v1=0;
  v2=0;
  numero='number';
  operador='+'
  decimal=false;
  decimals=0;

  // Função para salvar e exibir os dados inseridos
  exibir(n: number) {
		switch (this.numero) {
      case 'number':
        if (this.decimal) {
          this.decimals++;
          this.v2 = this.v2 + n * Math.pow(10, -this.decimals);
        } else {
          this.v2 = this.v2 * 10 + n;
        }
        break;
      case 'operator':
        this.v2 = n;
        this.numero = 'number';
        break;
      case 'result':
        this.v1 = 0;
        this.v2 = n;
        this.numero = 'number';
    }
  }
  // Função que chama que seleciona os operadores
  operacao(o: string) {
    this.calcular();
    this.operador = o
    this.v1 = this.v2;
    this.numero = 'operator';
  }
  // Função para que ao apertar o botão calcula e mostra o resultado
  calcular(){
    this.v2 = eval('' + this.v1 + this.operador + '(' + this.v2 + ')');
    this.v1 = 0;
    this.numero = 'result';
    this.operador = '+';
    this.decimal = false;
    this.decimals = 0;
  }
  // Função que apagas os dados digitados anteriormente na calculadora
  apagar() {
    this.v2 = 0;
    this.v1 = 0;
    this.numero = 'number';
    this.decimal = false;
    this.decimals = 0;
  }
	}

  

 

  



