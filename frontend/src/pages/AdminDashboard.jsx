import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  // Hendle Popup model
  const [isPopupVisible, setPopupVisible] = useState(false);

  const popupModelHandler = () => {
    setPopupVisible(true);
  };

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/allUser");
        const jsonData = await response.json();
        console.log(jsonData[0]._id);
        setFeedbacks(jsonData);
      } catch (error) {
        console.log("Error While Fetching Data :", error);
      }
    };
    fetchData();
  }, []);

  const deleteFedddback = (_id) => {
    setFeedbacks(feedbacks.filter((feedback) => feedback._id !== _id));
  };

  return (
    <>
      <section className="w-full h-screen bg-[#f3f3f3] flex justify-center items-center px-4 sm:px-0">
        <div className="form_wrapper w-full sm:w-[600px] h-96 bg-white rounded-sm py-8 px-1">
          <h1 className="text-2xl font-semibold text-center">
            Admin Feedback Dashboard
          </h1>
          <table className="border-collapse border border-gray-200 mt-4 w-full">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="border border-gray-300 px-1">Id</th>
                <th className="border border-gray-300 px-1">Feedback</th>
                <th className="border border-gray-300 px-1">Date</th>
                <th className="border border-gray-300 px-1">Action</th>
              </tr>
            </thead>
            <tbody id="delete_feedback">
              {feedbacks.map((feedback, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-1">{index + 1}</td>
                  <td className="border border-gray-300 px-1">
                    {feedback.email}
                  </td>
                  <td className="border border-gray-300 px-1">
                    {new Date(feedback.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-1">
                    <button id="edit_feedback" onClick={popupModelHandler}>
                      Edit
                    </button>
                    /
                    <button onClick={() => deleteFedddback(feedback._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="bg-red-700 text-white fixed top-5 right-8 px-4 py-1 rounded-sm cursor-pointer">
          Logout
        </button>
      </section>
      <section
        id="poup_model"
        className={`w-full h-screen fixed inset-0 bg-gray-400 flex justify-center items-center ${
          isPopupVisible ? "block" : "hidden"
        }`}
      >
        <div className="form_wrapper w-full sm:w-[600px] h-96 bg-white rounded-sm py-8 px-1">
          <h2 className="text-2xl font-semibold text-center my-5">
            Updated Feedback
          </h2>
          <button
            onClick={() => setPopupVisible(false)}
            className="fixed top-3 right-5"
          >
            X
          </button>
          <form action="#" className="flex flex-col gap-5">
            <textarea
              name="feedback"
              cols={`50`}
              rows={`5`}
              placeholder="Update Your Feeddback"
              className="border-2 border-gray-200 outline-none p-3"
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="px-4 py-2 bg-red-700 text-white rounded-sm hover:bg-red-500 mt-2 cursor-pointer"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
