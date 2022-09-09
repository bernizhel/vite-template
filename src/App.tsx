import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Lorem from './pages/Lorem';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/lorem" element={<Lorem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
