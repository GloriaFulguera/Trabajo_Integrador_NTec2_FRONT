import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private route:Router){}
  ngOnInit(): void {
    let logueado=localStorage.getItem("user_state");
    if(!logueado){
      this.route.navigate(['/lock']);
    }
  }
}
