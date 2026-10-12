import { stripe } from '@/lib/stripe';
import Image from 'next/image';
import Link from 'next/link';
export default async function Home() {
  const products = await stripe.products.list({
    expand: ['data.default_price'],
    limit: 2,
  });
  const bannerProduct = products.data.find((product) => product.images[0]);
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <section className="grid min-h-[450px] items-center gap-8 rounded-sm bg-[#f4f3f8] px-6 py-10 md:grid-cols-2 md:px-16 lg:px-24">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome to My Ecommerce
          </h1>
          <p className="mt-3 text-sm text-zinc-600">
            Discover the latest products at the best prices.
          </p>
          <Link
            href="/products"
            className="mt-4 inline-flex rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            Browse All Products
          </Link>
        </div>
        <div className="flex items-center justify-center">
          {bannerProduct ? (
            <Image
              alt={bannerProduct.name}
              width={450}
              height={450}
              src={bannerProduct.images[0]}
              className="h-64 w-full object-contain md:h-80"
              sizes="(max-width: 768px) 100vw, 450px"
            />
          ) : (
            <div className="flex h-64 w-full items-center justify-center text-sm text-zinc-500 md:h-80">
              No product image available
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
