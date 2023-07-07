import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const luongMuaData = {
  labels,
  datasets: [
    {
      label: "Biểu đồ lượng mưa",
      data: [100, 230, 329, 112, 238, 872, 509],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const khongKhiData = {
  labels,
  datasets: [
    {
      label: "Biểu đồ không khí",
      data: [50, 180, 420, 312, 178, 642, 789],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
    },
  ],
};

const RainChart = () => {
  const [activeChart, setActiveChart] = useState("luongMua");
  const theme = useTheme()
  const handleChartClick = (chart: string) => {
    setActiveChart(chart);
  };

  const renderChart = () => {
    if (activeChart === "luongMua") {
      return <Bar style={{ padding: "30px" }} options={options} data={luongMuaData} />;
    } else if (activeChart === "khongKhi") {
      return <Bar style={{ padding: "30px" }} options={options} data={khongKhiData} />;
    }
    return null;
  };

  return (
    <>
      <Box display="flex" gap="40px" >
        <Typography
          sx={{
            fontSize: "35px",
            color: theme.palette.primary.main,
            mt: "60px",
            paddingBottom: 2,
            cursor: 'pointer',
            borderBottom: activeChart === "luongMua" ? `5px solid ${theme.palette.primary.main}`: 'none',
          }}
          onClick={() => handleChartClick("luongMua")}
        >
          LƯỢNG MƯA
        </Typography>
        <Typography
          sx={{
            fontSize: "35px",
            color: theme.palette.primary.main,
            mt: "60px",
            paddingBottom: 2,
            cursor: 'pointer',
            borderBottom: activeChart === "khongKhi" ? `5px solid ${theme.palette.primary.main}` : 'none',
          }}
          onClick={() => handleChartClick("khongKhi")}
        >
          KHÔNG KHÍ
        </Typography>
      </Box>
      <Box bgcolor="#fff" mt={3} mb={5} borderRadius='10px'>
        {renderChart()}
      </Box>
    </>
  );
};

export default RainChart;
