import React from "react";
import './CartaAima.css';

const CartaAima = ({formData, date}) => {
    const formatData = data => data.toLocaleDateString('pt-PT', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="preview-content">
            <div className="header-info">
                <div className="sender-info">{formData.nome || '[Nome]'}</div>
                <div className="sender-address">{formData.endereco || '[Endereço]'}</div>
                <div className="sender-contacts">
                    Email: {formData.email || '[Email]'} || Telefone: {formData.telefone || '[Telefone]'}
                </div>
                <div className="sender-contacts">
                    NIE: {formData.nie || '[NIE]'} || Autorização de Residência: {formData.ar || '[AR]'}
                </div>
            </div>

            <div className="date-location">
                {formData.cidade || '[cidade]'} , {formatData(date)}
            </div>

            <div className="recipient-address">
                <strong>À AIMA{formData.estruturaMissao && ' – Estrutura de Missão'}</strong><br/>
                {formData.enderecoAima || '[Endereço Aima]'}
            </div>

            <div className="subject">
                Pedido de informação / posição sobre o meu pedido de renovação
            </div>

            <div className="salutation">
                Exmo.(a) Senhor(a),
            </div>

            <div className="content">
                <p>
                    Venho por este meio, na qualidade de requerente do processo de renovação de residência n.º
                    <span className="highlight">{formData.ar || '[AR]'}</span>, número de identificação de
                    estrangeiro
                    <span className="highlight"> {formData.nie || '[NIE]'}</span>, solicitar a Vossa melhor atenção
                    e uma posição
                    relativamente ao estado atual do meu pedido.
                </p>

                <p>
                    No dia <span
                    className="highlight">{(formData.dataIda && formatData(new Date(formData.dataIda))) || '[Data de Ida]'}</span> submeti
                    o referido pedido de
                    renovação,
                    tendo cumprido todos os requisitos exigidos, nomeadamente a entrega de documentos via Portal de
                    Serviços
                    da AIMA e presença em entrevista no Centro de Atendimento Especial de Lisboa – Zona 2. Até à
                    presente data,
                    não recebi comunicação formal sobre o deferimento ou indeferimento, nem me foi indicada eventual
                    pendência ou necessidade de informação adicional.
                </p>

                <p>
                    Considerando o tempo decorrido e a relevância da renovação para o exercício regular dos meus
                    direitos,
                    como o cumprimento das minhas responsabilidades profissionais no âmbito de um contrato de
                    trabalho
                    sem
                    termo, incluindo eventuais deslocações internacionais inerentes às minhas funções, solicito
                    respeitosamente
                    que me informe, com a maior brevidade possível, sobre:
                </p>

                <ol className="numbered-list">
                    <li>O estado atual do meu processo;</li>
                    <li>Se existe alguma pendência ou documentação adicional necessária da minha parte;</li>
                    <li>O prazo previsto para decisão final;</li>
                    <li>Em caso de recusa, os fundamentos da decisão, para que possa avaliar eventual recurso ou
                        regularização.
                    </li>
                </ol>
                {formData.textoAdicional && (
                    <p>
                        {formData.textoAdicional}
                    </p>
                )}
            </div>
            <div className="closing">
                <p>
                    Sem outro assunto de momento, agradeço desde já a atenção dispensada ao presente pedido e
                    aguardando
                    um
                    parecer, subscrevo-me com elevado apreço e consideração.
                </p>

                <p>
                    Com os melhores cumprimentos,
                </p>
            </div>

            <div className={`signature ${formData.incluirAssinatura && 'signature__line'}`}>
                {formData.nome || '[Nome]'}
            </div>
        </div>
    );
}
export default CartaAima;