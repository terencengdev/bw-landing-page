import RegisterBtn from "../component/RegisterBtn";
import CarouselSlider from "../component/CarouselSlider";

export default function HowToLink() {
  const sliderContent = [
    {
      image: "/register/step-1.png",
      text: "Install our app, “Blackwell Invest”",
    },
    { image: "/register/step-2.png", text: "Login OR create a new account" },
    { image: "/register/step-3.png", text: "Click “Account”" },
    { image: "/register/step-4.png", text: "Click “Link an account”" },
    {
      image: "/register/step-5.png",
      text: "Select “BlackwellGlobalAsia-Live” server",
    },
    {
      image: "/register/step-6.png",
      text: "Fill in your Blackwell Global trading account OR create a new account",
    },
    { image: "/register/step-7.png", text: "Click “Copy Trades”" },
    { image: "/register/step-8.png", text: "Click “Done”" },
  ];

  return (
    <div className="how-to-link-section w-full py-10">
      <div className="main-container">
        <div className="sub-heading text-center heading font-bold mb-10">
          How to Link MT4 Account
        </div>

        <CarouselSlider sliderContent={sliderContent} />

        <div className="flex justify-center mt-10">
          <RegisterBtn variant="primary" />
        </div>
      </div>
    </div>
  );
}
