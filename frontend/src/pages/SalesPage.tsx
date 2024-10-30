import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { CalendarDays } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const salesData = {
  labels: ['2024-01', '2024-02', '2024-03', '2024-04'],
  datasets: [
    {
      label: '총 매출액',
      data: [52000, 48000, 55000, 52000],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
    },
  },
};

function SalesPage() {
  const [dateRange, setDateRange] = useState('2024년 9월 2일 ~ 2024년 9월 10일');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-md"
            />
          </div>
          <select className="border rounded-md px-4 py-2">
            <option value="print">출력</option>
            <option value="export">내보내기</option>
          </select>
        </div>

        <div className="grid grid-cols-5 gap-4 mb-8">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm text-gray-600">총 매출액</h3>
            <p className="text-xl font-bold">₩52,000</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm text-gray-600">환불</h3>
            <p className="text-xl font-bold">₩38,000</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm text-gray-600">할인</h3>
            <p className="text-xl font-bold">₩0</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm text-gray-600">순매출액</h3>
            <p className="text-xl font-bold">₩14,000</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm text-gray-600">매출 총 이익</h3>
            <p className="text-xl font-bold">₩10,500</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">총 매출액</h2>
            <div className="flex gap-4">
              <select className="border rounded-md px-4 py-2">
                <option value="line">선 그래프</option>
                <option value="bar">막대 그래프</option>
              </select>
              <select className="border rounded-md px-4 py-2">
                <option value="daily">일별</option>
                <option value="monthly">월별</option>
                <option value="yearly">연별</option>
              </select>
            </div>
          </div>
          <div className="h-[400px]">
            <Line options={options} data={salesData} />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">내보내기</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">날짜</th>
                <th className="py-2 text-right">총 매출액</th>
                <th className="py-2 text-right">환불</th>
                <th className="py-2 text-right">할인</th>
                <th className="py-2 text-right">매출 총 이익</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2].map((item) => (
                <tr key={item} className="border-b">
                  <td className="py-2">2024년 9월 10일</td>
                  <td className="py-2 text-right">₩52,000</td>
                  <td className="py-2 text-right">₩38,000</td>
                  <td className="py-2 text-right">₩0</td>
                  <td className="py-2 text-right">₩10,500</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SalesPage;