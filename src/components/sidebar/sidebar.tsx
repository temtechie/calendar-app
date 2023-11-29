import { Link } from 'react-router-dom';
// import Logo from '../../assets/Connectdent-logo.png';
import { BiSolidDashboard } from 'react-icons/bi';
import {
  FaUserFriends,
  FaCalendarAlt,
  FaHospitalUser,
  FaWpforms,
} from 'react-icons/fa';
import { RiMessage2Fill } from 'react-icons/ri';
import { MdPayment } from 'react-icons/md';
import { SiSimpleanalytics } from 'react-icons/si';
import { GiReceiveMoney } from 'react-icons/gi';
import { AiFillSetting } from 'react-icons/ai';

const SideBar = () => {
  const navItems = [
    { path: '/', icon: <BiSolidDashboard />, title: 'Dashboard' },
    { path: '/staff', icon: <FaUserFriends />, title: 'Staff' },
    { path: '/calendar', icon: <FaCalendarAlt />, title: 'Calender' },
    {
      path: '/conversations',
      icon: <RiMessage2Fill />,
      title: 'Conversations',
    },
    { path: '/payments', icon: <MdPayment />, title: 'Payments' },
    { path: '/forms', icon: <FaWpforms />, title: 'Forms' },
    {
      path: '/launch-acquisition',
      icon: <GiReceiveMoney />,
      title: 'Launch Acquisition',
    },
    {
      path: '/automation-settings',
      icon: <AiFillSetting />,
      title: 'Automation Settings',
    },
    { path: '/patients', icon: <FaHospitalUser />, title: 'Patients' },
    {
      path: '/control-panel',
      icon: <SiSimpleanalytics />,
      title: 'Ai Analytics & Control Panel',
    },
  ];

  function activeNavItem(navItems: any, item: any) {
    const x = navItems.find((i: any) => i.title == item.title);
    console.log(x);
  }

  return (
    <div className='bg-gray-50 h-screen p-4'>
      <div>
        <img src={''} alt='logo image' height='80px' width='80px' />
      </div>
      <ul>
        {navItems.map((item, index) => {
          return (
            <li
              className='p-4'
              key={index}
              onClick={() => activeNavItem(navItems, item)}
            >
              <Link to={item.path} className='flex items-center text-lg gap-2 '>
                {item.icon}
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
