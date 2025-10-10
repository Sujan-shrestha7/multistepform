import React from "react";

interface StepProps {
  prevStep: () => void;
  values: any;
  handleSubmit: () => void;
}

const StepFour: React.FC<StepProps> = ({ prevStep, values, handleSubmit }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Confirm Details
      </h2>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p><strong>Name:</strong> {values.name}</p>
        <p><strong>Email:</strong> {values.email}</p>
        <p><strong>Address:</strong> {values.address}</p>
        <p><strong>City:</strong> {values.city}</p>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-400 text-white py-2 px-6 rounded hover:bg-gray-500"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepFour;
