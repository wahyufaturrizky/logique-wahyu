import { useForm } from "react-hook-form";
import NgMenuIcon from "../assets/image/menu.png";
import NgLogo from "../assets/image/ngmusic.png";
import NgSearchIcon from "../assets/image/search.png";
import Image from "../components/Image";
import Text from "../components/Text";
import useDebounce from "../hook/useDebounce";
import { useListMusics } from "../services/musics/useMusic";
import "./ListMusic.css";
import Card from "../components/Card";

function ListMusic() {
  const { control, watch: watchSearch } = useForm({
    defaultValues: {
      search: "Json Mraz",
    },
  });

  const debounceFetchShippingComps = useDebounce(watchSearch("search"), 1000);

  const {
    data: dataMusics,
    isPending: isPendingMusics,
    refetch: refetchMusics,
  } = useListMusics({
    query: {
      term: debounceFetchShippingComps,
    },
    options: {
      onSuccess: () => {},
      select: (res: any) => {
        return res.data.results;
      },
    },
  });
  console.log("@dataMusics", dataMusics);

  return (
    <div className="container">
      <div className="header">
        <div className="flex justify-between p-7">
          <Image src={NgMenuIcon} alt="ng-music-logo" />
          <Image src={NgLogo} alt="ng-music-logo" />
          <Image src={NgSearchIcon} alt="ng-music-logo" />
        </div>

        <div className="p-7 flex justify-center items-center">
          <Text
            label="Search result for : "
            className="font-roboto text-sm font-normaltext-[#334155]"
          />

          <Text
            label={watchSearch("search")}
            className="font-roboto text-lg font-bold text-ng-burple ml-2"
          />
        </div>

        <div className="p-7">
          {dataMusics instanceof Array
            ? dataMusics?.map((data: any, index: number) => {
                return (
                  <Card
                    onClick={() => (window.open(data.trackViewUrl), "_blank")}
                    key={index}
                    {...data}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default ListMusic;