export default function Subheader({page}){
  return <div className="w-full overflow-hidden relative h-[400px] text-center flex flex-col items-center justify-center "
        style={{ backgroundImage: "linear-gradient(182deg, #469eff 0%, #2f69ff 100%)" }}>
        <div className="absolute w-full h-full top-0 left-0 opacity-[0.2] z-[1] sub-header"
          style={{background: "url('/map.svg') top no-repeat"}}>
            
        </div>
        <span className="uppercase relative font-bold text-[25pt] z-[20] text-white">{page}</span>
      </div>
}