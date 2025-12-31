import { useState, useEffect, useMemo, useCallback } from 'react';

const Teste = () => {

    const [name, setName] = useState("Andrelon");
    const [age, setAge] = useState(23);

    const handleChangeName = useCallback(() => {
        console.log("Alterou nome");
        
        setName(prev => prev === "Andrelon" ? "Valeska" : "Andrelon");
    }, []);

    const handleChangeAge = useCallback(() => {
        const newAge = 10 * age;
        console.log("Age atual", age, newAge);
        setAge(prev => prev === 23 ? 24 : 23);
    }, [age]);

    /*const calculo = useMemo(() => {
        console.log("Calculou", age);
        return 10 * age;
    }, [age]);
    
    useEffect(() => {
        handleChangeName();
    }, []);*/

  return (
    <div>
      <p>Idade: {age}</p>
      <br />
      <p>Nome: {name}</p>
      <br />
      <button onClick={handleChangeName}>Alterar nome</button>
      <br />
      <br />
      <button onClick={handleChangeAge}>Alterar idade</button>
    </div>
  )
}

export { Teste };