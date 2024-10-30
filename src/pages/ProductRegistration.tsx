import React, { useState } from 'react';
import Swal from 'sweetalert2';

const colors = ['gray', 'red', 'pink', 'orange', 'yellow', 'green', 'blue', 'purple'];
const shapes = ['square', 'circle', 'star', 'octagon'];

function ProductRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    unit: 'piece',
    price: '',
    costPrice: '',
    sku: '',
    barcode: '',
    trackInventory: false,
    quantity: '',
    color: 'gray',
    shape: 'square'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Swal.fire({
      title: '상품이 등록되었습니다.',
      icon: 'success',
      confirmButtonText: '확인'
    });
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">상품 등록</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">상품명</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">카테고리</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">선택하세요</option>
              <option value="acrylic">아크릴</option>
              <option value="pillow">베개</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">판매 단위</label>
            <select
              value={formData.unit}
              onChange={(e) => setFormData({...formData, unit: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="piece">개</option>
              <option value="weight">무게</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">판매가</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">SKU</label>
            <input
              type="text"
              value={formData.sku}
              onChange={(e) => setFormData({...formData, sku: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">바코드</label>
            <input
              type="text"
              value={formData.barcode}
              onChange={(e) => setFormData({...formData, barcode: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={formData.trackInventory}
            onChange={(e) => setFormData({...formData, trackInventory: e.target.checked})}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label className="text-sm font-medium text-gray-700">재고 수량 추적</label>
        </div>

        {formData.trackInventory && (
          <div>
            <label className="block text-sm font-medium text-gray-700">재고 수량</label>
            <input
              type="number"
              value={formData.quantity}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">POS 표시 설정</label>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">색상</label>
              <div className="grid grid-cols-4 gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setFormData({...formData, color})}
                    className={`w-8 h-8 rounded ${
                      formData.color === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-2">모양</label>
              <div className="grid grid-cols-4 gap-2">
                {shapes.map((shape) => (
                  <button
                    key={shape}
                    type="button"
                    onClick={() => setFormData({...formData, shape})}
                    className={`w-8 h-8 border-2 ${
                      formData.shape === shape ? 'border-blue-500' : 'border-gray-300'
                    }`}
                    style={{
                      borderRadius: shape === 'circle' ? '50%' : 
                                 shape === 'star' ? '0' : 
                                 shape === 'octagon' ? '30%' : '0'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          상품 등록
        </button>
      </form>
    </div>
  );
}

export default ProductRegistration;