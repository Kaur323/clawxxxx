import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import SalePage from "@/pages/SalePage";
import PredictPage from "@/pages/PredictPage";
import OpenClawPage from "@/pages/OpenClawPage";
import CommunityPage from "@/pages/CommunityPage";
import RewardsPage from "@/pages/RewardsPage";

const Index = () => {
  const [activeTab, setActiveTab] = useState("sale");

  const renderPage = () => {
    switch (activeTab) {
      case "sale":
        return <SalePage />;
      case "predict":
        return <PredictPage />;
      case "openclaw":
        return <OpenClawPage />;
      case "community":
        return <CommunityPage />;
      case "rewards":
        return <RewardsPage />;
      default:
        return <SalePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AppHeader isConnected={false} address="0xe8...d776" />
      <main className="pb-20">{renderPage()}</main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
