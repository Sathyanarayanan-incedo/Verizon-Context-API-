import React from "react";
import { Consumer } from "./Context";
import "./Goodstyle.css";

const Welcome = () => {
     return(
        
        <div className="container">
            <Consumer>
                {
                    (value) => (
                       
                        <h1 className="body-text">
                            This is {value.name} working in {value.company} from Parent company {value.parent}
                        </h1>
                       
                    )
                }
            </Consumer>
        </div>
    );
};

export default Welcome;