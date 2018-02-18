import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  stars:boolean[] = [];
  _rating: number;
  @Input() readonly :boolean = true;
  @Input() maxStar:number = 5;

  constructor() {
    this.stars = Array(this.maxStar).fill(false,0,this.maxStar);
  }

  ngOnInit() {
  }

  get rating(){
    return this._rating;
  }

  @Input()
  set rating(value: number){
    this._rating = value || 0;
    this.stars.fill(true,0,this._rating);
  }

}
