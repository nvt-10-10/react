import "react-select2-wrapper/css/select2.css";
import Select2 from "react-select2-wrapper";
import logoHeader from "../../../assets/images/logo/logo-header.png";
import iconSearch from "../../../assets/images/icons/search.svg";
import iconCategory from "../../../assets/images/icons/category.svg";
import iconArowUp from "../../../assets/images/icons/arrow-up.svg";
import iconApple from "../../../assets/images/icons/apple.svg";
import iconHeart from "../../../assets/images/icons/heart.svg";
import iconCart from "../../../assets/images/icons/cart.svg";
import { useEffect, useState } from "react";
import DropdownAction from "./dropdown-action";
import "../../../assets/scss/common/custom-dropdown.scss";
import "./header.scss";
import DropdownLanguage from "./dropdown-language";
import Image from "../../Image/Image";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const options = [
    { id: 1, text: "Danh mục 1" },
    { id: 2, text: "Danh mục 2" },
    { id: 3, text: "Danh mục 3" },
  ];


  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("headerSticky");
      const headerTop = header.offsetTop;
      if (window.scrollY > headerTop && !isSticky) {
        setIsSticky(true);
      } else if (window.scrollY <= headerTop && isSticky) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickCategory = () => {
    setShowCategory(!showCategory);
  };
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="header-top d-flex flex-wrap align-items-center justify-content-between ">
            <a href="javaScript:void((0)">Chào mừng đến với Vitrade - Kết nối tạo giá trị</a>
            <div className="d-flex align-items-center">
              <div className="d-flex gap-8">
                <DropdownLanguage label="Quốc gia"></DropdownLanguage>
                <DropdownLanguage label="Ngôn ngữ"></DropdownLanguage>
              </div>
              { !isLogin && (
                <div className="d-flex gap-8 action-auth">
                  <Link className="auth-link" to="/auth/register">
                    Đăng kí
                  </Link>
                  <Link className="auth-link" to="/auth/login">
                    Đăng nhập
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="header-mid d-flex align-items-center justify-content-between">
            <Image src={logoHeader} className="logo" />
            <div className="d-none d-sm-flex  align-items-center">
              <form className="form-search">
                <div className="d-flex align-content-center wrap">
                  <Image src={iconSearch} />
                  <input className=" input-search" type="text" name="search" placeholder="Tìm kiếm hơn 1.8K sản phẩm & đối tác. Nhấn Enter..." />
                  <Select2
                    data={options}
                    options={{
                      placeholder: "Chọn danh mục",
                      allowClear: true,
                      minimumResultsForSearch: Infinity,
                    }}
                    style={{ width: "100%" }} // optional styling
                  />
                </div>
              </form>

              <div className="d-flex align-items-center gap-10 ml-12 ">
                <Image src={iconHeart} />
                <Image src={iconCart} />
                <DropdownAction></DropdownAction>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`header-bottom   ${isSticky ? "isSticky" : ""}`} id="headerSticky">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="category-wrap position-relative">
              <div className="all-categories-dropdown" onClick={() => handleClickCategory()}>
                <Image src={iconCategory} alt="icon" className="icon" /> <span>Doanh Mục</span>
                <Image src={iconArowUp} className="icon-dropdown" />
              </div>
              <div className={`categorie-list ${showCategory ? "show" : ""}`}>
                <ul>
                  <li>
                    <a href="#" className="category-item">
                      <Image src={iconApple} /> <span>Doanh mục 1</span>
                      <span className="total">123 items</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="category-item">
                      <Image src={iconApple} /> <span>Doanh mục 1</span>
                      <span className="total">123 items</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="category-item">
                      <Image src={iconApple} /> <span>Doanh mục 1</span>
                      <span className="total">123 items</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="category-item">
                      <Image src={iconApple} /> <span>Doanh mục 1</span>
                      <span className="total">123 items</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="category-item">
                      <Image src={iconApple} /> <span>Doanh mục 1</span>
                      <span className="total">123 items</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="category-item">
                      <Image src={iconApple} /> <span>Doanh mục 1</span>
                      <span className="total">123 items</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="category-item">
                      <Image src={iconApple} /> <span>Doanh mục 1</span>
                      <span className="total">123 items</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="category-item">
                      <Image src={iconApple} /> <span>Doanh mục 1</span>
                      <span className="total">123 items</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="category-item">
                      <Image src={iconApple} /> <span>Doanh mục 1</span>
                      <span className="total">123 items</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="category-item">
                      <Image src={iconApple} /> <span>Doanh mục 1</span>
                      <span className="total">123 items</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="category-item">
                      <Image src={iconApple} /> <span>Doanh mục 1</span>
                      <span className="total">123 items</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="category-item">
                      <Image src={iconApple} /> <span>Doanh mục 1</span>
                      <span className="total">123 items</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="category-item">
                      <Image src={iconApple} /> <span>Doanh mục 1</span>
                      <span className="total">123 items</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="category-item">
                      <Image src={iconApple} /> <span>Doanh mục 1</span>
                      <span className="total">123 items</span>
                    </a>
                  </li>
                </ul>
                <a href="#" className="more">
                  Xem thêm +
                </a>
              </div>
            </div>

            <ul className="nav-list">
              <li>
                {" "}
                <Link to="/supplier" className="nav-link">
                  Nhà cung cấp
                </Link>{" "}
              </li>
              <li>
                {" "}
                <a href="#" className="nav-link">
                  Yêu cầu báo giá
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" className="nav-link">
                  Tìm nhà phân phối
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#" className="nav-link">
                  Kết nối giao thương
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
