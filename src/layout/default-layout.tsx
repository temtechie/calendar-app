import { Suspense, lazy, useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import TopNav from './topnav';
import './dashboard-layout.css';

const CalendarView = lazy(() => import('../pages/calendar'));

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const routes = useMemo(
    () => [
      { path: 'Home', element: <CalendarView /> },
      { path: 'Calendar', element: <CalendarView /> },
      { path: 'Event', element: <CalendarView /> },
    ],
    [],
  );

  return (
    <div className={`dashboard-layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar routes={routes} isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className='main-content'>
        <TopNav onToggleSidebar={toggleSidebar} />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default DashboardLayout;
