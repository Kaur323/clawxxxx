import { Globe } from "lucide-react";

interface AppHeaderProps {
  isConnected?: boolean;
  address?: string;
}

const AppHeader = ({ isConnected = false, address = "" }: AppHeaderProps) => {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-background/90 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <span className="text-xl">🦞</span>
        <span className="text-foreground font-bold text-lg tracking-tight">X.CLAW</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-foreground">
          {isConnected ? (
            <span className="font-mono text-xs">{address}</span>
          ) : (
            <>
              <span className="text-xs">📋</span>
              <span>连接钱包</span>
            </>
          )}
        </button>
        <button className="text-muted-foreground">
          <Globe className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
