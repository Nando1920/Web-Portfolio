import Navbar from "../navbar";
import { ScrollWrapper } from "../scrollWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="p-10 h-screen">
        <div>{children}</div>
      </div>
    </div>
  );
}