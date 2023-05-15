import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  );
}
