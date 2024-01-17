import Image from "../components/Image";
import NgMusicLogo from "../assets/image/ng-music.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import SearchInput from "../components/SearchInput";

function HomePage() {
  const navigate = useNavigate();

  const { control, watch } = useForm({
    defaultValues: {
      search: "Json Mraz",
    },
  });

  return (
    <div className="flex min-h-full h-dvh flex-1 flex-col justify-center lg:px-8 bg-ng-burple">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center h-3/4 items-center">
        <Image src={NgMusicLogo} alt="ng-music-logo" />
      </div>
      <div className="px-[40px] py-[20px] h-1/4">
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
          onClick={() =>
            navigate("/list-music", {
              state: {
                search: watch("search"),
              },
            })
          }
          type="button"
          className="flex items-center w-full mt-4 justify-center rounded-full bg-white/20 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm"
        />
      </div>
    </div>
  );
}

export default HomePage;
