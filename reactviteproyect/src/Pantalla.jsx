function Pantalla (){

    let [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador + 1)
    }
    function disminuir() {
        setContador(contador - 1)
    }
    function limite(){
        if (contador < 0) {
            setContador(0)
        }
    }
    return (
        <div>
            <div>Pantalla</div>
            <p>{Contador}</p>
            <button onClick={incrementar}>Incrementar</button>
             <button onClick={disminuir}>Disminuir</button>
             {limite()}
        </div>

    )
}

export default Pantalla