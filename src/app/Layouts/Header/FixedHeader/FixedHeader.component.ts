import { Component, OnInit } from '@angular/core';
import { UndelyService } from '../../../Services/Undely.service';

@Component({
  selector: 'undely-FixedHeader',
  templateUrl: './FixedHeader.component.html',
  styleUrls: ['./FixedHeader.component.scss']
})
export class FixedHeaderComponent implements OnInit {

  constructor(private undelyService : UndelyService) { }

  ngOnInit() {
  }

  public toggleSidebar()
   {
      this.undelyService.sidenavOpen = !this.undelyService.sidenavOpen;
   }

}
