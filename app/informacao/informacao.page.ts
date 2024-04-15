import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-informacao',
  templateUrl: './informacao.page.html',
  styleUrls: ['./informacao.page.scss'],
})
export class InformacaoPage implements OnInit {
  cardId: number | undefined;
  cardName: string | undefined;
  cardType: string | undefined;
  cardTypes: string[] | undefined;
  cardHp: number | undefined;
  cardAttack: number | undefined;
  cardDefense: number | undefined;
  cardSpecialAttack: number | undefined;
  cardSpecialDefense: number | undefined;
  cardImage: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.cardId = params['cardId'];
      this.cardName = params['cardName'];
      this.cardAttack = params['cardAttack'];
      this.cardDefense = params['cardDefense'];
      this.cardHp = params['cardHp'];
      this.cardImage = params['cardImage'];
      this.cardSpecialAttack = params['cardSpecialAttack'];
      this.cardSpecialDefense = params['cardSpecialDefense'];
      this.cardType = params['cardType'];
      this.cardTypes = params['cardTypes'];
    });
    console.log('cardType:', this.cardTypes ? this.cardTypes[0].toLowerCase() : "" );
  }


  navigateBack() {
    // Utilize o método back para voltar para a página anterior
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  formatCardId(cardId: number): string {
    if (cardId <= 9) {
      return `00${cardId}`;
    } else if (cardId <= 99) {
      return `0${cardId}`;
    } else {
      return `${cardId}`;
    }
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
  
}
