import React, { useState } from "react";
import Title from '../../components/Title/Title';
import EditorToolbar from '../../components/ToolBar/EditorToolbar';
import './EditorPage.css';
import sanitizeHtmlInput from '../../utils/sanitizeHtml'; // Importing sanitize-html for sanitizing HTML input


export default function EditorPage() {
  const [reportTitle, setReportTitle] = useState<string>('');
  const [reportText, setReportText] = useState<string>('');
  
  return (
    <>
      <div className="editor-page">
        <Title title="Editor" />
        <EditorToolbar
          title={reportTitle}
          onTitleChange={(e: React.ChangeEvent<HTMLInputElement>) => setReportTitle(sanitizeHtmlInput(e.target.value))}
          onBold={() => {/* később: formázás */}}
          onItalic={() => {/* később: formázás */}}
          onUnderline={() => {/* később: formázás */}}
          onSave={() => {/* később: mentés */}}
          onExport={() => {/* később: export PDF-be */}}
        />
        <div className="editor-field-container">
          {/* <label htmlFor="editorField">Report text:</label><br /> */}
          <textarea
            id="editorField"
            className="editor-field"
            placeholder="Write your report here..."
            value={reportText}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReportText(sanitizeHtmlInput(e.target.value))}
          />
        </div>
      </div>
      <div className="some-footer">
        {/* <Footer message={footerMessage} extra={footerExtra} /> */}
      </div>
    </>
  );
}