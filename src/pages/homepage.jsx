import '../App.css';

function Homepage() {
  return (
    <main className="p-4 mx-auto max-w-7xl">
      <div className="bg-white shadow mb-4 py-4 px-8">
        <h1 className="text-3xl font-bold">Homepage</h1>
      </div>
      <div className="mb-4 p-4 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        <img src="https://via.placeholder.com/600x400" alt="Featured" className="md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-4"/>
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome to Our Site</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Explore our features and learn more about what we offer. Our site provides comprehensive insights and tools to help you succeed.
          </p>
          <button className="mt-3 px-4 py-2 bg-white-500 border text-black rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            Learn More
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Hardcoded Data Boxes */}
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
          <h5 className="text-xl font-bold text-gray-900 dark:text-white">Section 1</h5>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Detailed information about this section. Discover the features and benefits that make our services unique and effective.
          </p>
          <button className="mt-3 px-4 py-2 bg-white-500 border text-black rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            Explore
          </button>
        </div>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
          <h5 className="text-xl font-bold text-gray-900 dark:text-white">Section 2</h5>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Detailed information about this section. Discover the features and benefits that make our services unique and effective.
          </p>
          <button className="mt-3 px-4 py-2 bg-white-500 border text-black rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            Explore
          </button>
        </div>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
          <h5 className="text-xl font-bold text-gray-900 dark:text-white">Section 3</h5>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            Detailed information about this section. Discover the features and benefits that make our services unique and effective.
          </p>
          <button className="mt-3 px-4 py-2 bg-white-500 border text-black rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            Explore
          </button>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
