import { Component, OnInit } from '@angular/core';
import { UndelyService } from '../../../Services/Undely.service';

@Component({
  selector: 'app-TermAndCondition',
  templateUrl: './TermAndCondition.component.html',
  styleUrls: ['./TermAndCondition.component.scss']
})
export class TermAndConditionComponent implements OnInit {

   termContions : any ;

   constructor(public undelyService: UndelyService) { }

   ngOnInit() {
      this.undelyService.getTermCondition().valueChanges().subscribe(res => {this.termContions = res});
   }

}
