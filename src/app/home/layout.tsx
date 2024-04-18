import Navbar from "../navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="p-10 h-screen">
        <div>{children}</div>
      </div>
    </div>
  );
}
