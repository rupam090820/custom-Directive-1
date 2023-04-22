import { Directive ,ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appSallaryCheck]'
})
export class SallaryCheckDirective {

  constructor( private  objref:ElementRef) {
    this.objref.nativeElement.value=8999;
   }
@HostListener('keyup') abcfun() {
  console.log("salary HostListener trigger");
let salary = this.objref.nativeElement.value;
if(salary  >= 8000 && salary <= 25000){
  console.log("valid salary");
  this.objref.nativeElement.classList.remove("is-invalid");

}
else{
  console.log("invalid salary");
  this.objref.nativeElement.classList.add("is-invalid");
}
}
}