import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import '../firebase/config';
import {crearRegistro} from '../services/numbers.service';

import { QuoteService } from './quote.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string | undefined;
  isLoading = false;

 
  resto: number;
  multiplosDeTres: any[] = [];
  multiplosDeCinco: any[] = [];
  multiplosDeSiete: any[] = [];
  
  isMultiploDeTres : boolean = false;
  isMultiploDeCinco: boolean = false;
  isMultiploDeSiete: boolean = false;

  arryMultiplos: any[] = [];
  arrayMultiplosEnd: any[] = [];




  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
  }
  multiplosArrays ( numero: number , multiplo: number) {    
    
    
    this.resto = numero % multiplo;
    if(this.resto == 0){
      
      return true;  
    } else {
      return false;
      
    }
    
    
  }


  listamultiplos (numero: number) {
    
    this.arryMultiplos = [];
    
    for (let index = 1; index <= numero; index++) {
  
      if ( index == numero){
      
        
       if (this.multiplosArrays(index, 3) && this.multiplosArrays(index, 5) && this.multiplosArrays(index, 7)) {
         
         this.arryMultiplos.push(3,5,7);
        
        }else if (this.multiplosArrays(index, 3) && this.multiplosArrays(index, 5)){
 
         
          this.arryMultiplos.push(3,5,);
        }else if (this.multiplosArrays(index, 3) && this.multiplosArrays(index, 7)){
          
          this.arryMultiplos.push(3,7,);
        }else if (this.multiplosArrays(index, 3)){
         this.arryMultiplos.push(3);
        }else if (this.multiplosArrays(index, 5)){
         this.arryMultiplos.push(5);
        } else if (this.multiplosArrays(index ,7)){
          this.arryMultiplos.push(7);
        }
      }
       this.checkMinMultiplos(this.arryMultiplos);
      
   }
 
  }

  ordenMultiplos(... numeros:any ){
      
    this.arrayMultiplosEnd = [];
    let  myArr = this.arryMultiplos;
    const myObj = {}
    myArr.forEach(el => {
      // comprobamos si el valor existe en el objeto
      if (!(el in myObj)) {
        // si no existe creamos ese valor y lo añadimos al array final, y si sí existe no lo añadimos
        myObj[el] = true
        this.arrayMultiplosEnd.push(el)
      }
      
    })

  
    
  
}

  multiplos( numero: number){  
    this.listamultiplos(numero);
    this.multiplosDeTres = [];
    this.multiplosDeCinco = [];
    this.multiplosDeSiete = [];
    crearRegistro({
      value: numero
     });
    for(let i=1;i<=numero;i++){

        if (i % 3 == 0 && i<=numero ){
          if(this.multiplosArrays(i,3)){
            this.multiplosDeTres.push(i);
           }
        }
        if ( i % 5 == 0 && i<=numero ){
          if(this.multiplosArrays(i,5)){
            this.multiplosDeCinco.push(i);
         
          }
        }
         if(this.multiplosArrays(i,7)){
          this.multiplosDeSiete.push(i);
         }
      
            
     }
   
    this.ordenMultiplos(this.arryMultiplos);  
   
  }
  
  checkMinMultiplos ( arreglo: any [] ){
    console.log(arreglo);
    
    if(arreglo[0] == 3){
      this.isMultiploDeTres = true;
      console.log('el menor es 3 ');
      
      
    }else if(arreglo[0] == 5){
      this.isMultiploDeCinco = true;
      console.log('el menor es 5 ');
    }else{
      this.isMultiploDeSiete = true;
      console.log('el menor es 7 ');
    }
  }
 

  



}
