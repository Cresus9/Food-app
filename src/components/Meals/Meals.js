import React,{Fragment} from 'react'
import MealsSummary from './MealsSummary'
import Available from './Available'

export default function Meals() {
  return (
    <Fragment>
        <MealsSummary />
        <Available />
    </Fragment>
  )
}
