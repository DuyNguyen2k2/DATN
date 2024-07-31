/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Badge, Col, Row } from "antd";
import { ButtonInputSearch } from "../ButtonInputSearch/ButtonInputSearch";


export const HeaderComponent = () => {
  const content = (
    <div>
      <p className="p-2 cursor-pointer hover:underline">Thông tin người dùng</p>

      <p></p>

      <p className="p-2 cursor-pointer hover:underline">Đăng xuất</p>
    </div>
  );

  return (
    <div>
      <div className="">
        <div className="bg-[#1a94ff]">
          <Row className="container mx-auto p-3 hidden min-[900px]:flex justify-between">
            <Col
              span={6}
              className="xl:text-2xl text-xl font-bold text-white flex justify-end items-center"
            >
              <h1 className="cursor-pointer hover:text-cyan-400">
                TECHTROVEDECOR
              </h1>
            </Col>

            <Col span={12} className="px-2">
              <ButtonInputSearch
                size="large"
                textButton="Tìm kiếm"
                placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..."
                allowClear
                
              />
            </Col>

            <Col span={6} className="text-white flex">
              <div className="flex justify-start items-center">
                <i className="fa-solid fa-user fa-2xl"></i>
              </div>

              <div className="flex flex-col px-2">
                <span className="cursor-pointer hover:underline">
                  Đăng nhập / Đăng ký
                </span>
                <span>
                  Tài khoản <i className="fa-solid fa-caret-down fa-lg"></i>
                </span>
              </div>

              <div className="xl:px-5 flex ">
                <Badge
                  count={5}
                  size="small"
                  className="flex justify-start items-center"
                >
                  <i className="fa-solid fa-cart-shopping fa-2xl text-white"></i>
                </Badge>
                <span className="flex justify-start items-end max-xl:text-xs h-[35px]">
                  Giỏ hàng
                </span>
              </div>
            </Col>
          </Row>
          <Row className="container mx-auto p-3 min-[900px]:hidden flex">
            <Col
              span={24}
              className="text-xl font-bold text-white flex justify-center items-center mb-2"
            >
              <h1 className="cursor-pointer hover:text-cyan-400">
                TECHTROVEDECOR
              </h1>
            </Col>

            <Col span={24} className="px-2">
              <ButtonInputSearch
                size="large"
                textButton="Tìm kiếm"
                placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..."
                allowClear
              />
            </Col>

            <Col
              span={24}
              className="text-white flex justify-center items-center mt-2"
            >
              <div className="flex justify-start items-center">
                <i className="fa-solid fa-user fa-2xl"></i>
              </div>

              <div className="flex flex-col px-2">
                <span className="cursor-pointer hover:underline">
                  Đăng nhập / Đăng ký
                </span>
                <span>
                  Tài khoản <i className="fa-solid fa-caret-down fa-lg"></i>
                </span>
              </div>

              <div className="xl:px-5 flex ">
                <Badge
                  count={5}
                  size="small"
                  className="flex justify-start items-center"
                >
                  <i className="fa-solid fa-cart-shopping fa-2xl text-white"></i>
                </Badge>
                <span className="flex justify-start items-end max-xl:text-xs h-[35px]">
                  Giỏ hàng
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
