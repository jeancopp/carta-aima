import React, {useRef} from 'react';

import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';

const ExportadorPDF = ({children, nomeArquivo = "documento.pdf"}) => {
    const componenteRef = useRef(null);

    const exportarParaPDF = async () => {
        if (!componenteRef.current) return;

        try {
            // 1. Capturar o componente
            const canvas = await html2canvas(componenteRef.current, {
                scale: 2, // Alta qualidade
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff',
                allowTaint: true
            });

            // 2. Criar PDF
            const pdf = new JsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            // 3. Configurar dimensões A4
            const imgWidth = 210; // Largura A4 em mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            // 4. Adicionar ao PDF
            const imgData = canvas.toDataURL('image/png');
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            // 5. Salvar
            pdf.save(nomeArquivo);

        } catch (error) {
            console.error('Erro ao exportar:', error);
            alert('Erro ao gerar PDF');
        }
    };

    return (
        <div>
            {/* Botão de exportação */}
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
            >
                📄 Exportar para PDF
            </button>

            {/* Container invisível que será exportado */}
            <div
                ref={componenteRef}
                style={{
                    position: 'absolute',
                    left: '-9999px',
                    top: 0,
                    width: '210mm', // Largura A4
                    backgroundColor: 'white'
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default ExportadorPDF;