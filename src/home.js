import React from 'react'

export default function Home() {
    return (
        <div>
            <div className="text-center"  >
                <h3>Welcome to Gaming Noise!</h3>
            </div>

            <div className="container mt-12">
                <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/1.jpg" class="d-block w-100" height="600" />
          </div>
          <div class="carousel-item">
            <img src="./images/2.jpg" class="d-block w-100"  height="600" />
          </div>
          <div class="carousel-item">
            <img src="./images/3.jpg" class="d-block w-100"  height="600" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="row">
                    <div className=" bg-danger"><h1>About Me</h1>
                        <p>ภารกิจของ Gaming Noise! คือการพัฒนาผลิตภัณฑ์เกมสำหรับเกมเมอร์ทุกประเภท เช่น ชุดหูฟัง คีย์บอร์ด เมาส์ อุปกรณ์เสริมการชาร์จสำหรับเครื่องเล่นคอนโซล และแผ่นรองเมาส์ สำหรับชุมชนเกมและอื่นๆ แบรนด์ Gaming Noise! ที่ได้รับรางวัลเป็นที่รู้จักกันดีในด้านการนำเสนอผลิตภัณฑ์ที่ให้ความสะดวกสบาย ความสวยงาม ประสิทธิภาพ และความน่าเชื่อถือที่เหนือกว่าอย่างต่อเนื่องอุปกรณ์ Gaming Noise! เป็นตัวเลือกของคนดัง เกมเมอร์มืออาชีพ และผู้ที่ชื่นชอบเทคโนโลยีทั่วโลก </p></div>
                </div>
                </div>
            </div>
    )


}