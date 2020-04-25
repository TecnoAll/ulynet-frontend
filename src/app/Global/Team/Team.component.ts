import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'undely-Team',
  templateUrl: './Team.component.html',
  styleUrls: ['./Team.component.scss']
})
export class TeamComponent implements OnInit {

   @Input() data : any;

   constructor() { }

   ngOnInit() {
   }

}
