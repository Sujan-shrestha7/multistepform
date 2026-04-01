import React from "react";

interface StepProps {
  prevStep: () => void;
  values: any;
  handleSubmit: () => void;
}

const StepFour: React.FC<StepProps> = ({ prevStep, values, handleSubmit }) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl text-white font-semibold mb-4 text-center">
        Confirm Details
      </h2>

      <div className="bg-gray-100 p-3 sm:p-5 rounded mb-6 overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg text-sm sm:text-base">
          <tbody>
            <tr className="border-b">
              <td className="font-semibold p-2 w-1/3">Name:</td>
              <td className="p-2 break-words">{values.fullName}</td>
            </tr>

            <tr className="border-b">
              <td className="font-semibold p-2">Contact:</td>
              <td className="p-2 break-words">{values.contact}</td>
            </tr>

            <tr className="border-b">
              <td className="font-semibold p-2">Email:</td>
              <td className="p-2 break-words">{values.email}</td>
            </tr>

            <tr className="border-b align-top">
              <td className="font-semibold p-2">Address:</td>
              <td className="p-2">
                <table className="ml-2 sm:ml-4 text-sm">
                  <tbody>
                    <tr>
                      <strong>
                        <td className="pr-2">Province:</td>
                      </strong>
                      <td>{values.province}</td>
                    </tr>
                    <tr>
                      <strong>
                        <td className="pr-2">District</td>
                      </strong>
                      <td>{values.district}</td>
                    </tr>
                    <tr>
                      <strong>
                        <td className="pr-2">Municipality</td>
                      </strong>
                      <td>{values.municipality}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr className="border-b">
              <td className="font-semibold p-2">Pan No:</td>
              <td className="p-2 break-words">{values.panNo}</td>
            </tr>

            <tr className="border-b align-top">
              <td className="font-semibold p-2">Bank Details:</td>
              <td className="p-2">
                <table className="ml-2 sm:ml-4 text-sm">
                  <tbody>
                    <tr>
                      <strong>
                        <td className="pr-2">Bank</td>
                      </strong>
                      <td>{values.bank}</td>
                    </tr>
                    <tr>
                      <strong>
                        <td className="pr-2">Branch:</td>
                      </strong>
                      <td>{values.branch}</td>
                    </tr>
                    <tr>
                      <strong>
                        <td className="pr-2">Account Type:</td>
                      </strong>
                      <td>{values.accountType}</td>
                    </tr>
                    <tr>
                      <strong>
                        <td className="pr-2 ">Account Number:</td>
                      </strong>
                      <td>{values.accountNumber}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td className="font-semibold p-2">Expertise:</td>
              <td className="p-2 break-words">
                {Array.isArray(values.expertise)
                  ? values.expertise.join(", ")
                  : values.expertise}
              </td>
            </tr>

            <tr>
              <strong>
                <td className="pr-2 ">Extra Skills:</td>
              </strong>
              <td>{values.extraSkills}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
        <button
          type="button"
          onClick={prevStep}
          className="border border-blue-600 text-blue-600 py-2 px-6 rounded hover:bg-blue-50"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition w-full sm:w-auto"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepFour;
