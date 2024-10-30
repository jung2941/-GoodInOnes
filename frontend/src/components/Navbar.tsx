import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold">
            Good In Ones
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/category/acrylic" className="text-gray-700 hover:text-gray-900">
              아크릴 굿즈
            </Link>
            <Link to="/category/pillow" className="text-gray-700 hover:text-gray-900">
              베개 커버
            </Link>
            <Link to="/mypage/sales" className="text-gray-700 hover:text-gray-900 flex items-center gap-2">
              <User className="h-5 w-5" />
              마이페이지
            </Link>
            <button 
              onClick={logout}
              className="text-gray-700 hover:text-gray-900 flex items-center gap-2"
            >
              <LogOut className="h-5 w-5" />
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;