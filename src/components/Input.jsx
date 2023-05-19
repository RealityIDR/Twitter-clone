import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { db, storage } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";

function Input() {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef(null);

  const sendPost = async () => {
    if (loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      // id: session.user.uid,
      // username: session.user.name,
      // userImg: session.user.image,
      // tag: session.user.tag,
      text: input,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(dc, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }

    setLoading(false);
    setInput("");
    setSelectedFile(null);
    setShowEmojis(false);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader()
  };

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}
    >
      <img
        src="data:image/jpeg;base64,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"
        alt=""
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows="2"
            placeholder="What's happening?"
            className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
          />

          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h--8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <XMarkIcon className="text-white h-5" />
              </div>
              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <PhotoIcon className="h-[22px] text-[#1d9bf0]" />
              <input
                type="file"
                hidden
                onChange={addImageToPost}
                ref={filePickerRef}
              />
            </div>

            <div className="icon rotate-90">
              <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
              <FaceSmileIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            <div className="icon">
              <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>
          </div>
          <button
            className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
            disabled={!input.trim() && !selectedFile}
            // onClick={sendPost}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;