import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Dashbaord = () => {
  const users = JSON.parse(localStorage.getItem("user"));
  console.log(users.firstName);
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* Menu */}
        <Sidebar />
        {/* / Menu */}
        {/* Layout container */}
        <div className="layout-page">
          {/* Navbar */}
          <Navbar />
          {/* / Navbar */}
          {/* Content wrapper */}
          <div className="content-wrapper">
            {/* Content */}
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row gy-4">
                {/* Congratulations card */}
                <div className="col-md-12 col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-1">
                        Wellcome {users.firstName} 🎉
                      </h4>
                      <p className="pb-0">Best seller of the month</p>
                      <h4 className="text-primary mb-1">$42.8k</h4>
                      <p className="mb-2 pb-1">78% of target 🚀</p>
                      <a
                        href="javascript:;"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                      >
                        View Sales
                      </a>
                    </div>
                    <img
                      src="../assets/img/icons/misc/triangle-light.png"
                      className="scaleX-n1-rtl position-absolute bottom-0 end-0"
                      width={166}
                      alt="triangle background"
                      data-app-light-img="icons/misc/triangle-light.png"
                      data-app-dark-img="icons/misc/triangle-dark.png"
                    />
                    <img
                      src="../assets/img/illustrations/trophy.png"
                      className="scaleX-n1-rtl position-absolute bottom-0 end-0 me-4 mb-4 pb-2"
                      width={83}
                      alt="view sales"
                    />
                  </div>
                </div>
                {/*/ Congratulations card */}
                {/* Transactions */}
                <div className="col-lg-8">
                  <div className="card">
                    <div className="card-header">
                      <div className="d-flex align-items-center justify-content-between">
                        <h5 className="card-title m-0 me-2">Transactions</h5>
                        <div className="dropdown">
                          <button
                            className="btn p-0"
                            type="button"
                            id="transactionID"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="mdi mdi-dots-vertical mdi-24px" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="transactionID"
                          >
                            <a
                              className="dropdown-item waves-effect"
                              href="javascript:void(0);"
                            >
                              Refresh
                            </a>
                            <a
                              className="dropdown-item waves-effect"
                              href="javascript:void(0);"
                            >
                              Share
                            </a>
                            <a
                              className="dropdown-item waves-effect"
                              href="javascript:void(0);"
                            >
                              Update
                            </a>
                          </div>
                        </div>
                      </div>
                      <p className="mt-3">
                        <span className="fw-medium">Total 48.5% growth</span> 😎
                        this month
                      </p>
                    </div>
                    <div className="card-body">
                      <div className="row g-3">
                        <div className="col-md-3 col-6">
                          <div className="d-flex align-items-center">
                            <div className="avatar">
                              <div className="avatar-initial bg-primary rounded shadow">
                                <i className="mdi mdi-trending-up mdi-24px" />
                              </div>
                            </div>
                            <div className="ms-3">
                              <div className="small mb-1">Sales</div>
                              <h5 className="mb-0">245k</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6">
                          <div className="d-flex align-items-center">
                            <div className="avatar">
                              <div className="avatar-initial bg-success rounded shadow">
                                <i className="mdi mdi-account-outline mdi-24px" />
                              </div>
                            </div>
                            <div className="ms-3">
                              <div className="small mb-1">Customers</div>
                              <h5 className="mb-0">12.5k</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6">
                          <div className="d-flex align-items-center">
                            <div className="avatar">
                              <div className="avatar-initial bg-warning rounded shadow">
                                <i className="mdi mdi-cellphone-link mdi-24px" />
                              </div>
                            </div>
                            <div className="ms-3">
                              <div className="small mb-1">Product</div>
                              <h5 className="mb-0">1.54k</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-6">
                          <div className="d-flex align-items-center">
                            <div className="avatar">
                              <div className="avatar-initial bg-info rounded shadow">
                                <i className="mdi mdi-currency-usd mdi-24px" />
                              </div>
                            </div>
                            <div className="ms-3">
                              <div className="small mb-1">Revenue</div>
                              <h5 className="mb-0">$88k</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ Transactions */}
                {/* Weekly Overview Chart */}
                <div className="col-xl-4 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <div className="d-flex justify-content-between">
                        <h5 className="mb-1">Weekly Overview</h5>
                        <div className="dropdown">
                          <button
                            className="btn p-0"
                            type="button"
                            id="weeklyOverviewDropdown"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="mdi mdi-dots-vertical mdi-24px" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="weeklyOverviewDropdown"
                          >
                            <a
                              className="dropdown-item waves-effect"
                              href="javascript:void(0);"
                            >
                              Refresh
                            </a>
                            <a
                              className="dropdown-item waves-effect"
                              href="javascript:void(0);"
                            >
                              Share
                            </a>
                            <a
                              className="dropdown-item waves-effect"
                              href="javascript:void(0);"
                            >
                              Update
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body" style={{ position: "relative" }}>
                      <div id="weeklyOverviewChart" style={{ minHeight: 200 }}>
                        <div
                          id="apexchartsfibzezml"
                          className="apexcharts-canvas apexchartsfibzezml apexcharts-theme-light"
                          style={{ width: 362, height: 200 }}
                        >
                          <svg
                            id="SvgjsSvg1360"
                            width={362}
                            height={200}
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.dev"
                            className="apexcharts-svg apexcharts-zoomable"
                            xmlns:data="ApexChartsNS"
                            transform="translate(-16, -9)"
                            style={{ background: "transparent" }}
                          >
                            <g
                              id="SvgjsG1362"
                              className="apexcharts-inner apexcharts-graphical"
                              transform="translate(69.34017893473307, 30)"
                            >
                              <defs id="SvgjsDefs1361">
                                <linearGradient
                                  id="SvgjsLinearGradient1366"
                                  x1={0}
                                  y1={0}
                                  x2={0}
                                  y2={1}
                                >
                                  <stop
                                    id="SvgjsStop1367"
                                    stopOpacity="0.4"
                                    stopColor="rgba(216,227,240,0.4)"
                                    offset={0}
                                  />
                                  <stop
                                    id="SvgjsStop1368"
                                    stopOpacity="0.5"
                                    stopColor="rgba(190,209,230,0.5)"
                                    offset={1}
                                  />
                                  <stop
                                    id="SvgjsStop1369"
                                    stopOpacity="0.5"
                                    stopColor="rgba(190,209,230,0.5)"
                                    offset={1}
                                  />
                                </linearGradient>
                                <clipPath id="gridRectMaskfibzezml">
                                  <rect
                                    id="SvgjsRect1371"
                                    width="305.717056274414"
                                    height={165}
                                    x="-17.057235209147134"
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="forecastMaskfibzezml" />
                                <clipPath id="nonForecastMaskfibzezml" />
                                <clipPath id="gridRectMarkerMaskfibzezml">
                                  <rect
                                    id="SvgjsRect1372"
                                    width="275.6025858561198"
                                    height={169}
                                    x={-2}
                                    y={-2}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                              </defs>
                              <rect
                                id="SvgjsRect1370"
                                width="13.58012929280599"
                                height={165}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                strokeDasharray={3}
                                fill="url(#SvgjsLinearGradient1366)"
                                className="apexcharts-xcrosshairs"
                                y2={165}
                                filter="none"
                                fillOpacity="0.9"
                              />
                              <g
                                id="SvgjsG1391"
                                className="apexcharts-xaxis"
                                transform="translate(0, 0)"
                              >
                                <g
                                  id="SvgjsG1392"
                                  className="apexcharts-xaxis-texts-g"
                                  transform="translate(0, -4)"
                                />
                              </g>
                              <g id="SvgjsG1410" className="apexcharts-grid">
                                <g
                                  id="SvgjsG1411"
                                  className="apexcharts-gridlines-horizontal"
                                >
                                  <line
                                    id="SvgjsLine1413"
                                    x1="-15.057235209147134"
                                    y1={0}
                                    x2="286.6598210652669"
                                    y2={0}
                                    stroke="#e7e7e8"
                                    strokeDasharray={8}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine1414"
                                    x1="-15.057235209147134"
                                    y1={55}
                                    x2="286.6598210652669"
                                    y2={55}
                                    stroke="#e7e7e8"
                                    strokeDasharray={8}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine1415"
                                    x1="-15.057235209147134"
                                    y1={110}
                                    x2="286.6598210652669"
                                    y2={110}
                                    stroke="#e7e7e8"
                                    strokeDasharray={8}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                  <line
                                    id="SvgjsLine1416"
                                    x1="-15.057235209147134"
                                    y1={165}
                                    x2="286.6598210652669"
                                    y2={165}
                                    stroke="#e7e7e8"
                                    strokeDasharray={8}
                                    strokeLinecap="butt"
                                    className="apexcharts-gridline"
                                  />
                                </g>
                                <g
                                  id="SvgjsG1412"
                                  className="apexcharts-gridlines-vertical"
                                />
                                <line
                                  id="SvgjsLine1418"
                                  x1={0}
                                  y1={165}
                                  x2="271.6025858561198"
                                  y2={165}
                                  stroke="transparent"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                />
                                <line
                                  id="SvgjsLine1417"
                                  x1={0}
                                  y1={1}
                                  x2={0}
                                  y2={165}
                                  stroke="transparent"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                />
                              </g>
                              <g
                                id="SvgjsG1373"
                                className="apexcharts-bar-series apexcharts-plot-series"
                              >
                                <g
                                  id="SvgjsG1374"
                                  className="apexcharts-series"
                                  rel={1}
                                  seriesname="Sales"
                                  data:realindex={0}
                                >
                                  <path
                                    id="SvgjsPath1378"
                                    d="M -6.790064646402995 157L -6.790064646402995 114.33333333333333Q -6.790064646402995 106.33333333333333 1.2099353535970048 106.33333333333333L -1.2099353535970048 106.33333333333333Q 6.790064646402995 106.33333333333333 6.790064646402995 114.33333333333333L 6.790064646402995 114.33333333333333L 6.790064646402995 157Q 6.790064646402995 165 -1.2099353535970048 165L 1.2099353535970048 165Q -6.790064646402995 165 -6.790064646402995 157z"
                                    fill="rgba(240,242,248,0.85)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskfibzezml)"
                                    pathto="M -6.790064646402995 157L -6.790064646402995 114.33333333333333Q -6.790064646402995 106.33333333333333 1.2099353535970048 106.33333333333333L -1.2099353535970048 106.33333333333333Q 6.790064646402995 106.33333333333333 6.790064646402995 114.33333333333333L 6.790064646402995 114.33333333333333L 6.790064646402995 157Q 6.790064646402995 165 -1.2099353535970048 165L 1.2099353535970048 165Q -6.790064646402995 165 -6.790064646402995 157z"
                                    pathfrom="M -6.790064646402995 157L -6.790064646402995 157L 6.790064646402995 157L 6.790064646402995 157L 6.790064646402995 157L 6.790064646402995 157L 6.790064646402995 157L -6.790064646402995 157"
                                    cy="106.33333333333333"
                                    cx="6.790064646402995"
                                    j={0}
                                    val={32}
                                    barheight="58.66666666666667"
                                    barwidth="13.58012929280599"
                                  />
                                  <path
                                    id="SvgjsPath1380"
                                    d="M 38.47703299628364 157L 38.47703299628364 72.16666666666666Q 38.47703299628364 64.16666666666666 46.47703299628364 64.16666666666666L 44.05716228908963 64.16666666666666Q 52.05716228908963 64.16666666666666 52.05716228908963 72.16666666666666L 52.05716228908963 72.16666666666666L 52.05716228908963 157Q 52.05716228908963 165 44.05716228908963 165L 46.47703299628364 165Q 38.47703299628364 165 38.47703299628364 157z"
                                    fill="rgba(240,242,248,0.85)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskfibzezml)"
                                    pathto="M 38.47703299628364 157L 38.47703299628364 72.16666666666666Q 38.47703299628364 64.16666666666666 46.47703299628364 64.16666666666666L 44.05716228908963 64.16666666666666Q 52.05716228908963 64.16666666666666 52.05716228908963 72.16666666666666L 52.05716228908963 72.16666666666666L 52.05716228908963 157Q 52.05716228908963 165 44.05716228908963 165L 46.47703299628364 165Q 38.47703299628364 165 38.47703299628364 157z"
                                    pathfrom="M 38.47703299628364 157L 38.47703299628364 157L 52.05716228908963 157L 52.05716228908963 157L 52.05716228908963 157L 52.05716228908963 157L 52.05716228908963 157L 38.47703299628364 157"
                                    cy="64.16666666666666"
                                    cx="52.05716228908963"
                                    j={1}
                                    val={55}
                                    barheight="100.83333333333334"
                                    barwidth="13.58012929280599"
                                  />
                                  <path
                                    id="SvgjsPath1382"
                                    d="M 83.74413063897028 157L 83.74413063897028 90.5Q 83.74413063897028 82.5 91.74413063897028 82.5L 89.32425993177627 82.5Q 97.32425993177627 82.5 97.32425993177627 90.5L 97.32425993177627 90.5L 97.32425993177627 157Q 97.32425993177627 165 89.32425993177627 165L 91.74413063897028 165Q 83.74413063897028 165 83.74413063897028 157z"
                                    fill="rgba(240,242,248,0.85)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskfibzezml)"
                                    pathto="M 83.74413063897028 157L 83.74413063897028 90.5Q 83.74413063897028 82.5 91.74413063897028 82.5L 89.32425993177627 82.5Q 97.32425993177627 82.5 97.32425993177627 90.5L 97.32425993177627 90.5L 97.32425993177627 157Q 97.32425993177627 165 89.32425993177627 165L 91.74413063897028 165Q 83.74413063897028 165 83.74413063897028 157z"
                                    pathfrom="M 83.74413063897028 157L 83.74413063897028 157L 97.32425993177627 157L 97.32425993177627 157L 97.32425993177627 157L 97.32425993177627 157L 97.32425993177627 157L 83.74413063897028 157"
                                    cy="82.5"
                                    cx="97.32425993177627"
                                    j={2}
                                    val={45}
                                    barheight="82.5"
                                    barwidth="13.58012929280599"
                                  />
                                  <path
                                    id="SvgjsPath1384"
                                    d="M 129.0112282816569 157L 129.0112282816569 35.5Q 129.0112282816569 27.5 137.0112282816569 27.5L 134.5913575744629 27.5Q 142.5913575744629 27.5 142.5913575744629 35.5L 142.5913575744629 35.5L 142.5913575744629 157Q 142.5913575744629 165 134.5913575744629 165L 137.0112282816569 165Q 129.0112282816569 165 129.0112282816569 157z"
                                    fill="rgba(144,85,253,0.85)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskfibzezml)"
                                    pathto="M 129.0112282816569 157L 129.0112282816569 35.5Q 129.0112282816569 27.5 137.0112282816569 27.5L 134.5913575744629 27.5Q 142.5913575744629 27.5 142.5913575744629 35.5L 142.5913575744629 35.5L 142.5913575744629 157Q 142.5913575744629 165 134.5913575744629 165L 137.0112282816569 165Q 129.0112282816569 165 129.0112282816569 157z"
                                    pathfrom="M 129.0112282816569 157L 129.0112282816569 157L 142.5913575744629 157L 142.5913575744629 157L 142.5913575744629 157L 142.5913575744629 157L 142.5913575744629 157L 129.0112282816569 157"
                                    cy="27.5"
                                    cx="142.5913575744629"
                                    j={3}
                                    val={75}
                                    barheight="137.5"
                                    barwidth="13.58012929280599"
                                  />
                                  <path
                                    id="SvgjsPath1386"
                                    d="M 174.27832592434356 157L 174.27832592434356 72.16666666666666Q 174.27832592434356 64.16666666666666 182.27832592434356 64.16666666666666L 179.85845521714955 64.16666666666666Q 187.85845521714955 64.16666666666666 187.85845521714955 72.16666666666666L 187.85845521714955 72.16666666666666L 187.85845521714955 157Q 187.85845521714955 165 179.85845521714955 165L 182.27832592434356 165Q 174.27832592434356 165 174.27832592434356 157z"
                                    fill="rgba(240,242,248,0.85)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskfibzezml)"
                                    pathto="M 174.27832592434356 157L 174.27832592434356 72.16666666666666Q 174.27832592434356 64.16666666666666 182.27832592434356 64.16666666666666L 179.85845521714955 64.16666666666666Q 187.85845521714955 64.16666666666666 187.85845521714955 72.16666666666666L 187.85845521714955 72.16666666666666L 187.85845521714955 157Q 187.85845521714955 165 179.85845521714955 165L 182.27832592434356 165Q 174.27832592434356 165 174.27832592434356 157z"
                                    pathfrom="M 174.27832592434356 157L 174.27832592434356 157L 187.85845521714955 157L 187.85845521714955 157L 187.85845521714955 157L 187.85845521714955 157L 187.85845521714955 157L 174.27832592434356 157"
                                    cy="64.16666666666666"
                                    cx="187.85845521714955"
                                    j={4}
                                    val={55}
                                    barheight="100.83333333333334"
                                    barwidth="13.58012929280599"
                                  />
                                  <path
                                    id="SvgjsPath1388"
                                    d="M 219.54542356703018 157L 219.54542356703018 108.83333333333333Q 219.54542356703018 100.83333333333333 227.54542356703018 100.83333333333333L 225.12555285983618 100.83333333333333Q 233.12555285983618 100.83333333333333 233.12555285983618 108.83333333333333L 233.12555285983618 108.83333333333333L 233.12555285983618 157Q 233.12555285983618 165 225.12555285983618 165L 227.54542356703018 165Q 219.54542356703018 165 219.54542356703018 157z"
                                    fill="rgba(240,242,248,0.85)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskfibzezml)"
                                    pathto="M 219.54542356703018 157L 219.54542356703018 108.83333333333333Q 219.54542356703018 100.83333333333333 227.54542356703018 100.83333333333333L 225.12555285983618 100.83333333333333Q 233.12555285983618 100.83333333333333 233.12555285983618 108.83333333333333L 233.12555285983618 108.83333333333333L 233.12555285983618 157Q 233.12555285983618 165 225.12555285983618 165L 227.54542356703018 165Q 219.54542356703018 165 219.54542356703018 157z"
                                    pathfrom="M 219.54542356703018 157L 219.54542356703018 157L 233.12555285983618 157L 233.12555285983618 157L 233.12555285983618 157L 233.12555285983618 157L 233.12555285983618 157L 219.54542356703018 157"
                                    cy="100.83333333333333"
                                    cx="233.12555285983618"
                                    j={5}
                                    val={35}
                                    barheight="64.16666666666667"
                                    barwidth="13.58012929280599"
                                  />
                                  <path
                                    id="SvgjsPath1390"
                                    d="M 264.8125212097168 157L 264.8125212097168 44.66666666666666Q 264.8125212097168 36.66666666666666 272.8125212097168 36.66666666666666L 270.39265050252277 36.66666666666666Q 278.39265050252277 36.66666666666666 278.39265050252277 44.66666666666666L 278.39265050252277 44.66666666666666L 278.39265050252277 157Q 278.39265050252277 165 270.39265050252277 165L 272.8125212097168 165Q 264.8125212097168 165 264.8125212097168 157z"
                                    fill="rgba(240,242,248,0.85)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    strokeLinecap="round"
                                    strokeWidth={0}
                                    strokeDasharray={0}
                                    className="apexcharts-bar-area"
                                    index={0}
                                    clipPath="url(#gridRectMaskfibzezml)"
                                    pathto="M 264.8125212097168 157L 264.8125212097168 44.66666666666666Q 264.8125212097168 36.66666666666666 272.8125212097168 36.66666666666666L 270.39265050252277 36.66666666666666Q 278.39265050252277 36.66666666666666 278.39265050252277 44.66666666666666L 278.39265050252277 44.66666666666666L 278.39265050252277 157Q 278.39265050252277 165 270.39265050252277 165L 272.8125212097168 165Q 264.8125212097168 165 264.8125212097168 157z"
                                    pathfrom="M 264.8125212097168 157L 264.8125212097168 157L 278.39265050252277 157L 278.39265050252277 157L 278.39265050252277 157L 278.39265050252277 157L 278.39265050252277 157L 264.8125212097168 157"
                                    cy="36.66666666666666"
                                    cx="278.39265050252277"
                                    j={6}
                                    val={70}
                                    barheight="128.33333333333334"
                                    barwidth="13.58012929280599"
                                  />
                                  <g
                                    id="SvgjsG1376"
                                    className="apexcharts-bar-goals-markers"
                                    style={{ pointerEvents: "none" }}
                                  >
                                    <g
                                      id="SvgjsG1377"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG1379"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG1381"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG1383"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG1385"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG1387"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                    <g
                                      id="SvgjsG1389"
                                      classname="apexcharts-bar-goals-groups"
                                    />
                                  </g>
                                </g>
                                <g
                                  id="SvgjsG1375"
                                  className="apexcharts-datalabels"
                                  data:realindex={0}
                                />
                              </g>
                              <line
                                id="SvgjsLine1419"
                                x1="-15.057235209147134"
                                y1={0}
                                x2="286.6598210652669"
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                              />
                              <line
                                id="SvgjsLine1420"
                                x1="-15.057235209147134"
                                y1={0}
                                x2="286.6598210652669"
                                y2={0}
                                strokeDasharray={0}
                                strokeWidth={0}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs-hidden"
                              />
                              <g
                                id="SvgjsG1421"
                                className="apexcharts-yaxis-annotations"
                              />
                              <g
                                id="SvgjsG1422"
                                className="apexcharts-xaxis-annotations"
                              />
                              <g
                                id="SvgjsG1423"
                                className="apexcharts-point-annotations"
                              />
                              <rect
                                id="SvgjsRect1424"
                                width={0}
                                height={0}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fefefe"
                                className="apexcharts-zoom-rect"
                              />
                              <rect
                                id="SvgjsRect1425"
                                width={0}
                                height={0}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fefefe"
                                className="apexcharts-selection-rect"
                              />
                            </g>
                            <g
                              id="SvgjsG1400"
                              className="apexcharts-yaxis"
                              rel={0}
                              transform="translate(20.282943725585938, 0)"
                            >
                              <g
                                id="SvgjsG1401"
                                className="apexcharts-yaxis-texts-g"
                              >
                                <text
                                  id="SvgjsText1402"
                                  fontFamily="Inter"
                                  x={20}
                                  y="31.3"
                                  textAnchor="end"
                                  dominantBaseline="auto"
                                  fontSize="0.75rem"
                                  fontWeight={400}
                                  fill="#b4b2b7"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{ fontFamily: "Inter" }}
                                >
                                  <tspan id="SvgjsTspan1403">90K</tspan>
                                  <title>90K</title>
                                </text>
                                <text
                                  id="SvgjsText1404"
                                  fontFamily="Inter"
                                  x={20}
                                  y="86.3"
                                  textAnchor="end"
                                  dominantBaseline="auto"
                                  fontSize="0.75rem"
                                  fontWeight={400}
                                  fill="#b4b2b7"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{ fontFamily: "Inter" }}
                                >
                                  <tspan id="SvgjsTspan1405">60K</tspan>
                                  <title>60K</title>
                                </text>
                                <text
                                  id="SvgjsText1406"
                                  fontFamily="Inter"
                                  x={20}
                                  y="141.3"
                                  textAnchor="end"
                                  dominantBaseline="auto"
                                  fontSize="0.75rem"
                                  fontWeight={400}
                                  fill="#b4b2b7"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{ fontFamily: "Inter" }}
                                >
                                  <tspan id="SvgjsTspan1407">30K</tspan>
                                  <title>30K</title>
                                </text>
                                <text
                                  id="SvgjsText1408"
                                  fontFamily="Inter"
                                  x={20}
                                  y="196.3"
                                  textAnchor="end"
                                  dominantBaseline="auto"
                                  fontSize="0.75rem"
                                  fontWeight={400}
                                  fill="#b4b2b7"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{ fontFamily: "Inter" }}
                                >
                                  <tspan id="SvgjsTspan1409">0K</tspan>
                                  <title>0K</title>
                                </text>
                              </g>
                            </g>
                            <g
                              id="SvgjsG1363"
                              className="apexcharts-annotations"
                            />
                          </svg>
                          <div
                            className="apexcharts-legend"
                            style={{ maxHeight: 100 }}
                          />
                          <div className="apexcharts-tooltip apexcharts-theme-light">
                            <div
                              className="apexcharts-tooltip-title"
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: 12,
                              }}
                            />
                            <div
                              className="apexcharts-tooltip-series-group"
                              style={{ order: 1 }}
                            >
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{
                                  backgroundColor: "rgb(240, 242, 248)",
                                }}
                              />
                              <div
                                className="apexcharts-tooltip-text"
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                  fontSize: 12,
                                }}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-y-label" />
                                  <span className="apexcharts-tooltip-text-y-value" />
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                  <span className="apexcharts-tooltip-text-goals-label" />
                                  <span className="apexcharts-tooltip-text-goals-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label" />
                                  <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                            <div className="apexcharts-yaxistooltip-text" />
                          </div>
                        </div>
                      </div>
                      <div className="mt-1 mt-md-3">
                        <div className="d-flex align-items-center gap-3">
                          <h3 className="mb-0">45%</h3>
                          <p className="mb-0">
                            Your sales performance is 45% 😎 better compared to
                            last month
                          </p>
                        </div>
                        <div className="d-grid mt-3 mt-md-4">
                          <button
                            className="btn btn-primary waves-effect waves-light"
                            type="button"
                          >
                            Details
                          </button>
                        </div>
                      </div>
                      <div className="resize-triggers">
                        <div className="expand-trigger">
                          <div style={{ width: 403, height: 351 }} />
                        </div>
                        <div className="contract-trigger" />
                      </div>
                    </div>
                  </div>
                </div>
                {/*/ Weekly Overview Chart */}
                {/* Total Earnings */}
                <div className="col-xl-4 col-md-6">
                  <div className="card">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="card-title m-0 me-2">Total Earning</h5>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="totalEarnings"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="mdi mdi-dots-vertical mdi-24px" />
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="totalEarnings"
                        >
                          <a
                            className="dropdown-item waves-effect"
                            href="javascript:void(0);"
                          >
                            Last 28 Days
                          </a>
                          <a
                            className="dropdown-item waves-effect"
                            href="javascript:void(0);"
                          >
                            Last Month
                          </a>
                          <a
                            className="dropdown-item waves-effect"
                            href="javascript:void(0);"
                          >
                            Last Year
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="mb-3 mt-md-3 mb-md-5">
                        <div className="d-flex align-items-center">
                          <h2 className="mb-0">$24,895</h2>
                          <span className="text-success ms-2 fw-medium">
                            <i className="mdi mdi-menu-up mdi-24px" />
                            <small>10%</small>
                          </span>
                        </div>
                        <small className="mt-1">
                          Compared to $84,325 last year
                        </small>
                      </div>
                      <ul className="p-0 m-0">
                        <li className="d-flex mb-4 pb-md-2">
                          <div className="avatar flex-shrink-0 me-3">
                            <img
                              src="../assets/img/icons/misc/zipcar.png"
                              alt="zipcar"
                              className="rounded"
                            />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Zipcar</h6>
                              <small>Vuejs, React &amp; HTML</small>
                            </div>
                            <div>
                              <h6 className="mb-2">$24,895.65</h6>
                              <div
                                className="progress bg-label-primary"
                                style={{ height: 4 }}
                              >
                                <div
                                  className="progress-bar bg-primary"
                                  style={{ width: "75%" }}
                                  role="progressbar"
                                  aria-valuenow={75}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-4 pb-md-2">
                          <div className="avatar flex-shrink-0 me-3">
                            <img
                              src="../assets/img/icons/misc/bitbank.png"
                              alt="bitbank"
                              className="rounded"
                            />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Bitbank</h6>
                              <small>Sketch, Figma &amp; XD</small>
                            </div>
                            <div>
                              <h6 className="mb-2">$8,6500.20</h6>
                              <div
                                className="progress bg-label-info"
                                style={{ height: 4 }}
                              >
                                <div
                                  className="progress-bar bg-info"
                                  style={{ width: "75%" }}
                                  role="progressbar"
                                  aria-valuenow={75}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="d-flex mb-md-3">
                          <div className="avatar flex-shrink-0 me-3">
                            <img
                              src="../assets/img/icons/misc/aviato.png"
                              alt="aviato"
                              className="rounded"
                            />
                          </div>
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-0">Aviato</h6>
                              <small>HTML &amp; Angular</small>
                            </div>
                            <div>
                              <h6 className="mb-2">$1,2450.80</h6>
                              <div
                                className="progress bg-label-secondary"
                                style={{ height: 4 }}
                              >
                                <div
                                  className="progress-bar bg-secondary"
                                  style={{ width: "75%" }}
                                  role="progressbar"
                                  aria-valuenow={75}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*/ Total Earnings */}
                {/* Four Cards */}
                <div className="col-xl-4 col-md-6">
                  <div className="row gy-4">
                    {/* Total Profit line chart */}
                    <div className="col-sm-6">
                      <div className="card h-100">
                        <div className="card-header pb-0">
                          <h4 className="mb-0">$86.4k</h4>
                        </div>
                        <div
                          className="card-body"
                          style={{ position: "relative" }}
                        >
                          <div
                            id="totalProfitLineChart"
                            className="mb-3"
                            style={{ minHeight: 90 }}
                          >
                            <div
                              id="apexchartsj2k209vt"
                              className="apexcharts-canvas apexchartsj2k209vt apexcharts-theme-light"
                              style={{ width: 149, height: 90 }}
                            >
                              <svg
                                id="SvgjsSvg1426"
                                width={149}
                                height={90}
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.dev"
                                className="apexcharts-svg apexcharts-zoomable"
                                xmlns:data="ApexChartsNS"
                                transform="translate(0, 0)"
                                style={{ background: "transparent" }}
                              >
                                <g
                                  id="SvgjsG1428"
                                  className="apexcharts-inner apexcharts-graphical"
                                  transform="translate(3, 15)"
                                >
                                  <defs id="SvgjsDefs1427">
                                    <clipPath id="gridRectMaskj2k209vt">
                                      <rect
                                        id="SvgjsRect1433"
                                        width={144}
                                        height={78}
                                        x="-3.5"
                                        y="-1.5"
                                        rx={0}
                                        ry={0}
                                        opacity={1}
                                        strokeWidth={0}
                                        stroke="none"
                                        strokeDasharray={0}
                                        fill="#fff"
                                      />
                                    </clipPath>
                                    <clipPath id="forecastMaskj2k209vt" />
                                    <clipPath id="nonForecastMaskj2k209vt" />
                                    <clipPath id="gridRectMarkerMaskj2k209vt">
                                      <rect
                                        id="SvgjsRect1434"
                                        width={165}
                                        height={103}
                                        x={-14}
                                        y={-14}
                                        rx={0}
                                        ry={0}
                                        opacity={1}
                                        strokeWidth={0}
                                        stroke="none"
                                        strokeDasharray={0}
                                        fill="#fff"
                                      />
                                    </clipPath>
                                  </defs>
                                  <line
                                    id="SvgjsLine1432"
                                    x1={0}
                                    y1={0}
                                    x2={0}
                                    y2={75}
                                    stroke="#b6b6b6"
                                    strokeDasharray={3}
                                    strokeLinecap="butt"
                                    className="apexcharts-xcrosshairs"
                                    x={0}
                                    y={0}
                                    width={1}
                                    height={75}
                                    fill="#b1b9c4"
                                    filter="none"
                                    fillOpacity="0.9"
                                    strokeWidth={1}
                                  />
                                  <g
                                    id="SvgjsG1451"
                                    className="apexcharts-xaxis"
                                    transform="translate(0, 0)"
                                  >
                                    <g
                                      id="SvgjsG1452"
                                      className="apexcharts-xaxis-texts-g"
                                      transform="translate(0, -4)"
                                    />
                                  </g>
                                  <g
                                    id="SvgjsG1461"
                                    className="apexcharts-grid"
                                  >
                                    <g
                                      id="SvgjsG1462"
                                      className="apexcharts-gridlines-horizontal"
                                    />
                                    <g
                                      id="SvgjsG1463"
                                      className="apexcharts-gridlines-vertical"
                                    >
                                      <line
                                        id="SvgjsLine1464"
                                        x1={0}
                                        y1={0}
                                        x2={0}
                                        y2={75}
                                        stroke="#b4b2b7"
                                        strokeDasharray={6}
                                        strokeLinecap="butt"
                                        className="apexcharts-gridline"
                                      />
                                      <line
                                        id="SvgjsLine1465"
                                        x1="27.4"
                                        y1={0}
                                        x2="27.4"
                                        y2={75}
                                        stroke="#b4b2b7"
                                        strokeDasharray={6}
                                        strokeLinecap="butt"
                                        className="apexcharts-gridline"
                                      />
                                      <line
                                        id="SvgjsLine1466"
                                        x1="54.8"
                                        y1={0}
                                        x2="54.8"
                                        y2={75}
                                        stroke="#b4b2b7"
                                        strokeDasharray={6}
                                        strokeLinecap="butt"
                                        className="apexcharts-gridline"
                                      />
                                      <line
                                        id="SvgjsLine1467"
                                        x1="82.19999999999999"
                                        y1={0}
                                        x2="82.19999999999999"
                                        y2={75}
                                        stroke="#b4b2b7"
                                        strokeDasharray={6}
                                        strokeLinecap="butt"
                                        className="apexcharts-gridline"
                                      />
                                      <line
                                        id="SvgjsLine1468"
                                        x1="109.6"
                                        y1={0}
                                        x2="109.6"
                                        y2={75}
                                        stroke="#b4b2b7"
                                        strokeDasharray={6}
                                        strokeLinecap="butt"
                                        className="apexcharts-gridline"
                                      />
                                      <line
                                        id="SvgjsLine1469"
                                        x1={137}
                                        y1={0}
                                        x2={137}
                                        y2={75}
                                        stroke="#b4b2b7"
                                        strokeDasharray={6}
                                        strokeLinecap="butt"
                                        className="apexcharts-gridline"
                                      />
                                    </g>
                                    <line
                                      id="SvgjsLine1471"
                                      x1={0}
                                      y1={75}
                                      x2={137}
                                      y2={75}
                                      stroke="transparent"
                                      strokeDasharray={0}
                                      strokeLinecap="butt"
                                    />
                                    <line
                                      id="SvgjsLine1470"
                                      x1={0}
                                      y1={1}
                                      x2={0}
                                      y2={75}
                                      stroke="transparent"
                                      strokeDasharray={0}
                                      strokeLinecap="butt"
                                    />
                                  </g>
                                  <g
                                    id="SvgjsG1435"
                                    className="apexcharts-line-series apexcharts-plot-series"
                                  >
                                    <g
                                      id="SvgjsG1436"
                                      className="apexcharts-series"
                                      seriesname="seriesx1"
                                      data:longestseries="true"
                                      rel={1}
                                      data:realindex={0}
                                    >
                                      <path
                                        id="SvgjsPath1450"
                                        d="M 0 75L 27.400000000000002 45L 54.800000000000004 67.5L 82.2 30L 109.60000000000001 52.5L 137 7.5"
                                        fill="none"
                                        fillOpacity={1}
                                        stroke="rgba(144,85,253,0.85)"
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth={3}
                                        strokeDasharray={0}
                                        className="apexcharts-line"
                                        index={0}
                                        clipPath="url(#gridRectMaskj2k209vt)"
                                        pathto="M 0 75L 27.400000000000002 45L 54.800000000000004 67.5L 82.2 30L 109.60000000000001 52.5L 137 7.5"
                                        pathfrom="M -1 75L -1 75L 27.400000000000002 75L 54.800000000000004 75L 82.2 75L 109.60000000000001 75L 137 75"
                                      />
                                      <g
                                        id="SvgjsG1437"
                                        className="apexcharts-series-markers-wrap"
                                        data:realindex={0}
                                      >
                                        <g
                                          id="SvgjsG1439"
                                          className="apexcharts-series-markers"
                                          clipPath="url(#gridRectMarkerMaskj2k209vt)"
                                        >
                                          <circle
                                            id="SvgjsCircle1440"
                                            r={6}
                                            cx={0}
                                            cy={75}
                                            className="apexcharts-marker no-pointer-events wzxqpkde"
                                            stroke="transparent"
                                            fill="transparent"
                                            fillOpacity={1}
                                            strokeWidth={3}
                                            strokeOpacity="0.9"
                                            rel={0}
                                            j={0}
                                            index={0}
                                            default-marker-size={6}
                                          />
                                          <circle
                                            id="SvgjsCircle1441"
                                            r={6}
                                            cx="27.400000000000002"
                                            cy={45}
                                            className="apexcharts-marker no-pointer-events wpmgprx9x"
                                            stroke="transparent"
                                            fill="transparent"
                                            fillOpacity={1}
                                            strokeWidth={3}
                                            strokeOpacity="0.9"
                                            rel={1}
                                            j={1}
                                            index={0}
                                            default-marker-size={6}
                                          />
                                        </g>
                                        <g
                                          id="SvgjsG1442"
                                          className="apexcharts-series-markers"
                                          clipPath="url(#gridRectMarkerMaskj2k209vt)"
                                        >
                                          <circle
                                            id="SvgjsCircle1443"
                                            r={6}
                                            cx="54.800000000000004"
                                            cy="67.5"
                                            className="apexcharts-marker no-pointer-events wmi4y9iv7"
                                            stroke="transparent"
                                            fill="transparent"
                                            fillOpacity={1}
                                            strokeWidth={3}
                                            strokeOpacity="0.9"
                                            rel={2}
                                            j={2}
                                            index={0}
                                            default-marker-size={6}
                                          />
                                        </g>
                                        <g
                                          id="SvgjsG1444"
                                          className="apexcharts-series-markers"
                                          clipPath="url(#gridRectMarkerMaskj2k209vt)"
                                        >
                                          <circle
                                            id="SvgjsCircle1445"
                                            r={6}
                                            cx="82.2"
                                            cy={30}
                                            className="apexcharts-marker no-pointer-events ww95jz7po"
                                            stroke="transparent"
                                            fill="transparent"
                                            fillOpacity={1}
                                            strokeWidth={3}
                                            strokeOpacity="0.9"
                                            rel={3}
                                            j={3}
                                            index={0}
                                            default-marker-size={6}
                                          />
                                        </g>
                                        <g
                                          id="SvgjsG1446"
                                          className="apexcharts-series-markers"
                                          clipPath="url(#gridRectMarkerMaskj2k209vt)"
                                        >
                                          <circle
                                            id="SvgjsCircle1447"
                                            r={6}
                                            cx="109.60000000000001"
                                            cy="52.5"
                                            className="apexcharts-marker no-pointer-events w4axa2vyl"
                                            stroke="transparent"
                                            fill="transparent"
                                            fillOpacity={1}
                                            strokeWidth={3}
                                            strokeOpacity="0.9"
                                            rel={4}
                                            j={4}
                                            index={0}
                                            default-marker-size={6}
                                          />
                                        </g>
                                        <g
                                          id="SvgjsG1448"
                                          className="apexcharts-series-markers"
                                          clipPath="url(#gridRectMarkerMaskj2k209vt)"
                                        >
                                          <circle
                                            id="SvgjsCircle1449"
                                            r={6}
                                            cx={137}
                                            cy="7.5"
                                            className="apexcharts-marker no-pointer-events wn86fnuv1"
                                            stroke="#9055fd"
                                            fill="#ffffff"
                                            fillOpacity={1}
                                            strokeWidth={3}
                                            strokeOpacity="0.9"
                                            rel={5}
                                            j={5}
                                            index={0}
                                            default-marker-size={6}
                                          />
                                        </g>
                                      </g>
                                    </g>
                                    <g
                                      id="SvgjsG1438"
                                      className="apexcharts-datalabels"
                                      data:realindex={0}
                                    />
                                  </g>
                                  <line
                                    id="SvgjsLine1472"
                                    x1={0}
                                    y1={0}
                                    x2={137}
                                    y2={0}
                                    stroke="#b6b6b6"
                                    strokeDasharray={0}
                                    strokeWidth={1}
                                    strokeLinecap="butt"
                                    className="apexcharts-ycrosshairs"
                                  />
                                  <line
                                    id="SvgjsLine1473"
                                    x1={0}
                                    y1={0}
                                    x2={137}
                                    y2={0}
                                    strokeDasharray={0}
                                    strokeWidth={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-ycrosshairs-hidden"
                                  />
                                  <g
                                    id="SvgjsG1474"
                                    className="apexcharts-yaxis-annotations"
                                  />
                                  <g
                                    id="SvgjsG1475"
                                    className="apexcharts-xaxis-annotations"
                                  />
                                  <g
                                    id="SvgjsG1476"
                                    className="apexcharts-point-annotations"
                                  />
                                  <rect
                                    id="SvgjsRect1477"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                    className="apexcharts-zoom-rect"
                                  />
                                  <rect
                                    id="SvgjsRect1478"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                    className="apexcharts-selection-rect"
                                  />
                                </g>
                                <rect
                                  id="SvgjsRect1431"
                                  width={0}
                                  height={0}
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fefefe"
                                />
                                <g
                                  id="SvgjsG1459"
                                  className="apexcharts-yaxis"
                                  rel={0}
                                  transform="translate(-8, 0)"
                                >
                                  <g
                                    id="SvgjsG1460"
                                    className="apexcharts-yaxis-texts-g"
                                  />
                                </g>
                                <g
                                  id="SvgjsG1429"
                                  className="apexcharts-annotations"
                                />
                              </svg>
                              <div
                                className="apexcharts-legend"
                                style={{ maxHeight: 45 }}
                              />
                            </div>
                          </div>
                          <h6 className="text-center mb-0">Total Profit</h6>
                          <div className="resize-triggers">
                            <div className="expand-trigger">
                              <div style={{ width: 190, height: 152 }} />
                            </div>
                            <div className="contract-trigger" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ Total Profit line chart */}
                    {/* Total Profit Weekly Project */}
                    <div className="col-sm-6">
                      <div className="card h-100">
                        <div className="card-header d-flex align-items-center justify-content-between">
                          <div className="avatar">
                            <div className="avatar-initial bg-secondary rounded-circle shadow">
                              <i className="mdi mdi-poll mdi-24px" />
                            </div>
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn p-0"
                              type="button"
                              id="totalProfitID"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="mdi mdi-dots-vertical mdi-24px" />
                            </button>
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="totalProfitID"
                            >
                              <a
                                className="dropdown-item waves-effect"
                                href="javascript:void(0);"
                              >
                                Refresh
                              </a>
                              <a
                                className="dropdown-item waves-effect"
                                href="javascript:void(0);"
                              >
                                Share
                              </a>
                              <a
                                className="dropdown-item waves-effect"
                                href="javascript:void(0);"
                              >
                                Update
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body mt-mg-1">
                          <h6 className="mb-2">Total Profit</h6>
                          <div className="d-flex flex-wrap align-items-center mb-2 pb-1">
                            <h4 className="mb-0 me-2">$25.6k</h4>
                            <small className="text-success mt-1">+42%</small>
                          </div>
                          <small>Weekly Project</small>
                        </div>
                      </div>
                    </div>
                    {/*/ Total Profit Weekly Project */}
                    {/* New Yearly Project */}
                    <div className="col-sm-6">
                      <div className="card h-100">
                        <div className="card-header d-flex align-items-center justify-content-between">
                          <div className="avatar">
                            <div className="avatar-initial bg-primary rounded-circle shadow-sm">
                              <i className="mdi mdi-wallet-travel mdi-24px" />
                            </div>
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn p-0"
                              type="button"
                              id="newProjectID"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="mdi mdi-dots-vertical mdi-24px" />
                            </button>
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="newProjectID"
                            >
                              <a
                                className="dropdown-item waves-effect"
                                href="javascript:void(0);"
                              >
                                Refresh
                              </a>
                              <a
                                className="dropdown-item waves-effect"
                                href="javascript:void(0);"
                              >
                                Share
                              </a>
                              <a
                                className="dropdown-item waves-effect"
                                href="javascript:void(0);"
                              >
                                Update
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body mt-mg-1">
                          <h6 className="mb-2">New Project</h6>
                          <div className="d-flex flex-wrap align-items-center mb-2 pb-1">
                            <h4 className="mb-0 me-2">862</h4>
                            <small className="text-danger mt-1">-18%</small>
                          </div>
                          <small>Yearly Project</small>
                        </div>
                      </div>
                    </div>
                    {/*/ New Yearly Project */}
                    {/* Sessions chart */}
                    <div className="col-sm-6">
                      <div className="card h-100">
                        <div className="card-header pb-0">
                          <h4 className="mb-0">2,856</h4>
                        </div>
                        <div
                          className="card-body"
                          style={{ position: "relative" }}
                        >
                          <div
                            id="sessionsColumnChart"
                            className="mb-3"
                            style={{ minHeight: 90 }}
                          >
                            <div
                              id="apexchartsfbmb12py"
                              className="apexcharts-canvas apexchartsfbmb12py apexcharts-theme-light"
                              style={{ width: 149, height: 90 }}
                            >
                              <svg
                                id="SvgjsSvg1479"
                                width={149}
                                height={90}
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.dev"
                                className="apexcharts-svg apexcharts-zoomable"
                                xmlns:data="ApexChartsNS"
                                transform="translate(0, 0)"
                                style={{ background: "transparent" }}
                              >
                                <g
                                  id="SvgjsG1481"
                                  className="apexcharts-inner apexcharts-graphical"
                                  transform="translate(13.633333333333333, 20)"
                                >
                                  <defs id="SvgjsDefs1480">
                                    <linearGradient
                                      id="SvgjsLinearGradient1484"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={1}
                                    >
                                      <stop
                                        id="SvgjsStop1485"
                                        stopOpacity="0.4"
                                        stopColor="rgba(216,227,240,0.4)"
                                        offset={0}
                                      />
                                      <stop
                                        id="SvgjsStop1486"
                                        stopOpacity="0.5"
                                        stopColor="rgba(190,209,230,0.5)"
                                        offset={1}
                                      />
                                      <stop
                                        id="SvgjsStop1487"
                                        stopOpacity="0.5"
                                        stopColor="rgba(190,209,230,0.5)"
                                        offset={1}
                                      />
                                    </linearGradient>
                                    <clipPath id="gridRectMaskfbmb12py">
                                      <rect
                                        id="SvgjsRect1489"
                                        width={143}
                                        height={70}
                                        x="-11.633333333333333"
                                        y={0}
                                        rx={0}
                                        ry={0}
                                        opacity={1}
                                        strokeWidth={0}
                                        stroke="none"
                                        strokeDasharray={0}
                                        fill="#fff"
                                      />
                                    </clipPath>
                                    <clipPath id="forecastMaskfbmb12py" />
                                    <clipPath id="nonForecastMaskfbmb12py" />
                                    <clipPath id="gridRectMarkerMaskfbmb12py">
                                      <rect
                                        id="SvgjsRect1490"
                                        width="123.73333333333333"
                                        height={74}
                                        x={-2}
                                        y={-2}
                                        rx={0}
                                        ry={0}
                                        opacity={1}
                                        strokeWidth={0}
                                        stroke="none"
                                        strokeDasharray={0}
                                        fill="#fff"
                                      />
                                    </clipPath>
                                  </defs>
                                  <rect
                                    id="SvgjsRect1488"
                                    width={0}
                                    height={70}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    strokeDasharray={3}
                                    fill="url(#SvgjsLinearGradient1484)"
                                    className="apexcharts-xcrosshairs"
                                    y2={70}
                                    filter="none"
                                    fillOpacity="0.9"
                                  />
                                  <g
                                    id="SvgjsG1510"
                                    className="apexcharts-xaxis"
                                    transform="translate(0, 0)"
                                  >
                                    <g
                                      id="SvgjsG1511"
                                      className="apexcharts-xaxis-texts-g"
                                      transform="translate(0, -4)"
                                    />
                                  </g>
                                  <g
                                    id="SvgjsG1520"
                                    className="apexcharts-grid"
                                  >
                                    <g
                                      id="SvgjsG1521"
                                      className="apexcharts-gridlines-horizontal"
                                      style={{ display: "none" }}
                                    >
                                      <line
                                        id="SvgjsLine1523"
                                        x1="-9.633333333333333"
                                        y1={0}
                                        x2="129.36666666666667"
                                        y2={0}
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-gridline"
                                      />
                                      <line
                                        id="SvgjsLine1524"
                                        x1="-9.633333333333333"
                                        y1="17.5"
                                        x2="129.36666666666667"
                                        y2="17.5"
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-gridline"
                                      />
                                      <line
                                        id="SvgjsLine1525"
                                        x1="-9.633333333333333"
                                        y1={35}
                                        x2="129.36666666666667"
                                        y2={35}
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-gridline"
                                      />
                                      <line
                                        id="SvgjsLine1526"
                                        x1="-9.633333333333333"
                                        y1="52.5"
                                        x2="129.36666666666667"
                                        y2="52.5"
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-gridline"
                                      />
                                      <line
                                        id="SvgjsLine1527"
                                        x1="-9.633333333333333"
                                        y1={70}
                                        x2="129.36666666666667"
                                        y2={70}
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-gridline"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1522"
                                      className="apexcharts-gridlines-vertical"
                                      style={{ display: "none" }}
                                    />
                                    <line
                                      id="SvgjsLine1529"
                                      x1={0}
                                      y1={70}
                                      x2="119.73333333333333"
                                      y2={70}
                                      stroke="transparent"
                                      strokeDasharray={0}
                                      strokeLinecap="butt"
                                    />
                                    <line
                                      id="SvgjsLine1528"
                                      x1={0}
                                      y1={1}
                                      x2={0}
                                      y2={70}
                                      stroke="transparent"
                                      strokeDasharray={0}
                                      strokeLinecap="butt"
                                    />
                                  </g>
                                  <g
                                    id="SvgjsG1491"
                                    className="apexcharts-bar-series apexcharts-plot-series"
                                  >
                                    <g
                                      id="SvgjsG1492"
                                      className="apexcharts-series"
                                      rel={1}
                                      seriesname="seriesx1"
                                      data:realindex={0}
                                    >
                                      <rect
                                        id="SvgjsRect1495"
                                        width="5.986666666666667"
                                        height={70}
                                        x="-2.9933333333333336"
                                        y={0}
                                        rx={4}
                                        ry={4}
                                        opacity={1}
                                        strokeWidth={0}
                                        stroke="none"
                                        strokeDasharray={0}
                                        fill="#F0F2F8"
                                        className="apexcharts-backgroundBar"
                                      />
                                      <path
                                        id="SvgjsPath1497"
                                        d="M -2.9933333333333336 66L -2.9933333333333336 47.75Q -2.9933333333333336 43.75 1.0066666666666664 43.75L -1.0066666666666664 43.75Q 2.9933333333333336 43.75 2.9933333333333336 47.75L 2.9933333333333336 47.75L 2.9933333333333336 66Q 2.9933333333333336 70 -1.0066666666666664 70L 1.0066666666666664 70Q -2.9933333333333336 70 -2.9933333333333336 66z"
                                        fill="rgba(255,76,81,0.85)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskfbmb12py)"
                                        pathto="M -2.9933333333333336 66L -2.9933333333333336 47.75Q -2.9933333333333336 43.75 1.0066666666666664 43.75L -1.0066666666666664 43.75Q 2.9933333333333336 43.75 2.9933333333333336 47.75L 2.9933333333333336 47.75L 2.9933333333333336 66Q 2.9933333333333336 70 -1.0066666666666664 70L 1.0066666666666664 70Q -2.9933333333333336 70 -2.9933333333333336 66z"
                                        pathfrom="M -2.9933333333333336 66L -2.9933333333333336 66L 2.9933333333333336 66L 2.9933333333333336 66L 2.9933333333333336 66L 2.9933333333333336 66L 2.9933333333333336 66L -2.9933333333333336 66"
                                        cy="43.75"
                                        cx="2.9933333333333336"
                                        j={0}
                                        val={30}
                                        barheight="26.25"
                                        barwidth="5.986666666666667"
                                      />
                                      <rect
                                        id="SvgjsRect1498"
                                        width="5.986666666666667"
                                        height={70}
                                        x="26.940000000000005"
                                        y={0}
                                        rx={4}
                                        ry={4}
                                        opacity={1}
                                        strokeWidth={0}
                                        stroke="none"
                                        strokeDasharray={0}
                                        fill="#F0F2F8"
                                        className="apexcharts-backgroundBar"
                                      />
                                      <path
                                        id="SvgjsPath1500"
                                        d="M 26.940000000000005 66L 26.940000000000005 12.75Q 26.940000000000005 8.75 30.940000000000005 8.75L 28.92666666666667 8.75Q 32.92666666666667 8.75 32.92666666666667 12.75L 32.92666666666667 12.75L 32.92666666666667 66Q 32.92666666666667 70 28.92666666666667 70L 30.940000000000005 70Q 26.940000000000005 70 26.940000000000005 66z"
                                        fill="rgba(144,85,253,0.85)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskfbmb12py)"
                                        pathto="M 26.940000000000005 66L 26.940000000000005 12.75Q 26.940000000000005 8.75 30.940000000000005 8.75L 28.92666666666667 8.75Q 32.92666666666667 8.75 32.92666666666667 12.75L 32.92666666666667 12.75L 32.92666666666667 66Q 32.92666666666667 70 28.92666666666667 70L 30.940000000000005 70Q 26.940000000000005 70 26.940000000000005 66z"
                                        pathfrom="M 26.940000000000005 66L 26.940000000000005 66L 32.92666666666667 66L 32.92666666666667 66L 32.92666666666667 66L 32.92666666666667 66L 32.92666666666667 66L 26.940000000000005 66"
                                        cy="8.75"
                                        cx="32.92666666666667"
                                        j={1}
                                        val={70}
                                        barheight="61.25"
                                        barwidth="5.986666666666667"
                                      />
                                      <rect
                                        id="SvgjsRect1501"
                                        width="5.986666666666667"
                                        height={70}
                                        x="56.87333333333334"
                                        y={0}
                                        rx={4}
                                        ry={4}
                                        opacity={1}
                                        strokeWidth={0}
                                        stroke="none"
                                        strokeDasharray={0}
                                        fill="#F0F2F8"
                                        className="apexcharts-backgroundBar"
                                      />
                                      <path
                                        id="SvgjsPath1503"
                                        d="M 56.87333333333334 66L 56.87333333333334 30.25Q 56.87333333333334 26.25 60.87333333333334 26.25L 58.86000000000001 26.25Q 62.86000000000001 26.25 62.86000000000001 30.25L 62.86000000000001 30.25L 62.86000000000001 66Q 62.86000000000001 70 58.86000000000001 70L 60.87333333333334 70Q 56.87333333333334 70 56.87333333333334 66z"
                                        fill="rgba(255,76,81,0.85)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskfbmb12py)"
                                        pathto="M 56.87333333333334 66L 56.87333333333334 30.25Q 56.87333333333334 26.25 60.87333333333334 26.25L 58.86000000000001 26.25Q 62.86000000000001 26.25 62.86000000000001 30.25L 62.86000000000001 30.25L 62.86000000000001 66Q 62.86000000000001 70 58.86000000000001 70L 60.87333333333334 70Q 56.87333333333334 70 56.87333333333334 66z"
                                        pathfrom="M 56.87333333333334 66L 56.87333333333334 66L 62.86000000000001 66L 62.86000000000001 66L 62.86000000000001 66L 62.86000000000001 66L 62.86000000000001 66L 56.87333333333334 66"
                                        cy="26.25"
                                        cx="62.86000000000001"
                                        j={2}
                                        val={50}
                                        barheight="43.75"
                                        barwidth="5.986666666666667"
                                      />
                                      <rect
                                        id="SvgjsRect1504"
                                        width="5.986666666666667"
                                        height={70}
                                        x="86.80666666666667"
                                        y={0}
                                        rx={4}
                                        ry={4}
                                        opacity={1}
                                        strokeWidth={0}
                                        stroke="none"
                                        strokeDasharray={0}
                                        fill="#F0F2F8"
                                        className="apexcharts-backgroundBar"
                                      />
                                      <path
                                        id="SvgjsPath1506"
                                        d="M 86.80666666666667 66L 86.80666666666667 39Q 86.80666666666667 35 90.80666666666667 35L 88.79333333333334 35Q 92.79333333333334 35 92.79333333333334 39L 92.79333333333334 39L 92.79333333333334 66Q 92.79333333333334 70 88.79333333333334 70L 90.80666666666667 70Q 86.80666666666667 70 86.80666666666667 66z"
                                        fill="rgba(144,85,253,0.85)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskfbmb12py)"
                                        pathto="M 86.80666666666667 66L 86.80666666666667 39Q 86.80666666666667 35 90.80666666666667 35L 88.79333333333334 35Q 92.79333333333334 35 92.79333333333334 39L 92.79333333333334 39L 92.79333333333334 66Q 92.79333333333334 70 88.79333333333334 70L 90.80666666666667 70Q 86.80666666666667 70 86.80666666666667 66z"
                                        pathfrom="M 86.80666666666667 66L 86.80666666666667 66L 92.79333333333334 66L 92.79333333333334 66L 92.79333333333334 66L 92.79333333333334 66L 92.79333333333334 66L 86.80666666666667 66"
                                        cy={35}
                                        cx="92.79333333333334"
                                        j={3}
                                        val={40}
                                        barheight={35}
                                        barwidth="5.986666666666667"
                                      />
                                      <rect
                                        id="SvgjsRect1507"
                                        width="5.986666666666667"
                                        height={70}
                                        x="116.74000000000001"
                                        y={0}
                                        rx={4}
                                        ry={4}
                                        opacity={1}
                                        strokeWidth={0}
                                        stroke="none"
                                        strokeDasharray={0}
                                        fill="#F0F2F8"
                                        className="apexcharts-backgroundBar"
                                      />
                                      <path
                                        id="SvgjsPath1509"
                                        d="M 116.74000000000001 66L 116.74000000000001 21.5Q 116.74000000000001 17.5 120.74000000000001 17.5L 118.72666666666667 17.5Q 122.72666666666667 17.5 122.72666666666667 21.5L 122.72666666666667 21.5L 122.72666666666667 66Q 122.72666666666667 70 118.72666666666667 70L 120.74000000000001 70Q 116.74000000000001 70 116.74000000000001 66z"
                                        fill="rgba(144,85,253,0.85)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskfbmb12py)"
                                        pathto="M 116.74000000000001 66L 116.74000000000001 21.5Q 116.74000000000001 17.5 120.74000000000001 17.5L 118.72666666666667 17.5Q 122.72666666666667 17.5 122.72666666666667 21.5L 122.72666666666667 21.5L 122.72666666666667 66Q 122.72666666666667 70 118.72666666666667 70L 120.74000000000001 70Q 116.74000000000001 70 116.74000000000001 66z"
                                        pathfrom="M 116.74000000000001 66L 116.74000000000001 66L 122.72666666666667 66L 122.72666666666667 66L 122.72666666666667 66L 122.72666666666667 66L 122.72666666666667 66L 116.74000000000001 66"
                                        cy="17.5"
                                        cx="122.72666666666667"
                                        j={4}
                                        val={60}
                                        barheight="52.5"
                                        barwidth="5.986666666666667"
                                      />
                                      <g
                                        id="SvgjsG1494"
                                        className="apexcharts-bar-goals-markers"
                                        style={{ pointerEvents: "none" }}
                                      >
                                        <g
                                          id="SvgjsG1496"
                                          classname="apexcharts-bar-goals-groups"
                                        />
                                        <g
                                          id="SvgjsG1499"
                                          classname="apexcharts-bar-goals-groups"
                                        />
                                        <g
                                          id="SvgjsG1502"
                                          classname="apexcharts-bar-goals-groups"
                                        />
                                        <g
                                          id="SvgjsG1505"
                                          classname="apexcharts-bar-goals-groups"
                                        />
                                        <g
                                          id="SvgjsG1508"
                                          classname="apexcharts-bar-goals-groups"
                                        />
                                      </g>
                                    </g>
                                    <g
                                      id="SvgjsG1493"
                                      className="apexcharts-datalabels"
                                      data:realindex={0}
                                    />
                                  </g>
                                  <line
                                    id="SvgjsLine1530"
                                    x1="-9.633333333333333"
                                    y1={0}
                                    x2="129.36666666666667"
                                    y2={0}
                                    stroke="#b6b6b6"
                                    strokeDasharray={0}
                                    strokeWidth={1}
                                    strokeLinecap="butt"
                                    className="apexcharts-ycrosshairs"
                                  />
                                  <line
                                    id="SvgjsLine1531"
                                    x1="-9.633333333333333"
                                    y1={0}
                                    x2="129.36666666666667"
                                    y2={0}
                                    strokeDasharray={0}
                                    strokeWidth={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-ycrosshairs-hidden"
                                  />
                                  <g
                                    id="SvgjsG1532"
                                    className="apexcharts-yaxis-annotations"
                                  />
                                  <g
                                    id="SvgjsG1533"
                                    className="apexcharts-xaxis-annotations"
                                  />
                                  <g
                                    id="SvgjsG1534"
                                    className="apexcharts-point-annotations"
                                  />
                                  <rect
                                    id="SvgjsRect1535"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                    className="apexcharts-zoom-rect"
                                  />
                                  <rect
                                    id="SvgjsRect1536"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                    className="apexcharts-selection-rect"
                                  />
                                </g>
                                <g
                                  id="SvgjsG1518"
                                  className="apexcharts-yaxis"
                                  rel={0}
                                  transform="translate(-8, 0)"
                                >
                                  <g
                                    id="SvgjsG1519"
                                    className="apexcharts-yaxis-texts-g"
                                  />
                                </g>
                                <g
                                  id="SvgjsG1482"
                                  className="apexcharts-annotations"
                                />
                              </svg>
                              <div
                                className="apexcharts-legend"
                                style={{ maxHeight: 45 }}
                              />
                            </div>
                          </div>
                          <h6 className="text-center mb-0">Sessions</h6>
                          <div className="resize-triggers">
                            <div className="expand-trigger">
                              <div style={{ width: 190, height: 152 }} />
                            </div>
                            <div className="contract-trigger" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ Sessions chart */}
                  </div>
                </div>
                {/*/ Total Earning */}
              </div>
            </div>
            {/* / Content */}
            <div className="content-backdrop fade" />
          </div>
          {/* Content wrapper */}
        </div>
        {/* / Layout page */}
      </div>
      {/* Overlay */}
      <div className="layout-overlay layout-menu-toggle" />
    </div>
  );
};

export default Dashbaord;
