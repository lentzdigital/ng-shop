import { Product } from './product';

const path = 'assets/img/products/';

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Pull&Bear Crochet Back Playsuit',
        price: 47.10,
        image: path + '1.jpg',
        qtySold: 123,
        onSale: true,
        newArrival: true,
        featured: false
    },
    {
        id: 2,
        name: 'Pull&Bear Aztec Printed Jumpsuit',
        price: 54.20,
        image: path + '2.jpg',
        qtySold: 77,
        onSale: false,
        newArrival: true,
        featured: false
    },
    {
        id: 3,
        name: 'Pull&Bear Utility Detail Playsuit',
        price: 31.45,
        image: path + '3.jpg',
        qtySold: 233,
        onSale: false,
        newArrival: true,
        featured: true
    },
    {
        id: 4,
        name: 'Pull&Bear Utility Detail Playsuit',
        price: 31.45,
        image: path + '4.jpg',
        qtySold: 233,
        onSale: false,
        newArrival: true,
        featured: true
    }
];
