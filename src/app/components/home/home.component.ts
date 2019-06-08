import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoGame } from 'src/app/classes/VideoGame';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public csvFile;
  public videoGames:VideoGame[];
  public searchText:string;

  constructor(private _service:HttpClient) {
    
    ///assets/vgsales.csv
    //restaurant_basic_info.json
    //this.csvFile = new XMLHttpRequest();
    
    this.csvFile=this._service.get('/assets/vgsales.json');
    this.videoGames=new Array();
    this.csvFile.subscribe(response=>{

      for(let game of response)
      {
        let videoGame=new VideoGame(game['Rank'],game['Name'],game['Platform'],game['Year'],game['Genre'],game['Publisher'],game['Global_Sales']);
        this.videoGames.push(videoGame);
        //console.log(videoGame.name)
      }
    })
    //console.table(this.videoGames);
    
  }

  public search()
  {
    console.log("called");
  }

  ngOnInit() {

  }

}
