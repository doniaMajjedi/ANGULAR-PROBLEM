import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stylecompose',
  templateUrl: './stylecompose.component.html',
  styleUrl: './stylecompose.component.css'
})
export class StylecomposeComponent {

  bgcolor;
  col;
  size;
  font;

  @ViewChild('siize') myStyleComp;
}
