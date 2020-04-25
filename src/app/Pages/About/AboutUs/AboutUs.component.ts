import { Component, OnInit } from '@angular/core';
import { UndelyService } from '../../../Services/Undely.service';


@Component({
  selector: 'app-AboutUs',
  templateUrl: './AboutUs.component.html',
  styleUrls: ['./AboutUs.component.scss']
})
export class AboutUsComponent implements OnInit {

   teamData          : any;
   testimonialData   : any;
   missionVisionData : any;
   aboutInfo         : any;


   constructor(private undelyService : UndelyService) { }

   ngOnInit() {
      this.getAboutInfo();
      this.getMissionVision();
      this.getTestimonialData();
      this.getTeamData();
   }

   public getAboutInfo() {
      this.undelyService.getAboutInfo().valueChanges().subscribe(res => {this.aboutInfo = res});
   }

   public getMissionVision() {
      this.undelyService.getMissionVision().valueChanges().subscribe(res => {this.missionVisionData = res});
   }

   public getTeamData() {
      this.undelyService.getTeam().valueChanges().subscribe(res => {this.teamData = res});
   }

   public getTestimonialData() {
      this.undelyService.getTestimonial().valueChanges().subscribe(res => {this.testimonialData = res});
   }
}

