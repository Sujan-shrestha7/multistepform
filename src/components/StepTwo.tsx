import React, { useState, useEffect } from "react";

interface StepProps {
  nextStep: () => void;
  prevStep: () => void;
  handleChange: (input: string, value: any) => void;
  values: any;
}

const StepTwo: React.FC<StepProps> = ({
  nextStep,
  prevStep,
  handleChange,
  values,
}) => {
  const [preview, setPreview] = useState<any>({
    citizenshipFront: values.citizenshipFrontPreview || "",
    citizenshipBack: values.citizenshipBackPreview || "",
    licensePhoto: values.licensePhotoPreview || "",
    panPhoto: values.panPhotoPreview || "",
    personalPhoto: values.personalPhotoPreview || "",
  });

  // Handle file uploads + Base64 preview generation
  const handleFileUpload = (key: string, file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;

        // Save file + base64 in parent state
        handleChange(key, file);
        handleChange(`${key}Preview`, base64);

        // Update local preview
        setPreview((prev: any) => ({ ...prev, [key]: base64 }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Manual validation before moving to next step
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    // Require personal photo
    if (!values.personalPhoto && !values.personalPhotoPreview) {
      alert("Please upload your personal photo before continuing.");
      return;
    }

    // Require citizenship front and back
    if (!values.citizenshipFront && !values.citizenshipFrontPreview) {
      alert("Please upload your citizenship front side.");
      return;
    }
    if (!values.citizenshipBack && !values.citizenshipBackPreview) {
      alert("Please upload your citizenship back side.");
      return;
    }

    nextStep();
  };

  // Sync previews when returning from another step
  useEffect(() => {
    setPreview({
      citizenshipFront: values.citizenshipFrontPreview || "",
      citizenshipBack: values.citizenshipBackPreview || "",
      licensePhoto: values.licensePhotoPreview || "",
      panPhoto: values.panPhotoPreview || "",
      personalPhoto: values.personalPhotoPreview || "",
    });
  }, [values]);

  return (
    <form onSubmit={handleNext} className="text-white max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Identity Verification
      </h2>

      {/* Citizenship Front */}
      <div className="mb-4">
        <label className="block font-medium mb-1">
          Upload Citizenship (Front Side) <span className="text-red-500">*</span>
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            handleFileUpload("citizenshipFront", e.target.files?.[0] || null)
          }
          className="w-full border p-2 rounded"
        />
        {preview.citizenshipFront && (
          <img
            src={preview.citizenshipFront}
            alt="Citizenship Front"
            className="mt-2 h-40 w-full object-cover rounded shadow"
          />
        )}
      </div>

      {/* Citizenship Back */}
      <div className="mb-4">
        <label className="block font-medium mb-1">
          Upload Citizenship (Back Side) <span className="text-red-500">*</span>
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            handleFileUpload("citizenshipBack", e.target.files?.[0] || null)
          }
          className="w-full border p-2 rounded"
        />
        {preview.citizenshipBack && (
          <img
            src={preview.citizenshipBack}
            alt="Citizenship Back"
            className="mt-2 h-40 w-full object-cover rounded shadow"
          />
        )}
      </div>

      {/* Driving License */}
      <div className="mb-4">
        <label className="block font-medium mb-1">
          Upload Driving License Photo
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            handleFileUpload("licensePhoto", e.target.files?.[0] || null)
          }
          className="w-full border p-2 rounded"
        />
        {preview.licensePhoto && (
          <img
            src={preview.licensePhoto}
            alt="Driving License"
            className="mt-2 h-40 w-full object-cover rounded shadow"
          />
        )}
      </div>

      {/* PAN Number */}
      <div className="mb-4">
        <label className="block font-medium mb-1">PAN Number</label>
        <input
          type="text"
          placeholder="Enter your PAN Number"
          value={values.panNo}
          onChange={(e) => handleChange("panNo", e.target.value)}
          className="w-full border p-2 rounded text-white"
        />
      </div>

      {/* PAN Photo */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Upload PAN Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            handleFileUpload("panPhoto", e.target.files?.[0] || null)
          }
          className="w-full border p-2 rounded"
        />
        {preview.panPhoto && (
          <img
            src={preview.panPhoto}
            alt="PAN Photo"
            className="mt-2 h-40 w-full object-cover rounded shadow"
          />
        )}
      </div>

      {/* Personal Photo */}
      <div className="mb-4">
        <label className="block font-medium mb-1">
          Upload Personal Photo <span className="text-red-500">*</span>
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            handleFileUpload("personalPhoto", e.target.files?.[0] || null)
          }
          className="w-full border p-2 rounded"
        />
        {preview.personalPhoto && (
          <img
            src={preview.personalPhoto}
            alt="Personal Photo"
            className="mt-2 h-40 w-full object-cover rounded shadow"
          />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-400 text-white py-2 px-6 rounded hover:bg-gray-500"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default StepTwo;
