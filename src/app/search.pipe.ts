import { Pipe, PipeTransform } from '@angular/core';
import { VideoGame } from './classes/VideoGame';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(games:VideoGame[], searchText:string): any {

    if(!games) return[];
    if(!searchText) return games;

    searchText=searchText.toLowerCase();
    return games.filter(game=>{
      if(!game) return false;
      console.log(game);
      return game.name.toLowerCase().includes(searchText);
    })
  }

}
