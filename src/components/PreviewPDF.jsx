import React from "react";
import CartaAima from "./CartaAima";

const PreviewPDF = ({formData, date}) => {

    return (
        <div className="preview-section">
            <h3>Pré-visualização</h3>
            <CartaAima formData={formData} date={date}/>
        </div>
    )
};

export default PreviewPDF;