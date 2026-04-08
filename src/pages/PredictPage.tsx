import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import lobsterImg from "@/assets/lobster.png";

const categories = ["热门", "政策", "经济", "..."];

const events = [
  {
    id: 1,
    title: "原油(CL)是否会在3月底前达到__?",
    yesPercent: 24,
    noPercent: 76,
    volume: "$16M",
    endDate: "Jan 1",
    image: "🛢️",
  },
  {
    id: 2,
    title: "BTC是否会在Q2突破$100K?",
    yesPercent: 45,
    noPercent: 55,
    volume: "$8.2M",
    endDate: "Jun 30",
    image: "₿",
  },
];

const PredictPage = () => {
  const [activeCategory, setActiveCategory] = useState("经济");
  const [isJoined] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-4 px-4 pb-4">
      {/* Delegation Card */}
      <div className="card-glass p-5">
        <h2 className="text-lg font-bold text-foreground">预测委托</h2>
        <p className="mt-1 text-sm text-secondary-color">
          XClaw预测市场AI智能体，帮您实现自动化收益
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
            委托金额：<span className="font-bold">$1000</span>等价值XClaw
          </span>
          <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
            预期APR：<span className="font-bold">9~27%</span>
          </span>
        </div>
        <div className="mt-3 flex justify-end">
          <span className="text-4xl">🦞</span>
        </div>
      </div>

      {/* My Delegation */}
      <div className="card-glass p-5">
        <h3 className="text-lg font-bold text-foreground">我的委托</h3>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-xs text-secondary-color">委托状态</p>
            <p className="mt-1 text-sm font-bold text-primary">
              {isJoined ? "已参加" : "未参加"}
            </p>
          </div>
          <div>
            <p className="text-xs text-secondary-color">累计收益</p>
            <p className="mt-1 text-sm font-bold text-primary">0 XClaw</p>
          </div>
          <div>
            <p className="text-xs text-secondary-color">退出周期</p>
            <p className="mt-1 text-sm font-bold text-foreground">0 天</p>
          </div>
        </div>
        {isJoined ? (
          <button className="btn-gradient mt-4 block opacity-80">退出委托</button>
        ) : (
          <button onClick={() => setShowModal(true)} className="btn-gradient mt-4 block">
            智能委托
          </button>
        )}
      </div>

      {/* Hot Prediction Events */}
      <div>
        <div className="flex items-center gap-2">
          <span className="text-lg">🦞</span>
          <h3 className="text-lg font-bold text-foreground">热门预测事件</h3>
        </div>

        <div className="mt-3 flex items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-3 py-1 text-xs transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-secondary-color"
              }`}
            >
              {cat}
            </button>
          ))}
          <div className="ml-auto flex gap-1">
            <button className="rounded-full border border-border p-1.5 text-muted-foreground">
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <button className="rounded-full border border-border p-1.5 text-muted-foreground">
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-3 space-y-3">
          {events.map((event) => (
            <div key={event.id} className="card-glass p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{event.image}</span>
                <p className="text-sm font-medium text-foreground">{event.title}</p>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-400">{event.yesPercent}%</span>
                <div className="flex h-2 flex-1 overflow-hidden rounded-full">
                  <div
                    className="bg-emerald-500 rounded-l-full"
                    style={{ width: `${event.yesPercent}%` }}
                  />
                  <div
                    className="bg-red-500 rounded-r-full"
                    style={{ width: `${event.noPercent}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-red-400">{event.noPercent}%</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 py-2 text-sm font-bold text-emerald-400">
                  Yes
                </button>
                <button className="rounded-lg border border-red-500/30 bg-red-500/10 py-2 text-sm font-bold text-red-400">
                  No
                </button>
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] text-secondary-color">
                <span>{event.volume} Liq</span>
                <span>📅 {event.endDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Delegation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6">
          <div className="w-full max-w-sm card-glass p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-foreground">预测委托</h3>
              <button onClick={() => setShowModal(false)} className="text-muted-foreground text-xl">✕</button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-foreground font-medium">委托金额</span>
              <div className="text-right">
                <p className="text-lg font-bold text-primary">100 XClaw</p>
                <p className="text-xs text-secondary-color">~$1000</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm text-foreground font-medium">委托周期</span>
              <span className="text-sm font-bold text-primary">灵活</span>
            </div>
            <button className="btn-gradient mt-5 block" onClick={() => setShowModal(false)}>确认委托</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PredictPage;
