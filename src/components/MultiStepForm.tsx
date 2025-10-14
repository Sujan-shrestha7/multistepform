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
    branch:"",
    bank:"",
    accountNumber:"",
    accountType:"",
    expertise: [],

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
const handleSubmit = async() => {
    console.log("✅ Final Data:", formData);
   
    try {
      const formDataToSend = new FormData();

      // Append text fields
      formDataToSend.append("fullname", formData.fullName);
      formDataToSend.append("province", formData.province);
      formDataToSend.append("district", formData.district);
      formDataToSend.append("municipality", formData.municipality);
      formDataToSend.append("tole", formData.tole);
      formDataToSend.append("bank", formData.bank);
      formDataToSend.append("branch", formData.branch);
      formDataToSend.append("accountType", formData.accountType);
      formDataToSend.append("accountNumber", formData.accountNumber);
      formDataToSend.append("Contact", formData.contact);
      formDataToSend.append("Email", formData.email);
      formDataToSend.append("Links", "https://xittosewa.com"); // or your real link
      formDataToSend.append("Gears", "...");
      formDataToSend.append("panNo", formData.panNo);


      // Handle array for expertise
      formDataToSend.append("Expertise", JSON.stringify(formData.expertise));

      // Append images if available
      if (formData.citizenshipFront)
        formDataToSend.append("citizenshipFront", formData.citizenshipFront);
      if (formData.citizenshipBack)
        formDataToSend.append("citizenshipBack", formData.citizenshipBack);
      if (formData.licensePhoto)
        formDataToSend.append("licensePhoto", formData.licensePhoto);
      if (formData.panPhoto)
        formDataToSend.append("panPhoto", formData.panPhoto);
      if (formData.personalPhoto)
        formDataToSend.append("personalPhoto", formData.personalPhoto);

      // ✅ Send to your Django API
      const res = await fetch("http://127.0.0.1:8000/worker/api/details/create/", {
        method: "POST",
        body: formDataToSend,
      });

      if (!res.ok) {
        const errData = await res.json();
        console.error("❌ Error:", errData);
        // alert(`panNo: ${errData['panNo']}`);

        if(errData['error']){
          alert(errData['error'])
        }

        if(errData['panNo']){
           alert(`panNo: ${errData['panNo']}`);
        }

        if(errData['fullname']){
           alert(`fullname: ${errData['fullname']}`);
        }

        if(errData['province']){
           alert(`province: ${errData['province']}`);
        }

         if(errData['municipality']){
           alert(`municipality: ${errData['municipality']}`);
        }

        if(errData['tole']){
           alert(`tole: ${errData['tole']}`);
        }

        if(errData['district']){
           alert(`district: ${errData['district']}`);
        }

         if(errData['Contact']){
           alert(`Contact: ${errData['Contact']}`);
        }

        if(errData['Email']){
           alert(`Email: ${errData['Email']}`);
        }

        if(errData['Expertise']){
           alert(`Expertise: ${errData['Expertise']}`);
        }

        if(errData['Links']){
           alert(`Links: ${errData['Links']}`);
        }

        if(errData[' Gears']){
           alert(` Gears: ${errData[' Gears']}`);
        }


        if(errData['bank']){
           alert(` bank: ${errData['bank']}`);
        }

        if(errData['branch']){
           alert(` branch: ${errData['branch']}`);
        }

        if(errData['accountType']){
           alert(` accountType: ${errData['accountType']}`);
        }

        if(errData['accountNumber']){
           alert(` accountNumber: ${errData['accountNumber']}`);
        }

        if(errData['personalPhoto']){
           alert(` personalPhoto: ${errData['personalPhoto']}`);
        }
        // alert("Failed to submit form!");
        return;
      }

      // console.log("✅ Success:", data);
      alert("Form Submitted Successfully!");
      setFormData({
        fullName: "",
        contact: "",
        email: "",
        province: "",
        district: "",
        municipality: "",
        tole: "",
        branch: "",
        bank: "",
        accountNumber: "",
        accountType: "",
        expertise: [],

        citizenshipFront: null,
        citizenshipBack: null,
        licensePhoto: null,
        panNo: "",
        panPhoto: null,
        personalPhoto: null,

        // citizenshipFrontPreview: "",
        // citizenshipBackPreview: "",
        // licensePhotoPreview: "",
        // panPhotoPreview: "",
        // personalPhotoPreview: "",
      });
    } catch (err) {
      console.error("❌ Submit error:", err);
      alert("Something went wrong!");
    }
  };
  // const handleSubmit = () => {
  //   console.log("✅ Final Data:", formData);
  //   alert("Form Submitted Successfully!");
  // };

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
