import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) cardTitle: string = ''; 

  @Input({ required: true }) cardDescription: string = '';

  @Input({ required: true }) cardImage: string = '';

  @Input({ required: true }) link: string = '';

  resized: boolean = false;

  resize() {
    this.resized = !this.resized;
  }
}
