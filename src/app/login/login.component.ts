import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// import {HpptProviderService} from "../../services/hppt-provider.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() didLogin = new EventEmitter();
  @Output() doSignUp = new EventEmitter();

  didLog:boolean = false;
  link ='https://';
  username:any;
  password:any;

  allUsers: any;


  constructor() { }

  ngOnInit() {
    this.link ='https://';
    // this.httpProvider.loginAction().subscribe(response=>{
    //   this.allUsers =this.httpProvider.loginInfo;
    //   console.log(this.allUsers);
    //
    //   this.allUsers.forEach((user:any)=>{
    //     if(user.username === this.username && user.pass === this.password){
    //       console.log("Found Match")
    //     }else{
    //       console.log("Found noooo Match")
    //     }
    //   })
    // })
  }


  loginClick(){
    document.location.href = '#/home';
  }

  signUpClick(){
    this.doSignUp.emit(true);
  }



}
