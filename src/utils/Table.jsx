import React from "react";

const Table = ({ tabledata, tableheader }) => {
  return (
    <div className="flex flex-col overflow-x-auto md:overflow-hidden">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full pb-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500 bg-[#eeeeee]">
                <tr className="text-center">
                  {tableheader.map((item, index) => (
                    <th key={index} scope="col" className="px-6 py-4">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tabledata.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b dark:border-neutral-500  text-center"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {item.orderId}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {item.Date}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {item.method}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {item.Payment}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
