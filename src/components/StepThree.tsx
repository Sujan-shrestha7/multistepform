import React from "react";

interface StepProps {
  prevStep: () => void;
  nextStep: () => void;
  handleChange: (input: string, value: string) => void;
  values: any;
}

const StepThree: React.FC<StepProps> = ({
  prevStep,
  nextStep,
  handleChange,
  values,
}) => {
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleNext} className="space-y-4 text-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Bank Details</h2>

      {/* Bank */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Bank <span className="text-red-500">*</span>
        </label>
        <select
          value={values.bank || ""}
          onChange={(e) => handleChange("bank", e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Account</option>
          <option value="Nabil Bank">Nabil Bank</option>
          <option value="Global IME Bank">Global IME Bank</option>
          <option value="NMB Bank">NMB Bank</option>
          <option value="NIC Asia Bank">NIC Asia Bank</option>
          <option value="Siddhartha Bank">Siddhartha Bank</option>
        </select>
      </div>

      {/* Branch + Account Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Branch <span className="text-red-500">*</span>
          </label>
          <select
            value={values.branch || ""}
            onChange={(e) => handleChange("branch", e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Branch</option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Lalitpur">Lalitpur</option>
            <option value="Bhaktapur">Bhaktapur</option>
            <option value="Pokhara">Pokhara</option>
            <option value="Biratnagar">Biratnagar</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Account Type <span className="text-red-500">*</span>
          </label>
          <select
            value={values.accountType || ""}
            onChange={(e) => handleChange("accountType", e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Type</option>
            <option value="Saving">Saving</option>
            <option value="Current">Current</option>
            <option value="Salary">Salary</option>
            <option value="Fixed Deposit">Fixed Deposit</option>
          </select>
        </div>
      </div>

      {/* Account Number */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Account Number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Account Number"
          value={values.accountNumber || ""}
          onChange={(e) => handleChange("accountNumber", e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="border border-blue-600 text-blue-600 py-2 px-6 rounded hover:bg-blue-50"
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

export default StepThree;
