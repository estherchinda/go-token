import { useState } from "react";
import { Image } from "iconsax-react";
import Button from "./Button";
import Heading from "./Heading";


export default function CombinedFileUpload() {
  const [image, setImage] = useState<string |null>(null);
  const [error, setError] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Accept any image type (not just PNG)
    if (!file.type.startsWith("image/png")) {
      setError("Please upload a PNG file.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("File size must be under 2 MB.");
      return;
    }

    setError("");
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full text-center border border-gray-200 rounded-[40px] p-6 shadow-sm">
      {/* heading and subtitle */}
      <Heading heading="Submit Screenshot" />
      <p className="text-sm text-[#75767B] my-4">
        Submit a screenshot of the mobile app you just downloaded and reviewed to receive your reward.
      </p>

      {/* Upload Area - using the mobile-friendly approach from component A */}
      <div className="w-full h-[188px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-[16px] cursor-pointer transition bg-[#F3F4F6] relative overflow-hidden">
        {/* File input positioned over the whole area but invisible - this ensures mobile compatibility */}
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
          onChange={handleImageUpload}
        />
        
        {/* Preview or placeholder */}
        {image ? (
          <img
            src={image}
            alt="Preview"
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-md block z-10"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        ) : (
          <div className="flex flex-col items-center pointer-events-none">
            <Image size={48} color="#374151" variant="Bold" />
            <span className="text-base text-[#374151] font-bold mt-4">Click to upload image</span>
            <span className="text-sm text-gray-500 font-sans">PNG (2 MB max)</span>
          </div>
        )}
      </div>

      {/* error */}
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}

      {/* remove button */}
      {image && (
        <button
          onClick={() => setImage(null)}
          className="w-full h-8 rounded-full flex justify-center items-center mt-4 text-sm bg-red-500 text-white cursor-pointer hover:bg-red-600 transition-colors"
        >
          Remove
        </button>
      )}
      
      <div className="mt-4">
        <Button content="Submit App Screenshot" isDisabled={!image} />
      </div>
    </div>
  );
}