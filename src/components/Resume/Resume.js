import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useLanguage } from "../LanguageContext";
import translations from "../translations";
import "./Resume.css";

// Usamos el worker desde CDN para no tener que copiar el archivo a /public
// y que siempre coincida con la versión de react-pdf instalada.
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Resume() {
  const { language } = useLanguage();
  const t = translations[language].resume;

  const [numPages, setNumPages] = useState(null);
  const [pageWidth] = useState(Math.min(window.innerWidth * 0.85, 700));

  // Cuando cambia el idioma, cambia el archivo del CV: reseteamos numPages
  // para que se vuelva a calcular con el nuevo documento.
  useEffect(() => {
    setNumPages(null);
  }, [language]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <section className="cv-section" id="resume">
      {/* <div className="cv-title">
        <h1>{t.title}</h1>
      </div> */}

      <div className="cv-download-row">
        <a
          className="cv-download-btn"
          href={t.file}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <AiOutlineDownload size={18} />
          &nbsp;{t.download}
        </a>
      </div>

      <div className="cv-viewer">
        <Document
          key={t.file}
          file={t.file}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.log("PDF ERROR:", error)}
          loading={<p className="cv-loading">{t.loading}</p>}
          error={<p className="cv-loading">{t.error}</p>}
        >
          {Array.from(new Array(numPages || 0), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={pageWidth}
              className="cv-page"
              renderTextLayer={true}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      </div>

      <div className="cv-download-row">
        <a
          className="cv-download-btn"
          href={t.file}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <AiOutlineDownload size={18} />
          &nbsp;{t.download}
        </a>
      </div>
    </section>
  );
}

export default Resume;