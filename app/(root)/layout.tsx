
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
    </div>


    );
}
