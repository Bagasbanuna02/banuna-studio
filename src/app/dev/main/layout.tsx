import { LayoutHome } from "@/app_modules/main";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LayoutHome>{children}</LayoutHome>
    </>
  );
}
