import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  Rol:any;
  ngOnInit(): void {
    this.Rol=localStorage.getItem("rol");
  }
}
