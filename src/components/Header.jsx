import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";


const Header = ({ title }) => {
  const [employees, setEmployees] = useState([])

  Header.propTypes = {
    title: PropTypes.string.isRequired
  }

  useEffect(() => {
    getEmployees();
  }, [])

  const getEmployees = async () => {
    const { data: { results } } = await axios.get("https://randomuser.me/api/?results=25");

    setEmployees(results)
  }

  console.log(employees);

    return (
        <header class="header">
          <h1>{title}</h1>
          {/* {employees ? employees.map( ({ gender }, index) => <h2 key={index}>{gender}</h2>) 
          : 
          <h1>No Results To Display</h1>} */}
        </header>
    )
}

// CSS styling
// const headingStyles = {
//   color: "orange",
//   backgroundColor: "black"
// }

export default Header
