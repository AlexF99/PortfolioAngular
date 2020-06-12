import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  projetos: any = [
    {
      "title": "todo laravel",
      "stack": [
        "laravel",
        "angular"
      ]
    },
    {
      "title": "this portfolio"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
