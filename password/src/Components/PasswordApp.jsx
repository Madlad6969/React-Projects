import {  useState } from "react";
import { useEffect } from "react";
function Passwordapp() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [capitalletters, setCapitalletters] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialcharacters, setSpecialcharacters] = useState(false);

  function GeneratePassword() {
    let sletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
      "u", "v", "w", "x", "y", "z",]

    let cletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
      "U", "V", "W", "X", "Y", "Z",]


    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    let scharacters = ["~", "@", "!", "#", "$", "&", "*", "=", "?", "%"]

    // let values=smallletters.concat(capitalletters,numbers,specialcharacters)
    let values = sletters
    console.log(values);

    // Add capital letters if checkbox is checked
    if (capitalletters) {
      values = values.concat(cletters);
    }

    // Add numbers if checkbox is checked
    if (numbers) {
      values = values.concat(num);
    }

    // Add special characters if checkbox is checked
    if (specialcharacters) {
      values = values.concat(scharacters);
    }



    let password = "";
    for (let i = 1; i <= length; i++) {
      password += values[Math.floor(Math.random() * values.length)]
    }

    setPassword(password)
  }

useEffect(() => {
  GeneratePassword();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [capitalletters, numbers, specialcharacters, length]);


  return (

    <center>
      
      <h1>{capitalletters}</h1>
      <div className="card p-4 mt-5" style={{ width: "22rem" }}>
        <div className="card-body d-flex  flex-column align-items-center gap-3">
          <input
            type="number"
            className="form-control"
            placeholder="Enter the length of password"
            onChange={(e) => setLength(e.target.value)}
            value={length}
          />

          <input
            type="text"
            className="form-control"
            readOnly
            value={password}
          />

          <button className="btn btn-primary w-100" onClick={GeneratePassword}>
            Generate Password
          </button>


          <div className="d-flex flex-column align-items-start w-100">

            <input type="checkbox" value={capitalletters} onChange={() => setCapitalletters(capitalletters => !capitalletters)} /> Uppercase Letters
            <input type="checkbox" value={numbers} onChange={() => setNumbers(numbers => !numbers)} />Numbers
            <input type="checkbox" value={specialcharacters} onChange={() => setSpecialcharacters(specialcharacters => !specialcharacters)} /> Special Characters











            <input type="range" min="8" max="20" onChange={(e) => setLength(e.target.value)} value={length} />
            <p>length is {length}</p>


          </div>
        </div>
      </div>
    </center>






  )


}

export default Passwordapp;