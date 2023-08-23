import { Box, useTheme } from "@mui/material";
import { ApexOptions } from "apexcharts";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import ReactApexChart from "react-apexcharts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top" as const,
//     },
//   },
// };

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// const luongMuaData = {
//   labels,
//   datasets: [
//     {
//       label: "Biểu đồ lượng mưa",
//       data: [100, 230, 329, 112, 238, 872, 509],
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//   ],
// };

// const khongKhiData = {
//   labels,
//   datasets: [
//     {
//       label: "Biểu đồ không khí",
//       data: [50, 180, 420, 312, 178, 642, 789],
//       backgroundColor: "rgba(54, 162, 235, 0.5)",
//     },
//   ],
// };

const RainChart = () => {
  const theme = useTheme();


  // const renderChart = () => {
  //   if (activeChart === "luongMua") {
  //     return <Bar style={{ padding: "30px" }} options={options} data={luongMuaData} />;
  //   } else if (activeChart === "khongKhi") {
  //     return <Bar style={{ padding: "30px" }} options={options} data={khongKhiData} />;
  //   }
  //   return null;
  // };

  const RainSeries = [
    {
      name: "Website Blog",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: "Social Media",
      type: "line",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  ];

  const RainOptions: ApexOptions = {
    chart: {

      type: "line",
    },
    stroke: {
      width: [0, 4],
    },

    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001",
    ],
    xaxis: {
      type: "datetime",
    },
    yaxis: [
      {
        title: {
          text: "Website Blog",
        },
      },
      {
        opposite: true,
        title: {
          text: "Social Media",
        },
      },
    ],
  };

  const AtmosphereSeries = [
    {
      name: "Website Blog",
      type: "column",
      data: [123, 505, 333, 678, 231, 232, 543, 321, 444, 786, 212, 434],
    },
    {
      name: "Social Media",
      type: "line",
      data: [123, 505, 333, 678, 231, 232, 543, 321, 444, 786, 212, 434],
    },
  ];

  const AtmosphereOptions: ApexOptions = {
    chart: {

      type: "line",
    },
    stroke: {
      width: [0, 4],
    },

    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001",
    ],
    xaxis: {
      type: "datetime",
    },
    yaxis: [
      {
        title: {
          text: "Website Blog",
        },
      },
      {
        opposite: true,
        title: {
          text: "Social Media",
        },
      },
    ],
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>

        {/* <Typography
          sx={{
            fontSize: "35px",
            color: theme.palette.primary.main,
            mt: "60px",
            paddingBottom: 2,
            cursor: "pointer",
            borderBottom:
              activeChart === "luongMua"
                ? `5px solid ${theme.palette.primary.main}`
                : "none",
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
            cursor: "pointer",
            borderBottom:
              activeChart === "khongKhi"
                ? `5px solid ${theme.palette.primary.main}`
                : "none",
          }}
          onClick={() => handleChartClick("khongKhi")}
        >
          KHÔNG KHÍ
        </Typography> */}
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label="LƯỢNG MƯA"
                value="1"
                sx={{
                  fontSize: "25px",
                  color: theme.palette.primary.main,
                  mt: "60px",
                  paddingBottom: 2,
                  cursor: "pointer",
                }}
              />
              <Tab label="KHÔNG KHÍ" value="2" sx={{
                  fontSize: "25px",
                  color: theme.palette.primary.main,
                  mt: "60px",
                  paddingBottom: 2,
                  cursor: "pointer",
                }} />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{bgcolor: '#fff', mt: 2, borderRadius: '10px'}}>
            <ReactApexChart options={RainOptions} series={RainSeries} type="line" height={700} />
          </TabPanel>
          <TabPanel value="2" sx={{bgcolor: '#fff', mt: 2, borderRadius: '10px'}}><ReactApexChart options={AtmosphereOptions} series={AtmosphereSeries} type="line" height={700} /></TabPanel>
        </TabContext>
      
      <Box bgcolor="#fff" mt={3} mb={5} borderRadius="10px">
        {/* {renderChart()} */}
      </Box>
    </>
  );
};

export default RainChart;
