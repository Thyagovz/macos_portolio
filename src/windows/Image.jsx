import { WindowControls } from "#components";
import windowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data;

  if (!data) return null;

  const { name, imageUrl } = data;
  const displayName = name.replace(/\.[^/.]+$/, "");

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{displayName}</h2>
      </div>

      <div className="bg-white h-full overflow-y-auto p-4 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={displayName}
          className="max-w-full max-h-full object-contain shadow-lg"
        />
      </div>
    </>
  );
};

const ImageWindow = windowWrapper(Image, "imgfile");

export default ImageWindow;
