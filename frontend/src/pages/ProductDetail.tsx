import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img 
            src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=600" 
            alt="Product main"
            className="w-full rounded-lg"
          />
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((item) => (
              <img 
                key={item}
                src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=150" 
                alt={`Product view ${item}`}
                className="w-full rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">[아크릴키링] 투명컬러/아스텔 아크릴</h1>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-xl">판매가</span>
              <span className="text-2xl font-bold">6,000원</span>
            </div>

            <table className="w-full">
              <tbody>
                <tr className="border-t">
                  <td className="py-3">사이즈 (mm)</td>
                  <td className="py-3">20×20</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3">배송비</td>
                  <td className="py-3">3,000원</td>
                </tr>
              </tbody>
            </table>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">생플파일</h3>
              <p className="text-sm text-gray-600">작업하시기 전에 꼭 참고해주시고, 궁금하신 점이 있으시다면 문의주세요.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">상품 상세</h2>
              <img 
                src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800" 
                alt="Product detail"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;