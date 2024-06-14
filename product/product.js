// const (tạo biến) bigI(biến) document(tài liệu) queryselecctor(trỏ đến file tài liệu đấy)
const bigImg = document.querySelector(".product-img-big img")
// all ( trỏ đến từng ảnh trong file)
const smalImg = document.querySelectorAll(".product-img-small img")
// tạo function để tái sử dụng
smalImg.forEach(function(imgItem,X){
    // addEventListener giống hover gán fucction
    imgItem.addEventListener("click",function(){
        // big trỏ đến cái item
        bigImg.src = imgItem.src
    })
})







