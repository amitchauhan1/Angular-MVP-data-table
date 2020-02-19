import { Pipe, PipeTransform } from '@angular/core';

/**
 * @author Amit Chauhan
 */
@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {

  // Come name of radio button and check then return Emoji.
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
