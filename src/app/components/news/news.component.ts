import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input()
  photoCover:string = ""

  @Input()
  newsTitle:string = ""

  @Input()
  newsDescription:string = ""

  @Input()
  Id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
