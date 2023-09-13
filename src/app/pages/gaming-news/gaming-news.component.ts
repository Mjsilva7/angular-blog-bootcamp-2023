import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFakeNews } from '../../data/dataFakeNews';

@Component({
  selector: 'app-gaming-news',
  templateUrl: './gaming-news.component.html',
  styleUrls: ['./gaming-news.component.css']
})
export class GamingNewsComponent implements OnInit {
  photoCover:string = ""
  newsTitle:string = ""
  newsDescription:string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const result = dataFakeNews.filter(article => article.id == id)[0]

    this.newsTitle = result.title
    this.newsDescription = result.description
    this.photoCover = result.photoCover
  }

}
