var soLanThemNoiDung = 0;
var y = 0;
var z = 0;
var keoLenThem = function scrollWin(x, y) {
    window.scrollBy(x, y);
  }

var noiDungKhuyenMaiThemVao = `
<div class="col-12 col-sm-6 news__item">
                            <a href="#">
                                <img class="img-fluid"
                                    src="./img/bhd-59k-ve-ca-tuan-16045659414321.jpg"
                                    alt="">
                            </a>
                            <a class="news__title" href="#">
                                <p>BHD 59K/VÉ CẢ TUẦN !!! </p>
                            </a>
                            <p class="news__description">Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay. </p>
                            <a href="#" class="news__icon"><i class="fa fa-thumbs-up"></i> 1</a>
                            <a href="#" class="news__icon"><i class="fa fa-comment-alt"></i> 1</a>
                        </div>
                        <div class="col-12 col-sm-6 news__item">
                            <a href="#">
                                <img class="img-fluid"
                                    src="./img/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg"
                                    alt="">
                            </a>
                            <a class="news__title" href="#">
                                <p>TIX 1K/VÉ NGẠI CHI GIÁ VÉ </p>
                            </a>
                            <p class="news__description">Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga </p>
                            <a href="#" class="news__icon"><i class="fa fa-thumbs-up"></i> 1</a>
                            <a href="#" class="news__icon"><i class="fa fa-comment-alt"></i> 1</a>
                        </div>
                        <div class="col-12 col-sm-4 news__item">
                            <a href="#">
                                <img class="img-fluid"
                                    src="./img/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png"
                                    alt="">
                            </a>
                            <a class="news__title" href="#">
                                <p>ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX  </p>
                            </a>
                            <p class="news__description">ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX 

                                Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX. </p>
                            <a href="#" class="news__icon"><i class="fa fa-thumbs-up"></i> 1</a>
                            <a href="#" class="news__icon"><i class="fa fa-comment-alt"></i> 1</a>
                        </div>
                        <div class="col-12 col-sm-4 news__item">
                            <a href="#">
                                <img class="img-fluid"
                                    src="./img/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg"
                                    alt="">
                            </a>
                            <a class="news__title" href="#">
                                <p>BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN! </p>
                            </a>
                            <p class="news__description">Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay. </p>
                            <a href="#" class="news__icon"><i class="fa fa-thumbs-up"></i> 1</a>
                            <a href="#" class="news__icon"><i class="fa fa-comment-alt"></i> 1</a>
                        </div>
                        <div class="col-12 col-sm-4 news__item">
                            <div class="row">
                                <div class="col-12 news__last">
                                    <div class="row">
                                        <div class="col-2 col-sm-4 col-lg-3 news__small">
                                            <a href="#">
                                                <img class="img-fluid"
                                                    src="./img/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png"
                                                    alt="">
                                            </a>
                                        </div>
                                        <div class="col-10 col-sm-8 col-lg-9 news__small">
                                            <a class="news__title" href="#">
                                                <p class="hiding">Beta Cineplex trở lại với hàng loạt ưu đãi lớn </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 news__last">
                                    <div class="row">
                                        <div class="col-2 col-sm-4 col-lg-3 news__small">
                                            <a href="#">
                                                <img class="img-fluid"
                                                    src="./img/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg"
                                                    alt="">
                                            </a>
                                        </div>
                                        <div class="col-10 col-sm-8 col-lg-9 news__small">
                                            <a class="news__title" href="#">
                                                <p class="hiding">[123Phim] Thứ 6 Không Đen Tối -  Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 news__last">
                                    <div class="row">
                                        <div class="col-2 col-sm-4 col-lg-3 news__small">
                                            <a href="#">
                                                <img class="img-fluid"
                                                    src="./img/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg"
                                                    alt="">
                                            </a>
                                        </div>
                                        <div class="col-10 col-sm-8 col-lg-9 news__small">
                                            <a class="news__title" href="#">
                                                <p class="hiding">[123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 news__last">
                                    <div class="row">
                                        <div class="col-2 col-sm-4 col-lg-3 news__small">
                                            <a href="#">
                                                <img class="img-fluid"
                                                    src="./img/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg"
                                                    alt="">
                                            </a>
                                        </div>
                                        <div class="col-10 col-sm-8 col-lg-9 news__small">
                                            <a class="news__title" href="#">
                                                <p class="hiding">[Mega GS] Một đoá hoa thay ngàn lời yêu </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
`;

