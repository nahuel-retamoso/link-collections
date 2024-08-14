import { useState } from "react";

function CopyBtn({ id }) {
  const [copied, setCopied] = useState(false);

  // Assuming base URL is the domain of your application
  const baseUrl = "https://tuaplicacion.com/colecciones"; // Replace with your application's URL
  const collectionUrl = `${baseUrl}/${id.id}`; // Adjust according to your logic for getting the collection URL

  const copyLinkToClipboard = () => {
    navigator.clipboard
      .writeText(collectionUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); // Fixed syntax
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <button
      onClick={copyLinkToClipboard}
      className="mt-4 p- text-xs text-white rounded"
    >
      {copied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5" // Adjusted size
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5" // Adjusted size
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
          />
        </svg>
      )}
    </button>
  );
}

export default CopyBtn;
