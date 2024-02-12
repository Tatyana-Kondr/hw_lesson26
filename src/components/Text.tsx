import React, { useState, FormEvent, ChangeEvent } from "react"

export default function Text() {
    const [formDate, setFormDate] = useState({anyText:""});
    const handleChange = (e:FormEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;
        setFormDate({...formDate, [name]: value,});
    }
    // const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    //     setFormDate(event.target.value);
    // };
    const [isVisible, setIsVisible] = useState(false);
    const visibility = () => {setIsVisible(!isVisible)};

  return (
    <div>
        <form>
            <input type="text" name="anyText" value={formDate.anyText} onChange={handleChange} />
        </form>
        <button onClick={visibility}>{isVisible? "Скрыть":"Показать"}</button>
        {isVisible && <p>{formDate.anyText}</p>} 
    </div>
  )
}