"use client";

import DashboardDrawer from "@/components/Dashboard/DashboardDrawer";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
