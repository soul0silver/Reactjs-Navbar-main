import { useEffect, useState } from "react";
import Product from "../components/Product";
import { searchProduct } from "../service/products/ProductService";
import BuyKey from "../components/BuyKey";

function Homepage() {
  const [products, setProducts] = useState([{ id: 1, price: 15000, type: 'KEY THƯỜNG' }]);
  const [buy, setBuy] = useState();

  useEffect(() => {
    searchProduct().then(res => {
      if (res?.status === 200)
        setProducts(res?.data?.pageData)
    })
  }, [])

  return (
    <>
      {buy && <BuyKey product={buy} setBuy={setBuy} searchKey={() => { }} creteria={{}} />}
      <div className="h-[700px] px-[95px] flex items-center" style={{ backgroundImage: "url('/ai4.png')" }}>
        <div className="lg:w-[650px]">
          <h3 className="special-head g-text">Proxy dân cư - chìa khóa cho sự thành công của bạn!</h3>
          <h1
            className="font-bold text-white text-[45px]"
          >
            An toàn trực tuyến, kết nối mọi nơi.
          </h1>
          <p
            className="g-text text-[18.5px]"
          >
            Live proxy cung cấp dịch vụ proxy dân cư, proxy xoay hàng đầu Việt Nam. Cụm
            server proxy trải khắp các tỉnh thành trên toàn quốc. Chất lượng Internet ổn
            định, giá thành rẻ.
          </p>
        </div>
      </div>

      <div className="p-5 text-center rounded-2xl">
        <div className="pb-[80px]">
          <h1 className="font-bold text-[20pt] text-[#142d76]">BẢNG GIÁ</h1>
          <span className="text-[#8c8b91] text-[13pt]">Chúng tôi cung cấp các sản phẩm đáp ứng nhu cầu khác nhau của bạn.</span>
        </div>
        <div>
          <div className="flex gap-5 items-center justify-center lg:flex-row flex-col">
            {
              products.map((p, i) => <><Product key={i} product={p} buyKey={setBuy} /></>)
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
