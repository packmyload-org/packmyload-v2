'use client'
import React, { useState, useEffect } from 'react';
import { alerts } from './alerts/Alert';

interface MoveCost {
  Bedrooms: number;
  price: string;
  Movers: number;
}

interface MoveCostTableProps {
  initialData: { intraState: MoveCost[]; interState: MoveCost[] };
}

const MoveCostTable: React.FC<MoveCostTableProps> = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const handleInputChange = (
    stateType: 'intraState' | 'interState',
    rowIndex: number,
    fieldName: keyof MoveCost,
    value: string | number
  ) => {
    setData((prevData) => {
     const newData = { ...prevData };
     // @ts-ignore
      newData[stateType][rowIndex][fieldName] = value;
      return newData;
    });
  };

  const saveData = async () => {
   const res = await fetch('/api/pricing', {
    method: "POST",
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
   })
   console.log(res)
   if (res.ok) {
    alerts.success('success','successfully updated')
   }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 mb-4">
      <h2 className="text-2xl font-semibold mb-4">Move Cost Table</h2>
      {Object.keys(data).map((stateType) => (
        <div key={stateType} className="mb-8">
          <h3 className="text-xl font-semibold mb-2">{stateType.charAt(0).toUpperCase()}{stateType.slice(1)}
</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Bedrooms</th>
                <th className="border border-gray-300 p-2">Price</th>
                <th className="border border-gray-300 p-2">Movers</th>
              </tr>
            </thead>
         <tbody>
             {/* @ts-ignore */}
              {data[stateType].map((rowData, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="border border-gray-300 p-2">
                    <input
                      className="w-full"
                      type="number"
                      value={rowData.Bedrooms}
                      onChange={(e) =>
                        handleInputChange(stateType as 'intraState' | 'interState', rowIndex, 'Bedrooms', +e.target.value)
                      }
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      className="w-full"
                      type="text"
                      value={rowData.price}
                      onChange={(e) =>
                        handleInputChange(stateType as 'intraState' | 'interState', rowIndex, 'price', e.target.value)
                      }
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      className="w-full"
                      type="number"
                      value={rowData.Movers}
                      onChange={(e) =>
                        handleInputChange(stateType as 'intraState' | 'interState', rowIndex, 'Movers', +e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <button
        className="bg-blue-500 text-white py-4 w-[250px] px-4 rounded hover:bg-blue-700"
        onClick={saveData}
      >
        Save Data
      </button>
    </div>
  );
};

export default MoveCostTable;
