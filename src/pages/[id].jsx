import Modal from "@/components/Modal";
import SidebarLink from "@/components/SidebarLink";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRecoilState } from "recoil";
import { modalState } from "../../atoms/modalAtom";
import { useRouter } from "next/router";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";

function PostPage() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const { id } = router.query;
  const router = useRouter()

  useEffect(
    () =>
      onSnapshot(doc(db, "posts", id), (snapshot) => {
        setPost(snapshot.data());
      }),
    [db]
  );

  return (
    <div>
      <Head>
        <title>{post?.username} on Twitter: "{post?.text}"</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <SidebarLink />
        {/* Widgets */}

        {isOpen && <Modal />}
      </main>
    </div>
  );
}

export default PostPage;
