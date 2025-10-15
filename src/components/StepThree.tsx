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

  // ✅ Banks array with branches
  const bankNames = [
    "Nepal Rastra Bank",
    "Nabil Bank",
    "Nepal Investment Mega Bank",
    "Global IME Bank",
    "Nepal Bank Limited",
    "Rastriya Banijya Bank",
    "Standard Chartered Bank Nepal",
    "Siddhartha Bank",
    "Himalayan Bank",
    "NIC Asia Bank",
    "Machhapuchchhre Bank",
    "Kumari Bank",
    "NMB Bank",
    "Everest Bank",
    "Citizens Bank International",
    "Sunrise Bank",
    "Prime Commercial Bank",
    "Sanima Bank",
    "Laxmi Sunrise Bank",
    "Civil Bank",
    "Prabhu Bank",
    "Century Commercial Bank",
    "Agriculture Development Bank",
    "Bank of Kathmandu",
    "Mega Bank Nepal",
    "Jyoti Bikas Bank",
    "Garima Bikas Bank",
    "Muktinath Bikas Bank",
    "Shine Resunga Development Bank",
    "Kailash Bikas Bank",
    "Kamana Sewa Bikas Bank",
    "Saptakoshi Development Bank",
    "Lumbini Bikas Bank",
    "ICFC Finance Limited",
    "Goodwill Finance Limited",
    "Pokhara Finance Limited",
    "Janaki Finance Limited",
    "Guheshwori Merchant Banking & Finance",
    "Manjushree Finance Limited",
    "Progressive Finance Limited",
    "Shree Investment and Finance",
    "Best Finance Company",
    "Multipurpose Finance Company",
  ];

  // ✅ Account types array
  const accountTypes = ["Saving", "Current", "Salary", "Fixed Deposit"];

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
          <option className="bg-[#000000]" value="">
            Select Bank
          </option>
          {bankNames.map((bank) => (
            <option key={bank} className="bg-[#000000]" value={bank}>
              {bank}
            </option>
          ))}
        </select>
      </div>

      {/* Branch + Account Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Branch */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Branch <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={values.branch || ""}
            onChange={(e) => handleChange("branch", e.target.value)}
            disabled={!values.bank}
            placeholder="Enter Branch"
            className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
              values.bank
                ? "focus:ring-blue-500"
                : "bg-transparent cursor-not-allowed"
            }`}
            required
          />
        </div>

        {/* Account Type */}
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
            {accountTypes.map((type) => (
              <option className="bg-[#000000]" key={type} value={type}>
                {type}
              </option>
            ))}
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
