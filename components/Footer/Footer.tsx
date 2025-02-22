export default function Footer() {
    return (
      <footer className=" bg-slate-400 text-black py-6 mt-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            {/* Column 1: About */}
            <div>
              <h2 className="text-xl font-bold">About Us</h2>
              <p className="text-black mt-2">
                We provide high-quality products at the best prices. Shop with confidence!
              </p>
            </div>
  
            {/* Column 2: Quick Links */}
            <div>
              <h2 className="text-xl font-bold">Quick Links</h2>
              <ul className="mt-2">
                <li>
                  <a href="/about" className="text-black hover:text-white">About Us</a>
                </li>
                <li>
                  <a href="/offers" className="text-black hover:text-white">Offers</a>
                </li>
                <li>
                  <a href="/contact" className="text-black hover:text-white">Contact</a>
                </li>
              </ul>
            </div>
  
            {/* Column 3: Contact */}
            <div>
              <h2 className="text-xl font-bold">Contact Us</h2>
              <p className="text-black mt-2">📧 support@yourstore.com</p>
              <p className="text-black">📞 +123 456 7890</p>
            </div>
          </div>
  
          <hr className="my-4 border-gray-700" />
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} YourStore. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }
  