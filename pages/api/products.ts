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
        },
        {
          id: '2',
          price: 14,
          rating: 4.6,
          brand: 'dior',
          image: '/assets/pngs/products/ball.png',
          name: 'Apple AirPods (3rd generation) with water proof',
        },
        {
          id: '3',
          price: 154,
          rating: 5,
          brand: 'ikea',
          image: '/assets/pngs/products/table.png',
          name: 'Apple AirPods (3rd generation) with water proof',
        },
        {
          id: '4',
          price: 324,
          rating: 4.2,
          brand: 'nike',
          image: '/assets/pngs/products/sneakers.png',
          name: 'Apple AirPods (3rd generation) with water proof',
        },
        {
          id: '5',
          price: 124,
          rating: 4.2,
          brand: 'apple',
          image: '/assets/pngs/products/earpods.png',
          name: 'Apple AirPods (3rd generation) with water proof',
        },
        {
          id: '6',
          price: 324,
          rating: 4.2,
          brand: 'nike',
          image: '/assets/pngs/products/sneakers.png',
          name: 'Apple AirPods (3rd generation) with water proof',
        },
        {
          id: '7',
          price: 14,
          rating: 4.6,
          brand: 'nike',
          image: '/assets/pngs/products/shirt.png',
          name: 'Apple AirPods (3rd generation) with water proof',
        },
        {
          id: '8',
          price: 154,
          rating: 5,
          brand: 'ikea',
          image: '/assets/pngs/products/table.png',
          name: 'Apple AirPods (3rd generation) with water proof',
        },
      ],
    });
  }
}
