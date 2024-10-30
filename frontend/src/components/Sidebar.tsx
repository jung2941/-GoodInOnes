import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart2, History, Package, PlusCircle, Settings } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { isAdmin } = useAuth();

  const menuItems = [
    { 
      title: '매출 현황',
      path: '/mypage/sales',
      icon: <BarChart2 className="w-5 h-5" />
    },
    { 
      title: '판매 내역',
      path: '/mypage/sales-history',
      icon: <History className="w-5 h-5" />
    },
    { 
      title: '상품 목록',
      path: '/mypage/product-list',
      icon: <Package className="w-5 h-5" />
    },
    { 
      title: '상품 등록',
      path: '/mypage/product-registration',
      icon: <PlusCircle className="w-5 h-5" />
    }
  ];

  if (isAdmin) {
    menuItems.push({
      title: '웹 사이트 관리',
      path: '/mypage/website-management',
      icon: <Settings className="w-5 h-5" />
    });
  }

  return (
    <div className={`bg-white h-screen shadow-lg transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4 flex justify-between items-center border-b">
        <h1 className={`font-bold ${isCollapsed ? 'hidden' : 'block'}`}>마이 페이지</h1>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-1">
          {isCollapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>
      
      <nav className="p-4">
        {menuItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg mb-2 transition-colors ${
              location.pathname === item.path 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {item.icon}
            {!isCollapsed && <span>{item.title}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;