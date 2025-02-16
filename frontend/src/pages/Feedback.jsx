import React from "react";

const Feedback = () => {
  return (
    <>
      <section className="w-full h-screen bg-[#f3f3f3] flex justify-center items-center px-4 sm:px-0">
        <div className="form_wrapper w-full sm:w-[500px] h-96 bg-white rounded-sm py-8">
          <h1 className="text-2xl font-semibold text-center">Feedback</h1>
          <form action="#" className="px-4 sm:px-8 py-2 sm:py-4 text-center">
            <button className="bg-gray-200 px-8 py-1">Add Feedback</button>
            <button className="bg-gray-200 px-8 py-1 ms-4">
              Edit Feedback
            </button>
            <div className="messageWrapper flex flex-col items-baseline">
              <label htmlFor="message">Your Feedback</label>
              <textarea
                name="feedback"
                id="message"
                cols="50"
                rows="7"
                placeholder="Write Your Feedback here..."
                className="border-gray-200 border-2 p-2 outline-none"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              className="px-4 py-2 bg-red-700 text-white rounded-sm hover:bg-red-500 mt-2 cursor-pointer"
            />
          </form>
        </div>
        <button className="bg-red-700 text-white fixed top-5 right-8 px-4 py-1 rounded-sm cursor-pointer">
          Logout
        </button>
      </section>
    </>
  );
};

export default Feedback;
