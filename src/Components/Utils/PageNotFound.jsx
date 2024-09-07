import React from "react";

function PageNotFound() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-orange-500">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-6">
            <a
              href="/"
              className="rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Go back home
            </a>
            <a href="contact" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default PageNotFound;
