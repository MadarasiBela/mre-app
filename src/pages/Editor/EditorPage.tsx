import React, { useState } from "react";
import Title from '../../components/Title/Title';
import Footer from '../../components/Footer/Footer';
import EditorToolbar from '../../components/ToolBar/EditorToolbar';
import type {CurrentStatus} from '../../components/Title/Title';
import type { TitleProps } from "../../components/Title/Title";


export default function EditorPage() {
  const [reportTitle, setReportTitle] = useState('');
  const footerMessage = "This is the Editor page footer. ";
//  const footerExtra = new Date().toLocaleString();
  // The syntax is not usable here because `footerExtra` is declared as a constant (`const`), so you cannot reassign it.
  // Also, `footerExtra.concat("username")` returns a new string, it does not modify `footerExtra` in place.
  // If you want to append "username" to `footerExtra`, you should do it when you define it:

  const footerExtra = new Date().toLocaleString() + " Your username is: ... will be developed.";

  return (
    <>
      <Title title="Editor" />
      <EditorToolbar
        title={reportTitle}
        onTitleChange={(e: React.ChangeEvent<HTMLInputElement>) => setReportTitle(e.target.value)}
        onBold={() => {/* később: formázás */}}
        onItalic={() => {/* később: formázás */}}
        onUnderline={() => {/* később: formázás */}}
        onSave={() => {/* később: mentés */}}
        onExport={() => {/* később: export PDF-be */}}
      />
      <div className="centered-controls">
        <label htmlFor="editor-field">Report text:</label>
        <textarea
          id="editor-field"
          placeholder="Write or edit your report here..."
        />
      </div>      
      <Footer message={footerMessage} extra={footerExtra} />
    </>
  );
}