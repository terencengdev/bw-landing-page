import Image from "next/image";
import VerticalTabs from "../component/VerticalTabs";
import Tab from "../component/Tab";
import AppStoreBtn from "../component/AppStoreBtn";

export default function TradeLikePro() {
  return (
    <div className="tradelikepro-section pt-20 py-10 w-full">
      <div className="main-container">
        <div className="sub-heading text-center heading font-bold mb-10">
          Trade Like a Pro in Minutes
        </div>
        <VerticalTabs>
          <Tab key="1" title="Install our app, ”Blackwell Invest”" icon="">
            <Image
              src="/guide/guide-1.png"
              alt="Guide Image 1"
              width={1000}
              height={1166}
              className="w-full"
            />
          </Tab>
          <Tab key="2" title="Choose a signal Master and click “Copy”" icon="">
            <Image
              src="/guide/guide-2.png"
              alt="Guide Image 2"
              width={1000}
              height={1166}
              className="w-full"
            />
          </Tab>
          <Tab key="3" title="Set your trade size preferences" icon="">
            <Image
              src="/guide/guide-3.png"
              alt="Guide Image 3"
              width={1000}
              height={1166}
              className="w-full"
            />
          </Tab>
          <Tab key="4" title="Click “Agree and Copy”" icon="">
            <Image
              src="/guide/guide-4.png"
              alt="Guide Image 4"
              width={1000}
              height={1166}
              className="w-full"
            />
          </Tab>
        </VerticalTabs>

        <AppStoreBtn />
      </div>
    </div>
  );
}
