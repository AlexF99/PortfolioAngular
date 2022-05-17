import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent implements OnInit {
  projects: any;

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.projects = (
      await this.http
        .get('http://localhost:3000/projects', { observe: 'response' })
        .toPromise()
    ).body;
  }
}
