import React, {useRef} from 'react';

import './ExportadorPDF.css';

import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';
import CartaAima from "./CartaAima";

const ExportadorPDF = ({formData}) => {
    const componenteRef = useRef(null);

    const exportarParaPDF = async () => {
        if (!componenteRef.current) return;

        try {
            const canvas = await html2canvas(componenteRef.current, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff',
                allowTaint: true
            });

            const pdf = new JsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            const imgData = canvas.toDataURL('image/png');
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            pdf.save(`carta-aima-${formData.nome.trim().replaceAll(' ', '-')}.pdf`);

        } catch (error) {
            console.error('Erro ao exportar:', error);
            alert('Erro ao gerar PDF');
        }
    };

    return (
        <>
            <div className="export">
                <button
                    onClick={exportarParaPDF}
                    className="export__button">📄 Exportar para PDF</button>
            </div>

            <div
                ref={componenteRef}
                style={{
                    position: 'absolute',
                    width: '210mm',
                    left: '-9999px',
                    top: 0,
                    padding: '1.5rem'
                }}
            ><CartaAima formData={formData} date={formData.dataAtual}/></div>
        </>
    );
};

export default ExportadorPDF;