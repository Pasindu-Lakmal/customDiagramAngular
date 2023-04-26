import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-center-card',
  templateUrl: './center-card.component.html',
  styleUrls: ['./center-card.component.css'],
})
export class CenterCardComponent {
  public thumbnailSrc =
    'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg';
  public cover =
    'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/black_sea.jpg';

  public liked = false;

  public toggleLike(): void {
    this.liked = !this.liked;
  }

  public heartIcon(): string {
    return this.liked ? 'k-icon k-i-heart' : 'k-icon k-i-heart-outline';
  }
}
