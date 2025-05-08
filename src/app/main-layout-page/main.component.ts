import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  menuClicked(idName: string): void{
    const idDoc = document.getElementById(idName);
    
    if(idDoc) {
      if(idDoc.style.display != 'block'){
        idDoc.style.display = 'block';
      }
      else{
        idDoc.style.display = 'none';
      }

      const values = localStorage.getItem('idNameSave');
      
      if(values && idDoc.id != values){
        const id2Doc = document.getElementById(values);
        if(id2Doc){
          id2Doc.style.display = 'none';
        }
      localStorage.setItem('idNameSave', idName);
      }
    }
  }
}

