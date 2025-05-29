function gerarDiaDaSemana() {
        
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
    weekday: "long"
    });
    const data = new Date().toLocaleDateString("pt-BR");
    const horas = new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit", minute: "2-digit"
    });
    const dataCompleta = `${diaDaSemana} (${data}) às ${horas}`;

    return dataCompleta;
}

export default gerarDiaDaSemana;