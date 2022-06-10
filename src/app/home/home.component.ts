import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CarouselItem } from '../components/shared/carousel-item/carousel-item.interface';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


	private itemsContent = [
			{
				verticalURL: environment.verticalCarouselItem1,
				horizontalURL: environment.horizontalCarouselItem1,
				title: "home.carousel.item1.title",
				description: "home.carousel.item1.description",
				hyperlink: environment.baseUrl+"/classes"
			},
			{
				verticalURL: environment.verticalCarouselItem2,
				horizontalURL: environment.horizontalCarouselItem2,
				title: "home.carousel.item2.title",
				description: "home.carousel.item2.description",
				hyperlink: environment.baseUrl+"/classes"
			},
			{
				verticalURL: environment.verticalCarouselItem3,
				horizontalURL: environment.horizontalCarouselItem3,
				title: "home.carousel.item3.title",
				description: "home.carousel.item3.description",
				hyperlink: environment.baseUrl+"/classes"
			}
		];

	public verticalCarouselItems: Array<CarouselItem> = [];
	public horizontalCarouselItems: Array<CarouselItem> = [];


	ngOnInit() {
		let i = 0;
		for (let item of this.itemsContent) {
			this.verticalCarouselItems[i] = {
				url: item.verticalURL,
				title: item.title,
				description: item.description,
				hyperlink: item.hyperlink
			};
			i++;
		}

		i = 0;
		for (let item of this.itemsContent) {
			this.horizontalCarouselItems[i] = {
				url: item.horizontalURL,
				title: item.title,
				description: item.description,
				hyperlink: item.hyperlink
			};
			i++;
		}
	}
}
