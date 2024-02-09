import { videosList } from "../constants";
const Video = () => {
  const VideoComp = ({
    thumb,
    prof,
    title,
    published,
    channel,
    views,
    id,
    time,
  }) => {
    return (
      <div key={id} className="bg-gray-200 p-2 rounded-lg">
        <div className="relative">
          <img src={thumb} alt="" />
          <p className="bg-black px-1 absolute text-white right-1 bottom-1">
            {time}
          </p>
        </div>
        <div className="flex p-2">
          <img
            src={prof}
            alt=""
            className="w-[40px] h-[40px] rounded-full cursor-pointer"
          />
          <div className="flex flex-col pl-2">
            <h1 className="font-semibold text-sm cursor-default line-clamp-2">
              {title}
            </h1>
            <p className="font-bold text-sm cursor-pointer">{channel}</p>
            <p className="font-base  text-xs  cursor-default">
              {published} | {views}
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="absolute top-[12vh] left-[10%] w-[83%] h-full  grid-cols-1 grid sm:left-[15%] md:left-[16%] -z-[1] sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:left-[24vh] xl:grid xl:grid-cols-4 gap-3 ">
      {videosList.map(
        ({ thumb, prof, title, published, channel, views, time }, id) => {
          return (
            <VideoComp
              thumb={thumb}
              prof={prof}
              title={title}
              published={published}
              channel={channel}
              views={views}
              id={id}
              time={time}
              key={id}
            />
          );
        }
      )}
    </section>
  );
};
export default Video;
