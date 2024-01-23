import { Component, OnDestroy, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit, OnDestroy {
  title: string = 'Actor-List';
  actors: Actor[] = [];
  newActor: Actor = new Actor();

  constructor() {}
  
  ngOnInit(): void {
    let firstName: string = "Mark";
    let lastName: string = "Hamill";
    let birthDate: string = "1951-09-25";
    let gender: string = "M";
    
    let a1: Actor = new Actor(firstName, lastName, new Date(birthDate), gender);
    this.actors.push(a1);
    this.actors.push(new Actor("Carrie", "Fisher", new Date("1956-10-21"), "F"));
    this.actors.push(new Actor("Harrison", "Ford", new Date("1942-07-13"), "M"));
  }

  save() {
    this.actors.push(this.newActor);
    this.newActor = new Actor();
  }

  ngOnDestroy(): void {

  }
}
