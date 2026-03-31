import { MessageCircle } from "lucide-react";

const OpenClawPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-20">
      <div className="card-glass p-8 text-center w-full">
        <MessageCircle className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-4 text-xl font-bold text-foreground">OpenClaw</h2>
        <p className="mt-2 text-sm text-secondary-color">
          AI 智能助手，即将上线
        </p>
        <p className="mt-4 text-xs text-secondary-color">
          首次激活费用：10 USDT
        </p>
        <button className="btn-gradient mt-6 block">激活 OpenClaw</button>
      </div>
    </div>
  );
};

export default OpenClawPage;
