/*
MIT License

Copyright (c) 2017–2023 Wojciech Maj

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import resume from '../assets/Elyas_Belkhir_resume1.pdf'
import '../styles/pdf.css'

import type { PDFDocumentProxy } from 'pdfjs-dist';

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

type PDFFile = string | File | null;

export default function Experience() {
const [file, setFile] = useState<PDFFile>(resume);
  const [numPages, setNumPages] = useState<number>();

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { files } = event.target;

    if (files && files[0]) {
      setFile(files[0] || null);
    }
  }

  function onDocumentLoadSuccess(document: any) {
    setNumPages(document.numPages);
 }

  return (
    <div className="Example">
  
      <div className="Example__container">
       
        <div className="Example__container__document">
        <Document
    file={resume}
    onLoadSuccess={onDocumentLoadSuccess}
    onError={(error) => console.error("PDF Error:", error)}
>
    <Page pageNumber={numPages} />
</Document>
        </div>
      </div>
    </div>
  );
}