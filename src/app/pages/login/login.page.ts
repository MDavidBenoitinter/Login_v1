import { Component, OnInit } from '@angular/core';
import { IonInput, MenuController, RefresherEventDetail, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { async } from 'rxjs';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user!: string;
  password: string | undefined;
  resM: string | undefined;
  nombre!:string;
  App!:string;
  Apm!:string;
  matricula!:string;
  correo!:string;

  constructor(private menuCtrl: MenuController,private router: Router,public toastController: ToastController,private http: HttpClient) { 
    this.menuCtrl.enable(false);
  }

   
  ngOnInit() {
    // this.menuCtrl.enable(false);
  }

  login(){
    // console.log(this.user + " " + this.password)
    this.http.get<any>('http://localhost:5126/api/Auth/login/'+this.user+'/'+this.password)
    // this.http.get<any>('https://pagospruebas.interpue.com.mx/api/Auth/login/'+this.user)
    .subscribe(res =>{
      // console.log(res);
      this.resM = res.alMatricula;
      
      if(this.resM != null || this.resM != "null"){
        this.nombre=res.alNombre;
        this.App = res.alApp;
        this.Apm = res.alApm;
        this.matricula=res.alMatricula;
        this.correo=res.alCorreoInst;
              
        localStorage.setItem("Nombre", this.nombre)
        localStorage.setItem("App", this.App)
        localStorage.setItem("Apm", this.Apm)
        localStorage.setItem("Matricula", this.matricula)
        localStorage.setItem("Correo", this.correo)

        this.router.navigate(['/home'])
      }else{
          this.presentToast("Usuario y/o Contraseña Incorrectos");
      }

    })
  }  


async presentToast(msg: string){
  const toast = await this.toastController.create({
    message: msg,
    duration: 1000,
    position: "bottom"
  });
  toast.present();
}

}
