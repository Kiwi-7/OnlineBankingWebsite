import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Online Banking Website';

  ngOnInit() {
    localStorage.setItem('idNameSave', 'null');
    console.log(localStorage);
  }
}
