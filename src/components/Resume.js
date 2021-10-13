import React, {useState, useEffect} from "react";
import { Document, Page } from 'react-pdf';
//import { pdfjs } from 'react-pdf';
import resume from "../resume/Myresume.pdf";
//pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
import img from "../resume/resume-screen.png";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";

export default function getResume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onLoadSuccess(stuff){
    setNumPages(stuff.numPages);
    console.log(stuff);
  }
  useEffect(() =>{
    console.log(resume);
  },[])
  const loading = () => (
    <img
      src={img}
    />
  )
  return (
    <section id="resume">

    <div className="flex flex-wrap m-4">

    {resume.map}
    <div className="p-4 md:w-1/2 w-full">

      <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
        <TerminalIcon className="block w-8 text-gray-500 mb-4" />
    <iframe height="400" width="400"  src="/resume/Myresume.pdf">
     </iframe>
     </div>
     </div>
     </div>
     
        </section>
  );
}
