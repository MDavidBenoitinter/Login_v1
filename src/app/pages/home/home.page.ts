import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user:string | null | undefined;
  nombre:string | null | undefined;
  correo:string | null | undefined;
  matricula:string | null | undefined;
  constructor(private activatedRoute:ActivatedRoute,
    private menuCtrl: MenuController,
    private router: Router,) { 
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
    this.nombre = localStorage.getItem("Nombre");
    this.user = localStorage.getItem("Nombre") + " "+localStorage.getItem("App")+" "+localStorage.getItem("Apm");
    this.correo = localStorage.getItem("Correo");
    this.matricula = localStorage.getItem("Matricula");
  }

}
