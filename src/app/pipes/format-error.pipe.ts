import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatError'
})
export class FormatErrorPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
     return Object.keys(value).map((error) => {
         switch (error) {
           case "minlength": {
              return "Longueur trop petite";
           }
           case "required": {
            return "Veuillez renseigner quelque chose ...";
          }
           default: {
            return "Erreur";
           }
         }
     }).join(" ");
  }
}
