import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-basics',
  imports: [NgFor],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.css'
})
export class BasicsComponent {
  constructor(private santizer: DomSanitizer) { }
  Courses = [
    { link: 'https://www.youtube.com/embed/Jw07r5nbULY', lec: '1' },
    { link: 'https://www.youtube.com/embed/7VcRNQ-NihY', lec: '2' }
  ]
  cleanURL(oldURL: string): SafeResourceUrl {
    return this.santizer?.bypassSecurityTrustResourceUrl(oldURL);
  }
}
