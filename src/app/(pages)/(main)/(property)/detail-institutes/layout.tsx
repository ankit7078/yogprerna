// app/institutes/[detail]/layout.tsx
import React from "react";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}