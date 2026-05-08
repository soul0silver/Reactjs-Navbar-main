import { useEffect, useState } from "react";
import Product from "../components/Product";
import { searchProduct } from "../service/products/ProductService";
import BuyKey from "../components/BuyKey";

function Homepage() {
  const [products, setProducts] = useState([
    { id: 1, price: 15000, type: "GÓI CƠ BẢN" },
  ]);
  const [buy, setBuy] = useState();

  useEffect(() => {
    searchProduct().then((res) => {
      if (res?.status === 200) {
        setProducts(res?.data?.pageData);
      }
    });
  }, []);

  return (
      <>
        {buy && (
            <BuyKey
                product={buy}
                setBuy={setBuy}
                searchKey={() => {}}
                creteria={{}}
            />
        )}

        {/* HERO */}
        <div
            className="h-[700px] px-[95px] flex items-center"
            style={{ backgroundImage: "url('/ai4.png')" }}
        >
          <div className="lg:w-[700px]">
            <h3 className="special-head g-text">
              Giải pháp quản lý nhà sách hiện đại
            </h3>

            <h1 className="font-bold text-white text-[45px]">
              Quản lý cửa hàng sách dễ dàng và hiệu quả.
            </h1>

            <p className="g-text text-[18.5px]">
              Hệ thống hỗ trợ quản lý sách, kiểm kê kho, bán hàng và theo dõi
              doanh thu cho nhà sách. Giao diện thân thiện, thao tác nhanh chóng,
              phù hợp cho cả cửa hàng nhỏ và chuỗi nhà sách lớn.
            </p>
          </div>
        </div>

        {/* PRICE */}
      </>
  );
}

export default Homepage;