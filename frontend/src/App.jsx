import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Documents from './pages/Document';
import Notes from './pages/Notes';
import SearchPage from './pages/Search';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      {/* Helmet for SEO & Google Verification */}
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rexium | Smart Task Management & AI Productivity App</title>
        <meta
          name="description"
          content="Rexium helps you organize tasks, manage notes, and summarize content using AI. Stay productive with our clean, fast, and secure task management app."
        />
        <meta
          name="keywords"
          content="task management, langavi clyde makhubele, productivity app, AI summarizer, to-do app, task tracker, notes app, Rexium"
        />
        <meta name="google-site-verification" content="google7a1d67c6ae7952bc" />
      </Helmet>

      <Router>
        <div className='container'>
          <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/documents' element={<Documents />} />
            <Route path='/notes' element={<Notes />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
