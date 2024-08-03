/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Breadcrumb, Button, Col, Image, InputNumber, Rate, Row } from "antd";
import { HomeOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";

import { useState } from "react";


export const ProductDetailsComponent = ( ) => {

  const [numProducts, setNumProducts] = useState(1);

  const onChange = (value) => {
    setNumProducts(Number(value));
  };

  const increment = () => {
    setNumProducts((prev) => {
      const newValue = prev + 1;
      onChange(newValue);
      return newValue;
    });
  };

  const decrement = () => {
    setNumProducts((prev) => {
      const newValue = Math.max(1, prev - 1);
      onChange(newValue);
      return newValue;
    });
  };

  return (
    <div className="container mx-auto px-2">
      
        
          <>
            <div className="py-2  w-full truncate">
              <Breadcrumb
                items={[
                  {
                    href: "/",
                    title: <HomeOutlined />,
                  },
                  {
                    title: "",
                  },
                ]}
              />
            </div>
            <Row className="bg-[#fff] mt-2 rounded-md p-5 hidden sm:flex">
              <Col span={10} className="border-r">
                <Image src="" preview={false} />
                <div className="flex">
                  <Image src="" preview={false} />
                  <Image src="" preview={false} />
                  <Image src="" preview={false} />
                  <Image src="" preview={false} />
                  <Image src="" preview={false} />
                  <Image src="" preview={false} />
                </div>
              </Col>
              <Col span={14}>
                <div className="p-3 rounded">
                  <p className="text-2xl font-semibold break-words">
                    
                  </p>
                  <div className="mt-2">
                    <Rate allowHalf disabled defaultValue="" />
                    <span> ( Xem 5 đánh giá ) </span>
                    <span> | </span>
                    <span>Đã bán 34</span>
                  </div>
                  <div className="bg-[#FAFAFA] rounded font-bold text-2xl p-3 mt-5">
                    <p> đ</p>
                  </div>
                  <div className="text-md border-t mt-5">
                    <div className="mt-3">
                      <span>Giao đến </span>
                      <span className="underline font-semibold">
                        
                      </span>
                      <span> - </span>
                      <span className="text-blue-400 font-semibold">
                        Đổi địa chỉ
                      </span>
                    </div>
                  </div>
                  <div className="m-5 border-b border-t">
                    <p className="text-lg mt-5">Số Lượng</p>
                    <div className="mt-2 flex items-center mb-5">
                      <Button onClick={decrement} className="custom-button"><MinusOutlined /></Button>
                      <InputNumber
                        onChange={onChange}
                        value={numProducts}
                        min={1}
                        className="rounded custom-input-number"
                      />
                      <Button onClick={increment} className="custom-button"><PlusOutlined /></Button>
                    </div>
                  </div>
                  <div className="mt-10 flex gap-5">
                    <ButtonComponent
                      className="rounded w-[200px]"
                      danger
                      type="primary"
                      textButton="Chọn Mua"
                      size="large"
                    />
                    <ButtonComponent
                      className="rounded w-[200px]"
                      textButton="Mua Trước Trả Sau"
                      size="large"
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="bg-[#fff] mt-2 rounded-md p-5 sm:hidden block">
              <Col span={24} className="border-b">
                <Image src="" preview={false} />
                <div className="flex">
                  <Image src="" preview={false} />
                  <Image src="" preview={false} />
                  <Image src="" preview={false} />
                  <Image src="" preview={false} />
                  <Image src="" preview={false} />
                  <Image src="" preview={false} />
                </div>
              </Col>
              <Col span={24}>
                <div className="p-3 rounded">
                  <p className="text-2xl font-semibold break-words">
                    
                  </p>
                  <div className="mt-2">
                    <Rate allowHalf disabled defaultValue="5" />
                    <span> ( Xem 5 đánh giá ) </span>
                    <span> | </span>
                    <span>Đã bán 34</span>
                  </div>
                  <div className="bg-[#FAFAFA] rounded font-bold text-2xl p-3 mt-5">
                    <p>  đ</p>
                  </div>
                  <div className="text-md border-t mt-5">
                    <div className="mt-3">
                      <span>Giao đến </span>
                      <span className="underline font-semibold">
                        
                      </span>
                      <span> - </span>
                      <span className="text-blue-400 font-semibold">
                        Đổi địa chỉ
                      </span>
                    </div>
                  </div>
                  <div className="m-5 border-b border-t">
                    <p className="text-lg mt-5">Số Lượng</p>
                    <div className="mt-2 flex items-center mb-5">
                      <Button onClick={decrement} className="custom-button"><MinusOutlined /></Button>
                      <InputNumber
                        onChange={onChange}
                        value={numProducts}
                        min={1}
                        className="rounded custom-input-number"
                      />
                      <Button onClick={increment} className="custom-button"><PlusOutlined /></Button>
                    </div>
                  </div>
                  <div className="mt-10 flex gap-5">
                    <ButtonComponent
                      className="rounded w-[200px]"
                      danger
                      type="primary"
                      textButton="Chọn Mua"
                      size="large"
                    />
                    <ButtonComponent
                      className="rounded w-[200px]"
                      textButton="Mua Trước Trả Sau"
                      size="large"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </>
        
      
    </div>
  );
};
