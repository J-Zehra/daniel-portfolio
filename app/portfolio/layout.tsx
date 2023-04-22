export const metadata = {
  title: "Daniel | Portfolio",
  description: "Generated by create next app",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
