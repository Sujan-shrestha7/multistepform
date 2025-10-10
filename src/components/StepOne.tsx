import React, { useState } from "react";

interface StepProps {
  nextStep: () => void;
  handleChange: (input: string, value: any) => void;
  values: any;
}

const StepOne: React.FC<StepProps> = ({ nextStep, handleChange, values }) => {
  const [errors, setErrors] = useState("");

  const areasOfExpertise = {
    "IT Technicians": [
      "Laptop Technician",
      "Computer Technician",
      "CC Camera Technician",
      "Printer Technician",
      "Networking Technician",
      "Intercom Technician",
      "Projector Technician",
    ],
    "Automobiles": [
      "Bike Repairing (2-wheeler)",
      "Car Repairing (4-wheeler)",
      "Bus/ Truck Repairing",
      "JCB/ Excavator Repairing",
    ],
    "Home Appliances": [
      "House Wiring",
      "Vacuum Cleaning",
      "Mixture Technician",
      "Kitchen Chimni",
      "Solar Technician",
      "Water Dispenser",
      "Refrigerator Technician",
      "Air Conditioner",
      "Heater Technician",
      "Washing Machine",
      "Plumbler",
      "Fan Technician",
      "Fire Extinguisher",
      "Oven Technician",
      "Water Geyser",
    ],
    "Professional Services": [
      "Graphic Designer",
      "Motion Graphic Designer",
      "3D Animation Designer",
      "Typing",
      "Video Editor",
      "Photographer",
      "Videographer",
      "Drone Pilot",
      "Teaching",
      "Home Tuition",
      "IELTS Facilitator",
      "PTE Facilitator",
    ],
  };

  const handleCheckboxChange = (expertise: string) => {
    const selected = values.expertise || [];
    if (selected.includes(expertise)) {
      handleChange(
        "expertise",
        selected.filter((item: string) => item !== expertise)
      );
    } else {
      handleChange("expertise", [...selected, expertise]);
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.expertise || values.expertise.length === 0) {
      setErrors("Please select at least one area of expertise.");
      return;
    }
    setErrors("");
    nextStep();
  };

  return (
    <form onSubmit={handleNext} className="max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Personal Information
      </h2>

      {/* Full Name */}
      <input
        type="text"
        placeholder="Full Name"
        value={values.fullName}
        onChange={(e) => handleChange("fullName", e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      {/* Contact Number */}
      <input
        type="tel"
        placeholder="Contact Number"
        value={values.contact}
        onChange={(e) => handleChange("contact", e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email Address"
        value={values.email}
        onChange={(e) => handleChange("email", e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />

      {/* Address Section */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Address</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Province"
          value={values.province}
          onChange={(e) => handleChange("province", e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="District"
          value={values.district}
          onChange={(e) => handleChange("district", e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Municipality"
          value={values.municipality}
          onChange={(e) => handleChange("municipality", e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Tole / Ward No."
          value={values.tole}
          onChange={(e) => handleChange("tole", e.target.value)}
          className="p-2 border rounded"
          required
        />
      </div>

      {/* Areas of Expertise */}
      <h3 className="text-lg font-semibold mt-6 mb-2">
        What is your area of expertise? <span className="text-red-500">*</span>
      </h3>

      {Object.entries(areasOfExpertise).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h4 className="font-semibold text-blue-700">{category}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
            {items.map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={values.expertise?.includes(item) || false}
                  onChange={() => handleCheckboxChange(item)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      ))}

      {errors && <p className="text-red-600 mb-3">{errors}</p>}

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 w-full mt-4"
      >
        Next
      </button>
    </form>
  );
};

export default StepOne;
