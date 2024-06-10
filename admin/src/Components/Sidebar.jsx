import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const users = JSON.parse(localStorage.getItem("user"));
  const [activeMenuItem, setActiveMenuItem] = useState("Dashboard");

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const userRoles = users.userRoles;
    

      const response = await fetch(
        `http://localhost:3000/api/roles/${userRoles}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      const matchedRoles = data.data.filter((item) =>
        userRoles.includes(item.name)
      );
      setRoles(matchedRoles);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  

  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
      data-bg-class="bg-menu-theme"
    >
      <div className="app-brand demo">
        <a href="index.html" className="app-brand-link">
          <span className="app-brand-logo demo me-1">
            <span style={{ color: "var(--bs-primary)" }}>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="135.000000pt"
                height="196.000000pt"
                viewBox="0 0 135.000000 196.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,196.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M669 1818 c-24 -47 -123 -188 -132 -188 -5 0 -73 27 -153 59 -79 33
-144 56 -144 51 0 -16 71 -164 87 -182 9 -10 14 -21 11 -24 -3 -3 7 -35 23
-72 16 -37 29 -72 29 -78 0 -7 -26 -13 -69 -16 -39 -2 -74 -7 -78 -12 -4 -4 4
-17 20 -28 l27 -20 -39 -28 c-22 -16 -52 -53 -69 -85 l-31 -57 25 5 c25 4 25
4 -7 -29 -17 -18 -45 -38 -60 -45 -33 -13 -26 -33 16 -43 20 -5 24 -13 27 -49
2 -23 -3 -58 -11 -77 -8 -19 -16 -82 -19 -140 -4 -96 -4 -104 12 -91 20 16 20
11 1 -59 -8 -30 -12 -56 -10 -58 2 -2 17 6 34 17 l30 22 6 -26 c3 -14 8 -37
11 -52 6 -31 51 -98 88 -132 14 -14 26 -32 26 -42 0 -29 80 -140 100 -137 9 2
24 -3 33 -11 15 -12 17 -10 17 20 l0 33 27 -26 c38 -35 73 -53 73 -37 0 7 9 4
21 -7 15 -13 23 -15 26 -7 3 8 15 5 39 -9 l35 -21 32 23 c19 15 32 19 35 12 2
-8 11 -7 28 4 15 11 24 12 24 5 0 -16 57 15 73 39 16 27 27 25 27 -5 0 -29 8
-32 26 -7 13 16 13 16 14 -2 0 -32 65 37 91 98 12 28 42 75 67 104 47 56 71
107 72 155 0 32 4 33 37 7 38 -30 43 -25 27 27 -8 25 -14 55 -14 66 0 16 3 17
15 7 13 -11 15 -3 15 62 0 40 -7 98 -16 128 -9 30 -17 77 -18 103 -3 46 -1 50
31 65 18 9 33 18 33 22 0 3 -12 13 -27 22 -16 9 -41 30 -57 47 -25 26 -26 29
-7 24 28 -7 27 0 -10 64 -19 33 -46 64 -67 76 l-35 21 27 23 27 23 -26 10
c-14 6 -49 10 -76 10 -59 0 -61 9 -24 88 14 30 25 63 25 74 0 12 6 26 14 32
11 8 86 168 86 182 0 2 -66 -24 -146 -57 -81 -33 -152 -58 -159 -56 -6 3 -41
50 -76 105 -35 56 -67 101 -71 101 -4 1 -13 -9 -19 -21z m69 -142 c23 -34 42
-67 42 -71 0 -5 -14 -24 -31 -41 l-31 -32 50 -26 c60 -31 70 -31 117 -9 40 19
41 23 19 64 -8 17 -14 32 -12 33 10 7 131 56 138 56 19 0 -12 -46 -42 -63 -23
-13 -28 -22 -22 -35 11 -25 8 -52 -10 -96 -14 -32 -19 -37 -38 -32 -116 33
-153 40 -233 40 -62 0 -114 -7 -168 -22 -42 -12 -79 -22 -81 -22 -2 0 -13 23
-25 50 -16 38 -19 55 -11 69 15 28 12 39 -10 46 -26 8 -50 33 -50 50 0 16 5
15 88 -18 28 -11 52 -25 52 -29 0 -5 -7 -22 -15 -38 l-15 -29 46 -24 47 -24
53 26 c30 14 54 30 54 36 0 5 -14 24 -32 42 l-32 33 20 22 c11 13 33 42 48 66
16 23 31 42 35 42 3 0 25 -29 49 -64z m-73 -327 c21 -40 19 -41 -22 -14 -39
27 -55 26 -32 -1 13 -16 12 -16 -8 -6 -12 7 -29 12 -39 12 -13 0 -14 -3 -4
-15 16 -19 11 -19 -54 5 -30 12 -57 27 -59 35 -5 11 0 12 25 3 23 -8 32 -8 38
2 6 9 24 11 64 7 33 -3 54 -2 51 4 -3 5 1 6 10 3 9 -4 22 -19 30 -35z m136 29
c35 3 54 1 59 -8 6 -10 15 -10 39 -2 54 19 35 -7 -24 -34 -67 -29 -68 -29 -55
-4 10 19 9 19 -31 5 -37 -13 -40 -13 -29 0 22 26 5 26 -33 0 -21 -13 -37 -20
-37 -15 0 14 54 74 57 63 2 -6 25 -8 54 -5z m-393 -74 c18 -12 22 -24 20 -52
-3 -36 -4 -37 -45 -37 -33 0 -46 -6 -66 -29 l-26 -30 -7 30 c-4 16 -12 32 -17
36 -15 9 72 51 94 45 25 -7 24 1 -3 30 l-21 23 24 0 c14 0 35 -7 47 -16z m610
-1 c-28 -33 -27 -39 5 -39 34 0 95 -33 79 -43 -6 -3 -15 -22 -20 -41 -6 -19
-11 -28 -11 -19 -1 8 -11 25 -24 37 -19 18 -31 21 -56 16 -23 -5 -36 -3 -42 7
-25 41 8 99 58 99 24 0 25 -1 11 -17z m-456 -34 c29 -17 63 -40 75 -51 l22
-21 -9 32 c-5 18 -14 39 -21 47 -7 9 -8 14 -1 14 6 0 22 -14 36 -30 24 -29 25
-30 36 -10 6 11 20 24 31 30 20 11 20 11 5 -19 -25 -47 -21 -64 9 -37 13 13
47 35 75 49 49 26 50 26 60 6 6 -11 8 -29 4 -41 -6 -22 -6 -22 20 -5 l26 17 0
-34 c0 -38 -20 -56 -62 -56 l-23 0 23 18 c23 18 22 18 -20 14 l-43 -4 24 26
c29 31 15 33 -39 6 -48 -24 -59 -40 -28 -40 30 0 128 -37 151 -57 22 -20 35
-9 16 13 -13 16 -11 17 15 10 36 -9 71 -35 85 -61 5 -11 22 -40 37 -63 l26
-44 -23 12 c-13 7 -41 29 -62 49 -21 20 -35 28 -32 19 4 -10 3 -18 -3 -18 -5
0 -12 6 -15 13 -3 6 -20 21 -38 31 l-34 20 33 -37 c17 -21 32 -42 32 -47 0
-22 -14 -40 -32 -40 -15 0 -18 5 -13 20 5 16 2 20 -19 20 -14 0 -40 -9 -58
-20 -45 -27 -73 -25 -97 6 -20 25 -21 26 -21 5 0 -11 4 -21 8 -21 4 0 16 -14
26 -30 9 -17 21 -28 26 -25 5 3 13 -3 19 -12 10 -17 10 -17 11 0 0 11 8 17 25
17 13 0 36 5 50 12 22 10 29 8 55 -17 35 -33 38 -68 10 -92 -11 -10 -20 -23
-20 -31 0 -7 -4 -10 -10 -7 -5 3 -10 26 -10 51 l0 45 -24 -18 c-21 -16 -22
-20 -9 -40 9 -13 11 -23 7 -23 -5 0 -3 -4 4 -8 22 -14 2 -40 -36 -47 -35 -7
-36 -8 -14 -16 13 -5 29 -6 34 -2 7 3 8 1 4 -5 -4 -7 -18 -12 -31 -12 -13 0
-27 -4 -30 -10 -4 -6 6 -10 22 -10 24 -1 26 -2 12 -13 -9 -7 -19 -28 -23 -48
-3 -19 -12 -44 -20 -54 -12 -17 -14 -15 -21 24 -6 35 -13 45 -41 59 -28 13
-34 21 -32 42 2 19 15 31 51 48 32 15 47 28 47 42 0 14 -5 18 -16 13 -9 -3
-20 0 -24 7 -11 18 -138 20 -145 3 -2 -7 -11 -13 -19 -13 -8 0 -17 6 -19 13
-3 6 -6 3 -6 -9 -1 -26 25 -50 62 -60 51 -12 54 -74 5 -90 -30 -9 -38 -22 -38
-64 l-1 -35 -19 24 c-11 13 -20 36 -20 51 0 17 -8 33 -22 43 -23 16 -23 16 12
18 l35 1 -37 10 c-44 12 -50 28 -10 29 26 0 26 1 -8 13 -41 15 -55 47 -18 40
23 -5 23 -4 -1 6 l-24 10 22 24 21 23 -25 11 c-24 11 -25 10 -25 -21 0 -51
-13 -61 -37 -29 -37 51 -38 69 -3 102 33 31 54 37 65 20 3 -5 22 -10 41 -10
25 0 34 -4 35 -17 1 -16 2 -17 6 -1 2 10 10 15 19 11 8 -3 14 1 14 8 0 7 12
25 27 41 31 32 25 50 -6 19 -26 -26 -44 -26 -100 -1 -64 29 -102 25 -69 -8 9
-9 6 -12 -15 -12 -24 0 -27 4 -27 32 0 21 9 41 27 60 38 40 21 35 -26 -7 -36
-32 -39 -34 -34 -13 l5 23 -24 -25 c-29 -32 -78 -70 -89 -70 -5 0 2 15 14 34
12 18 29 47 39 64 19 35 50 58 93 68 29 7 30 7 13 -13 -28 -31 -21 -34 17 -8
20 13 49 26 65 30 16 4 32 11 35 16 4 5 20 9 36 9 38 0 30 14 -23 41 -46 24
-60 19 -32 -12 l19 -22 -43 6 c-24 3 -40 1 -36 -4 3 -5 13 -9 22 -9 11 0 13
-3 5 -11 -15 -15 -61 0 -68 22 -4 10 -3 28 0 40 6 19 8 20 26 3 18 -16 19 -16
19 9 0 25 9 57 16 57 2 0 27 -14 56 -31z m-264 -173 c18 11 11 1 -18 -27 -25
-24 -53 -55 -63 -69 l-18 -25 7 30 c3 17 13 40 20 53 16 25 12 27 -19 10 -15
-7 -8 4 18 33 l40 44 3 -32 c3 -33 3 -33 30 -17z m857 -6 c17 -19 22 -28 12
-21 -25 20 -31 8 -13 -28 27 -51 19 -49 -44 8 -33 30 -57 57 -55 60 3 2 11 -1
17 -7 20 -20 38 -13 38 15 0 15 3 23 8 18 4 -6 21 -26 37 -45z m-601 -116 c32
-6 31 -14 -1 -14 -17 0 -37 8 -44 17 -12 15 -12 16 6 9 11 -4 28 -9 39 -12z
m306 1 c-13 -16 -65 -21 -55 -5 3 5 12 7 19 4 8 -3 17 -1 21 5 3 6 11 11 17
11 7 0 6 -6 -2 -15z m-529 -52 c-23 -28 -21 -44 3 -24 10 8 8 0 -5 -26 -30
-59 -24 -83 12 -40 17 21 17 20 -1 -31 -11 -29 -20 -59 -20 -67 0 -27 17 -15
26 18 7 29 8 26 11 -28 5 -86 14 -99 28 -40 l12 50 7 -55 c4 -30 14 -68 22
-85 l14 -30 -3 47 c-1 36 1 44 10 36 18 -15 53 -133 53 -180 0 -21 4 -37 8
-34 4 2 8 -25 9 -62 0 -37 6 -79 12 -94 15 -41 3 -34 -14 6 -8 19 -18 74 -21
123 -4 48 -12 102 -19 118 -11 27 -12 24 -12 -45 1 -41 -6 -100 -13 -130 l-14
-55 -7 76 c-3 41 -13 88 -22 104 -15 29 -15 28 -23 -60 -9 -100 -20 -84 -24
35 -1 36 -6 79 -9 95 -6 26 -8 21 -15 -33 -5 -35 -10 -62 -11 -60 -2 2 -11 37
-19 78 -21 100 -36 112 -37 30 -1 -105 -17 -40 -18 73 -1 97 -8 117 -29 75 -9
-19 -11 -13 -11 39 -1 66 -15 89 -30 51 -10 -22 -10 -22 -10 5 -1 48 45 137
71 137 5 0 2 -13 -7 -30 -8 -16 -15 -41 -15 -56 0 -26 1 -26 30 15 25 33 82
81 98 81 2 0 -6 -12 -17 -27z m759 -17 c16 -17 38 -42 49 -56 17 -21 20 -22
21 -7 0 10 -7 34 -15 54 -18 44 -18 44 0 36 24 -9 55 -78 54 -120 0 -36 -1
-36 -10 -13 -10 23 -11 24 -21 6 -6 -10 -8 -43 -6 -73 l5 -56 -18 34 -18 34
-1 -100 c-1 -57 -6 -113 -14 -130 -12 -28 -12 -26 -8 31 3 41 0 64 -8 69 -6 4
-13 5 -15 3 -3 -2 -10 -46 -17 -98 -14 -98 -24 -93 -27 15 -2 85 -19 36 -26
-75 -3 -58 -8 -106 -10 -108 -4 -4 -18 81 -19 120 -2 57 -22 18 -37 -73 l-15
-94 -13 61 c-7 33 -11 88 -9 122 1 33 -1 57 -5 53 -14 -14 -27 -82 -27 -142 0
-53 -14 -114 -30 -132 -4 -5 -4 11 1 35 4 24 13 90 19 147 7 72 18 122 35 158
13 29 26 53 29 53 3 0 3 -24 0 -52 l-4 -53 16 34 c8 19 19 62 23 95 l8 61 8
-52 c10 -71 25 -57 26 25 l1 67 16 -35 c16 -35 16 -35 20 -9 2 15 -4 44 -13
65 -15 37 -15 37 5 19 18 -16 20 -17 20 -1 0 9 -7 33 -15 53 -13 31 -13 34 0
23 23 -19 18 0 -6 26 l-21 23 21 -6 c12 -3 35 -20 51 -37z m-364 -101 c-25
-19 -55 -19 -80 0 -18 14 -15 15 40 15 54 -1 57 -2 40 -15z m14 -161 c0 -2
-26 -3 -57 -3 -44 1 -51 3 -28 8 29 6 85 3 85 -5z m-56 -138 c49 1 72 6 88 20
21 19 21 19 16 -14 -4 -29 -2 -33 14 -29 11 3 22 -1 25 -9 13 -35 -50 -121
-68 -92 -6 9 -14 6 -32 -10 -13 -12 -32 -22 -42 -22 -22 0 -55 28 -55 47 0 7
-5 13 -11 13 -6 0 -9 -8 -6 -19 3 -14 0 -17 -13 -14 -22 6 -50 54 -50 86 0 20
4 24 20 20 17 -5 18 -1 13 33 l-6 39 21 -25 c18 -23 27 -26 86 -24z m56 34 c0
-5 -22 -10 -49 -10 -28 0 -53 5 -56 10 -4 6 15 10 49 10 31 0 56 -4 56 -10z
m-115 -265 c13 -10 28 -45 20 -45 -3 0 -19 19 -36 43 -28 38 -30 39 -23 13 5
-21 4 -27 -5 -22 -12 8 -14 35 -4 61 5 15 9 13 21 -11 8 -16 21 -33 27 -39z
m179 39 c3 -9 2 -23 -4 -32 -8 -15 -9 -15 -10 3 0 16 -5 13 -29 -15 -25 -29
-29 -31 -24 -12 3 12 9 22 14 22 5 0 15 11 21 25 13 29 23 32 32 9z"
                  />
                  <path
                    d="M665 1644 c-17 -26 -17 -28 1 -41 21 -16 34 -13 48 10 8 13 6 21 -10
38 l-21 20 -18 -27z"
                  />
                  <path
                    d="M705 1090 c-4 -6 -16 -8 -27 -4 -17 5 -18 4 -8 -15 12 -23 24 -21 40
10 11 20 6 27 -5 9z"
                  />
                </g>
              </svg>
            </span>
          </span>
          <span className="app-brand-text demo menu-text fw-semibold ms-2">
            MLS
          </span>
        </a>
        <a
          href="javascript:void(0);"
          className="layout-menu-toggle menu-link text-large ms-auto"
        >
          <i className="mdi menu-toggle-icon d-xl-block align-middle mdi-20px" />
        </a>
      </div>
      <div className="menu-inner-shadow" />
      <ul className="menu-inner py-1 ps ps--active-y">
        {/* Dashboards */}
        <li
          className={`menu-item ${
            activeMenuItem === "Dashboard" ? "active open" : ""
          }`}
        >
          <a
            href="javascript:void(0);"
            className="menu-link menu-toggle waves-effect"
            onClick={() => handleMenuItemClick("Dashboard")}
          >
            <i className="menu-icon tf-icons mdi mdi-home-outline" />
            <div data-i18n="Dashboards">Dashboards</div>
            {/* <div className="badge bg-danger rounded-pill ms-auto">5</div> */}
          </a>
          <ul className="menu-sub">
            <li
              className={`menu-item ${
                activeMenuItem === "Analytics" ? "active" : ""
              }`}
            >
              <Link
                to="/dashboard"
                className="menu-link"
                onClick={() => handleMenuItemClick("Analytics")}
              >
                <div data-i18n="Analytics">Dashboard</div>
              </Link>
            </li>
          </ul>
        </li>

        {roles.length > 0 && roles[0].properties && (
          <>
            <li className="menu-header fw-medium mt-4">
              <span className="menu-header-text">Properties</span>
            </li>
            <li
              className={`menu-item ${
                activeMenuItem === "Properties" ? "active open" : ""
              }`}
            >
              <a
                href="javascript:void(0);"
                className="menu-link menu-toggle waves-effect"
                onClick={() => handleMenuItemClick("Properties")}
              >
                <i className="menu-icon tf-icons mdi mdi-home-outline" />
                <div data-i18n="Dashboards">Manage Properties</div>
              </a>
              <ul className="menu-sub">
                {roles[0].viewProperties && (
                  <li
                    className={`menu-item ${
                      activeMenuItem === "Properties" ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/viewproperties"
                      className="menu-link"
                      onClick={() => handleMenuItemClick("Properties")}
                    >
                      <div data-i18n="Analytics">View Properties</div>
                    </Link>
                  </li>
                )}
                {roles[0].waitingApproval && (
                  <li
                    className={`menu-item ${
                      activeMenuItem === "Waiting Approval" ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/approveProperties"
                      className="menu-link"
                      onClick={() => handleMenuItemClick("Waiting Approval")}
                    >
                      <div data-i18n="Analytics">Waiting Approval</div>
                    </Link>
                  </li>
                )}
                {roles[0].ownProperty && (
                  <li
                    className={`menu-item ${
                      activeMenuItem === "Own Property" ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/myProperties"
                      className="menu-link"
                      onClick={() => handleMenuItemClick("Own Property")}
                    >
                      <div data-i18n="Analytics">Own Property</div>
                    </Link>
                  </li>
                )}
                {roles[0].reportedProperty && (
                  <li
                    className={`menu-item ${
                      activeMenuItem === "Reported Property" ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/reportedProperties"
                      className="menu-link"
                      onClick={() => handleMenuItemClick("Reported Property")}
                    >
                      <div data-i18n="Analytics">Reported Property</div>
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          </>
        )}

        {roles.length > 0 && roles[0].users && (
          <>
            <li className="menu-header fw-medium mt-4">
              <span className="menu-header-text">Users</span>
            </li>
            <li
              className={`menu-item ${
                activeMenuItem === "Users" ? "active open" : ""
              }`}
            >
              <a
                href="javascript:void(0);"
                className="menu-link menu-toggle waves-effect"
                onClick={() => handleMenuItemClick("Users")}
              >
                <i className="menu-icon tf-icons mdi mdi-home-outline" />
                <div data-i18n="Dashboards">Manage Users</div>
              </a>
              <ul className="menu-sub">
                {roles[0].viewUsers && (
                  <li
                    className={`menu-item ${
                      activeMenuItem === "Users" ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/viewUsers"
                      className="menu-link"
                      onClick={() => handleMenuItemClick("Users")}
                    >
                      <div data-i18n="Analytics">View Users</div>
                    </Link>
                  </li>
                )}
                {roles[0].subscribedUsers && (
                  <li
                    className={`menu-item ${
                      activeMenuItem === "Subscribed Users" ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/subscribedUsers"
                      className="menu-link"
                      onClick={() => handleMenuItemClick("Subscribed Users")}
                    >
                      <div data-i18n="Analytics">Subscribed Users</div>
                    </Link>
                  </li>
                )}
                {roles[0].unverifiedUsers && (
                  <li
                    className={`menu-item ${
                      activeMenuItem === "Unverified Users" ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/unverifiedUsers"
                      className="menu-link"
                      onClick={() => handleMenuItemClick("Unverified Users")}
                    >
                      <div data-i18n="Analytics">Verify Users</div>
                    </Link>
                  </li>
                )}
                {roles[0].suspendedUsers && (
                  <li
                    className={`menu-item ${
                      activeMenuItem === "Suspended Users" ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/suspendedUsers"
                      className="menu-link"
                      onClick={() => handleMenuItemClick("Suspended Users")}
                    >
                      <div data-i18n="Analytics">Suspended Users</div>
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          </>
        )}

        {roles.length > 0 && roles[0].content && (
          <>
            <li className="menu-header fw-medium mt-4">
              <span className="menu-header-text">Content Management</span>
            </li>
            <li
              className={`menu-item ${
                activeMenuItem === "Content" ? "active open" : ""
              }`}
            >
              <a
                href="javascript:void(0);"
                className="menu-link menu-toggle waves-effect"
                onClick={() => handleMenuItemClick("Content")}
              >
                <i className="menu-icon tf-icons mdi mdi-home-outline" />
                <div data-i18n="Dashboards">Manage Contents</div>
              </a>
              <ul className="menu-sub">
                {roles[0].manageRoles && (
                  <li
                    className={`menu-item ${
                      activeMenuItem === "Roles" ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/viewRoles"
                      className="menu-link"
                      onClick={() => handleMenuItemClick("Roles")}
                    >
                      <div data-i18n="Analytics">Manage Roles</div>
                    </Link>
                  </li>
                )}
                {roles[0].manageSubscription && (
                  <li
                    className={`menu-item ${
                      activeMenuItem === "Subscription" ? "active" : ""
                    }`}
                  >
                    <Link
                      to="/viewSubscription"
                      className="menu-link"
                      onClick={() => handleMenuItemClick("Subscription")}
                    >
                      <div data-i18n="Analytics">Manage Subscription</div>
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          </>
        )}

        <li className="menu-header fw-medium mt-4">
          <span className="menu-header-text">Settings</span>
        </li>

        <li
          className={`menu-item ${
            activeMenuItem === "Account Settings" ? "active" : ""
          }`}
        >
          <Link
            to="/accountSettings"
            className="menu-link menu-toggle waves-effect"
            onClick={() => handleMenuItemClick("Account Settings")}
          >
            <i className="menu-icon tf-icons mdi mdi-form-select" />
            <div data-i18n="Form Elements">Account Settings</div>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
