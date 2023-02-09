import { Component, Input, Output, EventEmitter, ComponentFactoryResolver } from '@angular/core';
import { Voter } from '../models/Voter';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent {

  @Input() voter: Voter;
  @Output() updateVotes = new EventEmitter<string>();

  constructor() {
    console.log("mounted");
  }

  public updateVote(buttonValue:string) {
    if (this.voter.vote === "none") {
      this.voter.vote = buttonValue;
      console.log(this.voter.vote);
      this.updateVotes.emit(buttonValue);
    }
  }
}
