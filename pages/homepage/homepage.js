const productInforFrame1 = [
  {
    id: 1,
    src: "../img/rangsayi.png",
    frame1CateItemTitle: "Cà Phê I - Khát Vọng Khởi Nghiệp",
    frame1ProductCardPrice: "80.000đ",
    frame1ProductCardScore: "4.8",
  },
  {
    id: 2,
    src: "../img/rangsaynau.png",
    frame1CateItemTitle: "Cà Phê S - Chinh Phục Thành Công",
    frame1ProductCardPrice: "90.000đ",
    frame1ProductCardScore: "4.9",
  },
  {
    id: 3,
    src: "../img/rangsays.png",
    frame1CateItemTitle: "Cà Phê Nâu - Sức Sống Đại Ngàn",
    frame1ProductCardPrice: "100.000đ",
    frame1ProductCardScore: "5.0",
  },
];
const frame1Item = document.getElementById("frame1-item");

for (let i = 0; i < productInforFrame1.length; i++) {
  frame1Item.innerHTML += `
    <div class="frame1-col">
                        <a href="">
                            <div class="frame1-cate-item">
                                <div class="frame1-cate-img">
                                    <img src="${productInforFrame1[i].src}" alt="" class="frame1-img">
                                </div>

                                <div class="frame1-cate-item-info">
                                    <h3 class="frame1-cate-item-title">${productInforFrame1[i].frame1CateItemTitle}</h3>
                                    <div class="frame1-product-card-row">
                                        <p class="frame1-product-card-price">${productInforFrame1[i].frame1ProductCardPrice}</p>
                                        <p class="frame1-product-card-score">${productInforFrame1[i].frame1ProductCardScore}</p>
                                        <img src="../icon/star-svgrepo-com.svg" alt="" class="frame1-product-card-star">
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                        `;
}

// Frame2
const productInforFrame2 = [
  {
    id: 4,
    src: "../img/sangtao1.png",
    frame2CateItemTitle: "Sáng Tạo 1",
    frame2CateItemContent: "Thơm dịu nhẹ, vị đậm đà",
    frame2ProductCardPrice: "85.000 VNĐ",
    frame2ProductCardScore: "4.7",
  },
  {
    id: 5,
    src: "../img/sangtao2.png",
    frame2CateItemTitle: "Sáng Tạo 2",
    frame2CateItemContent: "Thơm dịu nhẹ, vị hài hòa",
    frame2ProductCardPrice: "90.000 VNĐ",
    frame2ProductCardScore: "4.9",
  },
  {
    id: 6,
    src: "../img/sangtao3.png",
    frame2CateItemTitle: "Sáng Tạo 3",
    frame2CateItemContent: "Rất thơm, vị đắng nhẹ, chua thanh",
    frame2ProductCardPrice: "95.000 VNĐ",
    frame2ProductCardScore: "4.8",
  },
  {
    id: 7,
    src: "../img/sangtao4.png",
    frame2CateItemTitle: "Sáng Tạo 4",
    frame2CateItemContent: "Thơm lâu, vị cân bằng, thế chất đậm",
    frame2ProductCardPrice: "100.000 VNĐ",
    frame2ProductCardScore: "5.0",
  },
];

const frame2Item = document.getElementById("frame2-item");

for (let i = 0; i < productInforFrame2.length; i++) {
  frame2Item.innerHTML += `
    <div class="frame2-col">
                        <a href="../product/product.html">
                            <div class="frame2-cate-item">
                                <img src="${productInforFrame2[i].src}" alt="" class="frame2-img">
                                <div class="frame2-cate-item-info">
                                    <h3 class="frame2-cate-item-title">${productInforFrame2[i].frame2CateItemTitle}</h3>
                                    <p class="frame2-cate-item-content">${productInforFrame2[i].frame2CateItemContent}</p>
                                    <div class="frame2-product-card-row">
                                        <p class="frame2-product-card-price">${productInforFrame2[i].frame2ProductCardPrice}</p>
                                        <p class="frame2-product-card-score">${productInforFrame2[i].frame2ProductCardScore}</p>
                                        <img src="../icon/star-svgrepo-com.svg" alt="" class="frame2-product-card-star">
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
    `;
}

// frame3;
const productInforFrame3 = [
  {
    id: 8,
    src: "../img/chephin1.png",
    frame3CateItemTitle: "Chế Phin 1",
    frame3CateItemContent: "Thơm dịu nhẹ, vị đậm đà",
    frame3ProductCardPrice: "85.000 VNĐ",
    frame3ProductCardScore: "4.7",
  },
  {
    id: 9,
    src: "../img/chephin2.png",
    frame3CateItemTitle: "Chế Phin 2",
    frame3CateItemContent: "Thơm dịu nhẹ, vị hài hòa",
    frame3ProductCardPrice: "90.000 VNĐ",
    frame3ProductCardScore: "4.9",
  },
  {
    id: 10,
    src: "../img/chephin3.png",
    frame3CateItemTitle: "Chế Phin 3",
    frame3CateItemContent: "Rất thơm, vị đắng nhẹ, chua thanh",
    frame3ProductCardPrice: "95.000 VNĐ",
    frame3ProductCardScore: "4.8",
  },
  {
    id: 11,
    src: "../img/chephin4.png",
    frame3CateItemTitle: "Chế phin 4",
    frame3CateItemContent: "Thơm lâu, vị cân bằng, thế chất đậm",
    frame3ProductCardPrice: "100.000 VNĐ",
    frame3ProductCardScore: "5.0",
  },
];
const frame3Item = document.getElementById("frame3-item");

for (let i = 0; i < productInforFrame3.length; i++) {
  frame3Item.innerHTML += `
  <div class="frame3-col">
                        <a href="">
                            <div class="frame3-cate-item">
                                <img src="${productInforFrame3[i].src}" alt="" class="frame3-img">
                                <div class="frame3-cate-item-info">
                                    <h3 class="frame3-cate-item-title">${productInforFrame3[i].frame3CateItemTitle}</h3>
                                    <p class="frame3-cate-item-content">${productInforFrame3[i].frame3CateItemContent}</p>
                                    <div class="frame3-product-card-row">
                                        <p class="frame3-product-card-price">${productInforFrame3[i].frame3ProductCardPrice}</p>
                                        <p class="frame3-product-card-score">${productInforFrame3[i].frame3ProductCardScore}</p>
                                        <img src="../icon/star-svgrepo-com.svg" alt="" class="frame3-product-card-star">
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
    `;
}