document.querySelector('#btnXemThemDienAnh').onclick = function () {

    var noiDungDienAnhThemVao = `
<div id="dienAnhNews${soLanThemNoiDung}" class="row">
                            <div class="col-12 col-sm-6 news__item">
                                <a href="#">
                                    <img class="img-fluid"
                                        src="./img/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png"
                                        alt="">
                                </a>
                                <a class="news__title" href="#">
                                    <p>Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu </p>
                                </a>
                                <p class="news__description">Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu
                                    lạc
                                    bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim
                                    cũng
                                    lần đầu tiên hội tụ đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng của
                                    tác
                                    phẩm. </p>
                                <a href="#" class="news__icon"><i class="fa fa-thumbs-up"></i> 1</a>
                                <a href="#" class="news__icon"><i class="fa fa-comment-alt"></i> 1</a>
                            </div>
                            <div class="col-12 col-sm-6 news__item">
                                <a href="#">
                                    <img class="img-fluid"
                                        src="./img/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg"
                                        alt="">
                                </a>
                                <a class="news__title" href="#">
                                    <p>NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC CHO SIÊU ANH HÙNG
                                        ĐẦU
                                        TIÊN CỦA VIỆT NAM – VINAMAN </p>
                                </a>
                                <p class="news__description">Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã
                                    chính
                                    thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng VINAMAN với tổng giá
                                    trị
                                    giải thưởng lên đến 60 triệu đồng. </p>
                                <a href="#" class="news__icon"><i class="fa fa-thumbs-up"></i> 1</a>
                                <a href="#" class="news__icon"><i class="fa fa-comment-alt"></i> 1</a>
                            </div>
                            <div class="col-12 col-sm-4 news__item">
                                <a href="#">
                                    <img class="img-fluid"
                                        src="./img/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png"
                                        alt="">
                                </a>
                                <a class="news__title" href="#">
                                    <p>[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại
                                        Kinh Hoàng </p>
                                </a>
                                <p class="news__description">Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác
                                    những
                                    mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất
                                    đã
                                    làm nên thành công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”,
                                    và
                                    còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante </p>
                                <a href="#" class="news__icon"><i class="fa fa-thumbs-up"></i> 1</a>
                                <a href="#" class="news__icon"><i class="fa fa-comment-alt"></i> 1</a>
                            </div>
                            <div class="col-12 col-sm-4 news__item">
                                <a href="#">
                                    <img class="img-fluid"
                                        src="./img/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png"
                                        alt="">
                                </a>
                                <a class="news__title" href="#">
                                    <p> TENET công bố ngày khởi chiếu chính thức tại Việt Nam </p>
                                </a>
                                <p class="news__description">Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra
                                    thông
                                    báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bên ngoài Bắc
                                    Mỹ,
                                    trong đó có Việt Nam. </p>
                                <a href="#" class="news__icon"><i class="fa fa-thumbs-up"></i> 1</a>
                                <a href="#" class="news__icon"><i class="fa fa-comment-alt"></i> 1</a>
                            </div>
                            <div class="col-12 col-sm-4 news__item">
                                <div class="row">
                                    <div class="col-12 news__last">
                                        <div class="row">
                                            <div class="col-2 col-sm-4 col-lg-3 news__small">
                                                <a href="#">
                                                    <img class="img-fluid"
                                                        src="./img/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png"
                                                        alt="">
                                                </a>
                                            </div>
                                            <div class="col-10 col-sm-8 col-lg-9 news__small">
                                                <a class="news__title" href="#">
                                                    <p class="hiding"> Dàn mỹ nhân trong thế giới điện ảnh của
                                                        quái
                                                        kiệt Christopher Nolan </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 news__last">
                                        <div class="row">
                                            <div class="col-2 col-sm-4 col-lg-3 news__small">
                                                <a href="#">
                                                    <img class="img-fluid"
                                                        src="./img/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png"
                                                        alt="">
                                                </a>
                                            </div>
                                            <div class="col-10 col-sm-8 col-lg-9 news__small">
                                                <a class="news__title" href="#">
                                                    <p class="hiding"> Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông
                                                        hoàng
                                                        phòng vé' xứ Hàn </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 news__last">
                                        <div class="row">
                                            <div class="col-2 col-sm-4 col-lg-3 news__small">
                                                <a href="#">
                                                    <img class="img-fluid"
                                                        src="./img/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png"
                                                        alt="">
                                                </a>
                                            </div>
                                            <div class="col-10 col-sm-8 col-lg-9 news__small">
                                                <a class="news__title" href="#">
                                                    <p class="hiding"> 6 đạo diễn tỉ đô làm nên thành công của những
                                                        bom
                                                        tấn đình đám nhất Hollywood </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 news__last">
                                        <div class="row">
                                            <div class="col-2 col-sm-4 col-lg-3 news__small">
                                                <a href="#">
                                                    <img class="img-fluid"
                                                        src="./img/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-15965999321682.png"
                                                        alt="">
                                                </a>
                                            </div>
                                            <div class="col-10 col-sm-8 col-lg-9 news__small">
                                                <a class="news__title" href="#">
                                                    <p class="hiding"> Gái Già Lắm Chiêu V – Những cuộc đời vương giả
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
`;

    var dienAnhContent = document.querySelector('#dienAnhContent').innerHTML;

    document.querySelector('#dienAnhContent').innerHTML = dienAnhContent + noiDungDienAnhThemVao;

    document.getElementById('dienAnhNews' + soLanThemNoiDung).scrollIntoView();

    // keoLenThem(0, -50);

    soLanThemNoiDung += 1;
}

