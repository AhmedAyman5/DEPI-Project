import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./AdminPanel.css";
import toast from "react-hot-toast";

export default function AdminPanel() {

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    toast.success("Logged out  Successfully.")
  };

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h2 className="logo">Admin</h2>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Products</li>
          <li>Orders</li>
          <li>Settings</li>
        </ul>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      

      <main className="main-content">
        <h2 className="admin-title">Admin Dashboard</h2>

        <div className="cards-container">
          <div className="card">
            <h3>Users</h3>
            <p>1,245</p>
          </div>
          <div className="card">
            <h3>Products</h3>
            <p>320</p>
          </div>
          <div className="card">
            <h3>Orders</h3>
            <p>875</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>$45,200</p>
          </div>
        </div>

        <div className="grid-section">
          <div className="chart-container">
            <h3>Sales Overview</h3>
            <div className="fake-chart">
              <div style={{ height: "40%" }}></div>
              <div style={{ height: "70%" }}></div>
              <div style={{ height: "50%" }}></div>
              <div style={{ height: "90%" }}></div>
              <div style={{ height: "60%" }}></div>
            </div>
          </div>

          <div className="table-container">
            <h3>Recent Orders</h3>
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1001</td>
                  <td>Ahmed</td>
                  <td>Completed</td>
                  <td>$120</td>
                </tr>
                <tr>
                  <td>#1002</td>
                  <td>Sarah</td>
                  <td>Pending</td>
                  <td>$80</td>
                </tr>
                <tr>
                  <td>#1003</td>
                  <td>Ali</td>
                  <td>Cancelled</td>
                  <td>$200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
