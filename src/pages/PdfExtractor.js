import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./PdfExtractor.css";

function PdfExtractor() {
  const [files, setFiles] = useState([]);
  const [extractionType, setExtractionType] = useState("");
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFiles((prev) => {
      const existing = new Set(prev.map((f) => f.name));
      const newFiles = acceptedFiles.filter((f) => !existing.has(f.name));
      return [...prev, ...newFiles];
    });
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    multiple: true,
    onDrop,
  });

  const handleUpload = async () => {
    if (!files.length) {
      setError("Please select at least one PDF file.");
      return;
    }
    if (!extractionType) {
      setError("Please select an extraction type.");
      return;
    }
    if (Number(startPage) < 1 || Number(endPage) < Number(startPage)) {
      setError("End page must be greater than or equal to start page.");
      return;
    }

    const formData = new FormData();
    
    formData.append("extraction_type", extractionType);
    formData.append("start_page", Number(startPage));
    formData.append("end_page", Number(endPage));

    files.forEach((file) => formData.append("files", file));

    setLoading(true);
    setProgress(0);
    setTableData([]);
    setError("");

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded * 100) / event.total);
        setProgress(percent);
      }
    };

    try {
      const response = await new Promise((resolve, reject) => {
        xhr.open(
          "POST",
          "http://127.0.0.1:8000/api/extract/"
        );

        xhr.onload = () => {
          if (
            xhr.status >= 200 &&
            xhr.status < 300
          ) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(
              new Error(
                `Server Error ${xhr.status}`
              )
            );
          }
        };

        xhr.onerror = () => {
          reject(new Error("Network Error"));
        };

        xhr.send(formData);
      });

      console.log(response);

      if (
        response.results &&
        response.results.length > 0
      ) {
        setTableData(
          response.results[0].table_data || []
        );
      }
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
      setProgress(0);
    }
  }

  return (
    <div className="pe-app">
      <h2 className="pe-title">PDF extraction system</h2>

      <div className="pe-two-columns">
        {/* LEFT COLUMN – Inputs */}
        <div className="pe-left">
          {/* Dropzone */}
          <div
            {...getRootProps()}
            className={`pe-dropzone${isDragActive ? " pe-dropzone--active" : ""}`}
          >
            <input {...getInputProps()} />
            <span className="pe-dropzone__icon">📂</span>
            <p className="pe-dropzone__text">
              {isDragActive
                ? "Drop PDFs here..."
                : "Drag & drop PDFs or click to upload"}
            </p>
            <span className="pe-dropzone__hint">Supports multiple files · PDF only</span>
          </div>

          {/* File list */}
          {files.length > 0 && (
            <div className="pe-file-list">
              <div className="pe-file-list__header">
                Selected files ({files.length})
              </div>
              {files.map((file, i) => (
                <div key={i} className="pe-file-item">
                  <span className="pe-file-item__name">📄 {file.name}</span>
                  <button
                    className="pe-file-item__remove"
                    onClick={() => removeFile(i)}
                    aria-label={`Remove ${file.name}`}
                    title="Remove"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Extraction type */}
          <div className="pe-form-group">
            <label className="pe-label">Extraction type</label>
            <select
              className="pe-select"
              value={extractionType}
              onChange={(e) => setExtractionType(e.target.value)}
            >
              <option value="">Select type</option>
              <option value="one_participant">One participant per page</option>
              <option value="four_participant">Four participants per page</option>
              <option value="census">Census file</option>
            </select>
          </div>

          {/* Page range */}
          <div className="pe-page-range">
            <div className="pe-form-group">
              <label className="pe-label">Start page</label>
              <input
                className="pe-input"
                type="number"
                min="1"
                value={startPage}
                onChange={(e) => setStartPage(Number(e.target.value))}
              />
            </div>
            <div className="pe-form-group">
              <label className="pe-label">End page</label>
              <input
                className="pe-input"
                type="number"
                min="1"
                value={endPage}
                onChange={(e) => setEndPage(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Error */}
          {error && <div className="pe-error">{error}</div>}

          {/* Progress */}
          {loading && (
            <div className="pe-progress-wrap">
              <div className="pe-progress-label">
                <span>{progress < 100 ? "Uploading..." : "Processing..."}</span>
                <span>{progress}%</span>
              </div>
              <div className="pe-progress-track">
                <div
                  className="pe-progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Submit */}
          <button
            className="pe-btn"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? "Processing..." : "Upload & extract"}
          </button>
        </div>

        {/* RIGHT COLUMN – Only the extracted table (no JSON) */}
        <div className="pe-right">
          {tableData.length > 0 && (
            <div className="table-container">
              <div className="pe-result__header">Extracted Table</div>
              <table className="pe-data-table">
                <thead>
                  <tr>
                    {Object.keys(tableData[0]).map((col) => (
                      <th key={col}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      {Object.values(row).map((value, i) => (
                        <td key={i}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tableData.length === 0 && !loading && (
            <div className="pe-placeholder">
              <p>✨ Extracted table will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PdfExtractor;