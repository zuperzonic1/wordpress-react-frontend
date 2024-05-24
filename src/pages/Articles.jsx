import { Outlet } from "react-router-dom";
// import ArticleItems from "../components/ArticleItems";

function Articles({ articles }) {
  return (
    <main className="p-4 mx-auto max-w-7xl">
      <div className="bg-white shadow mb-4 py-4 px-8 rounded-lg">
        <h1 className="text-3xl font-bold">FRT Resources</h1>
      </div>
      {/* Add extra details that you need in this page for example, A Categories downdown menu.  */}
      <Outlet />
    </main>
  );
}

export default Articles;
