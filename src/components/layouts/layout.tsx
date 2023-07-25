import { ReactNode } from "react";
import Header from "./header";
import Nav from "./nav";

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Nav />
      {/* <main className="px-3.5 pt-8 pb-20 lg:px-6 lg:py-10">
        {children}
      </main> */}
    </>
  );
}
