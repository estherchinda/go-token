import { useState } from "react";
import Button from "./Button";
import Heading from "./Heading";
import { Image } from "iconsax-react";

export default function FileUpload() {
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "image/png") {
      setError("Only PNG files are allowed.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("File size must be under 2MB.");
      return;
    }

    setError("");
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

//   const handleSubmit = () => {
//     alert("Screenshot submitted!");
//   };

  return (
      <div className="w-full text-center border border-gray-200 rounded-[40px] p-6 shadow-sm">
        {/* heading and subtitle */}
        <Heading heading="Submit Screenshot"/>
        <p className="text-sm text-[#75767B] my-4">
          Submit a screenshot of the mobile app you just downloaded and reviewed to receive your reward.
        </p>

        {/* Upload Area */}
        <label
          htmlFor="image-upload"
          className="w-full h-[188px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-[16px] cursor-pointer transition bg-[#F3F4F6]"
        >
          {image ? (
            <img
              src={image}
              alt="Preview"
              className="w-full h-full object-contain rounded-md"
            />
          ) : (
            <div className="flex flex-col items-center">
              <Image size={48} color="#374151" variant="Bold" />
              <span className="text-base text-[#374151] font-bold mt-4">Click to upload image</span>
              <span className="text-sm text-gray-500 font-sans">PNG (2 MB max)</span>
            </div>
          )}
        </label>

        {/* remove button for now */}
        { image && <button onClick={() => setImage(null)} className="w-full h-8 rounded-full flex justify-center items-center mt-4 text-sm bg-red-500 text-white cursor-pointer">Remove</button>}


        <input
          id="image-upload"
          type="file"
          accept="image/png"
          className="hidden"
          onChange={handleImageUpload}
        />

        {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
        <div className="mt-4">
            <Button content="Submit App Screenshot" isDisabled={!image} />
        </div>
      </div>
  );
}
