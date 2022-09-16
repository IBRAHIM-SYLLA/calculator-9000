import React, { useState, useEffect } from 'react'
import AmazingNumberButton from './AmazingNumberButton';
import BeautifulScreen from './BeautifulScreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import ClearButton from './ClearButton';
import SaveButton from './SaveButton';
import ItsOver9000 from './ItsOverNineThousand';
import axios from 'axios';
import '../css/Panel.css';
import '../css/Calculator.css';
import '../css/table.css';
export default function Calculator() {
  const [nombres, setNombres] = useState(0)
  const [res, setRes] = useState(0)
  const [table, setTable] = useState([])

  const handleClick = (e) => {
    console.log(e.target.value)
    nombres === 0
      ? setNombres(e.target.value)
      : setNombres(nombres + e.target.value)
  }
  // console.log(nombres);

  const calculate = (e) => {

    try {
      console.log(nombres);
      setRes(eval(nombres));

      console.log(res);
    } catch (error) {
      setRes('error');
    }
  }

  const handleClickClear = () => {
    setNombres(0);
    setRes(0);
  }

  const save = async () => {
    console.log(nombres)
    const url = 'http://localhost/calculator9000/php/APIcalculator.php';
    try{
      const dataCalcul = await axios.post(url, {
        nombres: nombres,
        res: res
      });
      console.log(dataCalcul.data);
    } catch (error) {
      console.log('error');
    }
  }

  useEffect(() => {
    const urlGet = 'http://localhost/calculator9000/php/APIdata.php';
    axios.get(urlGet)
    .then(response => response.data)
    .then((data) => {
      setTable(data);
    })
  })

  return (
    <div className='calculatrice'>
      {
        res > 9000 && <ItsOver9000 />
      }
      <BeautifulScreen numberValue={nombres} changeNumbers={(e) => setNombres(e.target.value)} />
      <BeautifulScreen numberValue={res} changeNumbers={(e) => setRes(e.target.value)} />
      <div className="buttonPanel">
        <div className="Numbers">
          <div> <AmazingNumberButton class="buttonBorder" handleClickParent={handleClick} />
            <div className="ClearEqual">
              <MagnificientEqualButton class="buttonBorder" value='=' buttonClick={(e) => { calculate(e) }} equal='=' />
              <ClearButton class="buttonBorder" value='C' ClearButton={(e) => { handleClickClear(e) }} clear='C' />
              <SaveButton class="buttonBorder" value='Save' buttonClickSave={(e) => {save(e)}} save='Save' />
            </div>
          </div>

          <GreatOperationButton class="buttonBorder" handleClickParent={handleClick} />

        </div>
       
      </div>
      <div>
        <table class="table-fill">
          <thead>
            <tr>
              <th class="text-left">Calcul</th>
              <th class="text-left">Resultat</th>
            </tr>
          </thead>
          <tbody class="table-hover">
            {table.map((item) =>(
            <tr>
              <td class="text-left">{item.calcul}</td>
              <td class="text-left">{item.resultat}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}
