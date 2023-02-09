import { Component } from '@angular/core';
import { Voter } from '../models/Voter';

@Component({
  selector: 'app-voting-panel',
  templateUrl: './voting-panel.component.html',
  styleUrls: ['./voting-panel.component.css']
})

export class VotingPanelComponent {
  agreeVotesCounter: number;
  disagreeVotesCounter: number;

  constructor(){
    this.agreeVotesCounter = 0;
    this.disagreeVotesCounter = 0;
  }

  listOfVoters: Voter[] = [
    { id: 1, name: "Alice", vote: "none"},
    { id: 2, name: "Bob", vote: "none"},
    { id: 3, name: "Charlie", vote: "none"},
    { id: 4, name: "Johny", vote: "none"},
  ]

  updateVoteCount(event:string){
    if(event == "agree"){
      this.agreeVotesCounter++;
    }
    if(event == "disagree"){
      this.disagreeVotesCounter++;
    }
  }
}
