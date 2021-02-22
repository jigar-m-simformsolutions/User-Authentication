import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, NavLink, useHistory } from "react-router-dom";
import "./Dashboard.css";
import {
  Button,
  Alert,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import UserProfile from "../assets/UserProfile.png";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <div className="header">
        {error && <Alert variant="danger">{error}</Alert>}
        <a href="#default" className="logo">
          shopify
        </a>
        <div className="header-right">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#search">search</a>
          <a href="#blog">blog</a>
          <Dropdown
            className="headerdiv"
            style={{ position: "revert" }}
            isOpen={dropdownOpen}
            toggle={toggle}
          >
            <DropdownToggle caret>
              <img
                src={UserProfile}
                className="rounded-circle dropbtn"
                style={{
                  width: "40px",
                  height: "25px",
                  backgroundColor: "white",
                }}
                alt="User Profile"
              />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>{currentUser.email}</DropdownItem>
              <DropdownItem>
                <Button color="danger" onClick={handleLogout}>
                  Log Out
                </Button>
              </DropdownItem>
              <DropdownItem>
                <Link to="/update-profile" className="btn">
                  Update Profile
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      {/* < Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div> */}
    </>
  );
}
