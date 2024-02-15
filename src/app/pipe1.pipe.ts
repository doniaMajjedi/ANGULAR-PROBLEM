import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

  transform(nom: string): any {
    if (nom === null) return "avatar.jpg";
    return nom;
  }

}
