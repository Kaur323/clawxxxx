import { useState } from "react";
import { Users, Wallet, Database, ChevronDown, Clock } from "lucide-react";
import ProgressRing from "@/components/ProgressRing";

const SalePage = () => {
  const [amount, setAmount] = useState("");
  const [isSubscribed] = useState(false);

  const price = 500000; // 1 BNB = 500,000 XClaw
  const tokenAmount = amount ? (parseFloat(amount) * price).toLocaleString() : "0";

  return (
    <div className="space-y-4 px-4 pb-4">
      {/* Pioneer Sale Card */}
      <div className="card-glass p-5">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-foreground">先锋配售</h2>
            <p className="mt-1 text-sm text-secondary-color">XClaw 先锋轮认购，限量10亿枚</p>
            <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
              <Clock className="h-3 w-3" />
              认购进行中
            </span>
          </div>
          <ProgressRing percentage={12.8} />
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { icon: Users, label: "认购地址", value: "9,600" },
            { icon: Wallet, label: "已认购(BNB)", value: "9,600" },
            { icon: Database, label: "已配售(XClaw)", value: "9,600" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-border p-3 text-center">
              <stat.icon className="mx-auto h-4 w-4 text-muted-foreground" />
              <p className="mt-1 text-lg font-bold text-foreground">{stat.value}</p>
              <p className="text-[10px] text-secondary-color">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3 rounded-lg border border-border px-4 py-2.5">
          <span className="text-sm text-secondary-color">配售价格</span>
          <span className="ml-auto text-sm font-bold text-foreground">1 BNB = 500,000 XClaw</span>
        </div>
      </div>

      {/* Subscription Form */}
      {!isSubscribed ? (
        <div className="card-glass p-5">
          <h3 className="text-lg font-bold text-foreground">参与配售</h3>

          {/* Input BNB */}
          <div className="mt-4 rounded-lg border border-border bg-secondary p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-secondary-color">认购金额</span>
              <span className="text-xs text-secondary-color">Balance: 100 BNB</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <input
                type="number"
                placeholder="0.2~5BNB"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent text-xl font-bold text-foreground outline-none placeholder:text-muted-foreground"
              />
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-gold">MAX</span>
                <span className="text-lg">🟡</span>
                <span className="text-sm font-bold text-foreground">BNB</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center py-2">
            <ChevronDown className="h-5 w-5 text-primary" />
          </div>

          {/* Output XClaw */}
          <div className="rounded-lg border border-border bg-secondary p-4">
            <span className="text-xs text-secondary-color">获得代币</span>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-xl font-bold text-foreground">{tokenAmount}</span>
              <div className="flex items-center gap-1">
                <span className="text-lg">🦞</span>
                <span className="text-sm font-bold text-foreground">XClaw</span>
              </div>
            </div>
          </div>

          <button className="btn-gradient mt-4 block">确认认购</button>

          {/* Rules */}
          <div className="mt-4">
            <h4 className="text-sm font-bold text-foreground">配售规则：</h4>
            <ul className="mt-2 space-y-1.5 text-xs text-secondary-color">
              <li>• 首次认购最低 0.2 BNB，追加认购最低 0.1 BNB</li>
              <li>• 单地址累计认购上限 5 BNB</li>
              <li>• 首次释放20%，后续每7天释放10%（需每日交易达标$400）</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="card-glass p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground">我的配售</h3>
            <button className="text-sm text-secondary-color">历史记录 &gt;</button>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <span>🟡</span>
                <span className="text-2xl font-bold text-foreground">9,600</span>
              </div>
              <p className="text-xs text-secondary-color">认购额度</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <span>🦞</span>
                <span className="text-2xl font-bold text-foreground">9,600</span>
              </div>
              <p className="text-xs text-secondary-color">配售代币</p>
            </div>
          </div>
          <button className="btn-gradient mt-4 block">增加认购</button>
        </div>
      )}
    </div>
  );
};

export default SalePage;
