import { Col, Container, Form, Row } from "react-bootstrap";
import { TextWrapper } from "../../../../components/Text/Text";
import "./supplierListSection.scss";
import Image from "../../../../components/Image/Image";
import iconVi from "../../../../assets/images/flag/vi.jpg";
import iconZhCn from "../../../../assets/images/flag/zh-cn.jpg";
import iconKo from "../../../../assets/images/flag/ko.jpg";
import iconLo from "../../../../assets/images/flag/lo.jpg";
import iconFilter from "../../../../assets/images/icons/filter.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardSupplier } from "../../../../components/CardSupplier/CardSupplier";
import { userThunk } from "../../../../redux-slice/user/thunk";
import { MyPagination } from "../../../../components/Pagination/Pagination";
const List = () => {
  const {top9Supplier} = useSelector((state)=> state.user)
  const [currentPage,setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(userThunk.getTop9Suppliers(currentPage))
  },[currentPage,dispatch])
  
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <main>
      <section className="supplierListSection">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="header-wrapper">
                <TextWrapper text="Thị trường" strong="Đa Quốc Gia" position="right"></TextWrapper>
                <div className="country-list">
                  <div className="country">
                    <Image src={iconVi} className="icon-flag"></Image>
                    <span className="country-name">Việt Nam</span>
                  </div>
                  <div className="country">
                    <Image src={iconKo} className="icon-flag"></Image>
                    <span className="country-name">Hàn Quốc</span>
                  </div>
                  <div className="country">
                    <Image src={iconLo} className="icon-flag"></Image>
                    <span className="country-name">Lào</span>
                  </div>
                  <div className="country">
                    <Image src={iconZhCn} className="icon-flag"></Image>
                    <span className="country-name">Trung Quốc</span>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12}>
              <Form className="form-search">
                <Row className="gy-3 ">
                  <Col xs={12} md={6} xl={3}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Control type="text" placeholder="name@example.com" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6} xl={3}>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Col>
                  <Col xs={12} md={6} xl={3}>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Col>

                  <Col xs={12} md={6} xl={3}>
                    <button className="btn btn-filter">
                      Lọc thông tin <Image src={iconFilter}></Image>
                    </button>
                  </Col>
                </Row>
              </Form>
            </Col>

            <Col xs={12}>
              <Row className="list-supplier gy-4">
                {top9Supplier?.items?.map((supplier) =>(
                  <Col xs={12} md={6} lg={4} xl={3}>
                       <CardSupplier supplier={supplier}>
                       </CardSupplier>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col xs={12}>
            <MyPagination Meta ={top9Supplier?.meta} position="center" onPageChange= {handlePageChange}></MyPagination>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default List;
