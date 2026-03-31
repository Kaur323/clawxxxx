import { Copy, QrCode, ChevronRight } from "lucide-react";

const CommunityPage = () => {
  const referralLink = "https://xclaw.io/0xe8...d776";

  return (
    <div className="space-y-4 px-4 pb-4">
      {/* Invite Card */}
      <div className="card-glass p-5">
        <h2 className="text-lg font-bold text-foreground">社区</h2>
        <p className="mt-1 text-sm text-secondary-color">邀请好友，共建社区，赚取推荐奖励</p>
        <div className="mt-4 rounded-lg border border-border bg-secondary px-4 py-3">
          <p className="text-xs text-secondary-color font-mono truncate">{referralLink}</p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-sm text-foreground">
            <Copy className="h-4 w-4" />
            复制链接
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-sm text-foreground">
            <QrCode className="h-4 w-4" />
            二维码
          </button>
        </div>
      </div>

      {/* Community Stats */}
      <div className="card-glass p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-foreground">社区数据</h3>
          <button className="flex items-center text-sm text-secondary-color">
            查看直推 <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            { label: "直推人数", value: "5" },
            { label: "团队人数", value: "23" },
            { label: "团队认购", value: "5 BNB" },
            { label: "小区认购", value: "5 BNB" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-border p-3">
              <p className="text-xs text-secondary-color">{stat.label}</p>
              <p className="mt-1 text-xl font-bold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lobster Node */}
      <div className="card-glass p-5">
        <h3 className="text-lg font-bold text-foreground">龙虾节点</h3>
        <div className="mt-3 flex items-center justify-between rounded-lg border border-border px-4 py-2.5">
          <span className="text-sm text-secondary-color">我的等级：</span>
          <span className="text-sm text-secondary-color">未达标</span>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-primary">升级龙虾组长</span>
            <span className="text-sm text-foreground">
              7.5 / <span className="text-gold font-bold">5BNB</span>
            </span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div className="h-full rounded-full bg-primary" style={{ width: "100%" }} />
          </div>
        </div>

        <div className="mt-3 space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span className="text-secondary-color">考核要求：</span>
            <span className="text-foreground">小区业绩 5BNB</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-secondary-color">节点奖励：</span>
            <span className="text-foreground">$200等值BNB</span>
          </div>
        </div>
      </div>

      {/* Grade Overview */}
      <button className="card-glass flex w-full items-center justify-between p-5">
        <h3 className="text-lg font-bold text-foreground">等级总览</h3>
        <ChevronRight className="h-5 w-5 text-primary" />
      </button>
    </div>
  );
};

export default CommunityPage;
