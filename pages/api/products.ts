// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from '@/public/interfaces';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  products: Product[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'GET') {
    // dummy data
    res.status(200).json({
      products: [
        {
          id: '1',
          price: 124,
          rating: 4.2,
          brand: 'apple',
          image: '/assets/pngs/products/earpods.png',
          name: 'Apple AirPods (3rd generation) with water proof',
          catchPhrase: '',
          description: '',
        },
        {
          id: '2',
          price: 14,
          rating: 4.6,
          brand: 'dior',
          image: '/assets/pngs/products/ball.png',
          name: 'Apple AirPods (3rd generation) with water proof',
          catchPhrase: '',
          description: '',
        },
        {
          id: '3',
          price: 154,
          rating: 5,
          brand: 'ikea',
          image: '/assets/pngs/products/table.png',
          name: 'Apple AirPods (3rd generation) with water proof',
          catchPhrase: '',
          description: '',
        },
        {
          id: '4',
          price: 324,
          rating: 4.2,
          brand: 'nike',
          image: '/assets/pngs/products/sneakers.png',
          name: 'Apple AirPods (3rd generation) with water proof',
          catchPhrase: '',
          description: '',
        },
        {
          id: '5',
          price: 124,
          rating: 4.2,
          brand: 'apple',
          image: '/assets/pngs/products/earpods.png',
          name: 'Apple AirPods (3rd generation) with water proof',
          catchPhrase: '',
          description: '',
        },
        {
          id: '6',
          price: 324,
          rating: 4.2,
          brand: 'nike',
          image: '/assets/pngs/products/sneakers.png',
          name: 'Apple AirPods (3rd generation) with water proof',
          catchPhrase: '',
          description: '',
        },
        {
          id: '7',
          price: 14,
          rating: 4.6,
          brand: 'nike',
          image: '/assets/pngs/products/shirt.png',
          name: 'Apple AirPods (3rd generation) with water proof',
          catchPhrase: '',
          description: '',
        },
        {
          id: '8',
          price: 23,
          rating: 5,
          brand: 'ikea',
          image: '/assets/pngs/products/armchair.png',
          name: 'Armchairs blue color',
          catchPhrase: '',
          description: '',
        },
        {
          id: '9',
          price: 23,
          rating: 5,
          brand: 'ikea',
          image: '/assets/pngs/products/armchair.png',
          name: 'Armchairs blue color',
          catchPhrase: '',
          description: '',
        },
        {
          id: '10',
          price: 23,
          rating: 5,
          brand: 'ikea',
          image: '/assets/pngs/products/armchair.png',
          name: 'Armchairs blue color',
          catchPhrase: '',
          description: '',
        },
        {
          id: '11',
          price: 23,
          rating: 5,
          brand: 'ikea',
          image: '/assets/pngs/products/armchair.png',
          name: 'Armchairs blue color',
          catchPhrase: '',
          description: '',
        },
        {
          id: '12',
          price: 23,
          rating: 5,
          brand: 'ikea',
          image: '/assets/pngs/products/armchair.png',
          name: 'Armchairs blue color',
          catchPhrase: '',
          description: '',
        },
        {
          id: '13',
          price: 23,
          rating: 5,
          brand: 'ikea',
          image: '/assets/pngs/products/armchair.png',
          name: 'Armchairs blue color',
          catchPhrase: '',
          description: '',
        },
        {
          id: '14',
          price: 23,
          rating: 5,
          brand: 'dior',
          image: '/assets/pngs/products/watch.png',
          name: 'Watch',
          catchPhrase: 'Game On with Our Collection',
          description: 'A gadget you would love to have since you own a smart phone',
        },
        {
          id: '15',
          price: 23,
          rating: 5,
          brand: 'dior',
          image: '/assets/pngs/products/shoes.png',
          name: 'Shoes',
          catchPhrase: 'Step Up Your Style',
          description: 'Recommended to match a smart nice dress',
        },
        {
          id: '16',
          price: 23,
          rating: 5,
          brand: 'dior',
          image: '/assets/pngs/products/watch.png',
          name: 'Watch',
          catchPhrase: 'Game On with Our Collection',
          description: 'A gadget you would love to have since you own a smart phone',
        },
        {
          id: '17',
          price: 23,
          rating: 5,
          brand: 'dior',
          image: '/assets/pngs/products/shoes.png',
          name: 'Shoes',
          catchPhrase: 'Step Up Your Style',
          description: 'Recommended to match a smart nice dress',
        },
      ],
    });
  }
}
