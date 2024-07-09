
import ProductDetails from '@/components/ProductDetails';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: {
    product: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { product } = params;

  return (
    <div>
      {/* <h1>{product.charAt(0).toUpperCase() + product.slice(1)} Product Details</h1>
      <p>This is the product details page for {product}.</p> */}
      <ProductDetails productName={product}/>
    </div>
  );
}

export async function generateStaticParams() {
  // Return an array of objects for known products
  return [
    { product: 'fortuna' },
    { product: 'genesis' },
    { product: 'ai' },
  ];
}

// export const dynamicParams = true; // Allow dynamic paths

// export const revalidate = 60; // Revalidate every 60 seconds