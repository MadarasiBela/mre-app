import React from 'react';
import './NotesPage.css';
import Title from '../../components/Title/Title';
// import CommonButton from './CommonButton';
// import Footer from '../../components/Footer/Footer';

export default function NotesPage() {
  const footerMessage = "Here you can find your notes.";

  return (
    <>
    <div className="notes-page">
      <div className="notes-header">
        <Title title=" My Notes" />
      </div>
      <article>
        <div className="notes-hint-row">
          <p className="notes-hint">For a new Note click + !</p>
          <button className="add-note-btn">+</button>
        </div>
        <div className="notes-list">
          {/* Itt vannak a note ikonok, 3 oszlopban */}
          <div className="note-item">...</div>
          <div className="note-item">...</div>
          <div className="note-item">...</div>
          {/* ... */}
        </div>
        {/* extra lábléc, ha van */}
      </article>
    </div>
    {/* <Footer
      message={footerMessage}
      extra={<span>Page specific footer: To create a new note, click the + button!</span>} */
    /* /> */}
    </>
  );
}