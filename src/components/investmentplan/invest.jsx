// components/InvestmentPlans.jsx
import React from "react";
import investmentPlans from "../investmentplan/investjson";
import "../investmentplan/invest.css"; // Assuming you have a CSS file for styling
import { IoIosCheckmarkCircle } from "react-icons/io";

const InvestmentPlans = () => {
  return (
    <section className="invest__container">
      <h2 className="">Investment Plans</h2>
      <p className="invest__h1">Choose the right plan for your goals.</p>
      <div className="invest__content">
        {investmentPlans.map((plan) => (
          <div
            key={plan.id}
            className="income__card"
          >
            <div className="nam-tille">{plan.name}</div>
            <p className=""><span className="invest-p">{plan.roi}</span>wk</p>
            <ul className="invest-ul">
              <li className="invatheader"><strong></strong> {plan.description}</li>
              <li><IoIosCheckmarkCircle className="invest_icon"/><strong>Duration:</strong> {plan.duration}</li>
              <li><IoIosCheckmarkCircle className="invest_icon"/><strong>Min Deposit:</strong> {plan.minDeposit}</li>
              <li><IoIosCheckmarkCircle className="invest_icon"/><strong>Max Deposit:</strong> {plan.maxDeposit}</li>
            </ul>
            <button className="invest__btn">
              Invest Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentPlans;
