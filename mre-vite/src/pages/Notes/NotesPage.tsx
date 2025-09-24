import React, { useEffect, useState } from 'react';
import './NotesPage.css';
import Title from '../../components/Title/Title';
import CommonButton from '../../components/Button/CommonButton';

interface Note {
  id: number;
  title: string;
  content: string;
  userName: string;
}

interface NotesPageProps {
  onNavigate?: (path: string) => void;
}

export default function NotesPage({ onNavigate }: NotesPageProps) {
  const [notes, setNotes] = useState<any[]>([]);
  const apiUrl = import.meta.env.VITE_API_URL || '/api';

  useEffect(() => {
    const fetchNotes = async () => {
      const userName = localStorage.getItem('userName') || '';
      const response = await fetch(`${apiUrl}/api/notes?userName=${encodeURIComponent(userName)}`);
      const data = await response.json();
      setNotes(data);
    };
    fetchNotes();
  }, []);

  // Sorting notes into columns (3 columns)
  const columns = [[], [], []] as any[][];
  notes.forEach((note, idx) => {
    columns[idx % 3].push(
      <div className="note-item" key={note.id}>{note.title}</div>
    );
  });

  const handleNew = () => {
    if (onNavigate) onNavigate('/editor');
  };

  return (
    <div className="notes-page">
      <div className="notes-header">
        <Title title=" My Notes" />
      </div>
      <article>
        <div className="notes-list" style={{ display: 'flex' }}>
          {columns.map((col, i) => (
            <div key={i} style={{ flex: 1 }}>{col}</div>
          ))}
        </div>
      </article>
      <CommonButton onClick={handleNew}>New</CommonButton>
    </div>
  );
}