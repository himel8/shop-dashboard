import React, { useEffect, useRef, useState } from "react";
import { GiCheckMark } from "react-icons/gi";

const Stepper = ({ currentStep, steps }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    return steps.map((step, index) => ({
      ...step,
      heighlighted: index === stepNumber,
      selected: index <= stepNumber,
      completed: index <= stepNumber,
    }));
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          heighlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [currentStep, steps]);
  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-8 w-8 flex items-center justify-center py-3 ${
              step.selected ? "bg-primary text-white font-bold" : "bg-[#f3f6fe]"
            }`}
          >
            {step.completed ? (
              <span className="text-white font-bold text-xl">
                <GiCheckMark />
              </span>
            ) : (
              <div className="w-4 h-4 rounded-full bg-primary "></div>
            )}
          </div>
        </div>
        <div
          className={`flex-auto border-t-[6px] transition duration-500 ease-in-out ${
            step.completed ? "border-primary" : "border-[#f3f6fe]"
          }`}
        ></div>
      </div>
    );
  });

  return (
    <div className="mx-0 sm:mx-4 py-4 sm:p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

export default Stepper;
