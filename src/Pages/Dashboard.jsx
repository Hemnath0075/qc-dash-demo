import React, { useEffect, useState } from "react";
// import Header from "./Component/Header";
// import { FaCheckCircle } from "react-icons/fa";
import { DatePicker, Table, Spin, Modal } from "antd";
import Select, { components } from "react-select";
// import ColumnChart from "./Component/Charts/ColumnCharts/ColumnChart";
// import PieChart from "./Component/Charts/PieChart/PieChart";
// import { IoIosArrowDown } from "react-icons/io";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Passed from "../Assets/passed.svg";
import Logs from "../Assets/log.svg";
import csvDownload from "json-to-csv-export";
import ReactCardFlip from "react-card-flip";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { Endpoint, apiService } from "../Services/apiService";
import { GoDash } from "react-icons/go";
import { CiCalendar, CiGlass } from "react-icons/ci";
// import { drop_down_config, PieChartData, tablesData, units } from "../Mock/dashboard";
import ColumnChart from "../Components/StackBarChart";
import StackBarChart from "../Components/StackBarChart";
import SingleBarChart from "../Components/SingleBarChart";
import CustomPieChart from "../Components/PieChart";
import { getAllSessions, perforationChartMock } from "../Mock/dashboard";
import CustomLineChart from "../Components/LineChart";
import { set } from "react-hook-form";
import SVG from "react-inlinesvg";
import BackIcon from "../Assets/back.svg";
import AddIcon from "../Assets/Add.svg";
import CloseIcon from "@mui/icons-material/Close";
import { qc_app_products } from "../Services/dataService";

const MINUTE_MS = 60000;

// const weightChart = [
//   {
//     name: "1",
//     weight: 100,
//   },
//   {
//     name: "2",
//     weight: 200,
//   },
//   {
//     name: "3",
//     weight: 800,
//   },
//   {
//     name: "4",
//     weight: 200,
//   },
//   {
//     name: "5",
//     weight: 220,
//   },
//   {
//     name: "6",
//     weight: 200,
//   },
//   {
//     name: "7",
//     weight: 120,
//   },
// ];

// const perforationChart = [
//   {
//     name: "1",
//     avg: 4000,
//     min: 2400,
//     max: 2400,
//   },
//   {
//     name: "2",
//     avg: 3000,
//     min: 1398,
//     max: 2210,
//   },
//   {
//     name: "3",
//     avg: 2000,
//     min: 9800,
//     max: 2290,
//   },
//   {
//     name: "4",
//     avg: 2780,
//     min: 3908,
//     max: 2000,
//   },
//   {
//     name: "5",
//     avg: 1890,
//     min: 4800,
//     max: 2181,
//   },
//   {
//     name: "6",
//     avg: 2390,
//     min: 3800,
//     max: 2500,
//   },
//   {
//     name: "7",
//     avg: 3490,
//     min: 4300,
//     max: 2100,
//   },
// ];

// const PieChartData = [
//   { name: "Barcode", value: 400 },
//   { name: "Material Code", value: 300 },
//   { name: "Coding ", value: 300 },
//   { name: "Weight ", value: 200 },
//   { name: "Perforation ", value: 200 },
// ];

// const DayWiseSession = [
//   {
//     name: "10/04/2024",
//     sessions: 10,
//   },
//   {
//     name: "11/04/2024",
//     sessions: 2,
//   },
//   {
//     name: "20/04/2024",
//     sessions: 6,
//   },
//   {
//     name: "21/04/2024",
//     sessions: 7,
//   },
//   {
//     name: "23/04/2024",
//     sessions: 15,
//   },
//   {
//     name: "26/04/2024",
//     sessions: 23,
//   },
//   {
//     name: "29/04/2024",
//     sessions: 6,
//   },
// ];

// const BarchartSessions = [
//   {
//     name: "Sunsilk Sachet",
//     passed: 10,
//     failed: 2,
//   },
//   {
//     name: "Tresseme",
//     passed: 15,
//     failed: 10,
//   },
//   {
//     name: "Sunsilk",
//     passed: 20,
//     failed: 12,
//   },
//   {
//     name: "Dove",
//     passed: 14,
//     failed: 8,
//   },
// ];

