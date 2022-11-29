import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.removeItem("User")
        localStorage.removeItem("Name")
        localStorage.removeItem("Status")
        localStorage.removeItem("Species")
        localStorage.removeItem("Gender")
        localStorage.removeItem("Origin")
        localStorage.removeItem("Location")
        localStorage.removeItem("Image")
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
