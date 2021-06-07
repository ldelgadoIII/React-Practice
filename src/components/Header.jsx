import { useState, useEffect } from "react";
import axios from "axios";

const Header = ({ title }) => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    getEmployees();
  }, [])

  const getEmployees = async () => {
    const { data: { results } } = await axios.get("https://randomuser.me/api/?results=25");

    setEmployees(results)
  }

  console.log(employees);

    return (
        <header>
          <h1>{title}</h1>
          {employees ? employees.map( ({ gender }, index) => <h2 key={index}>{gender}</h2>) 
          : 
          <h1>No Results To Display</h1>}
        </header>
    )
}

export default Header
