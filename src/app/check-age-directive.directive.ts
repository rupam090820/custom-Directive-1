import { APP_BOOTSTRAP_LISTENER, Directive , ElementRef , HostListener} from '@angular/core';  // 1. at first import ElementRef and HostListener

@Directive({
  selector: '[appCheckAgeDirective]'  // 2. it is a directiv name which is copy and past the input field of app.component.html
})
export class CheckAgeDirectiveDirective {

  constructor( private eref: ElementRef ) { //3. here we create one private variable,  name is eref and set ElementRef 
    this.eref.nativeElement.value=22;   // 4. through ElementRef we can access nativeElement in the dom so now all property and metode are stiore into eref variable.
  }// thats why we access this.eref.nativeElement.value=22; its mean we set by default 22 value in the input field.
  @HostListener('keyup') abcd() {   // 5. here we add keyup methode , when we type anything in the input field then here fier keyup event.
  console.log("event trigered");
  let age= this.eref.nativeElement.value;  //6. here set input field value into age variable
  if(age>18 && age<= 40){   //7. check typing value is 18 to 40
    console.log("valid age...");
    this.eref.nativeElement.classList.remove("is-invalid"); // classlist.remove("is-invalid") is a bootstratp class is-invalid remove means input box is blue if value is write and input box is red if we type wrong input
  }
  else{
    console.log("INVALID AGE...");
    this.eref.nativeElement.classList.add("is-invalid");
  }
  }
}
