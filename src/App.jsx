import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
// 1. Import halaman baru yang berisi form prediksi
import Analysis from "./pages/Analysis";
import DailyCheckinPage from "./pages/DailyCheckinPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/history" element={<History />} />
      {/* 2. Tambahkan route untuk halaman Daily Checkin */}
      <Route path="/analysis" element={<Analysis/>} />
      <Route path="/dailycheckin" element={<DailyCheckinPage />} />
    </Routes>
  );
}

export default App;
