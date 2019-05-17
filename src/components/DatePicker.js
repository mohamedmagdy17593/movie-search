/** @jsx jsx */
import {jsx} from '@emotion/core'

import React from 'react'
import ReactDatePicker from 'react-datepicker'
import {useField} from '@rocketseat/unform'
import 'react-datepicker/dist/react-datepicker.css'
import {Input} from '../ui/Input'

const DateInput = Input.withComponent(ReactDatePicker)

function DatePicker({name, ...rest}) {
  const ref = React.useRef(null)
  const {fieldName, registerField, defaultValue, error} = useField(name)
  const [selected, setSelected] = React.useState(defaultValue)

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear()
      },
    })
  }, [fieldName, registerField])

  return (
    <>
      <div
        css={{
          '.react-datepicker-wrapper': {display: 'block'},
          '.react-datepicker__input-container': {width: '100%'},
        }}
      >
        <DateInput
          name={fieldName}
          selected={selected}
          onChange={date => setSelected(date)}
          ref={ref}
          {...rest}
        />
      </div>
      {error && <span>{error}</span>}
    </>
  )
}

export default DatePicker
