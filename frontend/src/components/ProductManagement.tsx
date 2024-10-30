import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface Option {
  id: string;
  name: string;
  values: string[];
}

function ProductManagement() {
  const [images, setImages] = useState<File[]>([]);
  const [options, setOptions] = useState<Option[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    shippingFee: '',
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + images.length > 5) {
      alert('최대 5장까지만 업로드 가능합니다.');
      return;
    }
    setImages(prev => [...prev, ...files]);
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const addOption = () => {
    setOptions(prev => [...prev, { id: Date.now().toString(), name: '', values: [] }]);
  };

  const removeOption = (id: string) => {
    setOptions(prev => prev.filter(option => option.id !== id));
  };

  const updateOptionName = (id: string, name: string) => {
    setOptions(prev => prev.map(option => 
      option.id === id ? { ...option, name } : option
    ));
  };

  const addOptionValue = (optionId: string, value: string) => {
    setOptions(prev => prev.map(option => 
      option.id === optionId 
        ? { ...option, values: [...option.values, value] }
        : option
    ));
  };

  const removeOptionValue = (optionId: string, index: number) => {
    setOptions(prev => prev.map(option => 
      option.id === optionId 
        ? { ...option, values: option.values.filter((_, i) => i !== index) }
        : option
    ));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold mb-4">상품 등록</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              카테고리
            </label>
            <select 
              className="w-full border rounded-lg p-2"
              value={formData.category}
              onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
            >
              <option value="">선택하세요</option>
              <option value="acrylic">아크릴 굿즈</option>
              <option value="pillow">베개 커버</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              상품명
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">상품 이미지</h3>
        <div className="grid grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(image)}
                alt={`Product ${index + 1}`}
                className="w-full aspect-square object-cover rounded-lg"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
              >
                <X size={16} />
              </button>
            </div>
          ))}
          {images.length < 5 && (
            <label className="border-2 border-dashed rounded-lg aspect-square flex items-center justify-center cursor-pointer hover:bg-gray-50">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
              />
              <Plus className="w-8 h-8 text-gray-400" />
            </label>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            판매가
          </label>
          <input
            type="number"
            className="w-full border rounded-lg p-2"
            value={formData.price}
            onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            배송비
          </label>
          <input
            type="number"
            className="w-full border rounded-lg p-2"
            value={formData.shippingFee}
            onChange={(e) => setFormData(prev => ({ ...prev, shippingFee: e.target.value }))}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium text-gray-700">옵션</h3>
          <button
            onClick={addOption}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <Plus size={16} />
            옵션 추가
          </button>
        </div>
        
        <div className="space-y-4">
          {options.map((option) => (
            <div key={option.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <input
                  type="text"
                  placeholder="옵션명 (예: 색상, 사이즈)"
                  className="border rounded-lg p-2"
                  value={option.name}
                  onChange={(e) => updateOptionName(option.id, e.target.value)}
                />
                <button
                  onClick={() => removeOption(option.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {option.values.map((value, index) => (
                  <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                    <span className="text-sm">{value}</span>
                    <button
                      onClick={() => removeOptionValue(option.id, index)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const input = e.currentTarget.elements.namedItem('value') as HTMLInputElement;
                    if (input.value.trim()) {
                      addOptionValue(option.id, input.value.trim());
                      input.value = '';
                    }
                  }}
                  className="inline-flex"
                >
                  <input
                    name="value"
                    type="text"
                    placeholder="옵션값 입력 후 Enter"
                    className="border rounded-lg p-2 text-sm"
                  />
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          상품 등록
        </button>
      </div>
    </div>
  );
}

export default ProductManagement;