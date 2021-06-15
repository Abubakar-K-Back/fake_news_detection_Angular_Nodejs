import { Component } from '@angular/core';
import { HeroService } from "./hero.service";
import { FormGroup,FormBuilder,Validators, FormControl,ReactiveFormsModule, EmailValidator } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'text';


  loginform:FormGroup=new FormGroup({ val:new FormControl(null,[Validators.required]) })

  constructor(private hs:HeroService,
    ){}

showme=false
emotion
spam
toxic
category
alltoxic=[]
fake

logins()
{
  this.hs.login(this.loginform.value).subscribe((data:any)=>{
    console.log(data)

    this.emotion=data.emotion_score
    this.spam=data.spam
    this.category=data.category
    this.toxic=data.toxity
    this.fake=data.fake
    this.showme=true

  })
}






}