document.querySelector('#btnXemThemReview').onclick = function () {
    var noiDungReviewThemVao = `
<div class="col-12 col-sm-6 news__item">
                            <a href="#">
                                <img class="img-fluid"
                                    src="./img/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
                                    alt="">
                            </a>
                            <a class="news__title" href="#">
                                <p>Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết </p>
                            </a>
                            <p class="news__description">Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám </p>
                            <a href="#" class="news__icon"><i class="fa fa-thumbs-up"></i> 1</a>
                            <a href="#" class="news__icon"><i class="fa fa-comment-alt"></i> 1</a>
                        </div>
                        <div class="col-12 col-sm-6 news__item">
                            <a href="#">
                                <img class="img-fluid"
                                    src="./img/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
                                    alt="">
                            </a>
                            <a class="news__title" href="#">
                                <p>Review: Dinh Thự Oan Khuất (Ghost Of War) </p>
                            </a>
                            <p class="news__description">Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé! </p>
                            <a href="#" class="news__icon"><i class="fa fa-thumbs-up"></i> 1</a>
                            <a href="#" class="news__icon"><i class="fa fa-comment-alt"></i> 1</a>
                        </div>
                        <div class="col-12 col-sm-4 news__item">
                            <a href="#">
                                <img class="img-fluid"
                                    src="./img/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
                                    alt="">
                            </a>
                            <a class="news__title" href="#">
                                <p>‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh </p>
                            </a>
                            <p class="news__description">Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay. </p>
                            <a href="#" class="news__icon"><i class="fa fa-thumbs-up"></i> 1</a>
                            <a href="#" class="news__icon"><i class="fa fa-comment-alt"></i> 1</a>
                        </div>
                        <div class="col-12 col-sm-4 news__item">
                            <a href="#">
                                <img class="img-fluid"
                                    src="./img/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
                                    alt="">
                            </a>
                            <a class="news__title" href="#">
                                <p>American Sniper - Chính nghĩa hay phi nghĩa? </p>
                            </a>
                            <p class="news__description">American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim chậm rãi đưa người xem qua từng thời khắc khác nhau của Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng... </p>
                            <a href="#" class="news__icon"><i class="fa fa-thumbs-up"></i> 1</a>
                            <a href="#" class="news__icon"><i class="fa fa-comment-alt"></i> 1</a>
                        </div>
                        <div class="col-12 col-sm-4 news__item">
                            <div class="row">
                                <div class="col-12 news__last">
                                    <div class="row">
                                        <div class="col-2 col-sm-4 col-lg-3 news__small">
                                            <a href="#">
                                                <img class="img-fluid"
                                                    src="./img/review-spider-man-into-the-spider-vesre-15886520889426.png"
                                                    alt="">
                                            </a>
                                        </div>
                                        <div class="col-10 col-sm-8 col-lg-9 news__small">
                                            <a class="news__title" href="#">
                                                <p class="hiding">Review: Spider-Man: Into The Spider-Vesre </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 news__last">
                                    <div class="row">
                                        <div class="col-2 col-sm-4 col-lg-3 news__small">
                                            <a href="#">
                                                <img class="img-fluid"
                                                    src="./img/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg"
                                                    alt="">
                                            </a>
                                        </div>
                                        <div class="col-10 col-sm-8 col-lg-9 news__small">
                                            <a class="news__title" href="#">
                                                <p class="hiding">COVID-19 là bản chính thức của MEV-1 phim contagion (2011) </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 news__last">
                                    <div class="row">
                                        <div class="col-2 col-sm-4 col-lg-3 news__small">
                                            <a href="#">
                                                <img class="img-fluid"
                                                    src="./img/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg"
                                                    alt="">
                                            </a>
                                        </div>
                                        <div class="col-10 col-sm-8 col-lg-9 news__small">
                                            <a class="news__title" href="#">
                                                <p class="hiding">[Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ lầy lội và hài hước đến thế </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 news__last">
                                    <div class="row">
                                        <div class="col-2 col-sm-4 col-lg-3 news__small">
                                            <a href="#">
                                                <img class="img-fluid"
                                                    src="./img/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg"
                                                    alt="">
                                            </a>
                                        </div>
                                        <div class="col-10 col-sm-8 col-lg-9 news__small">
                                            <a class="news__title" href="#">
                                                <p class="hiding">[Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh hùng Valiant </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
`;
    var reviewContent = document.querySelector('#reviewContent').innerHTML;

    document.querySelector('#reviewContent').innerHTML = reviewContent + noiDungReviewThemVao;
}

document.querySelector('#btnXemThemKhuyenMai').onclick = function () {

    var khuyenMaiContent = document.querySelector('#khuyenMaiContent').innerHTML;

    document.querySelector('#khuyenMaiContent').innerHTML = khuyenMaiContent + noiDungKhuyenMaiThemVao;
}

