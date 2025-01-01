/* This example requires Tailwind CSS v2.0+ */

import { useState } from "react";

const PaginatedNumbers = ({
  totalPages,
  page,
  changePage,
  maxPageNumberLimit,
  minPageNumberLimit,
}) => {
  return Array.from({ length: totalPages }, (num, index) => {
    if (index < maxPageNumberLimit + 1 && index > minPageNumberLimit)
      return (
        <button
          onClick={() => changePage(index)}
          className={`bg-white ${page === index ? "bg-black text-white" : "hover:bg-gray-50"
            } border-gray-300 relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
        >
          {index}{" "}
        </button>
      );
    else {
      return null;
    }
  });
};

export default function Pagination({
  totalPages,
  pageSize,
  page,
  changePage,
  incrementPage,
  decrementPage,
  getPage
}) {
  const [current, setCurrent] = useState(page)

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-center space-x-11 sm:px-6 min-w-[400px]">
      <button
        style={{ display: page === 1 && "none" }}
        disabled={page === 1}
        onClick={decrementPage}
        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
      >
        {'<'} <span>Previous</span>
      </button>
      <div className="sm:flex-1 flex justify-center w-full">

        <div>
          <pre className="text-sm text-gray-700">
            Showing page <input type="number" min={1} value={current} max={totalPages} defaultValue={page}
              onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
              onChange={(e) => {
                setCurrent(e.target.value)
              }}
              onBlur={() => {
                if (current > totalPages || current < 1)
                  setCurrent(page)
                else
                  changePage(current)
              }}
              className="w-[50px] text-center border h-[38px] border-gray-300 outline-none
                 focus:border-indigo-600 :ring-indigo-600" /> of {totalPages} pages
          </pre>
        </div>

      </div>
      <button style={{ display: page === totalPages && "none" }}
        disabled={page === totalPages}
        onClick={incrementPage}
        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
      >
        <span>Next</span> {'>'}
      </button>
    </div>
  );
}