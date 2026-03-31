import { ChevronRight } from "lucide-react";

interface RewardCardProps {
  title: string;
  items: { label: string; value: string; highlight?: boolean }[];
  buttonText: string;
  buttonVariant?: "red" | "gold";
}

const RewardCard = ({ title, items, buttonText, buttonVariant = "red" }: RewardCardProps) => (
  <div className="card-glass p-5">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <button className="flex items-center text-sm text-secondary-color">
        奖励记录 <ChevronRight className="h-4 w-4" />
      </button>
    </div>
    <div className="mt-4 grid grid-cols-2 gap-3">
      {items.map((item) => (
        <div key={item.label} className="rounded-lg border border-border p-3">
          <p className="text-xs text-secondary-color">{item.label}</p>
          <p className={`mt-1 text-xl font-bold ${item.highlight ? "text-primary" : "text-foreground"}`}>
            {item.value}
          </p>
        </div>
      ))}
    </div>
    <button className={`mt-4 block w-full ${buttonVariant === "gold" ? "btn-gradient-gold" : "btn-gradient"}`}>
      {buttonText}
    </button>
  </div>
);

const RewardsPage = () => {
  return (
    <div className="space-y-4 px-4 pb-4">
      {/* Referral Rewards */}
      <RewardCard
        title="推荐奖励"
        items={[
          { label: "累计奖励", value: "5 BNB" },
          { label: "待领取", value: "500 BNB", highlight: true },
        ]}
        buttonText="领取奖励"
      />

      {/* LP Dividends */}
      <div className="card-glass p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-foreground">持币分红</h3>
          <button className="flex items-center text-sm text-secondary-color">
            奖励记录 <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-4 rounded-lg border border-border p-3">
          <div className="flex items-center gap-2">
            <span className="text-foreground">✅</span>
            <span className="text-sm font-bold text-foreground">已达标</span>
          </div>
          <p className="mt-1 text-xs text-secondary-color">持币要求：100,000 XClaw</p>
          <p className="text-xs text-secondary-color">当前持币：250,000 XClaw</p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-border p-3">
            <p className="text-xs text-secondary-color">累计分红</p>
            <p className="mt-1 text-xl font-bold text-foreground">103 <span className="text-xs font-normal">LP Token</span></p>
          </div>
          <div className="rounded-lg border border-border p-3">
            <p className="flex items-center justify-between text-xs text-secondary-color">
              当前持有 <span className="text-[10px]">≈$1,888</span>
            </p>
            <p className="mt-1 text-xl font-bold text-primary">51 <span className="text-xs font-normal">LP Token</span></p>
          </div>
        </div>
      </div>

      {/* Node Rewards */}
      <RewardCard
        title="节点奖励"
        items={[
          { label: "累计奖励", value: "5 BNB" },
          { label: "待领取", value: "500 BNB", highlight: true },
        ]}
        buttonText="领取奖励"
      />

      {/* Prediction Delegation Rewards */}
      <RewardCard
        title="预测委托"
        items={[
          { label: "累计收益", value: "5 XClaw" },
          { label: "待领取", value: "500 XClaw", highlight: true },
        ]}
        buttonText="领取分红"
      />
    </div>
  );
};

export default RewardsPage;
