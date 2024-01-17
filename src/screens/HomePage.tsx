import Image from "../components/Image";
import NgMusicLogo from "../assets/image/ng-music.png";
import Button from "../components/Button";

function HomePage() {
  return (
    <div className="flex min-h-full h-dvh flex-1 flex-col justify-center lg:px-8 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center h-3/4 items-center">
        <Image className="mx-auto h-auto w-auto" src={NgMusicLogo} alt="ng-music-logo" />
      </div>
      <div className="px-[40px] py-[20px] h-1/4">
        <Button
          label="Artist / Album / Title"
          onClick={() => {}}
          type="button"
          className="flex items-center w-full mb-4 justify-center rounded-full bg-white px-3 py-3 text-sm font-semibold leading-6 text-ng-blue-gray shadow-sm"
        />

        <Button
          label="Artist / Album / Title"
          onClick={() => {}}
          type="button"
          className="flex items-center w-full justify-center rounded-full bg-white px-3 py-3 text-sm font-semibold leading-6 text-ng-blue-gray shadow-sm"
        />
      </div>
    </div>
  );
}

export default HomePage;
