import React, {useState} from "react";
import {Document, Page } from 'react-pdf/dist/umd/entry.parcel';
//import { pdfjs } from 'react-pdf';
import resume from "../resume/Penyevskaya_Resume.pdf";
//pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';


export default function getResume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onLoadSuccess({numPage}){
    setNumPages(numPages);
  }
  return (
    <section id="resume">
      <Document file= {`../resume/Penyevskaya_Resume.pdf`}loading={resume} noData="nodtat"
      onLoadSuccess={(pdf) => alert('Loaded a file with ' + pdf.numPages + ' pages!')}
      >
        <Page numPages={1} />
        </Document>

        </section>
  );
}
