import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashbaord from "./Pages/Dashbaord";
import ViewProperties from "./Properties/ViewProperties";
import RoleForm from "./Role/RoleForm";
import NotFound from "./Pages/NotFound";
import CreateProperties from "./Properties/CreateProperties";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import ApproveProperties from "./Properties/ApproveProperties";
import ReportedProperties from "./Properties/ReportedProperties";
import MyProperties from "./Properties/MyProperties";
import ViewRoles from "./Role/ViewRoles";
import SampleApi from "./sampleApi";
import ViewSubscription from "./Subscription/ViewSubscription";
import CreateSubscription from "./Subscription/CreateSubscription";
import CreateRoles from "./Role/CreateRoles";
import ViewUsers from "./Users/ViewUsers";
import SubscribedUsers from "./Users/SubscribedUsers";
import UnverifiedUsers from "./Users/UnverifiedUsers";
import SuspendedUsers from "./Users/SuspendedUsers";
import AccountSetting from "./Auth/AccountSetting";
import CreateUsers from "./Users/CreateUsers";
import ViewProperty from "./Properties/ViewProperty";
import EditProperties from "./Properties/EditProps";
import EditUsers from "./Users/EditUsers";
import ViewUser from "./Users/ViewUser";

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/role" element={<RoleForm />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/dashboard" element={<Dashbaord />} />
          <Route path="/viewProperties" element={<ViewProperties />} />
          <Route path="/createProperties" element={<CreateProperties />} />
          <Route path="/approveProperties" element={<ApproveProperties />} />
          <Route path="/reportedProperties" element={<ReportedProperties />} />
          <Route path="/myProperties" element={<MyProperties />} />
          <Route path="/viewRoles" element={<ViewRoles />} />
          <Route path="/viewSubscription" element={<ViewSubscription />} />
          <Route path="/addSubscription" element={<CreateSubscription />} />
          <Route path="/createRoles" element={<CreateRoles />} />
          <Route path="/viewUsers" element={<ViewUsers />} />
          <Route path="/subscribedUsers" element={<SubscribedUsers />} />
          <Route path="/unverifiedUsers" element={<UnverifiedUsers />} />
          <Route path="/suspendedUsers" element={<SuspendedUsers />} />
          <Route path="/accountSettings" element={<AccountSetting />} />
          <Route path="/createUsers" element={<CreateUsers />} />
          <Route path="/viewUser/:id" element={<EditUsers />} />
          <Route path="/viewUsers/:id" element={<ViewUser />} />
          <Route path="/viewProperty/:id" element={<ViewProperty />} />
          <Route path="/editProperties/:id" element={<EditProperties />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
