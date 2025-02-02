export default function ContactUs() {
  return (
    <div className="flex items-center justify-center mt-24">
      <div className="w-full max-w-md p-6 md:p-8">
        <div className="border-t-2 border-black mb-8"></div>

        <div>
          <div className="space-y-4 text-base md:text-lg lg:text-xl flex flex-col items-center justify-center">
            <p className="flex items-center">
              <strong className="mr-2">Email:</strong>
              <a
                href="mailto:info@skiletpoint.org"
                className=" hover:underline"
              >
                info@skiletpoint.org
              </a>
            </p>
            <p className="flex items-center">
              <strong className="mr-2">Phone:</strong>
              <a
                href="tel:+254722710303"
                className="hover:underline"
              >
                +254 722 710 303
              </a>
            </p>
            <p className="flex items-center">
              <strong className="mr-2">Address:</strong> Nairobi, Kenya
            </p>
          </div>
        </div>

        <div className="border-t-2 border-black mt-8"></div>
      </div>
    </div>
  );
}