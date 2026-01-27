import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class ButtonComponent {
title='Rechercher';
@Output()toggle=new EventEmitter<void>();

onClick():void{  
  console.log("Button clicked !");
this.toggle.emit();
}
}
