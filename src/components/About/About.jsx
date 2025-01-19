import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./About.css"; 

const About = () => {
  const navigate = useNavigate();
  
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="about">
      <div className="about-header">
        <div className="header-left">
          <img
            className="header-left img"
            src="https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751_1280.png"
            alt="Google Logo"
            onClick={handleHomeClick}
          />
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/commitments">Commitments</a>
          <a href="/stories">Stories</a>
        </div>
      </div>

      <div className="mission">
        <p className="mission-text">
          Sứ mệnh của chúng tôi là <span className="blue">sắp xếp</span> thông tin của 
          <span className="red"> thế giới</span> và làm cho thông tin đó trở nên 
          <span className="green"> hữu ích</span> và
          <span className="orange"> dễ tiếp cận</span> cho tất cả mọi người.
        </p>
      </div>

      <div className="about-body">
        <img src="unnamed.png" alt="Mission Image" />
      </div>

      <div className="head3">
        <h3 className="head3-text">
          Xem thông tin mới nhất về sản phẩm, AI và thông báo của công ty
        </h3>
        <span className="learn-more">Tìm hiểu thêm</span>
      </div>

      <div className="head1">
        <h1 className="head1-text">
          Làm cho cuộc sống dễ dàng hơn với một chút trợ giúp từ các sản phẩm của chúng tôi
        </h1>
      </div>

      <div className="images-container">
        <div className="image-box">
          <img src="gg3.jpg" alt="Image 3" />
          <p className="image-description">Mọi sản phẩm của Google được thiết kế để giữ cho thông tin của bạn an toàn</p>
          <span className="learn-more">Tìm hiểu thêm</span>
        </div>
        <div className="image-box">
          <img src="gg4.jpg" alt="Image 4" />
          <p className="image-description">Giúp trẻ khám phá thế giới trực tuyến an toàn hơn cùng chương trình Be Internet Awesome</p>
          <span className="learn-more">Tìm hiểu thêm</span>
        </div>
      </div>

      <div className="head1">
        <h1 className="head1-text">
          Cam kết cải thiện đáng kể cuộc sống của càng nhiều người càng tốt
        </h1>
        <span className="camket">Xem các cam kết của chúng tôi</span>
      </div>

      <div className="images-container">
        <div className="image-box">
          <img src="gg1.jpg" alt="Image 1" />
          <p className="image-description">Chúng tôi bảo vệ người dùng bằng xử lý công nghệ hàng đầu và có trách nhiệm</p>
          <span className="learn-more">Tìm hiểu thêm</span>
        </div>
        <div className="image-box">
          <img src="gg2.jpg" alt="Image 2" />
          <p className="image-description">Học những kĩ năng phù hợp</p>
          <span className="learn-more">Tìm hiểu thêm</span>
        </div>
      </div>

      <div className="footer">
  <div className="footer-top">
    <div className="footer-follow">
      <span className="footer-follow-text">Theo dõi chúng tôi</span>
      <div className="footer-logos">
        <img src="facebook.jpeg" alt="FB" className="footer-logo" />
        <img src="ins.jpg" alt="Instagram" className="footer-logo" />
        <img src="x.jpg" alt="X" className="footer-logo" />
        <img src="yt.png" alt="YT" className="footer-logo" />
      </div>
    </div>
  </div>
  <div className="footer-divider"></div>
  <div className="footer-columns">
    <div className="footer-column">
      <h4>Xem thêm thông tin về chúng tôi</h4>
      <ul className="footer-links">
        <li>Liên hệ với chúng tôi</li>
        <li>Quan hệ với nhà đầu tư</li>
        <li>Nghề nghiệp</li>
        <li>Vị trí</li>
        <li>Blog</li>
        <li>Suy nghĩ cùng Google</li>
        <li>Trung tâm minh bạch</li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Trung tâm báo chí</h4>
      <ul className="footer-links">
        <li>Thông tin báo chí</li>
        <li>Hình ảnh và cảnh quay bổ sung</li>
        <li>Quyền</li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Chính sách</h4>
      <ul className="footer-links">
        <li>Bảo mật ứng dụng</li>
        <li>Nguyên tắc về phần mềm</li>
        <li>Chính sách về phần mềm không mong muốn</li>
        <li>Chuỗi cung ứng có trách nhiệm</li>
        <li>Lực lượng lao động mở rộng</li>
        <li>Nguyên tắc cộng đồng</li>
        <li>Cách hoạt động của doanh nghiệp chúng tôi</li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Trách nhiệm</h4>
      <ul className="footer-links">
        <li>Google.org</li>
        <li>Tính bền vững</li>
        <li>Ứng cứu sau khủng hoảng</li>
        <li>Đa dạng và hòa nhập</li>
        <li>Hỗ trợ tiếp cận</li>
        <li>Tính minh bạch</li>
        <li>Trung tâm an toàn</li>
      </ul>
    </div>
  </div>
  <div className="footer-divider"></div>
</div>
<div className="about-header">
        <div className="header-left">
          <img
            className="header-left img"
            src="https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751_1280.png"
            alt="Google Logo"
            onClick={handleHomeClick}
          />
           <a href="/about">Trợ giúp </a>
          <a href="/products">Bảo mật </a>
          <a href="/commitments">Điều khoản</a>
          
          
        </div>
      </div>

    </div>
  );
};

export default About;