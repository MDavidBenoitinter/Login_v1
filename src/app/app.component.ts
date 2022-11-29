import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  static ngOnInit(ngOnInit: any) {
    throw new Error('Method not implemented.');
  }
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Configuración', url: 'settings', icon: 'settings' },
    { title: 'Cerrar Sesión', url: 'logout', icon: 'log-out' },
  ];
  user:string | null | undefined;
  nombre:string | null | undefined;
  correo:string | null | undefined;
  matricula:string | null | undefined;
  isLog:string | null | undefined;
  

  constructor() {}

 
  ngOnInit() {
    
    console.log(this.nombre);
    this.nombre = localStorage.getItem("Nombre");
      this.user = localStorage.getItem("Nombre") + " "+localStorage.getItem("App")+" "+localStorage.getItem("Apm");
      this.correo = localStorage.getItem("Correo");
      this.matricula = localStorage.getItem("Matricula");
  }
  
}
