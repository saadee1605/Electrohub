"use client";

export default function page() {
  const offers = [
    {
      id: 1,
      title: "Limited Time Offer!",
      description: "Get 20% off on all products. Use code: SAVE20",
      validUntil: "Expires: Feb 29, 2025",
    },
    {
      id: 2,
      title: "Buy One Get One Free",
      description: "BOGO on selected categories. Don't miss out!",
      validUntil: "Expires: March 10, 2025",
    },
    {
      id: 3,
      title: "Free Shipping",
      description: "Enjoy free shipping on orders above $50.",
      validUntil: "Limited-time offer!",
    },
  ];

  return (
    <div className="mt-48 md:mt-36 p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Exclusive Offers</h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        Check out our latest deals and discounts. Shop now and save more!
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">{offer.title}</h2>
            <p className="text-gray-700 mt-2">{offer.description}</p>
            <p className="text-sm text-red-500 mt-2">{offer.validUntil}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
