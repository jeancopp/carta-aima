import {jsPDF} from "jspdf";

export const gerarPDF = (formData) => {
    const doc = new jsPDF();

    const marginLeft = 20;
    const marginTop = 20;
    const lineHeight = 7;
    let yPos = marginTop;

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('CONTRATO DE PRESTAÇÃO DE SERVIÇOS', marginLeft, yPos);
    yPos += lineHeight * 2;

    doc.setLineWidth(0.5);
    doc.line(marginLeft, yPos - 5, 190, yPos - 5);
    yPos += lineHeight;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');

    const textoContrato = ``;

    // Adicionar texto principal
    const lines = doc.splitTextToSize(textoContrato, 170);
    doc.text(lines, marginLeft, yPos);
    yPos += (lines.length * lineHeight) + lineHeight;

    // Texto adicional se houver
    if (formData.textoAdicional.trim()) {
        doc.setFont('helvetica', 'bold');
        doc.text('CLÁUSULAS ADICIONAIS:', marginLeft, yPos);
        yPos += lineHeight;

        doc.setFont('helvetica', 'normal');
        const linesAdicional = doc.splitTextToSize(formData.textoAdicional, 170);
        doc.text(linesAdicional, marginLeft, yPos);
        yPos += (linesAdicional.length * lineHeight) + lineHeight;
    }

    // Assinaturas
    if (formData.incluirAssinatura) {
        doc.setFont('helvetica', 'bold');
        doc.text('ASSINATURAS:', marginLeft, yPos);
        yPos += lineHeight * 2;

        // Linha para assinatura do contratante
        doc.text('CONTRATANTE:', marginLeft, yPos);
        doc.line(marginLeft + 40, yPos - 4, marginLeft + 100, yPos - 4);
        doc.text(formData.nome, marginLeft + 45, yPos + 3);
        yPos += lineHeight * 3;

        // Linha para assinatura da contratada
        doc.text('CONTRATADA:', marginLeft, yPos);
        doc.line(marginLeft + 40, yPos - 4, marginLeft + 100, yPos - 4);
        doc.text('[SUA EMPRESA]', marginLeft + 45, yPos + 3);
    }

    doc.setFontSize(10);
    doc.text(`Documento gerado em: ${new Date().toLocaleDateString('pt-BR')}`, marginLeft, 280);
    doc.text('ID: ' + Date.now(), 150, 280);

    // 2. Salvar PDF
    doc.save(`carta-aima-${formData.nome.replace(/\s+/g, '-')}.pdf`);

};