const singleUnitTableColumns = [
  {
    title: <div className="text-[#000000] text-start ml-4">Line Items</div>,
    dataIndex: "name",
    width: "12vw",
    key: "name",
    render: (_, { name }) => (
      <>
        <div className="w-full flex justify-start ml-4 items-center text-[#4B5565]">
          <p>{name}</p>
        </div>
      </>
    ),
  },
  {
    title: <div className="text-[#000000]">Detected</div>,
    dataIndex: "detected",
    width: "10vw",
    render: (_, { detected }) => (
      <>
        <div className="w-full flex justify-center items-center text-[#898D93]">
          <p>{detected === null ? "-" : detected}</p>
        </div>
      </>
    ),
  },
  {
    title: <div className="text-[#000000]">Reference</div>,
    dataIndex: "expected",
    width: "10vw",
    render: (_, { expected }) => (
      <>
        <div className="w-full flex justify-center items-center text-[#898D93]">
          <p>{expected ? expected : '-'}</p>
        </div>
      </>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    width: "7vw",
    render: (_, { name, status }) => (
      <>
        <div className="w-full flex justify-center items-center">
          {(name !== "Raw" && name !== "Avg" && name !== "Min" && name !== "Max") && <div
            className={`w-[25px] h-[25px]  text-white rounded-[50px] flex justify-center items-center ${status ? "bg-[#167a48]" : "bg-[#b42318]"
              }`}
          ></div>}
          {(name === "Raw" || name === "Avg" || name === "Min" || name === "Max") && <div
            className={``}
          >-</div>}
        </div>
      </>
    ),
  },
  // {
  //   title: "User Input",
  //   dataIndex: "null",
  //   width: "10vw",
  //   render: (_, { user }) => (
  //     <>
  //       <div className="w-full flex justify-center items-center text-[#898D93]">
  //         <p>{user}</p>
  //       </div>
  //     </>
  //   ),
  // },
];

function generateState(state = null, value = null) {
  if (state == 1) {
    return <span className="text-green-500">{value || "-"}%</span>;
  } else if (state == 0) {
    return <span className="text-red-500">{value || "-"}%</span>;
  } else {
    return <></>;
  }
}

const InputOption = ({
  getStyles,
  Icon,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);

  // styles
  let bg = "#ffffff";
  if (isFocused) bg = "#e7e9eb";
  if (isActive) bg = "#ffffff";

  const style = {
    alignItems: "center",
    backgroundColor: bg,
    color: "inherit",
    display: "flex ",
  };

  // prop assignment
  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style,
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
      className="flex flex-row gap-4 border-filter text-black"
    >
      <input type="checkbox" checked={isSelected} />
      {children}
    </components.Option>
  );
};

const MultiValue = ({ getValue, index, item, ...props }) => {
  console.log(item);
  return !index && `${item} (${getValue().length})`;
};

