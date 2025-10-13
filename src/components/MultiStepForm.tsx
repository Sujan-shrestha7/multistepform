import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    fullName: "",
    contact: "",
    email: "",
    province: "",
    district: "",
    municipality: "",
    tole: "",
    expertise: [] as string[],

    // Step 2: Identity Info
    citizenshipFront: null as File | null,
    citizenshipBack: null as File | null,
    licensePhoto: null as File | null,
    panNo: "",
    panPhoto: null as File | null,
    personalPhoto: null as File | null,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (input: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [input]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("✅ Final Data:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="bg-transparent p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] w-[95%] md:w-[700px] mx-auto my-[70px]">
      {/* Step Indicator */}
      <div className="flex justify-between mb-6">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
              step === num
                ? "bg-blue-600"
                : num < step
                ? "bg-green-500"
                : "bg-gray-400"
            }`}
          >
            {num}
          </div>
        ))}
      </div>

      {/* Step Components */}
      {step === 1 && (
        <StepOne
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      )}

      {step === 2 && (
        <StepTwo
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      )}

      {step === 3 && (
        <StepThree
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange} // ✅ Added this
          values={formData}
        />
      )}

      {step === 4 && (
        <StepFour
          prevStep={prevStep}
          values={formData}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
