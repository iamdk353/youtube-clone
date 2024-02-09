import {
  Home,
  Library,
  Notifications,
  Originals,
  YoutubeMusic,
  Subscriptions,
} from "../Assets/AssetsPaths";

const Sidebar = () => {
  return (
    <>
      <section className="sm:flex sm:w-[10vh] sm:h-[90vh] hidden justify-center items-center bg-gray-100 lg:w-[15vh] xl:w-[25vh] fixed top-[10vh]">
        <div className="w-[80%] h-[90%] flex flex-col justify-between items-center gap-5 ">
          {[
            { image: Home, name: "Home" },
            { image: Library, name: "Library" },
            { image: Notifications, name: "Notifications" },
            { image: Originals, name: "Originals" },
            { image: YoutubeMusic, name: "YoutubeMusic" },
            { image: Subscriptions, name: "Subscriptions" },
          ].map(({ image, name }, id) => {
            return (
              <div
                className=" w-full h-full flex-col flex justify-center items-center cursor-pointer hover:bg-gray-300 rounded-md lg:flex-row lg:justify-start md:gap-3 md:p-2 p-1"
                key={id}
              >
                <img src={image} alt="" className="w-[30px]" />
                <p className="text-xs">{name}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="fixed w-full h-[10vh] bg-gray-200 sm:hidden bottom-0 flex ">
        {[
          { image: Home, name: "Home" },
          { image: Library, name: "Library" },
          { image: Notifications, name: "Notifications" },
        ].map(({ image, name }, id) => {
          return (
            <div
              className=" w-full h-full flex-col flex justify-center items-center cursor-pointer hover:bg-gray-300 rounded-md lg:flex-row lg:justify-start md:gap-3 md:p-2 p-1"
              key={id}
            >
              <img src={image} alt="" className="w-[30px]" />
              <p className="text-xs">{name}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};
export default Sidebar;
