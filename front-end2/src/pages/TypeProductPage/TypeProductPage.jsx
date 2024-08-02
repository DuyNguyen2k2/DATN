import { Col, Pagination, Row } from "antd";
import { CardComponent } from "../../components/CardComponent/CardComponent";
import { NavBarComponent } from "../../components/NavBarComponent/NavBarComponent";

export const TypeProductPage = () => {
  return (
    <div className="container-2xl bg-[#efefef]">
      <div className="container mx-auto">
        <Row>
          <Col span={4} className="bg-[#fff] p-3 rounded my-5 h-max">
            <NavBarComponent />
          </Col>
          <Col span={20}>
            <div className=" p-3 rounded flex items-center flex-wrap gap-2 my-5 ">
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
            <div className="flex justify-center items-center">
              <Pagination defaultCurrent={6} total={500} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
