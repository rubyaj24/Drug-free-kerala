"use client";

import React, { useEffect, useState } from "react";

interface PledgeItemProps {
  id: string;
  text: string | React.ReactNode;
  checked: boolean;
  onChange: (id: string, checked: boolean) => void;
}

const PledgeItem: React.FC<PledgeItemProps> = ({
  id,
  text,
  checked,
  onChange,
}) => {
  return (
    <div className="flex gap-3 md:gap-5 items-start">
      <label htmlFor={id} className="flex items-center gap-3 md:gap-5 cursor-pointer">
        <div className="relative flex-shrink-0">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={(e) => onChange(id, e.target.checked)}
            className="absolute opacity-0 w-[27px] h-[27px] cursor-pointer"
            aria-labelledby={`${id}-text`}
          />
          <div className="w-[27px] h-[27px] rounded-full bg-[#D9D9D9] flex items-center justify-center">
            {checked && (
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5L5 9L13 1"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <span
          id={`${id}-text`}
          className="text-[15px] font-medium font-['Poppins']"
        >
          {text}
        </span>
      </label>
    </div>
  );
};

interface PledgeFormProps {
  onClose: () => void;
}

const PledgeForm: React.FC<PledgeFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [pledgeItems, setPledgeItems] = useState({
    aware: false,
    commit: false,
    discourage: false,
    report: false,
    support: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePledgeChange = (id: string, checked: boolean) => {
    setPledgeItems((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Check if at least one pledge is selected
    if (!Object.values(pledgeItems).some(value => value)) {
      alert('Please select at least one pledge');
      return;
    }

    try {
      // Get submit button reference
      const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';

      const response = await fetch('http://mulearn.org/api/v1/drugfreekerala/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Pledge submitted successfully:', data);
      alert('Thank you for taking the pledge!');
      onClose();

    } catch (error) {
      console.error('Error submitting pledge:', error);
      alert('Failed to submit pledge. Please try again.');
      
    } finally {
      // Reset button state
      const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
      submitButton.disabled = false;
      submitButton.textContent = 'Take the Pledge';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-zinc-50 rounded-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="p-5 rounded-2xl w-full">
          <h1 className="mb-5 text-2xl font-medium text-center text-black">
            Join the Movement
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 mb-8">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="px-5 py-2.5 text-sm rounded-md bg-zinc-400 bg-opacity-30 h-[42px] text-neutral-700 text-opacity-70 focus:outline-none focus:ring-2 focus:ring-[rgba(92,183,105,1)]"
                aria-label="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="px-5 py-2.5 text-sm rounded-md bg-zinc-400 bg-opacity-30 h-[42px] text-neutral-700 text-opacity-70 focus:outline-none focus:ring-2 focus:ring-[rgba(92,183,105,1)]"
                aria-label="Email"
                required
              />
            </div>

            <p className="mb-5 text-base text-zinc-800">
              By pledging to this drug free campaign, I accept the following
              conditions
            </p>

            <div className="flex flex-col gap-4">
              <PledgeItem
                id="aware"
                text="I am aware of the harmful effects that drugs have on our society."
                checked={pledgeItems.aware}
                onChange={handlePledgeChange}
              />

              <PledgeItem
                id="commit"
                text="I commit to not using drugs or any harmful substances."
                checked={pledgeItems.commit}
                onChange={handlePledgeChange}
              />

              <PledgeItem
                id="discourage"
                text="I will not encourage anyone to use drugs and will discourage drug use in my community."
                checked={pledgeItems.discourage}
                onChange={handlePledgeChange}
              />

              <PledgeItem
                id="report"
                text="I will report any instances of drug use or trafficking to the authorities to help fight drug abuse."
                checked={pledgeItems.report}
                onChange={handlePledgeChange}
              />

              <PledgeItem
                id="support"
                text="I will support and help those affected by drugs to recover and lead a healthy, normal life."
                checked={pledgeItems.support}
                onChange={handlePledgeChange}
              />
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="h-10 text-sm font-medium text-black bg-white rounded border-[rgba(92,183,105,1)] border-[0.5px] w-full sm:w-[241px] hover:bg-[rgba(92,183,105,0.1)] focus:outline-none focus:ring-2 focus:ring-[rgba(92,183,105,1)] transition-colors"
                aria-label="Take the Pledge"
              >
                Take the Pledge
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { PledgeForm };