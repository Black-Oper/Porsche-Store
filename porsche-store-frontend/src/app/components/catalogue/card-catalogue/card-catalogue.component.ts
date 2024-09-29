import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-catalogue',
  templateUrl: './card-catalogue.component.html',
  styleUrl: './card-catalogue.component.scss'
})
export class CardCatalogueComponent {
  @Input() cardTitle: string = '';
  @Input() cardText: string = '';
  @Input() cardType: string = '';
  @Input() cardImage: string = '';
  @Input() cardPrice: string = '';
}
