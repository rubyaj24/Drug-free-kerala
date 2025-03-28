"use client";

import React, { useState } from "react";

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
    <div className="flex gap-5 items-start">
      <label htmlFor={id} className="flex items-center gap-5 cursor-pointer">
        <div className="relative flex-shrink-0">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={(e) => onChange(id, e.target.checked)}
            className="absolute opacity-0 w-[27px] h-[27px] cursor-pointer"
            aria-labelledby={id + "-text"}
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
          id={${id}-text}
          className="text-[15px] font-medium font-['Poppins']"
        >
          {text}
        </span>
      </label>
    </div>
  );
};

const PledgeForm: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ formData, pledgeItems });
  };

  return (
    <section className="flex justify-center items-center p-5 w-full bg-neutral-100 min-h-screen">
      <div className="p-11 rounded-2xl border bg-zinc-50 border-stone-300 border-opacity-70 w-[647px] max-md:w-[90%] max-sm:p-5 max-sm:w-full">
        <h1 className="mb-10 text-4xl font-medium text-center text-black max-md:text-3xl max-sm:mb-8 max-sm:text-3xl">
          Join the Movement
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-7 mb-10">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="px-7 py-2.5 text-sm rounded-md bg-zinc-400 bg-opacity-30 h-[42px] text-neutral-700 text-opacity-70"
              aria-label="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="px-7 py-2.5 text-sm rounded-md bg-zinc-400 bg-opacity-30 h-[42px] text-neutral-700 text-opacity-70"
              aria-label="Email"
              required
            />
          </div>

          <p className="mb-6 text-base text-zinc-800">
            By pledging to this drug free campaign, I accept the following
            conditions
          </p>

          <div className="flex flex-col gap-5">
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
              text={
                <span>
                  I will not encourage anyone to use drugs and will discourage
                  drug
                  <br />
                  use in my community.
                </span>
              }
              checked={pledgeItems.discourage}
              onChange={handlePledgeChange}
            />

            <PledgeItem
              id="report"
              text={
                <span>
                  I will report any instances of drug use or trafficking to the
                  <br />
                  authorities to help fight drug abuse.
                </span>
              }
              checked={pledgeItems.report}
              onChange={handlePledgeChange}
            />

            <PledgeItem
              id="support"
              text={
                <span>
                  I will support and help those affected by drugs to recover and
                  lead
                  <br />a healthy, normal life.
                </span>
              }
              checked={pledgeItems.support}
              onChange={handlePledgeChange}
            />
          </div>

          <div className="flex justify-center mt-10">
            <button
              type="submit"
              className="h-10 text-sm font-medium text-black bg-white rounded border-sky-600 border-[0.5px] w-[241px] max-sm:w-full hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-600 transition-colors"
              aria-label="Take the Pledge"
            >
              Take the Pledge
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PledgeForm;