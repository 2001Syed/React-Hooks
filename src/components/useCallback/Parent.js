import React, { useCallback, useState } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'



function Parent() {

    const [age, setAge] = useState(18)
    const [salary, setSalary] = useState(50000)

    const incrementAge =useCallback(() => {
        setAge(age + 1);
    },[age]) 

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    },[salary])
    

  return (
    <div>
      <Title></Title>
      <Count text="Age" count={age}></Count>
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="salary" count={salary}></Count>
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default Parent