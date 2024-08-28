import { GoHome } from "react-icons/go";
import { MdOutlineDoneAll } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";

// Nav [a] Links  Data.......................
export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Books",
    path: "/products",
  },
  {
    name: "News Book",
    path: "/newsProducts",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
export const navLinksMobile = [
  {
    name: "Home",
    path: "/",
    icon: GoHome,
  },
  {
    name: "All Books",
    path: "/products",
    icon: MdOutlineDoneAll,
  },
  {
    name: "News Book",
    path: "/newsProducts",
    icon: FaBook,
  },
  {
    name: "Blogs",
    path: "/blogs",
    icon: FaRegPenToSquare,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: GrContact,
  },
];
//  Featured Books Data.......................
import FeaturedBooks1 from "../assets/FeaturedBooks/FeaturedBook1.jpg";
import FeaturedBooks2 from "../assets/FeaturedBooks/FeaturedBook2.jpg";
import FeaturedBooks3 from "../assets/FeaturedBooks/FeaturedBook3.jpg";
import FeaturedBooks4 from "../assets/FeaturedBooks/FeaturedBook4.jpg";
import FeaturedBooks5 from "../assets/FeaturedBooks/FeaturedBook5.jpg";
import FeaturedBooks6 from "../assets/FeaturedBooks/FeaturedBook6.jpg";
export const featuredBooksData = [
  {
    id: 1,
    img: FeaturedBooks1,
    imgLlink: "*",
    nameLink: "*",
    name: "Tết ở làng địa ngục",
    writer: "Thảo Trang",
    desc: "Vòng tròn 12 cung Hoàng đạo bao gồm Bạch Dương, Kim Ngưu, Song Tử, Cự Giải, Sư Tử, Xử Nữ, Thiên Bình, Thiên Yết, Nhân Mã, Ma Kết, Bảo Bình, Song Ngư. Theo đó, mỗi một cung ứng với một Chòm Sao chiếu mệnh tạo nên 12 tính cách đa dạng, phong phú, không hòa quyện, không trộn lẫn. Dựa vào cung hoàng đạo tương ứng với ngày sinh nhật của mỗi người, ngoài việc đoán được tính cách của mỗi người, các nhà chiêm tinh học còn có thể dự đoán được một phần nào đó tương lai của họ trong một năm.",
  },
  {
    id: 2,
    img: FeaturedBooks2,
    imgLlink: "*",
    nameLink: "*",
    name: "Những vụ án kỳ bí",
    writer: "Diên Bắc Lão Cửu",
    desc: "Vòng tròn 12 cung Hoàng đạo bao gồm Bạch Dương, Kim Ngưu, Song Tử, Cự Giải, Sư Tử, Xử Nữ, Thiên Bình, Thiên Yết, Nhân Mã, Ma Kết, Bảo Bình, Song Ngư. Theo đó, mỗi một cung ứng với một Chòm Sao chiếu mệnh tạo nên 12 tính cách đa dạng, phong phú, không hòa quyện, không trộn lẫn. Dựa vào cung hoàng đạo tương ứng với ngày sinh nhật của mỗi người, ngoài việc đoán được tính cách của mỗi người, các nhà chiêm tinh học còn có thể dự đoán được một phần nào đó tương lai của họ trong một năm.",
  },
  {
    id: 3,
    img: FeaturedBooks3,
    imgLlink: "*",
    nameLink: "*",
    name: "Mật mã con gái",
    writer: "Nguyên Kinh",
    desc: "Vòng tròn 12 cung Hoàng đạo bao gồm Bạch Dương, Kim Ngưu, Song Tử, Cự Giải, Sư Tử, Xử Nữ, Thiên Bình, Thiên Yết, Nhân Mã, Ma Kết, Bảo Bình, Song Ngư. Theo đó, mỗi một cung ứng với một Chòm Sao chiếu mệnh tạo nên 12 tính cách đa dạng, phong phú, không hòa quyện, không trộn lẫn. Dựa vào cung hoàng đạo tương ứng với ngày sinh nhật của mỗi người, ngoài việc đoán được tính cách của mỗi người, các nhà chiêm tinh học còn có thể dự đoán được một phần nào đó tương lai của họ trong một năm.",
  },
  {
    id: 4,
    img: FeaturedBooks4,
    imgLlink: "*",
    nameLink: "*",
    name: "Khí chất không mất tiền mua",
    writer: "Trần Thị Khánh An",
    desc: "Vòng tròn 12 cung Hoàng đạo bao gồm Bạch Dương, Kim Ngưu, Song Tử, Cự Giải, Sư Tử, Xử Nữ, Thiên Bình, Thiên Yết, Nhân Mã, Ma Kết, Bảo Bình, Song Ngư. Theo đó, mỗi một cung ứng với một Chòm Sao chiếu mệnh tạo nên 12 tính cách đa dạng, phong phú, không hòa quyện, không trộn lẫn. Dựa vào cung hoàng đạo tương ứng với ngày sinh nhật của mỗi người, ngoài việc đoán được tính cách của mỗi người, các nhà chiêm tinh học còn có thể dự đoán được một phần nào đó tương lai của họ trong một năm.",
  },
  {
    id: 5,
    img: FeaturedBooks5,
    imgLlink: "*",
    nameLink: "*",
    name: "Giải mã 12 cung hoàng đạo",
    writer: "Ban biên tập Waka",
    desc: "Vòng tròn 12 cung Hoàng đạo bao gồm Bạch Dương, Kim Ngưu, Song Tử, Cự Giải, Sư Tử, Xử Nữ, Thiên Bình, Thiên Yết, Nhân Mã, Ma Kết, Bảo Bình, Song Ngư. Theo đó, mỗi một cung ứng với một Chòm Sao chiếu mệnh tạo nên 12 tính cách đa dạng, phong phú, không hòa quyện, không trộn lẫn. Dựa vào cung hoàng đạo tương ứng với ngày sinh nhật của mỗi người, ngoài việc đoán được tính cách của mỗi người, các nhà chiêm tinh học còn có thể dự đoán được một phần nào đó tương lai của họ trong một năm.",
  },
  {
    id: 6,
    img: FeaturedBooks6,
    imgLlink: "*",
    nameLink: "*",
    name: "Tiểu sử Elon Musk",
    writer: "Walter Isaacson",
    desc: "Vòng tròn 12 cung Hoàng đạo bao gồm Bạch Dương, Kim Ngưu, Song Tử, Cự Giải, Sư Tử, Xử Nữ, Thiên Bình, Thiên Yết, Nhân Mã, Ma Kết, Bảo Bình, Song Ngư. Theo đó, mỗi một cung ứng với một Chòm Sao chiếu mệnh tạo nên 12 tính cách đa dạng, phong phú, không hòa quyện, không trộn lẫn. Dựa vào cung hoàng đạo tương ứng với ngày sinh nhật của mỗi người, ngoài việc đoán được tính cách của mỗi người, các nhà chiêm tinh học còn có thể dự đoán được một phần nào đó tương lai của họ trong một năm.",
  },
];
