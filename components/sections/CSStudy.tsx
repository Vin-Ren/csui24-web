"use client";
const CSStudy = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-white text-[3.4rem]">CStudy</h1>
      <div className="py-28 flex justify-center px-20">
        <div className="bg-[#5C5757] bg-opacity-60 flex flex-col items-center justify-center rounded-2xl">
          <p className="text-white text-2xl px-20 py-16 max-w-[45rem] text-center max-sm:text-xl max-sm:px-14">
            Deskripsi singkat Lorem ipsum dolor sit amet, consectetur
            adipiscingelit.
            <br /> Aenean ut turpis sed dui rutrum facilisis. Sed eget consequat
            magna.
          </p>
          <div className="pb-16">
            <button
              className="bg-[#D9D9D9] px-16 py-6 max-sm:text-xl max-sm:py-4 max-sm:px-12 rounded-xl text-black text-2xl"
              onClick={() =>
                window.open(
                  "https://lava-pest-110.notion.site/CSUI-24-Official-Notion-10c5dfbd0488805da8d0e363d22fcdcf",
                  "_blank"
                )
              }
            >
              See Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSStudy;
