import Image from "next/image";
export default function AppStoreBtn() {
  return (
    <div className="py-10 max-w-[300px] md:max-w-[320px] mx-auto app-store-wrap grid grid-cols-2 gap-4">
      <div>
        <a href="#" target="_blank">
          <Image
            src="/google-play.jpg"
            alt="Google Play"
            width={393}
            height={118}
            className="w-full max-w-full rounded-md"
          />
        </a>
      </div>
      <div>
        <a href="#" target="_blank">
          <Image
            src="/app-store.jpg"
            alt="App store"
            width={393}
            height={118}
            className="w-full max-w-full rounded-md"
          />
        </a>
      </div>
    </div>
  );
}
