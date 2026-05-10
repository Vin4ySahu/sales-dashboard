import React from "react";
import MainLayout from "../layout/MainLayout";
import TodaysSales from "../components/DashBoardCards/TodaysSales";
import VisitorInsightsCard from "../components/DashBoardCards/VisitorInsightsCard";
import TotalRevenueCard from "../components/DashBoardCards/TotalRevenueCard";
import CustomerSatisfactionCard from "../components/DashBoardCards/CustomerSatisfactionCard";
import TargetVsRealityCard from "../components/DashBoardCards/TargetVsRealityCard";
import TopProductsCard from "../components/DashBoardCards/TopProductsCard";
import SalesMapCard from "../components/DashBoardCards/SalesMapCard";
import VolumeVsServiceCard from "../components/DashBoardCards/VolumeVsServiceCard";

const Dashboard = () => {
  return (
    <MainLayout title={"Dashboard"}>
      <div>
        <div className="flex gap-4 ">
          <div className="flex-[1.2]">
            {" "}
            <TodaysSales />
          </div>

          <div className="flex-1">
            <VisitorInsightsCard />
          </div>
        </div>
        <div className="my-6 flex justify-between gap-4">
          <div className="flex-[1.4]">
            <TotalRevenueCard />
          </div>
          <div className="flex-1">
            <CustomerSatisfactionCard />
          </div>
          <div className="flex-1">
            <TargetVsRealityCard />
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex-[1.4]">
            <TopProductsCard />
          </div>
          <div className="flex-1">
            <SalesMapCard />
          </div>
          <div className="flex-1">
            <VolumeVsServiceCard />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
