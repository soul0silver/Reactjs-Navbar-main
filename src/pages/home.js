import { useEffect, useState } from "react";
import Product from "../components/Product";
import { searchProduct } from "../service/products/ProductService";
import BuyKey from "../components/BuyKey";

function Homepage() {
  const [products, setProducts] =useState([{id:1, price:15000, type:'KEY THƯỜNG'}]);
  const [buy, setBuy] = useState();

  useEffect(()=>{
    searchProduct().then(res => {
      if (res?.status === 200)
        setProducts(res?.data?.pageData)
    })
  },[])

  return (
    <>
      {buy && <BuyKey product={buy} setBuy={setBuy}/>}
      <div className="p-5 text-center rounded-2xl">
        <h1 className="font-bold">BẢNG GIÁ</h1>
        <span>Chúng tôi cung cấp các sản phẩm đáp ứng nhu cầu khác nhau của bạn.</span>

        <div>
        <div className="flex gap-5 items-center justify-center">
          {
            products.map((p, i)=> <><Product key={i}  product={p} buyKey={setBuy}/></>)
          }
        </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
