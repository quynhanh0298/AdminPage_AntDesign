import React from "react";
import { DashboardLineChart } from "../../components/DashboardLineChart";
import { DashboardBarChart } from "../../components/DashboardBarChart";
import { DashboardRadioBarChart } from "../../components/DashboardRadioBarChart";
import styled from "styled-components";

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  .chart-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
  }
`;

const Dashboard = () => {
  return (
    <StyledDashboard>
      <DashboardLineChart></DashboardLineChart>
      <div className="chart-bottom">
        <div>
          <DashboardBarChart></DashboardBarChart>
        </div>
        <div>
          <DashboardRadioBarChart></DashboardRadioBarChart>
        </div>
      </div>
    </StyledDashboard>
  );
};

export default Dashboard;
