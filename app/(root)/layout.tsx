import { ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreamClientProvider";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}Footer</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
