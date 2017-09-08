export class Product {
	id: number;
	name: string;
	price: number;
	images: Images;
	qtySold: number;
	onSale: boolean;
	newArrival: boolean;
	featured: boolean;
}

export class Images {
	big: string;
	small: Array<any>;
}