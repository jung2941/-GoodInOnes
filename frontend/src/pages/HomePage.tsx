import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <img 
          src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=1200" 
          alt="Banner" 
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </div>

      <h2 className="text-2xl font-bold mb-6">카테고리 1</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[1, 2, 3, 4].map((item) => (
          <Link to={`/product/${item}`} key={item} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=400" 
                alt={`Product ${item}`}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">아크릴 굿즈 {item}</h3>
                <p className="text-gray-600">6,000원</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">카테고리 2</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[5, 6, 7, 8].map((item) => (
          <Link to={`/product/${item}`} key={item} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=400" 
                alt={`Product ${item}`}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">베개 커버 {item}</h3>
                <p className="text-gray-600">6,000원</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;