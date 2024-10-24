import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = new FormControl('')
  password = new FormControl('')
  email = new FormControl('')
  age = new FormControl(0)


  constructor() {
    console.log('here', this.name)
  }

  formSubmit( event: any) {
    console.log(event)
    // console.log(event.target.age)
    console.log('before', this.name)
    this.name = event.value.name;
    console.log('after', this.name)
    this.password = event.value.password;
    this.email = event.value.email;
    this.age = event.value.age;
  }

  getValue(name: any){
    console.log('getvalue', name)
  }
}
