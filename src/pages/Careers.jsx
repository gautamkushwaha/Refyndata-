// import React from 'react'

// function Careers() {
//   return (
//     <div>
//         <h1>careers</h1>
      
//     </div>
//   )
// }

// export default Careers



import { useState } from "react";
import careersData from "../components/data/careers.json";
import axios from "axios";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(careersData.careers[0]);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    qualification: "",
    message: "",
  });
  const [file, setFile] = useState(null);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handleChange = (e) => {
    if (e.target.name === "file") {
      const selectedFile = e.target.files[0];
      if (selectedFile && selectedFile.size > 4 * 1024 * 1024) {
        alert("File size should not exceed 4MB.");
        return;
      }
      if (
        selectedFile &&
        (selectedFile.type === "image/png" ||
          selectedFile.type === "image/jpeg" ||
          selectedFile.type === "image/jpg")
      ) {
        alert("Image files are not allowed.");
        return;
      }
      setFile(selectedFile);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("contact", formData.contact);
    data.append("email", formData.email);
    data.append("qualification", formData.qualification);
    data.append("message", formData.message);

    if (file) {
      data.append("file", file);
    }

    try {
      const response = await axios.post("http://localhost:5001/send", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Form submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("There was an error sending the form:", error);
      alert("There was an error sending the form.");
    }
  };

  return (
      <div className="container mx-auto p-4">
        <div className="mb-10">
          <h1 className="text-md font-bold">Home / Careers</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 lg:gap-20">
          <div className="col-span-1 md:col-span-1">

            {/* table of content */}
            <div className="w-full p-3 md:p-2 lg:p-3  border border-gray-400 rounded-md mb-10">
              <p className=" text-[23px] font-bold">Careers:</p>
              <table className="table-auto">
                <tbody>
                  {careersData.careers.map((job, index) => (
                    <tr
                      key={index}
                      onClick={() => handleJobSelect(job)}
                      className="cursor-pointer hover:bg-gray-200"
                    >
                      <td className="px-8 md:px-3 lg:px-8 py-2 font-semibold">{job.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-span-2 md:col-span-2">
            <div className="flex">
              <div className="w-full">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">Careers</h2>
                  <p className="border-t border-gray-600 my-3"></p>
                  <h3 className="text-xl font-semibold mb-2">
                    {selectedJob.name}
                  </h3>
                  <p>
                    <strong>Location:</strong> {selectedJob.location}
                  </p>
                  <p className="py-2 text-lg">
                    <strong>Responsibilities:</strong>
                  </p>
                  <ul>
                    {selectedJob.responsibilities.map(
                      (responsibility, index) => (
                        <li key={index} className="pl-2 ml-2 py-{2px}"> {index + 1}. {responsibility}</li>
                      )
                    )}
                  </ul>
                  <p className=" pt-5 pb-1 text-lg">
                    <strong >
                      Minimum Qualification: <br></br>
                    </strong>{" "}</p>
                    <ul>{selectedJob.minimumQualification.map(
                    (minimumQualification, index) => (
                      <li key={index} className="pl-2 ml-2">{index + 1}. {minimumQualification} </li>
                    ))}
                    </ul>
                  
                  <p className=" pt-5 pb-1 text-lg" >
                    <strong>Special Qualifications:</strong>
                  </p>
                  <ul>
                    {selectedJob.specialQualifications.map(
                      (qualification, index) => (
                        <li key={index} className="pl-2 ml-2">{index +1}. {qualification}</li>
                      )
                    )}
                  </ul>
                  <p className=" pt-5 pb-1 text-lg">
                    <strong>Requirements:</strong>
                  </p>
                  <ul>
                    {selectedJob.requirements.map((requirement, index) => (
                      <li key={index} className="pl-2 ml-2">{index+ 1}. {requirement}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold mb-10">
                      Apply now for this position:
                    </h3>
                    {/* <a href="mailto:kushwahagautam24@gmail.com">Send your resume at: <br/> <span className="">kushwahagautam24@gmail.com</span></a> */}
                    <div>
                      <form onSubmit={handleSubmit}>
                        <div>
                          <input
                            className="py-[6px] mb-[24px] border rounded-md w-[100%]  md:w-[50%]"
                            type="text"
                            name="name"
                            placeholder="  Full Name "
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <input
                            className="py-[6px] mb-[24px] border rounded-md w-[100%]  md:w-[50%]"
                            type="number"
                            name="contact"
                            placeholder=" Contact "
                            value={formData.contact}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <input
                            className="py-[6px]  mb-[24px] border rounded-md w-[100%]  md:w-[50%]"
                            type="email"
                            name="email"
                            placeholder=" Email "
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <input
                            className="py-[6px]  mb-[24px] border rounded-md w-[100%] md:w-[50%]"
                            type="text"
                            name="qualification"
                            placeholder=" Highest Qualification "
                            value={formData.qualification}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className=" mb-10 ">
                          <label
                            className="py-[6px] px-2 mb-[10px] border w-[50%]  md:w-[20%] bg-[#0079A0] rounded-md   cursor-pointer inline-block"
                            htmlFor="fileInput"
                          >
                             Upload your CV 
                          </label>
                          <input
                            id="fileInput"
                            type="file"
                            name="file"
                            onChange={handleChange}
                            required
                            className=" hidden"
                          />
                          <p className="text-gray-300"> Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
                        </div>
                        <div>
                          <textarea
                            className="py-[6px] mb-[24px] border rounded-md w-[100%] md:w-[50%]"
                            name="message"
                            placeholder=" Message"
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>
                        <button
                          type="submit"
                          className="py-[6px] mb-[24px] border rounded-md w-[100%] md:w-[50%] bg-[#0079A0]"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Careers;
