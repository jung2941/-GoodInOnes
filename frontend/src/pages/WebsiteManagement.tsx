import React, { useState } from 'react';
import { Layout, Image, Navigation, Package, Plus, X } from 'lucide-react';
import ProductManagement from '../components/ProductManagement';

function WebsiteManagement() {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">웹 사이트 관리</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              activeTab === 'products' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Package className="w-5 h-5" />
            상품 관리
          </button>
          <button
            onClick={() => setActiveTab('layout')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              activeTab === 'layout' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Layout className="w-5 h-5" />
            레이아웃
          </button>
          <button
            onClick={() => setActiveTab('banner')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              activeTab === 'banner' 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Image className="w-5 h-5" />
            배너 관리
          </button>
        </div>

        <div className="mt-6">
          {activeTab === 'products' && <ProductManagement />}

          {activeTab === 'layout' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">메인 페이지 레이아웃</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">섹션 1</h3>
                  <select className="w-full border rounded-md p-2">
                    <option>베스트 상품</option>
                    <option>신상품</option>
                    <option>프로모션</option>
                  </select>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">섹션 2</h3>
                  <select className="w-full border rounded-md p-2">
                    <option>카테고리별 상품</option>
                    <option>특가 상품</option>
                    <option>시즌 상품</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'banner' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">배너 관리</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">메인 배너</h3>
                  <div className="flex items-center gap-4">
                    <input 
                      type="file" 
                      className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                    />
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      업로드
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WebsiteManagement;