const TABLE_COLUMNS = [
  {
    title: "Date",
    dataIndex: "timestring",
    width: "20%",
  },
  {
    title: "Product Name",
    dataIndex: "product",
    width: "20%",
    render: (_, { product }) => (
      <>
        <p>{product?.label}</p>
      </>
    ),
  },
  {
    title: "Variant Name",
    dataIndex: "variant",
    width: "20%",
    render: (_, { variant }) => (
      <>
        <p>{variant?.label}</p>
      </>
    ),
  },

  {
    title: "No of Units",
    dataIndex: "units",
    width: "20%",
  },
  {
    title: "Result",
    dataIndex: "verdict",
    width: "20%",
    render: (_, { verdict }) => (
      <>
        <div className="w-full h-full flex flex-row items-center justify-center">
          <div
            className={`w-[60px] h-[30px]  text-white rounded-[50px] flex justify-center items-center ${verdict === 1 ? "bg-[#167a48]" : "bg-[#b42318]"
              }`}
          >
            <p>{verdict === 1 ? "Pass" : "Fail"}</p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "User",
    dataIndex: "user",
    width: "20%",
    render: (_, { user }) => (
      <>
        <p>{user?.name}</p>
      </>
    ),
  },
];

function Dashboard({ isCollapsed }) {
  const navigate = useNavigate();
  const [sessionTable, setSessionTable] = useState([]);
  const [clickedSessionData, setClickedSessionData] = useState();
  const [dropDownData, setDropDown] = useState();
  const [flipped, setFlipped] = useState(false);
  const [congratsTable, setCongratsTable] = useState();
  const [open, setOpen] = useState(false);
  const [downloadData, setDownloadData] = useState();
  console.log('the dropdown options are',dropDownData);
  const [passedPercentage, setPassedPercentage] = useState(0);
  const [tableData, setTableData] = useState();
  const [singleUnitTableData, setSingleUnitTableData] = useState();
  const [dayWiseSession, setDayWiseSession] = useState();
  const [barchartSession, setBarChartSession] = useState();
  const [perforationChart, setPerforationChart] = useState();
  const [weightChart, setWeightChart] = useState();
  // const [defectPieChart, setDefectPieChart] = useState();
  console.log(tableData);
  const [unitsData, setUnitsData] = useState();
  console.log(unitsData);
  const { RangePicker } = DatePicker;
  const [isLoading, setIsLoading] = useState(false);
  const [filterValues, setFilterValues] = useState({
    st: null,
    et: null,
    shift: "",
    product: "",
    variant: "",
    decision: "",
  });

  const handleOk = () => {
    // setModalText("The modal will be closed after two seconds");
    // setConfirmLoading(true);
    // setTimeout(() => {
    setOpen(false);
    navigate("/home");
    // setIsError(!isError);
    // setConfirmLoading(false);
    // }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
    setFlipped(false);
    // setIsError(!isError);
  };

  const showIndividualUnitData = (unitIndex, property, currentSession) => {
    setFlipped(!flipped);
    console.log(property);
    const data = [];
    console.log(currentSession);
    // allProperties.map((item) => {});
    // if (property === "barcode") {
    let filteredProperties;
    if (
      property === "others" ||
      property === "coding" ||
      property === "material_code" ||
      property === "perforation"
    ) {
      filteredProperties = currentSession.units[unitIndex].properties.filter(
        (prop) => prop.type === property
      );
    } else {
      filteredProperties = currentSession.units[unitIndex].properties.filter(
        (prop) => prop.label === property
      );
    }
    console.log(filteredProperties);
    filteredProperties.map((item) => {
      data.push({
        name: item.label,
        detected:
          item.detected_value === "1"
            ? "Yes"
            : item.detected_value === "0"
              ? "No"
              : item.detected_value,
        expected:
          item.value === "1"
            ? "Yes"
            : item.value === "0"
              ? "No"
              : item.value,
        status: item.verdict === 1 ? true : false,
        user: "10/10/2020",
      });
    });
    setSingleUnitTableData(data);
  }
  const [productArr,setProductArr] = useState([])

  const handleSelectChange = async (
    selectedOption,
    selectId,
    startTimestamp,
    endTimeStamp
  ) => {
    console.log(selectedOption, selectId);
    if (selectId === "Shift") {
      selectId = "shift";
    } else if (selectId === "Products") {
      selectId = "product";
      
    }
    else if (selectId === "Variants") {
      selectId = "variant";
    }
    let currentFilteredParams = {
      ...filteredParameters,
      [selectId.toLowerCase()]: selectedOption,
    };
    console.log(currentFilteredParams);
    setFilteredParameters((prevValues) => ({
      ...prevValues,
      [selectId.toLowerCase()]: selectedOption,
    }));
    const values = {
      shift: "",
      product: "",
      // defect: "",
      variant: "",
      decision: "",
    };
    const keys = Object.keys(currentFilteredParams);
    keys.map((item) => {
      console.log(currentFilteredParams[item]);
      if (
        currentFilteredParams[item] !== null &&
        currentFilteredParams[item].length > 0
      ) {
        currentFilteredParams[item]?.map((arr) => {
          values[item] = values[item] + arr.value.toString() + ",";
        });
        values[item] = values[item].slice(0, -1);
      }
    });
    console.log(values);
    setProductArr(values.product.split(','))
    // console.log(dropDownData.variant.filter((item,index)=>item.product_id === 6))
    setFilterValues(values);
  };

  // //   const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY));
  // const navigate = useNavigate();
  const [dateRange, setDateRange] = useState([]);

  async function handleRangeChange(dates) {
    // dates is an array [startDate, endDate] or an empty array if cleared
    const startOfDay = dates[0].startOf("day");
    const endOfDay = dates[1].endOf("day");
    const timestamps = [startOfDay.unix() * 1000, endOfDay.unix() * 1000];
    console.log(timestamps);
    setDateRange([startOfDay, endOfDay]);
  }

  const fetchData = (dates) => {
    let date = [dates[0], dates[1]];

    const getDropDownOptions = async () => {
      const res = await apiService.get(`${Endpoint.GET_OPTIONS_DASHBOARD}`, {
        start_ts: date[0].unix() * 1000,
        end_ts: date[1].unix() * 1000,
      });
      // PRODUCTS FILTER
      if (res.status === 401) {
        navigate('/');
        return ;
      }

      let filteredProducts = res.data.data.product.filter((item)=>{
        return item.value > 5
      })
      // console.log('filtered products',filteredOptions)
      let allVariants = res.data.data.variant;
      let updatedDropDownData = { ...res.data.data, product:filteredProducts, variant: [] };
      if(productArr.length > 0){
        productArr.map((product_id)=>{
          console.log("the product value is ",product_id)
          allVariants.map((item)=>{
            console.log("hey")
            console.log("value",product_id === item.product_id.toString())
            if(product_id === item.product_id.toString()){
              updatedDropDownData.variant.push(item)
            }
          })
        })
      }
      else{
        updatedDropDownData.variant = res.data.data.variant
      }
      
      
      console.log('final',updatedDropDownData);
      setDropDown(updatedDropDownData);

      

      // const filterVariants = async () => {.
      //   // Filter the variants where product_id is 6
        
      // // Log the updated data (for debugging)
      // console.log(updatedDropDownData);
      //   // Update the dropDown state with the filtered variants
        
      // };
      // await filterVariants();
      // setDropDown(qc_app_products.data);
      
    };

    const getUnitsData = async () => {
      const res = await apiService.get(`${Endpoint.GET_UNITS_DASHBOARD}`, {
        start_ts: date[0].unix() * 1000,
        end_ts: date[1].unix() * 1000,
        ...(filterValues.shift.length > 0 ? { shift: filterValues.shift } : {}),
        ...(filterValues.product.length > 0 ? { product: filterValues.product } : {}),
        ...(filterValues.variant.length > 0 ? { variant: filterValues.variant } : {}),
      });
      if (res.status === 401) {
        navigate('/');
        return ;
      }
      console.log(res);
      setUnitsData(res.data.data);
      let passPercentage =
        (res.data.data.passed.value / res.data.data.session_analyzed.value) *
        100;
      passPercentage = (Math.round(passPercentage * 100) / 100).toFixed(2);
      if (isNaN(passPercentage)) {
        passPercentage = 0;
      }
      setPassedPercentage(passPercentage);
    };
    const getTableData = async () => {
      const res = await apiService.get(Endpoint.GET_ALL_SESSIONS, {
        start_ts: date[0].unix() * 1000,
        end_ts: date[1].unix() * 1000,
        ...(filterValues.shift.length > 0 ? { shift: filterValues.shift } : {}),
        ...(filterValues.product.length > 0 ? { product: filterValues.product } : {}),
        ...(filterValues.variant.length > 0 ? { variant: filterValues.variant } : {}),
      });
      if (res.status === 401) {
        navigate('/');
        return ;
      }
      res.data.data.map((item) => {
        console.log(dayjs(item.end_ts).format("DD-MM-YYYY hh:mm:ss A"));
        item.timestring = dayjs(item.end_ts).format("DD-MM-YYYY hh:mm:ss A");
      });
      console.log(res.data.data);
      setTableData(res.data.data);
      // setLoadingState(false);
    };



    const getChartData = async () => {
      const day_wise_sessions = await apiService.get(
        `${Endpoint.GET_DAY_WISE_SESSION}`,
        {
          start_ts: date[0].unix() * 1000,
          end_ts: date[1].unix() * 1000,
          ...(filterValues.shift.length > 0 ? { shift: filterValues.shift } : {}),
          ...(filterValues.product.length > 0 ? { product: filterValues.product } : {}),
          ...(filterValues.variant.length > 0 ? { variant: filterValues.variant } : {}),

        }
      );
      setDayWiseSession(day_wise_sessions.data.data);
      // const piechart = await apiService.get(
      //   `${Endpoint.GET_DEFECT_PIE_DASHBOARD}`,
      //   {
      //     st: date[0].unix() * 1000,
      //     et: date[1].unix() * 1000,
      //     ...(filterValues.shift.length > 0 ? { shift: filterValues.shift } : {}),
      //   }
      // );
      // // console.log(res1)
      // setDefectPieChart(piechart.data.data);
      const bar_chart_sessions = await apiService.get(
        `${Endpoint.GET_BAR_CHART_SESSIONS}`,
        {
          start_ts: date[0].unix() * 1000,
          end_ts: date[1].unix() * 1000,
          ...(filterValues.shift.length > 0 ? { shift: filterValues.shift } : {}),
          ...(filterValues.product.length > 0 ? { product: filterValues.product } : {}),
          ...(filterValues.variant.length > 0 ? { variant: filterValues.variant } : {}),
        }
      );
      // console.log(bar_chart_sessions.data.data)
      setBarChartSession(bar_chart_sessions.data.data);
      const perforation = await apiService.get(
        `${Endpoint.GET_PERFORATION_DASHBOARD}`,
        {
          start_ts: date[0].unix() * 1000,
          end_ts: date[1].unix() * 1000,
          ...(filterValues.shift.length > 0 ? { shift: filterValues.shift } : {}),
          ...(filterValues.product.length > 0 ? { product: filterValues.product } : {}),
          ...(filterValues.variant.length > 0 ? { variant: filterValues.variant } : {}),
        }
      );
      if (perforation.status === 401) {
        navigate('/');
        return ;
      }
      
      // console.log(perforation)
      // let perforation = perforationChartMock;
      perforation.data.data.map((item) => {
        item.min = item.min === null ? 0 : parseFloat(item.min)
        item.max = item.max === null ? 0 : parseFloat(item.max)
        item.min = item.min === null ? 0 : parseFloat(item.min)
        item.max = item.max === null ? 0 : parseFloat(item.max)
      })
      setPerforationChart(perforation.data.data);


      const weight = await apiService.get(`${Endpoint.GET_WEIGHT_DASHBOARD}`, {
        start_ts: date[0].unix() * 1000,
        end_ts: date[1].unix() * 1000,
        ...(filterValues.shift.length > 0 ? { shift: filterValues.shift } : {}),
        ...(filterValues.product.length > 0 ? { product: filterValues.product } : {}),
        ...(filterValues.variant.length > 0 ? { variant: filterValues.variant } : {}),
      });
      setWeightChart(weight.data.data);
    };



    // TODO:  CALL ALL API TO GET DASHBOARD DATA
    getTableData();
    getDropDownOptions();
    getUnitsData();
    getChartData();
    // getDownloadData()
  };

  const getAllUnitsSession = async (sessionId) => {
    let date = [dateRange[0], dateRange[1]];
    let endpoint = Endpoint.GET_ALL_UNITS_SESSION.replace(
      "{session_id}",
      sessionId
    );
    const res = await apiService.get(endpoint, {
      start_ts: date[0].unix() * 1000,
      end_ts: date[1].unix() * 1000,
      ...(filterValues.shift.length > 0 ? { shift: filterValues.shift } : {}),
      ...(filterValues.product.length > 0 ? { product: filterValues.product } : {}),
    });
    if (res.status === 401) {
      navigate('/');
      return;
    }
    console.log(res);
    let data = [
      {
        title: <div className="text-[#000000] text-start ml-4">Units</div>,
        dataIndex: "name",
        width: "12vw",
        key: "name",
        render: (_, { name }) => (
          <>
            <div className="w-full flex justify-start ml-4 items-center text-[#4B5565]">
              <p>{name}</p>
            </div>
          </>
        ),
      },
    ];
    let labels = [];
    res.data.data?.properties.map((item, index) => {
      if (
        item.type === "others" ||
        item.type === "coding" ||
        item.type === "material_code" ||
        item.type === "perforation"
      ) {
        labels.push(item.type);
      } else {
        labels.push(item.label);
      }
    });
    // console.log()
    const propertyLabels = [...new Set(labels)];
    console.log(propertyLabels);
    setClickedSessionData(res.data.data);
    console.log(propertyLabels);
    const correctLabels = (item) => {
      if (item.includes("_")) {
        // Remove the underscore and return the modified string
        item = item.replace(/_/g, "");
        return item.charAt(0).toUpperCase() + item.slice(1);
      } else {
        // Capitalize the first letter of the string
        return item.charAt(0).toUpperCase() + item.slice(1);
      }
    };
    propertyLabels.map((item, propertyIndex) => {
      data.push({
        title: correctLabels(item),
        dataIndex: `${item + "Status"}`,
        width: "7vw",
        render: (_, record, unitIndex) => {
          console.log(record);
          return (
            <>
              <div
                className="w-full flex justify-center items-center"
                onClick={() =>
                  showIndividualUnitData(unitIndex, item, res.data.data)
                }
              >
                <div
                  className={`w-[25px] h-[25px]  text-white rounded-[50px] flex justify-center items-center ${record[`${item + "Status"}`]
                    ? "bg-[#167a48]"
                    : "bg-[#b42318]"
                    }`}
                ></div>
              </div>
            </>
          );
        },
      });
    });
    setSessionTable(data);

    generateCongratsTable(res.data.data, propertyLabels);

  };

  const generateCongratsTable = (sessionData, propertyLabels) => {
    let congratsTable = [];
    console.log(sessionData);
    console.log(propertyLabels);
    sessionData?.units.map((item, index) => {
      let propertyItem = {
        sessionId: item.session_id,
        name: `Unit ${index + 1}`,
      };
      propertyLabels.map((label, index) => {
        // const filteredProperties = item.properties.filter(
        //   (prop) => prop.type === label
        // );
        let filteredProperties;
        if (
          label === "others" ||
          label === "coding" ||
          label === "material_code" ||
          label === "perforation"
        ) {
          filteredProperties = item.properties.filter(
            (prop) => prop.type === label
          );
        } else {
          filteredProperties = item.properties.filter(
            (prop) => prop.label === label
          );
        }
        // Check if all filtered properties have matching value and detected_value


        if (label === "perforation") {

          filteredProperties.map((item) => {
            console.log(item)
            if (item.label === "Raw") {
              console.log(item.detected_value)
              if (item.detected_value == null || item.detected_value == undefined) {
                propertyItem[`${label}Status`] = false;
              }
              else {
                propertyItem[`${label}Status`] = true;
              }
            }
          })
        }
        else {
          const result = filteredProperties.every(
            (prop) => prop.verdict === 1 ? true : false
          );
          propertyItem[`${label}Status`] = result;
        }
      });
      console.log(propertyItem);
      congratsTable.push(propertyItem);
    });
    console.log(congratsTable);
    setCongratsTable(congratsTable);
    setOpen(true);
  };

  useEffect(() => {
    if (filterValues && dateRange.length > 0) {
      console.log("filteredString fetching");
      fetchData(dateRange);
    }
  }, [filterValues, dateRange]);

  useEffect(() => {
    let date;
    if (process.env.REACT_APP_STATE !== "PRODUCTION") {

      setDateRange([
        dayjs("2024-02-21").startOf("day"),
        dayjs("2024-02-22").endOf("day"),
      ]);
      date = [
        dayjs("2024-02-21").startOf("day"),
        dayjs("2024-02-22").endOf("day"),
      ];
    } else {
      setDateRange([
        dayjs().subtract(30, "day"), //TODO: initial fetch for event logs should change to days or hours here
        dayjs(),
      ]);
      date = [dayjs().subtract(30, "day"), dayjs()];
    }
    // if (dateRange && dateRange[0]) {
    fetchData(date);
    // }
  }, []);

  useEffect(() => {
    if (dateRange.length > 0) {
      // If dateRange is set, log the dates for verification
      console.log(dayjs(dateRange[0]));
      console.log(
        "Date range set:",
        dateRange[0].format("DD/MM/YYYY"),
        "-",
        dateRange[1].format("DD/MM/YYYY")
      );
    }
  }, [dateRange]);
  console.log(dateRange)

  const [filteredParameters, setFilteredParameters] = useState({
    st: null,
    et: null,
    shift: null,
    product: null,
    defect: null,
    decision: null
  });


  // //handle Change from filter Options

  // // on change of filter string we will call required apis for refresh data.
  useEffect(() => {
    if (filterValues && dateRange.length > 0) {
      console.log("filteredString fetching");
      fetchData(dateRange);
    }
  }, [filterValues, dateRange]);



  function getValue(value) {
    if (value == null || value == undefined) {
      return "";
    } else {
      return value;
    }
  }

  // Download file on button click.
  async function handleDownload() {
    let date = [dateRange[0], dateRange[1]];

    // const getDownloadData = async () => {
    const res = await apiService.get(Endpoint.GET_DOWNLOAD_DASHBOARD, {
      start_ts: date[0].unix() * 1000,
      end_ts: date[1].unix() * 1000,
      ...(filterValues.shift.length > 0 ? { shift: filterValues.shift } : {}),
      ...(filterValues.product.length > 0 ? { product: filterValues.product } : {}),
    });
    if (res.status === 401) {
      navigate('/');
      return ;
    }
    console.log(res)


    // };
    // const res = await apiService.get(`${Endpoint.ALL_EVENTLOGS}`, {
    //   st: dateRange[0].unix() * 1000,
    //   et: dateRange[1].unix() * 1000,
    // });
    console.log(res.data);
    let tempData = [];
    if (Array.isArray(res?.data.data)) {
      res.data.data.map((obj) => {
          obj.units.map((units,index)=>{
            units.id = index + 1;
            units.properties.map((eachProperties)=>{
              tempData.push( {
                ts: dayjs(obj.start_ts).format("DD-MM-YYYY hh:mm:ss A"),
                sessionID: getValue(obj?.id),
                unitID: getValue(units?.id),
                category: getValue(eachProperties?.type),
                label: getValue(eachProperties?.label),
                referenceValue: getValue(eachProperties?.value),
                detectedValue: getValue(eachProperties?.detected_value),
                result: getValue(eachProperties?.verdict) === 0 ? 'Fail':'Pass',
                sessionLink:'http://localhost/session/'+getValue(obj?.id)
              });
            })
          })
        
      });
      console.log(tempData);
      const transformedData = tempData.map(item => ({
        "Timestamp": item.ts,
        "SessionID": item.sessionID,
        "UnitID": item.unitID,
        "Category": item.category,
        "Label":item.label,
        "ReferenceValue": item.referenceValue,
        "DetectedValue": item.detectedValue,
        "Result":item.result,
        "Link":item.sessionLink
      }));

      const dataToConvert = {
        data: transformedData,
        filename: "report",
        delimiter: ",",
        headers: [
          "Timestamp",
          "SessionID",
          "UnitID",
          "Category",
          "Label",
          "ReferenceValue",
          "DetectedValue",
          "Result",
          "Link"
        ],
      };
      console.log(dataToConvert);
      csvDownload(dataToConvert);

    } else {
      console.log("here");
    }
  }


  return (
    <div
      className={`flex  h-[100vh] flex-col w-full bg-[#f7f7f7] overflow-auto relative ${isCollapsed ? "w-[95vw]" : "w-[75vw]"
        }`}
    >
      <div className="kpiArea h-full p-3">
        <div className="flex flex-row justify-between items-center gap-2 w-[100%]">
          {["Shift", "Products", "Variants"].map(
            (item, index) => {
              return (
                <>
                  <div className="flex flex-col mt-2 basis-[20%]">
                    <Select
                      key={index}
                      components={{
                        Option: InputOption,
                        MultiValue: ({ data, ...props }) => (
                          <MultiValue item={item} {...props} />
                        ),
                      }}
                      closeMenuOnSelect={false}
                      hideSelectedOptions={false}
                      placeholder={item}
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          backgroundColor: "#ffffff",
                          fontSize: '1.15rem',
                          padding: '1.5% 1.5% ',
                          color: "#000000",
                          borderColor: "#CDD5DF",
                          flexBasis: "20%",
                        }),
                        option: (styles, { isDisabled, isFocused }) => {
                          return {
                            ...styles,
                            backgroundColor: isFocused
                              ? "#ffffff"
                              : "transparent",
                            color: "black",
                            cursor: isDisabled ? "not-allowed" : "default",
                          };
                        },
                      }}
                      options={
                        dropDownData && item === "Shift"
                          ? dropDownData?.shift
                          : item === "Products"
                            ? dropDownData?.product
                            : item === "Defect Types"
                              ? dropDownData?.defect_reason
                              : dropDownData?.variant
                      }
                      isMulti
                      value={filteredParameters["item"]}
                      onChange={(selectedOption) =>
                        handleSelectChange(selectedOption, item)
                      }
                    />
                  </div>
                </>
              );
            }
          )}
          {dateRange.length > 0 && <RangePicker
            defaultValue={
              dateRange.length > 0
                ? [
                  dayjs(dateRange[0], "DD/MM/YYYY"),
                  dayjs(dateRange[1], "DD/MM/YYYY"),
                ]
                : null
            }
            className="basis-[23%]"
            separator={<GoDash color="#1016D1" fontSize={"2.5vmin"} />}
            suffixIcon={<CiCalendar color="#1016D1" fontSize={"2.5vmin"} />}
            style={{
              padding: "0.75% 0.7%",
              backgroundColor: "#ffffff",
              marginTop: "8px",
              fontSize: '2.5rem',
              fontWeight: '400',
              textAlign: 'center'
            }}
            format="DD-MM-YYYY"
            onChange={handleRangeChange}
          />}
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            size={"large"}
            className="download_btn h-10 py-2 text-[1.15rem] basis-[20%] mt-[8px] rounded-[10px] bg-[#1016D1]"
            onClick={handleDownload}
          // loading={loadingState.download}
          >Download Data</Button>
        </div>

        {/* Value Cards */}
        <div className="flex justify-between h-[20%] mb-[1%] text-white mt-4">
          <div className="w-[25%] h-[100%] p-[1%] mr-[1%] flex justify-around flex-col items-start border border-[##CDD5DF] bg-[#ffffff] rounded-md">
            <div className="flex flex-col justify-center items-start gap-4">
              <img src={Logs} alt="" />
              <span className="font-inter text-xl text-[#000000]">
                Sessions Analysed
              </span>
            </div>
            <div className="w-[100%] flex justify-between">
              <h1 className="text-4xl text-exo font-[600] text-black">
                {unitsData?.session_analyzed?.value || "-"}
              </h1>
              {isLoading ? (
                <Spin />
              ) : (
                generateState(
                  unitsData?.processed?.state || null,
                  unitsData?.processed?.state_value || null
                )
              )}
            </div>
          </div>
          <div className="w-[25%] h-[100%] p-[1%] mr-[1%] flex justify-around flex-col items-start border border-[##CDD5DF] bg-[#ffffff] rounded-md">
            <div className="flex flex-col justify-center items-start gap-4">
              <img src={Passed} alt="" />
              <span className="font-inter text-xl text-[#000000]">
                Sessions Passed
              </span>
            </div>
            <div className="w-[100%] flex justify-between">
              <h1 className="text-4xl text-exo font-[600] text-black">
                {unitsData?.passed?.value || "-"}
              </h1>
              {isLoading ? (
                <Spin />
              ) : (
                generateState(
                  unitsData?.passed?.state || null,
                  unitsData?.passed?.state_value || null
                )
              )}
            </div>
          </div>
          <div className="w-[25%] h-[100%] p-[1%] mr-[1%] flex justify-around flex-col items-start border border-[##CDD5DF] bg-[#ffffff] rounded-md">
            <div className="flex flex-col justify-center items-start gap-4">
              <img src={Logs} alt="" />
              <span className="font-inter text-xl text-[#000000]">
                Sessions Failed
              </span>
            </div>
            <div className="w-[100%] flex justify-between">
              <h1 className="text-4xl text-exo font-[600] text-black">
                {unitsData?.failed?.value || "-"}
              </h1>
              {isLoading ? (
                <Spin />
              ) : (
                generateState(
                  unitsData?.failed?.state || null,
                  unitsData?.failed?.state_value || null
                )
              )}
              { }
            </div>
          </div>
          <div className="w-[25%] h-[100%] p-[1%] flex flex-col items-start justify-around border border-[##CDD5DF] bg-[#ffffff] rounded-md">
            <div className="flex flex-col justify-center items-start gap-4">
              <img src={Logs} alt="" />
              <span className="font-inter text-xl text-[#000000] ">
                Sessions Passed (%)
              </span>
            </div>
            <div className="w-[100%] flex justify-between text-black">
              <h1 className="text-4xl text-exo font-[600]">
                {passedPercentage}
              </h1>
              {isLoading ? (
                <Spin />
              ) : (
                generateState(
                  unitsData?.throughput?.state || null,
                  unitsData?.throughput?.state_value || null
                )
              )}
            </div>
          </div>
        </div>
        {/* Value Cards */}
        <div className="flex flex-row h-[60%] mb-[1%] w-full bg-[#ffffff] rounded-md border ">
          <div className="flex flex-col h-full w-full">
            <div className="px-4 py-4 flex flex-row w-full justify-between items-center mb-2">
              <p className="font-[400] text-xl font-[600] text-[#000000] ml-4">
                Day Wise Sessions Count
              </p>
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="h-[16px] w-[16px] rounded-[50%] bg-[#1F36C7]"></div>
                <p className="text-black text-md">Sessions Count</p>
              </div>
            </div>
            <SingleBarChart data={dayWiseSession} />
          </div>
        </div>
        {/* Chart Area */}
        <div className="w-[100%] mr-[1%] border bg-[#ffffff] h-[50%] rounded-md">
          {false ? (
            <>
              {isLoading && <Spin />}
              <div className="w-full h-full flex flex-row justify-center items-center text-xl text-[#000000]">
                Oops there is no Data to visualize..
              </div>
            </>
          ) : (
            <div className="flex flex-col h-full">
              <div className="px-4 py-4 flex flex-row w-full justify-between items-center mb-2">
                <p className="font-[400] text-xl font-[600] text-[#000000] ml-4">
                  Product Sessions Pass Vs Fail
                </p>
                <div className="flex flex-row items-center justify-center gap-2">
                  <div className="flex flex-row gap-2 justify-center items-center">
                    <div className="h-[16px] w-[16px] rounded-[50%] bg-[#1F36C7]"></div>
                    <p className="text-black text-md">Passed</p>
                  </div>
                  <div className="flex flex-row gap-2 justify-center items-center">
                    <div className="h-[16px] w-[16px] rounded-[50%] bg-[#00D7C4]"></div>
                    <p className="text-black text-md">Failed</p>
                  </div>
                </div>
              </div>
              <StackBarChart data={barchartSession} />
            </div>
          )}
        </div>

        <div className="flex flex-row h-[55%] mb-[1%] mt-[1%] gap-4">

          {/* <div className="w-full"> */}
          {/* {loadingState.pie ? (
              <Spin />
            ) : (
              
            )} */}
          {/* <div className="flex flex-col h-full">
              <div className="px-2 py-1">
                <p className="font-[400] text-lg text-[#000000]">
                  Defect Category
                </p>
              </div>
              <CustomPieChart data={defectPieChart} />
            </div> */}
          <div className="basis-[50%] bg-[#ffffff] flex flex-col border ">
          <div className="px-4 py-4 flex flex-row w-full justify-between items-center mb-2">
              <p className="font-[400] text-xl font-[600] text-[#000000] ml-4">
                Weights
              </p>
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="flex flex-row gap-2 justify-center items-center">
                  <div className="h-[16px] w-[16px] rounded-[50%] bg-[#131921]"></div>
                  <p className="text-black text-md">Avg</p>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <div className="h-[16px] w-[16px] rounded-[50%] bg-[#00D7C4]"></div>
                  <p className="text-black text-md">Min</p>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <div className="h-[16px] w-[16px] rounded-[50%] bg-[#1F36C7]"></div>
                  <p className="text-black text-md">Max</p>
                </div>
              </div>
            </div>
            {weightChart?.length > 0 && <CustomLineChart data={weightChart} />}
          </div>
          <div className="basis-[50%] bg-[#ffffff] border ">
            <div className="px-4 py-4 flex flex-row w-full justify-between items-center mb-2">
              <p className="font-[400] text-xl font-[600] text-[#000000] ml-4">
                Perforation
              </p>
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="flex flex-row gap-2 justify-center items-center">
                  <div className="h-[16px] w-[16px] rounded-[50%] bg-[#131921]"></div>
                  <p className="text-black text-md">Avg</p>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <div className="h-[16px] w-[16px] rounded-[50%] bg-[#00D7C4]"></div>
                  <p className="text-black text-md">Min</p>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <div className="h-[16px] w-[16px] rounded-[50%] bg-[#1F36C7]"></div>
                  <p className="text-black text-md">Max</p>
                </div>
              </div>
            </div>
            {perforationChart?.length > 0 && <CustomLineChart data={perforationChart} />}
          </div>
          {/* </div> */}
        </div>
        {/* Chart Area

        

        {/* Table Area */}

        {/* <div className="flex flex-row h-[50%] justify-between mb-[1%] w-full  gap-2 rounded-md ">
          <div className="basis-[100%] bg-[#ffffff] flex flex-col p-2 border ">
            <div className="px-2 py-1">
            <p className="font-[400] text-xl font-[600] text-[#000000] ml-4">Weight</p>
            </div>
            {weightChart?.length > 0 && <CustomLineChart data={weightChart} />}
          </div>

        </div> */}

        

        <div className="flex flex-row h-[30%] w-[100%] border  rounded-md">
          {isLoading ? (
            <Spin />
          ) : (
            <Table
              className="font-[inter] w-full"
              rowClassName={(record, index) =>
                index % 2 === 0
                  ? "table-row-light highlight-bottom-border"
                  : "table-row-dark highlight-top-border"
              }
              locale={{
                emptyText: (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      color: "white",
                    }}
                  >
                    No Data Available
                  </div>
                ),
              }}
              columns={TABLE_COLUMNS}
              bordered={false}
              dataSource={tableData}
              pagination={false}
              scroll={{
                y: "80vh",
              }}
              onRow={(record, index) => {
                return {
                  onClick: (event) => {
                    getAllUnitsSession(record.id);
                    // console.log(column)
                  },
                };
              }}
            />
          )}
        </div>
        {/* Table Area */}
      </div>
      <Modal
        className="mt-[15vh] custom-antd-modal"
        open={open}
        onOk={handleOk}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        closeIcon={<CloseIcon color="#ffffff" fontSize={"2.5vmin"} />}
      >
        {
          <div className="flex flex-col justify-center items-center gap-4 w-[60vw]">
            <div className="w-full flex flex-row justify-between items-center">
              {/* <div className=""></div> */}
              {flipped ? (
                <img
                  src={BackIcon}
                  alt=""
                  width={20}
                  height={10}
                  className="cursor-pointer"
                  onClick={() => setFlipped(!flipped)}
                />
              ) : (
                <div></div>
              )}
              <p className="text-2xl font-[500] text-center">
                Sessions Results
              </p>
              <div className=""></div>
            </div>
            <p className="text-lg">
              The Session has been already successfully submitted
            </p>
            <ReactCardFlip
              isFlipped={flipped}
              flipDirection="horizontal"
              className="w-full"
            // className={styles.top_div_flip}
            >
              <div className="w-full flex justify-center items-center">
                <Table
                  className="font-[inter] congrats border-2 border-[#CDD5DF] rounded-[5px] custom-antd-table compare-table"
                  rowClassName={(record, index) =>
                    index % 2 === 0
                      ? "table-row-light highlight-bottom-border"
                      : "table-row-dark highlight-top-border"
                  }
                  columns={sessionTable}
                  bordered={true}
                  dataSource={congratsTable}
                  pagination={false}
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <Table
                  className="font-[inter] congrats border-2 rounded-[5px] custom-antd-table compare-table"
                  rowClassName={(record, index) =>
                    index % 2 === 0
                      ? "table-row-light highlight-bottom-border"
                      : "table-row-dark highlight-top-border"
                  }
                  columns={singleUnitTableColumns}
                  bordered={true}
                  dataSource={singleUnitTableData}
                  pagination={false}
                />
              </div>
            </ReactCardFlip>

          </div>
        }
      </Modal>
    </div>
  );
}

export default Dashboard;
