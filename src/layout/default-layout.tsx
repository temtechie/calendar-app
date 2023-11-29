// import { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import SideBar from '../components/sidebar/sidebar';
// import Header from '../components/header/header';

// const DefaultLayout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className='dark:bg-boxdark-2 dark:text-bodydark'>
//       <div className='flex h-screen overflow-hidden'>
//         <SideBar />

//         <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
//           {/* <!-- ===== Header Start ===== --> */}
//           <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//           {/* <!-- ===== Header End ===== --> */}

//           {/* <!-- ===== Main Content Start ===== --> */}
//           <main>
//             <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-primary3 h-screen'>
//               <Outlet />
//             </div>
//           </main>
//           {/* <!-- ===== Main Content End ===== --> */}
//         </div>
//         {/* <!-- ===== Content Area End ===== --> */}
//       </div>
//       {/* <!-- ===== Page Wrapper End ===== --> */}
//     </div>
//   );
// };

// export default DefaultLayout;

// DashboardLayout.js

// DashboardLayout.js

import { lazy, Suspense, useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import TopNav from './topnav';
import './dashboard-layout.css';
import CalendarView from '../pages/calendar-view';

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // const routes = useMemo(
  //   () => [
  //     { path: 'home', element: <CalendarView /> },
  //     { path: 'calendar', element: <CalendarView /> },
  //     { path: 'events', element: <CalendarView /> },
  //   ],
  //   [],
  // );
  const routes: any = [
    { path: 'home', element: <CalendarView /> },
    { path: 'calendar', element: <CalendarView /> },
    { path: 'events', element: <CalendarView /> },
  ];

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
