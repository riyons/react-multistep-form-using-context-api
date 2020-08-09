import React, { useState } from "react";
import NavigationButton from "./NavigateButton";
import ProgressBar from "./ProgressBar";

function MultiStepForm({ list, displayProgressBar, proceedNext = true }) {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const goNext = () => {
        if (selectedIndex !== list.length - 1)
            setSelectedIndex(selectedIndex + 1);
    };

    const goPrevious = () => {
        if (selectedIndex !== 0)
            setSelectedIndex(selectedIndex - 1);
    };

    return (
        <>
            <div className={"wrapper wrapper-content "}>
                <br />
                <div className="row">
                    <div className="col-lg-3">
                    </div>
                </div>

                {displayProgressBar && (<ProgressBar list={list} selectedIndex={selectedIndex} />)}

                {/*-------------------------------*/}
                <div className="row form-container">
                    <div className="col-lg-12">{list[selectedIndex].component}</div>
                </div>
                {/*-------------------------------*/}
                <div className="row">
                    <div className="col-lg-12">

                        {/** ---------------- Navigation buttons ---------------- */}
                        <div className="modal-footer">
                            <div className="col-lg-6">
                                <NavigationButton
                                    goNext={goNext}
                                    goPrevious={goPrevious}
                                    selectedIndex={selectedIndex}
                                    list={list}
                                    proceedNext={proceedNext}
                                />
                            </div>
                        </div>
                    </div>
                    {/** ---------------------------------------------------- */}
                </div>
            </div>
        </>
    )
}

export default MultiStepForm;