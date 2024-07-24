import { useEffect } from "react";
import useGetData from "../hooks/useGetData";

const NewsFeed = () => {
  const { error, isLoading, data, getData } = useGetData();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-black py-8 ">
      <div className="container">
        
        <div className=" p-4  outline outline-1 bg-stone-950 rounded-xl min-h-[100vh] flex flex-col gap-14">
          {data &&
            data.items?.map((news) => (
              <section
                key={news.id}
                className="text-white flex gap-4  rounded-lg outline outline-1 outline-zinc-900 p-4"
              >
                <img
                  src={news.image}
                  alt="News Banner"
                  width={200}
                  className="rounded-lg"
                />
                <div className="flex flex-col justify-between object-fit">
                  <h2 className="text-md font-semibold tracking-wide text-zinc-200">
                    {news.title}
                  </h2>
                  <p className=" text-zinc-300 text-sm">
                    {news.content_text}....
                  </p>
                  <div className="flex gap-3 mt-3">
                    <button className="px-3 py-2 text-sm font-bold bg-slate-900 rounded-lg">
                      Explain
                    </button>
                    <button className="px-3 py-2 text-sm font-bold bg-slate-900 rounded-lg">
                      Generate Tweet
                    </button>
                    <button className="px-3 py-2 text-sm font-bold bg-slate-900 rounded-lg">
                      Generate Blog
                    </button>
                  </div>
                </div>
              </section>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
