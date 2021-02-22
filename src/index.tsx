import * as React from 'react'
// import styles from './styles.module.css'
import { v4 } from 'uuid'

interface Props {
  label?: string
  options: any[]
  itemClassName?: string
  containerClassName?: string
  searchBoxClassName?: string
  component?: React.ComponentType<SelectItem>
}

export type SelectItem = {
  label: string
  value: any
}

const SearchSelect = ({ component: Component, ...props }: Props) => {
  return (
    <div className={props.containerClassName}>
      <label htmlFor={`${v4()}`}>{props.label}</label>
      <div>
        <input type='text' />
      </div>
      {Component &&
        props.options.map((item: SelectItem, itemIndex) => (
          <Component key={itemIndex} {...item} />
        ))}
      <ul>
        {!Component &&
          props.options.map((item: SelectItem, itemIndex) => (
            <li key={itemIndex} className={props?.itemClassName}>
              {item.label}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default SearchSelect
