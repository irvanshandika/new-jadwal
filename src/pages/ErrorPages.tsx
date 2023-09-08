import ErrorFile from "@images/folder-warning-5639571.png";

function ErrorPages() {
  return (
    <div className="flex items-center justify-center p-5 h-screen bg-white w-full dark:bg-gray-800">
      <div className="text-center">
        <div className="flex justify-center">
          <img src={ErrorFile} alt="" className="w-[250px]" />
        </div>
        <h1 className="mt-5 text-[36px] font-bold text-slate-800 dark:text-slate-300 lg:text-[50px]">404 - Page not found</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-5 lg:text-lg">
          The page you are looking for doesn't exist or <br />
          has been removed.
        </p>
        <div className="mt-4">
          <a href="/" className="text-slate-800 dark:text-slate-300 bg-blue-500 hover:bg-blue-300 px-4 py-2 rounded">
            Go Back
          </a>
        </div>
      </div>
    </div>
  );
}

export default ErrorPages;
