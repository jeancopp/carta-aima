import React, {useRef} from 'react';

import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';

const ExportadorPDF = ({children, nomeArquivo}) => {
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

            pdf.save(nomeArquivo);

        } catch (error) {
            console.error('Erro ao exportar:', error);
            alert('Erro ao gerar PDF');
        }
    };

    return (
        <div>
            <button
                onClick={exportarParaPDF}
                style={{
                    padding: '10px 20px',
                    background: '#007acc',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    margin: '10px'
                }}
            >📄 Exportar para PDF</button>

            <div
                ref={componenteRef}
                style={{
                    position: 'absolute',
                    left: '-9999px',
                    top: 0,
                    width: '210mm', // Largura A4
                    backgroundColor: 'white',
                    background: 'white',
                    padding: '1.5rem'
                }}
            >{children}</div>
        </div>
    );
};

export default ExportadorPDF;