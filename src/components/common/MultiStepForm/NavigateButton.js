import React from "react";

const NavigationButton = ({ goNext, goPrevious, selectedIndex, list, proceedNext }) => (
    <>
        <div className="navigateBtn">
            <button disabled={selectedIndex === 0} onClick={goPrevious} className="btn btn-primary">
                Previous
        </button>{" "}
            <button onClick={goNext} disabled={!proceedNext} className="btn btn-primary">
                {selectedIndex !== list.length - 1 ? "Next" : "Finish"}
            </button>
        </div>
    </>
);

export default NavigationButton;