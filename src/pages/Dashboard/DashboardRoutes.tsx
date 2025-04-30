import { Routes, Route } from 'react-router-dom';
import {Dashboard} from './Dashboard';
import HomePage from './Pages/HomePage';
import Profile from './Pages/Profile';
import Settings from './Pages/Settings';

const DashboardRoutes = () => {
  return (
 // HomePages Component (Routing)

    <Dashboard>
      <Routes>
        <Route path="home" element={<HomePage />} />
        {/* <Route path="idea" element={<Idea />} /> */}
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </Dashboard>
  )
}

export default DashboardRoutes;