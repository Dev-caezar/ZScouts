import { useNavigate } from "react-router"
import "./adminDashboard.css"
import { Outlet } from "react-router"
import { RiSearchFill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdPeople } from "react-icons/io";
import Modal from "antd/es/modal/Modal";
import { useState } from "react";


const AdminDashboard = () => {
  const [adminLogoutModal,setAdminLogoutModal] = useState(false);

  const handleLogout = () => {
    setAdminLogoutModal(false);
  };
  const navigate = useNavigate()
  return (
    <div className="adminDashboard">
      <div className="adminSidebar">
        <section className="adminSection">
        <div className="admindashboardlogo"></div>
        <div className="overview-players-scout">
          <p className="admin-dashboardOverview" onClick={()=>navigate("")}><CgMenuGridR size={26}/> Dashboard Overview</p>
        <p className="admin-dashboardOverview" onClick={()=>navigate("players_admindashboard")}><RiSearchFill size={26}/> Players Management</p>
        <p className="admin-dashboardOverview" onClick={()=>navigate("scout_admindashboard")}><IoMdPeople size={26}/> Scout Management</p>
        </div>
        </section>

        <div className="admin-login-settings">
        <p className="admin-dashboardOverview"><IoSettingsSharp size={26}/> Settings</p>
        <p className="admin-dashboardOverview" onClick={()=>setAdminLogoutModal(true)}><FaSignOutAlt size={26}/> Log out</p>
        <Modal className="adminLogoutModal"
        open={adminLogoutModal}
        onOk={handleLogout}
        onCancel={() => setAdminLogoutModal(false)}
        title="Confirm Logout"
        okText="Yes, log out"
        cancelText="Cancel "
      >
        <p>Are you sure you want to log out?</p>
      </Modal>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default AdminDashboard
