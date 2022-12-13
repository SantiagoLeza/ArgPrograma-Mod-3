import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://api.github.com/users/SantiagoLeza/repos')
    .subscribe(res => {
      this.projects = res;
    });
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }
}
