const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <header className="bg-gray-200 dark:bg-gray-700 text-center py-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
          Welcome to MyStore
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Your one-stop shop for products and services
        </p>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Quality Products
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We offer a wide range of high-quality products to meet all your
              needs.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Customer Support
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our team is here to assist you 24/7 with any questions or
              concerns.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Secure Payments
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Enjoy safe and secure payment options for a hassle-free shopping
              experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
