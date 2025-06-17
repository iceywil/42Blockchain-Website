import React from 'react';

export default function MerchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.3shop.co/app/index.css" />
      {children}
    </>
  );
}