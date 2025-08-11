import { useState } from "react";

export default function ImageUploader() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = ""; // reset so same file can be picked again

    if (!file) return;

    // Validate type
    if (file.type !== "image/png") {
      alert("Please upload a PNG image.");
      return;
    }

    // Show preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* File input (visually hidden but still clickable on mobile) */}
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        className="sr-only" // Tailwind screen-reader only
        onChange={handleImageUpload}
      />

      {/* Upload button / label */}
      <label
        htmlFor="image-upload"
        className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer hover:bg-green-700 active:scale-95 transition"
      >
        Choose PNG Image
      </label>

      {/* Preview */}
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-40 h-40 object-cover rounded border"
        />
      )}
    </div>
  );
}
