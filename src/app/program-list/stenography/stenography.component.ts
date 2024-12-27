import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-stenography',
  imports: [NgFor],
  templateUrl: './stenography.component.html',
  styleUrl: './stenography.component.css'
})
export class StenographyComponent {
  constructor(private santizer: DomSanitizer) { }

  Lectures = [
    { link: 'https://www.youtube.com/embed/h0-3FVQBATU', lec: '1' }
  ]
  cleanURL(oldURL: string): SafeResourceUrl {
    return this.santizer?.bypassSecurityTrustResourceUrl(oldURL);
  }
}
