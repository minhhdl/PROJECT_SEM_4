import React from "react";

export default function Blogs() {
  return (
    <section>
      <div className="text-center min-h-[75vh]">
        {" "}
        <div className="bg-black text-white py-10"></div>
        <div className="h-[75vh] md:p-16 bg-darkGray text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Why should you read books with us?
          </h2>
          <div className="w-12 h-1 bg-red-500 mx-auto mb-8"></div>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* Card 1 */}
            <div className="bg-primary text-white p-6 rounded-lg text-center w-full md:w-1/3">
              <i className="fas fa-shipping-fast text-4xl mb-3"></i>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Full of Adventure
              </h3>
              <p className="text-sm md:text-base">
                With different genres of books, famous authors.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-primary text-white p-6 rounded-lg text-center w-full md:w-1/3">
              <i className="fas fa-shipping-fast text-4xl mb-3"></i>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Read Books for Free
              </h3>
              <p className="text-sm md:text-base">No deposit required.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-primary text-white p-6 rounded-lg text-center w-full md:w-1/3">
              <i className="fas fa-shipping-fast text-4xl mb-3"></i>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Friendly</h3>
              <p className="text-sm md:text-base">
                With a simple, easy-to-use interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
