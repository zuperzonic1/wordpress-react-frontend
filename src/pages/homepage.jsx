import '../App.css';
import HomepageTemplate from '../components/HomepageTemplate';

function Homepage() {
  return (
    <main className="p-4 mx-auto max-w-7xl ">
      <div className="bg-white shadow mb-4 py-4 px-8 rounded-lg">
        <h1 className="text-3xl font-bold">Homepage</h1>
      </div>
      <HomepageTemplate />
    </main>
  );
}

export default Homepage;
