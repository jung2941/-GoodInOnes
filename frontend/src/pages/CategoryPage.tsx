import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { category } = useParams();
  
  const products = {
    acrylic: [
      {
        id: 1,
        name: '[아크릴키링] 투명컬러/파스텔 아크릴',
        price: 6000,
        image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=400'
      },
      {
        id: 2,
        name: '[아크릴스탠드] 데스크 아크릴',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=400'
      }
    ],
    pillow: [
      {
        id: 3,
        name: '[베개커버] 커스텀 베개커버',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=400'
      },
      {
        id: 4,
        name: '[베개커버] 캐릭터 베개커버',
        price: 18000,
        image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=400'
      }
    ]
  };

  const categoryProducts = category === 'acrylic' ? products.acrylic : products.pillow;
  const categoryName = category === 'acrylic' ? '아크릴 굿즈' : '베개 커버';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">₩{product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;