/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card } from "antd";
import official from "../../assets/images/official.png";
import { useNavigate } from "react-router-dom";

export const CardComponent = (props) => {
  

  
  return (
    <>
      <Card
        className="relative hidden min-[770px]:block"
        hoverable
        style={{
          width: 250,
          height: 400,
        }}
        cover={
          <img className="object-contain"
            alt="product"
            src=""
            style={{ height: "250px"}}
          />
        }
        
      >
        <img
          src={official}
          alt=""
          className="w-[68px] h-auto absolute top-0 left-0"
        />
        <div className="text-lg">
          <p className="font-semibold w-[200px] line-clamp-2">Iphone 13</p>
        </div>

        <div className="text-sm mb-2">
          <span>
            5{" "}
            <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
          </span>
          <span> | </span>
          <span>Đã bán | 1000</span>
        </div>

        <div className="flex items-center">
          <span className="font-bold text-lg text-red-500">10000000 đ </span>
          <span className="text-red-500"> - 5%</span>
        </div>
      </Card>
    </>
  );
};
