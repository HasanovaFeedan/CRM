import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Home/Home.scss';

const menuItems = [
  { label: 'Home', icon: <img src="/image/homee.png" alt="Home" className="menu-icon" />, path: '/' },
  { label: 'Operations', icon: <img src="/image/operation.png" alt="Operations" className="menu-icon" />, path: '/operations' },
  { label: 'Workflow', icon: <img src="/image/work.png" alt="Workflow" className="menu-icon" />, path: '/workflow' },
  { label: 'Tasks', icon: <img src="/image/main.png" alt="Tasks" className="menu-icon" />, path: '/tasks' },
  { label: 'Quotes', icon: <img src="/image/que.png" alt="Quotes" className="menu-icon" />, path: '/quotes' },
  { label: 'Clients', icon: <img src="/image/clients.png" alt="Clients" className="menu-icon" />, path: '/clients' },
  { label: 'Sales', icon: <img src="/image/sales.png" alt="Sales" className="menu-icon" />, path: '/sales' },
  { label: 'Employees', icon: <img src="/image/emp.png" alt="Employees" className="menu-icon" />, path: '/employees' },
  { label: 'Reports and Analytics', icon: <img src="/image/report.png" alt="Reports" className="menu-icon" />, path: '/reports' },
  { label: 'Accounting', icon: <img src="/image/acc.png" alt="Accounting" className="menu-icon" />, path: '/accounting' },
  { label: 'Documents', icon: <img src="/image/documet.png" alt="Documents" className="menu-icon" />, path: '/documents' },
  { label: 'Events', icon: <img src="/image/eve.png" alt="Events" className="menu-icon" />, path: '/events' },
];

const SiteRoot = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const bgClass = 'dashboard-bg'; 

  
  const isActive = (itemPath) => {
    if (itemPath === '/') {
      return location.pathname === '/';
    }

   
    if (itemPath === '/operations') {
      return location.pathname.startsWith('/operations') || location.pathname.startsWith('/operation/detail');
    }

    return location.pathname.startsWith(itemPath);
  };

  return (
    <div className={bgClass}>
      <aside className={`sidebar${collapsed ? ' collapsed' : ''}`}>
        <div className="sidebar-logo">
          <img className="img-png" src="/image/logoimg.png" alt="Logo" />
        </div>
        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`menu-item${isActive(item.path) ? ' active' : ''}${collapsed ? ' collapsed' : ''}`}
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
        <button className="sidebar-toggle" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
        {!collapsed ? (
          <>
            <hr className="sidebar-hr" />
            <div className="sidebar-user">
              <span>Namiq Rzayev</span>
              <span className="user-role">Director</span>
            </div>
          </>
        ) : (
          <div className="sidebar-user">
            <div className="user-avatar"></div>
          </div>
        )}
      </aside>

      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default SiteRoot;
