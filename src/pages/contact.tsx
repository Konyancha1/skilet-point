export default function ContactUs() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md text-center px-4">
          <div className="border-t-2 border-black mb-8"></div>
  
          <div>
            <div className="text-black space-y-3 text-base md:text-xl">
              <p>
                <strong>Email:</strong> <a href="mailto:info@skiletpoint.org" className="text-black">info@skiletpoint.org</a>
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+254706544592" className="text-black">+@254 722 710 303</a>
              </p>
              <p>
                <strong>Address:</strong> Nairobi, Kenya
              </p>
            </div>
          </div>

          <div className="border-t-2 border-black mt-8"></div>
        </div>
      </div>
    );
  }  