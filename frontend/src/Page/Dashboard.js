import React from "react";
import "./Dashboard.css";
import hom from "../Assets/icons/home-page.png";
import { Card } from "antd";
import { useEffect } from "react";
import axios from "axios";

const { Meta } = Card;

const Dashboard = () => {



  
  return (
    // <div>
    <div className="mycontainer">
      {/* <div className="myheader">Header</div> */}

      <div className="mysidebar">
        <div className="mysidebar-whole">
          <div className="mysidebar-link">
            <img src={hom} alt="" />
            <a className="mysidebar-title" href="">
              Home
            </a>
          </div>
          <div className="mysidebar-link">
            <img src={hom} alt="" />
            <a className="mysidebar-title" href="">
              Item2
            </a>
          </div>
          <div className="mysidebar-link">
            <img src={hom} alt="" />
            <a className="mysidebar-title" href="">
              Item2
            </a>
          </div>
          <div className="mysidebar-link">
            <img src={hom} alt="" />
            <a className="mysidebar-title" href="">
              Settings
            </a>
          </div>
          <div className="mysidebar-link">
            <img src={hom} alt="" />
            <a className="mysidebar-title" href="">
              Stats
            </a>
          </div>
        </div>
      </div>

      <div className="mycontent">
        <div className="myitem">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Dashboard;
