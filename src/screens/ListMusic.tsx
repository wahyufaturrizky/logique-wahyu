import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import CloseIcon from "../assets/image/close.png";
import NgMenuIcon from "../assets/image/menu.png";
import NgLogo from "../assets/image/ngmusic.png";
import NgSearchIcon from "../assets/image/search.png";
import Button from "../components/Button";
import Card from "../components/Card";
import Image from "../components/Image";
import SearchInput from "../components/SearchInput";
import Text from "../components/Text";
import useDebounce from "../hook/useDebounce";
import { useListMusics } from "../services/musics/useMusic";
import "./ListMusic.css";

function ListMusic() {
  const [isSearch, setIsSearch] = useState(false);

  const { state } = useLocation();

  const { search } = state;

  const {
    watch: watchSearch,
    control,
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      search: search,
    },
  });

  const debounceFetchShippingComps = useDebounce(watchSearch("search"), 1000);

  const { data: dataMusics, isPending: isPendingMusics } = useListMusics({
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

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="flex justify-between p-20">
            <Image src={NgMenuIcon} alt="ng-music-logo" />
            <Image src={NgLogo} alt="ng-music-logo" />
            <Image onClick={() => setIsSearch(true)} src={NgSearchIcon} alt="ng-music-logo" />
          </div>

          <div className="px-7 py-4 flex justify-center items-center">
            <Text label="Search result for : " className="font-roboto text-sm text-[#334155]" />

            <Text
              label={getValues("search")}
              className="font-roboto text-lg font-bold text-ng-burple ml-2"
            />
          </div>

          <div className="px-7 py-0">
            {isPendingMusics ? (
              <Text
                label="Loading..."
                className="font-roboto font-normal text-center text-[#334155]"
              />
            ) : dataMusics instanceof Array ? (
              dataMusics?.map((data: any, index: number) => {
                return (
                  <Card
                    onClick={() => window.open(data.trackViewUrl, "_blank")}
                    key={index}
                    {...data}
                  />
                );
              })
            ) : null}
          </div>
        </div>
      </div>

      {isSearch && (
        <div className="bg-black/50 p-10 absolute left-0 top-0 right-0 bottom-0">
          <div className="flex justify-end mb-60">
            <Image onClick={() => setIsSearch(false)} src={CloseIcon} alt="ng-music-logo" />
          </div>

          <div>
            <Controller
              control={control}
              name="search"
              render={({ field: { onChange, onBlur, value } }) => (
                <SearchInput
                  onChange={onChange}
                  placeholder="Cari"
                  onBlur={onBlur}
                  value={value}
                  name="search"
                  type="text"
                  required
                  showIcon={false}
                  className="w-full p-4 text-sm text-ng-blue-gray text-center rounded-full bg-white"
                />
              )}
            />

            <Button
              label="Search"
              onClick={() => {
                setValue("search", watchSearch("search"));
                setIsSearch(false);
              }}
              type="button"
              className="flex items-center w-full mt-4 justify-center rounded-full bg-ng-burple px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ListMusic;
