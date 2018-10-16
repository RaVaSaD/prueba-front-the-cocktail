import { Component, OnInit } from '@angular/core';
import { DescriptionService } from './description.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  public rotateArrow: boolean[] = [];
  public descriptions: any[];

  constructor(
    private descriptionService: DescriptionService
  ) { }

  ngOnInit() {
    this.descriptions = this.descriptionService.getDescription();
    for (const index of this.descriptions) {
      this.rotateArrow.push(false);
    }
  }


  public rotate(i) {
    this.rotateArrow[i] = !this.rotateArrow[i];
  }

}
