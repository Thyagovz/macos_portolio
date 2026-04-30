import { WindowControls } from "#components";
import windowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  const { name, subtitle, description, image } = data;
  const displayName = name.replace(/\.[^/.]+$/, "");

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{displayName}</h2>
      </div>

      <div className="bg-white h-full overflow-y-auto p-8 text-zinc-800">
        <div className="max-w-2xl mx-auto">
          {image && (
            <img
              src={image}
              alt={displayName}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}

          {subtitle && (
            <p className="text-xl text-zinc-500 mb-6 italic">{subtitle}</p>
          )}

          <div className="space-y-4">
            {description?.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const TextWindow = windowWrapper(Text, "txtfile");

export default TextWindow;
