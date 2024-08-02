import { TypeProduct } from "../../components/TypeProduct/TypeProduct";
import Slider1 from "../../assets/images/slide1.webp";
import Slider2 from "../../assets/images/slide2.webp";
import Slider3 from "../../assets/images/slide3.webp";
import Slider4 from "../../assets/images/slide4.webp";
import Slider5 from "../../assets/images/slide5.webp";
import Slider6 from "../../assets/images/slide6.webp";
import { SliderComponent } from "../../components/SliderComponent/SliderComponent";
import { CardComponent } from "../../components/CardComponent/CardComponent";
import { ButtonComponent } from "../../components/ButtonComponent/ButtonComponent";

export const HomePage = () => {
  const arr = ["TV", "Tu Lanh", "Laptop"];
  return (
    <div>
      <div className="container-2xl shadow bg-white">
        <div className="">
          <div className=" container mx-auto flex items-center gap-6  h-[44px] px-2">
            {arr.map((item) => {
              return <TypeProduct name={item} key={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="bg-[#efefef]">
        <div className="container mx-auto">
          <div className="">
            <SliderComponent
              arrImages={[Slider1, Slider2, Slider3, Slider4, Slider5, Slider6]}
            />
          </div>
          <div className="mt-10 flex flex-wrap gap-2 justify-center">
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
          <div className="flex justify-center items-center mt-4">
            <ButtonComponent
              textButton="Xem thêm"
              size="large"
              type="primary"
              className="rounded mb-5"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};
