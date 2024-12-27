import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-program-list',
  imports: [RouterLink],
  templateUrl: './program-list.component.html',
  styleUrl: './program-list.component.css'
})
export class ProgramListComponent {
  Programs = [
    {
      name: 'Basics of Computer',
      instructor: 'J. Nayan',
      url: '../../assets/images/Course/computer.jpeg',
      lectures: [
        {
          lec: 1,
          link: 'https://www.youtube.com/embed/Jw07r5nbULY'
        },
        {
          lec: 2,
          link: 'https://www.youtube.com/embed/7VcRNQ-NihY'
        }
      ]
    },
    {
      name: 'Stenography',
      instructor: 'Dr. Wajid Ali',
      url: '../../assets/images/Course/steno.jpeg',
      lectures: [
        {
          lec: 1,
          link: ''
        }
      ]
    }
  ]
}
