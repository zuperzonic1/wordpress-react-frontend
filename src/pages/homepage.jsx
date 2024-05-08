// import logo from '../logo.svg';
import '../App.css';
import { Card, Button } from "flowbite-react";

function Homapage() {
  return (
  <main className="p-4">
     <div className="bg-white shadow mb-4 py-4 px-8">
    <h1 className="text-3xl font-bold">Homepage</h1>
  </div>
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem Ipsum</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <Button>
        Read more
      </Button>
    </Card>
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sed Ut Perspiciatis</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
      <Button>
        Read more
      </Button>
    </Card>
  </main>
  );
}

export default Homapage;
