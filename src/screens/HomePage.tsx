import Image from "../components/Image";
import NgMusicLogo from "../assets/image/ng-music.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-full h-dvh flex-1 flex-col justify-center lg:px-8 bg-ng-burple">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center h-3/4 items-center">
        <Image src={NgMusicLogo} alt="ng-music-logo" />
      </div>
      <div className="px-[40px] py-[20px] h-1/4">
        <Button
          label="Artist / Album / Title"
          onClick={() => navigate("/list-music")}
          type="button"
          className="flex items-center w-full justify-center rounded-full bg-white px-3 py-3 text-sm font-semibold leading-6 text-ng-blue-gray shadow-sm"
        />

        <Button
          label="Search"
          onClick={() => {}}
          type="button"
          className="flex items-center w-full mt-4 justify-center rounded-full bg-white/20 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm"
        />
      </div>
    </div>
  );
}

export default HomePage;
