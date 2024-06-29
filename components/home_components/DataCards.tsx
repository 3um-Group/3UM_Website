import React from 'react';


type cardType = {
    icon: any,
    title: string,
    description: string
}
const DataCard = ({ icon, title, description }: cardType) => (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col space-y-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full">{icon}</div>
                <h3 className="font-bold text-lg">{title}</h3>
            </div>
            <button className="p-1.5 rounded-lg border border-gray-200 bg-gray-100 text-gray-500 hover:bg-gray-200">
                <svg className="w-5 h-5" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.94472 12.5564L2.38916 9.00087L5.94472 5.44531M13.0558 5.44531L16.6114 9.00087L13.0558 12.5564" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-end">
            <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" d="M12.8333 7.625L17 12M17 12L12.8333 16.375M17 12L7 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    </div>
);

export default DataCard
