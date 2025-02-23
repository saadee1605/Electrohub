"use client";

export default function About() {
  return (
    <div className="mt-20 md:mt-36 p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      
      <p className="text-lg text-gray-700 text-center mb-8">
        Welcome to our store! We are passionate about providing high-quality products
        with an exceptional shopping experience. Our mission is to bring you the best
        products at affordable prices.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
          <p className="text-gray-700">
            Started in 2024, our company has grown from a small startup to a trusted brand.
            We focus on delivering top-notch products with customer satisfaction as our 
            top priority.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>High-quality and trendy products</li>
            <li>Fast and reliable shipping</li>
            <li>Excellent customer support</li>
            <li>Secure payment options</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="text-gray-700 mt-2">📧 Email: support@yourstore.com</p>
        <p className="text-gray-700">📞 Phone: +123 456 7890</p>
      </div>
    </div>
  );
}
