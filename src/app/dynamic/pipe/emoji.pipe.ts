import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === 'sad') {
      return '🥺';
    } else if (value === 'angry') {
      return '🤬';
    } else if (value === 'selfie') {
      return '🤳';
    } else if (value === 'enjoy') {
      return '🤟';
    } else {
      return '😀';
    }
  }

}
