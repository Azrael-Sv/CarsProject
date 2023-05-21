import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  entryComponents: [],
})
export class AppComponent {
  cardsContent: CardContent[] = [
    {
      title: '3 года работаем на рынке',
      content:
        'Сертифицированные специалиcты в Москве и импортное оборудование для ремонта любой сложности',
      imgPath: '../assets/car.png',
    },
    {
      title: 'Работаем с физ. и юр. Лицами',
      content:
        'Можем принимать оплаты любым способом: наличными, картой, расчетным счетом ИП, OOO',
      imgPath: '../assets/car.png',
    },
    {
      title: 'Гарантия от 1 года',
      content: 'На все виды работ и запасные части без ограничения пробега',
      imgPath: '../assets/car.png',
    },
    {
      title: 'Собственный склад автозапчастей',
      content:
        'Более 1500 оригинальных запчастей в наличии.' +
        ' Если потребуются дополнительные детали, доставим из Германии за 7 дней',
      imgPath: '../assets/car.png',
    },
    {
      title: 'Соблюдаем технологические нормы по ГОСТу',
      content:
        'Например, при покраске сохраняем технологическую цепочку' +
        ' по техническому регламенту производителя лакокрасочных материалов',
      imgPath: '../assets/car.png',
    }
  ];
}

interface CardContent {
  readonly title: string;
  readonly content: string;
  readonly imgPath: string;
}
