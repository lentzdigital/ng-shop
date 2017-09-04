import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-social-media-banner',
	templateUrl: './social-media-banner.component.html',
	styleUrls: ['./social-media-banner.component.scss']
})
export class SocialMediaBannerComponent implements OnInit {
	socialIcons: object;

	constructor() { }

	ngOnInit() {
		this.socialIcons = [
			{
				title: 'twitter',
				link: '#',
				icon: 'assets/img/social-media/twitter.svg'
			},
			{
				title: 'pinterest',
				link: '#',
				icon: 'assets/img/social-media/pinterest.svg'
			},
			{
				title: 'facebook',
				link: '#',
				icon: 'assets/img/social-media/facebook.svg'
			},
			{
				title: 'google',
				link: '#',
				icon: 'assets/img/social-media/google.svg'
			},
			{
				title: 'youtube',
				link: '#',
				icon: 'assets/img/social-media/youtube.svg'
			},
			{
				title: 'tumblr',
				link: '#',
				icon: 'assets/img/social-media/tumblr.svg'
			},
		];
	}

}
