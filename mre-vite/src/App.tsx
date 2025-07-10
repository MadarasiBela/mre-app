import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/Register/RegisterPage';
import LoginPage from './pages/Login/LoginPage';
import NotesPage from './pages/Notes/NotesPage';
import EditorPage from './pages/Editor/EditorPage';
import Layout from './components/Application/Layout';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<NotesPage />} />
        <Route path="/register" element={<RegisterPage onNavigate={() => {}} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/editor" element={<EditorPage />} />
      </Route>
    </Routes>
  );
}