import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-start justify-center">
      {children}
    </main>
  );
};

export default Layout;
