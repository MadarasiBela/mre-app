import React, { useState } from "react";
import Title from '../../components/Title/Title';
import EditorToolbar from '../../components/ToolBar/EditorToolbar';
import './EditorPage.css';
import sanitizeHtmlInput from '../../utils/sanitizeHtml'; // Importing sanitize-html for sanitizing HTML input


export default function EditorPage() {
  const [reportTitle, setReportTitle] = useState<string>('');
  const [reportText, setReportText] = useState<string>('');
  const [noteID, setNoteID] = useState<number>(1); // később: dinamikus ID lekérés
  const isNewNote = noteID === 1; // később: dinamikus új jegyzet felismerés
  // const [footerMessage, setFooterMessage] = useState<string>('Ready');
  // const [footerExtra, setFooterExtra] = useState<string>('');
  const saveReport = (isNew: boolean, title: string, createdAt: string, userName: string, userID: number, content: string) => {
    const payload = {
      isNew,
      title,
      createdAt,
      userName,
      userID,
      content
    };

    // Send the report to the server
    fetch('/api/reports', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('Report saved successfully');
        } else {
          console.error('Error saving report:', data.message);
        }
      })
      .catch(error => {
        console.error('Error saving report:', error);
      });
  };

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
          onSave={() => saveReport(
              noteID === 1,
              sanitizeHtmlInput(reportTitle),
              new Date().toISOString(),
              localStorage.getItem('userName') || '',
              /* később: userID */ 1,
              sanitizeHtmlInput(reportText.concat(':\n'+ localStorage.getItem('userName')?.toString || '')+' wrote on '+new Date().toLocaleString()+reportText))
          }          
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