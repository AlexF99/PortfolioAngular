import { Component, OnInit } from '@angular/core';
import { trigger, style, state } from '@angular/animations';

@Component({
  selector: 'app-monthly-presentation',
  templateUrl: './monthly-presentation.component.html',
  styleUrls: ['./monthly-presentation.component.css'],
  animations: [
    trigger('active', [
      state('true', style({
        display: 'block'
      })),
      state('false', style({
        display: 'none',
      })),
    ]),
  ]
})
export class MonthlyPresentationComponent implements OnInit {

  constructor() { }

  items = [
    {
      title: "Priority review:",
      presItems: [
        {
          description: "- delivery plan new website:",
          state: "OK but not accurate at all",
        },
        {
          description: "- integration with new technologies:",
          state: "YES",
        },
        {
          description: "- apply login screens:",
          state: "Yes, but there's missing functionalities",
        },
      ]
    },
    {
      title: "Highlights:",
      presItems: [
        {
          description: "- hired by growinCo",
          state: ""
        },
        {
          description: "- met the dev team",
          state: ""
        },
        {
          description: "- learned angular (sort of)",
          state: ""
        },
        {
          description: "- almost done with the new website desktop front end",
          state: ""
        },
      ]
    },
    {
      title: "Didn't like this month:",
      presItems: [
        {
          description: "- some stuff that I had to redo a couple times until I got it right",
          state: ""
        },
      ]
    },
    {
      title: "lessons learned:",
      presItems: [
        {
          description: "- angular has thousands of features that make the development process easier, more clever and more scalable, LEARN HOW TO USE THEM",
          state: ""
        },
        {
          description: "- if you try to tackle a task too fast, you might find yourself having to redo them",
          state: ""
        },
      ]
    },
    {
      title: "I am ending the month with the feeling that...",
      presItems: [
        {
          description: "- I've made a lot of progress, but there's still so much to learn and go through",
          state: ""
        },
      ]
    },
    {
      title: "recognition:",
      presItems: [
        {
          description: "- the dev team and product team for always being available to help and answer questions",
          state: ""
        },
        {
          description: "- the whole team for being inspiring",
          state: ""
        },
      ]
    },
  ]

  active: Array<boolean>;

  ngOnInit(): void {
    this.active = [false, false, false, false, false, false];
  }

  closeAll() {
    for (let index = 0; index < this.active.length; index++) {
      this.active[index] = false;
    }
  }

  openItem(index: number) {
    this.closeAll();
    this.active[index] = true;
  }

}
