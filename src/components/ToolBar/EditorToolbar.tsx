import React from 'react';

type EditorToolbarProps = {
  title: string;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBold: () => void;
  onItalic: () => void;
  onUnderline: () => void;
  onSave: () => void;
  onExport: () => void;
};

export default function EditorToolbar({
  title,
  onTitleChange,
  onBold,
  onItalic,
  onUnderline,
  onSave,
  onExport
}: EditorToolbarProps) {
  return (
    <div className="editor-toolbar">
      <input
        type="text"
        maxLength={256}
        placeholder="Report title"
        value={title}
        onChange={onTitleChange}
        className="report-title-input"
      />
      <button type="button" onClick={onBold}><b>B</b></button>
      <button type="button" onClick={onItalic}><i>I</i></button>
      <button type="button" onClick={onUnderline}><u>U</u></button>
      <button type="button" onClick={onSave}>Save</button>
      <button type="button" onClick={onExport}>Export PDF</button>
    </div>
  );
}