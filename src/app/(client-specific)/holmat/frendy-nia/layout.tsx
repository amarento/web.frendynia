'use client';

import Header from '../../reception/frendy-nia/header/page';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
