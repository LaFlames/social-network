import React from "react";
import preloader from "../../assets/loader.svg";


type PreloaderPropsType = {

}


export const Preloader: React.FC<PreloaderPropsType> = (props) => {
    return (
        <div>
            <img src={preloader} />
        </div>
    )
}

