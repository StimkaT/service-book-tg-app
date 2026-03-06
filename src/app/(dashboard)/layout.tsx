import NavBar from "@/components/ui/NavBar";

export default function DashboardLayout({ children, }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <main className="flex-1 overflow-y-auto pb-16 mb-[73]">
                {children}
            </main>

            <NavBar className="fixed bottom-0 left-0 w-full h-16" />
        </div>
    );
}
