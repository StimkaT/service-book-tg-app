import NavBar from "@/components/ui/NavBar";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen">
            <main>{children}</main>
            <NavBar className="absolute bottom-0 left-0 w-full" />
        </div>
    );
}
