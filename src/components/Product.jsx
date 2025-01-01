export default function Product({ product, buyKey }) {
  return <>
    <div className={!product?.name?.includes('VIP')?
    "flex flex-col items-center justify-between gap-7 w-[423px] py-[20px] h-[718px]"
      :'special-key py-[30px] w-[423px] h-[718px]'
  } 
    >
      <div><span className="uppercase text-[#bdcde6]">{product?.name}</span></div>
      <div>
        <img className="w-[160px]" src="/server.png" alt="" />
      </div>
      <div>
        <h1
        className="text-blue-500 font-bold"
          style={{ fontFamily: '"Tahoma", sans-serif', fontSize: '2.5rem' }}>
            {product.price} VND
            </h1>
        <br />
        <span className="text-[#888]"
          style={{fontSize:'16px', fontWeight:'400'}}
        >Per key</span>
      </div>
      <div>
        <div 
        className="text-center h-[243px] w-[270px]">{product?.description?.split('\n').map(t=><p>{t}</p>)}</div>
      </div>
      <div>
        <button
          className="py-[8px] px-10 rounded-lg text-white"
          style={{ backgroundImage: 'linear-gradient(to right, #1dacff 0%, #0067da 51%, #1dacff 100%)' }}
          onClick={() => buyKey(product)} >MUA KEY</button>
      </div>
    </div>
  </>
}