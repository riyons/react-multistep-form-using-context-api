import React from "react";
import { Badge } from 'reactstrap';

function ProgressBar({ list, selectedIndex }) {
    return (
        <div className="row">
            <div className="container">
                <div className="l-wizard-h">
                    <ul className="wizard-h">
                        {list.map((item, index) => {

                            let progressStatus = "";

                            if (index < selectedIndex)
                                progressStatus = "--previous"
                            else if (index === selectedIndex)
                                progressStatus = "--current"

                            return (
                                <li key={index} className={"l-wizard-h-step wizard-h__step" + progressStatus}>
                                    <i className={item.headerIcon}></i>
                                    <span><Badge color="secondary">{index + 1}</Badge></span>{" "}{item.headerText}
                                </li>
                            )
                        })

                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;