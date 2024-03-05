import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import faker from "faker";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Breadcrumb from "../../../utils/Breadcrumb";
import DateRanger from "../../../utils/DateRanger";
import PageTitle from "../../../utils/PageTitle";
import SearchInput from "../../../utils/SearchInput";
import Table from "../../../utils/Table";
const tabledata = [
  {
    orderId: 0,
    Date: "1",
    method: "1",
    Payment: "1",
    status: "1",
  },
];
const tableheader = [
  "Order#",
  "Date/Time",
  "Delivery method",
  "Payment",
  "Status",
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const SalesReport = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "",
        data: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        fill: false,
        borderColor: "#ee9826",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        title: {
          display: false,
          text: "Month",
        },
      },
      y: {
        title: {
          display: false,
          text: "Sales",
        },
      },
    },
  };

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const handleClear = () => {
    setDateRange({
      startDate: null,
      endDate: null,
    });
  };
  return (
    <div>
      <Breadcrumb main="dashboard" page="payments" />

      <PageTitle>Payments</PageTitle>
      <div className="pb-8 pt-4 flex justify-end mt-12">
        <button className="bg-primary py-2 px-6 text-white rounded-md uppercase">
          View statement
        </button>
      </div>
      <div className="flex gap-5 md:flex-row flex-col">
        <div className="w-full md:w-[30%] border border-[#eeeeee] p-5 rounded-sm h-[250px]">
          <p className="text-[#20263e] text-lg font-semibold">Your Share</p>
          <p className="text-[#20263e] text-3xl font-semibold">AED 0.00</p>
          <p className="text-[#7ed321] text-sm">Payment Received</p>
          <p className="text-[#20263e] text-lg font-semibold">AED 0.00</p>
          <p className="text-[#fc3b3c] text-sm">Payment Due</p>
          <p className="text-[#20263e] text-lg font-semibold">AED 0.00</p>
        </div>
        <div className="w-full md:w-[70%] border border-[#eeeeee] p-5 rounded-sm h-[250px]">
          <p className="text-[#20263e] text-lg font-semibold">
            Your Monthly Share
          </p>
          <Line options={options} data={data} />
        </div>
      </div>
      <div className="flex w-full sm:w-auto  flex-col md:flex-row gap-5 md:items-end my-4">
        <div>
          <p>select date</p>
          <DateRanger value={dateRange} setValue={setDateRange} />
        </div>
        <button
          onClick={handleClear}
          className="px-4 border py-2 border-gray-400 bg-[#f4f4f4] rounded-md h-full"
        >
          Clear
        </button>
      </div>
      <div className="my-4 flex justify-between items-center gap-5">
        <p className="text-[#5a5a5a] text-sm font-bold">
          Completed orders - <span className="font-normal">Online Payment</span>
        </p>
        <SearchInput />
      </div>

      {/* data */}
      <Table tableheader={tableheader} tabledata={tabledata} />
    </div>
  );
};

export default SalesReport;
