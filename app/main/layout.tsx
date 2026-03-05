import MainNavigation from "@/components/MainNavigation";
import MainFooter from "./[components]/MainFooter";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-screen min-h-screen flex flex-col">
        {children}
        <MainFooter />
    </main>
  )
}
