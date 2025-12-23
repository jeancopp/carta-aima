import React, {useState} from 'react';

import Formulario from './Formulario';
import PreviewPDF from './PreviewPDF';

import './GeradorPDF.css';
import ExportadorPDF from "./ExportadorPDF";
import CartaAima from "./CartaAima";

const GeradorPDF = () => {
    const [formData, setFormData] = useState({
        nome: '',
        endereco: '',
        email: '',
        telefone: '',
        nie: '',
        ar: '',
        dataIda: '',
        enderecoAima: 'Alameda Mahatma Gandhi, 1600-500, Lisboa',
        cidade: 'Lisboa',
        textoAdicional: '',
        incluirAssinatura: true,
        estruturaMissao: false,
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };


    const dataAtual = new Date();
    return (
        <div className="gerador-container">
            <div className="content">
                Olá!<br/>
                Assim como a maioria dos imigrantes, fiquer por aguardar por meses por um atualizar da minha situação
                perante a Agencia para Imigraçóes e Asilo(AIMA).<br/>
                Após o envio de uma carta semelhante a essa, a atualização veio em poucos dias. Não me responsábilizo
                pelas suas ações, e com o presente modelo a intenção é apenas de ajudar.<br/>
                Caso isso tenha sido útil e queira me <a href="https://Ko-fi.com/jeancoppieters" target="_blank"
                                                         rel="noreferrer">pagar um café no Ko Fi<br/></a>
                <br/>
            </div>

            <Formulario
                formData={formData}
                onChange={handleChange}
            />

            <PreviewPDF
                formData={formData}
                date={dataAtual}
            />

            <div className="action-section">

                <ExportadorPDF nomeArquivo={`carta-aima-${formData.nome.trim().replaceAll(' ', '-')}.pdf`}>
                    <CartaAima formData={formData} date={dataAtual}/>
                </ExportadorPDF>

            </div>

            <div className="info-box">
                <p>
                    <strong>⚠️ Importante:</strong>
                    O PDF é gerado 100% no seu navegador. Nada aqui é salvo. Ao sair, sumiu
                </p>
            </div>
        </div>
    );
};

export default GeradorPDF;