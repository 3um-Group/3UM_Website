import React from 'react';
import Image, { ImageProps } from 'next/image';
import product1Img from '@/public/assets/House1.jpeg';
import product2Img from '@/public/assets/House2.jpeg';
import product3Img from '@/public/assets/House3.jpeg';
import product4Img from '@/public/assets/Bathroom1.jpg';
import product5Img from '@/public/assets/Bathroom2.jpg';
import product6Img from '@/public/assets/Bathroom3.jpg';

interface Product {
  title: string;
  description: string;
  image: ImageProps['src'];
}

const products: Product[] = [
  {
    title: 'Luxury House 1',
    description: 'A luxurious house located in the heart of the city with modern amenities and exquisite design.',
    image: product1Img,
  },
  {
    title: 'Celebrity Home',
    description: 'An extravagant home appraised by the legendary Makoto, offering unparalleled luxury and comfort.',
    image: product2Img,
  },
  {
    title: 'Countryside Cottage',
    description: 'A charming cottage by David, perfect for countryside living with beautiful surroundings and a hot tub.',
    image: product3Img,
  },
  {
    title: 'Modern Bathroom 1',
    description: 'A stylish and modern bathroom designed for ultimate relaxation and convenience.',
    image: product4Img,
  },
  {
    title: 'Elegant Bathroom 2',
    description: 'An elegant bathroom featuring high-end fixtures and a sophisticated design.',
    image: product5Img,
  },
  {
    title: 'Classic Bathroom 3',
    description: 'A classic bathroom with a timeless design, offering both comfort and style.',
    image: product6Img,
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Products</h2>
        <div className="flex flex-wrap justify-center">
          {products.map((product, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <Image src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
