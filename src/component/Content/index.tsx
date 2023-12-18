

const Content = () => {
  return (
    <div className="p-10  h-[850px] bg-white  shadow-lg shadow-black">
        <div className="text-[30px] font-medium text-blue-800">HOANG CONG</div>
        <div className="text-[30px] font-normal  text-blue-800">HOA</div>
        <div className="text-blue-800">WEB DEVELOPER</div>
        <div className="about">
          <h2 className="mt-28 font-medium my-5">ABOUT ME</h2>
          <div className="w-[380px] text-gray-500">Hoang Cong Hoa was born in 2003. Currently majoring in Information Technology at Da Nang University of Architecture</div>
        </div>
        <div className="education text-gray-500">
          <h2 className="my-5 font-medium text-black">EDUCATION</h2>
          <div className="flex gap-10 ">
            <div className="w-[250px] font-normal">Da Nang University of Architecture</div>
            <div>2021-2025</div>
          </div>
          <div className="flex gap-10">
            <div className="w-[250px] font-normal">Softech Aptech</div>
            <div>2023-2024</div>
          </div>
        </div>
        <div className="workspace text-gray-500">
          <h2 className="my-5 text-black font-medium">WORK EXPERIENCE</h2>
          <div className="flex gap-10">
              <div className="font-normal w-[250px]">Wait staff at the restaurant</div>
              <div>2021-2023</div>
          </div>
        </div>
    </div>
  )
}

export default Content