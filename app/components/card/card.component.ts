import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  {
  @Input() cardId: number | undefined;
  @Input() cardName: string | undefined;
  @Input() cardType: string | undefined;
  @Input() cardTypes: string[] | undefined;
  @Input() cardHp: number | undefined;
  @Input() cardAttack: number | undefined;
  @Input() cardDefense: number | undefined;
  @Input() cardSpecialAttack: number | undefined;
  @Input() cardSpecialDefense: number | undefined;
  @Input() cardImage: string | undefined;

   formatCardId(cardId: number): string {
    if (cardId <= 9) {
      return `00${cardId}`;
    } else if (cardId <= 99) {
      return `0${cardId}`;
    } else {
      return `${cardId}`;
    }
  }

  navigateToInformacaoPage() {
    this.router.navigate(['/informacao'], {
      queryParams: {
        cardId: this.cardId,
        cardName: this.cardName,
        cardType: this.cardType,
        cardTypes: this.cardTypes,
        cardHp: this.cardHp,
        cardAttack: this.cardAttack,
        cardDefense: this.cardDefense,
        cardSpecialAttack: this.cardSpecialAttack,
        cardSpecialDefense: this.cardSpecialDefense,
        cardImage: this.cardImage
      }
    });
  }
  
  getBackgroundClass(): string {
    if (this.cardTypes && this.cardTypes.length > 0) {
      const firstType = this.cardTypes ? this.cardTypes[0].toLowerCase() : "";
      switch (firstType) {
        case 'grass':
          return 'grass-background';
        case 'fire':
          return 'fire-background';
        case 'water':
          return 'water-background';
        case 'electric' :
          return 'electric-background';
        case 'ice' :
          return 'ice-background';
        case 'psychic' :
          return 'psychic-background';
        case 'ghost' :
          return 'ghost-background';
        case 'dark' :
          return 'dark-background';
        case 'fairy' :
          return 'fairy-background';
        case 'dragon' :
          return 'dragon-background';
        case 'normal':
          return 'normal-background';
        case 'fighting' :
          return 'fighting-background';
        case 'bug':
          return 'grass-background';
        case 'ground':
          return 'ground-background';
        case 'poison' :
          return 'poison-background';
        // Adicione outros casos conforme necessário
        default:
          return 'normal-background';
      }
    } else {
      return 'normal-background';
    }
  }  

  constructor(private router: Router) { }

  
}
