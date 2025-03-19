import Image from "next/image";
import RegisterBtn from "../component/RegisterBtn";

export default function WhyChooseUs() {
  const contents = [
    {
      icon: "/choose/icon-1.png",
      title: "Regulated",
      text: "The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict compliance because your trust and peace of mind are everything.",
    },
    {
      icon: "/choose/icon-2.png",
      title: "0 Commissions",
      text: "When investing, the small margins matter. Blackwell Invest offers 0 commissions investing, and 0 cost to install our app.",
    },
    {
      icon: "/choose/icon-3.png",
      title: " User-friendly",
      text: "With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpler. Trade smarter, not harder!",
    },
    {
      icon: "/choose/icon-4.png",
      title: "Tier 1 liquidity",
      text: "Blackwell Invest sources the best liquidity to provide a deep product range and broad market access. Fast order execution and transparent pricing.",
    },
  ];
  return (
    <div className="why-choose-us-section pt-20 py-10 w-full">
      <div className="main-container">
        <div className="sub-heading text-center heading font-bold mb-10">
          Why Choose Us?
        </div>
        <div className="info-content-wrap">
          {contents.map((content, index) => (
            <div
              key={index}
              className="choose-item flex flex-wrap md:flex-nowrap items-center md:gap-4 p-3 md:p-5 px-7 mb-5 rounded-lg"
            >
              <div className="icon-title flex items-center gap-2 flex-[0_0_100%] md:flex-[0_0_30%]">
                <div className="icon flex-none md:flex-[0_0_40%]">
                  <Image src={content.icon} alt="" width={100} height={100} />
                </div>
                <div className="title flex-[0_0_60%] text-lg lg:text-xl">
                  {content.title}
                </div>
              </div>

              <div className="text flex-[0_0_100%] md:flex-[0_0_70%]">
                {content.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center py-3">
          <RegisterBtn variant="primary" />
        </div>
      </div>
    </div>
  );
}
