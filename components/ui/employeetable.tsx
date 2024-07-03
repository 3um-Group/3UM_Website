import React from 'react';

type Employee = {
  name: string;
  title: string;
  businessUnit: string;
  location: string;
};

type EmployeeTableProps = {
  employees: Employee[];
};

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <div className="px-8 py-16">
      <h2 className="text-3xl font-bold mb-8">Directory</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-black text-white">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Business Unit</th>
              <th className="py-2 px-4 text-left">Location</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{employee.name}</td>
                <td className="py-2 px-4">{employee.title}</td>
                <td className="py-2 px-4">{employee.businessUnit}</td>
                <td className="py-2 px-4">{employee.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
