import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
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
