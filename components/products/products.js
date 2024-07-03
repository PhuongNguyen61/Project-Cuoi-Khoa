// Hiển thị giỏ hàng - user
let currentSignIn = localStorage.getItem('currentSignIn')
console.log(currentSignIn)
const act = document.getElementById('act')
if (currentSignIn) {
    currentSignIn = JSON.parse(currentSignIn)
    act.innerHTML = `
        <div class="cart">
            <a href="../cart/cart.html"">
                <img src="../../../public/icon/cart-shopping-svgrepo-com.svg" alt="" class="act-icon act-icon-cart">
                <div class="total" id="total">0</div>
            </a>
        </div>

        <div class="account">
            <img src="../../../public/icon/user-svgrepo-com.svg" alt="" class="act-icon">
            <div>${currentSignIn.username}</div>
        </div>
    `
}


// Hiển thị thông tin sản phẩm
const product = document.getElementById("product");
const productNumber = +localStorage.getItem("productNumber");
const productsInfor = JSON.parse(localStorage.getItem("products-infor") || "[]");
const findProduct = productsInfor.find((item) => +item.id === productNumber);
if (findProduct) {
    product.innerHTML = `
        <div class="frame1">
            <p>Trang chủ</p>
            <img src="../../public/icon/right-arrow-svgrepo-com.svg" alt="" class="frame1-img">
            <p>${findProduct.nameProduct}</p>
        </div>

        <div class="frame2">
            <div class="frame2-img">
                <img src="../${findProduct.imgProduct}" alt="">
            </div>

            <div class="frame2-act">
                <h1 class="frame2-title">${findProduct.nameProduct}</h1>
                <div class="frame2-row">
                    <div>
                        <p class="frame2-code-product">- Mã sản phẩm: ${findProduct.codeProduct}</p>
                        <p class="frame2-brand">- Thương hiệu: Trung Nguyên</p>
                        <p class="frame2-characteristic">- Đặc tính:</p>
                        <ul class="frame2-characteristic-content">${findProduct.characteristicProduct}</ul>
                    </div>

                    <div class="frame2-card-col">
                        <div class="frame2-card-row">
                            <h3 class="frame2-card-price">${findProduct.priceProduct}đ</h3>
                            <p class="frame2-card-score">${findProduct.scoreProduct}</p>
                            <img src="../../../public/icon/star-svgrepo-com.svg" alt="" class="frame2-card-star">
                        </div>

                        <div class="add-to-cart">Thêm vào giỏ hàng</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="frame3">
            <div class="frame3-desc">${findProduct.descProduct}</div>

            <div class="frame3-detail">
                <h2 class="frame3-detail-title">Chi tiết</h2>
                <table class="frame3-detail-table" cellspacing="0">
                    <tbody>
                        <tr>${findProduct.trRow1}</tr>
                        <tr>
                            <td>Thương hiệu</td>
                            <td>Trung Nguyên</td>
                        </tr>
                        <tr>
                            <td>Xuất xứ</td>
                            <td>Việt Nam</td>
                        </tr>
                        <tr>${findProduct.trRow4}</tr>
                        <tr>${findProduct.trRow5}</tr>
                        <tr>${findProduct.trRow6}</tr>
                        <tr>${findProduct.trRow7}</tr>
                    </tbody>
                </table>
            </div>
        </div>
    `        
}