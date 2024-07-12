// utils.tsx
export async function generateStaticParams() {
    const validProducts = ['AI'];
    return validProducts.map(product => ({
      params: { product },
    }));
  }
  