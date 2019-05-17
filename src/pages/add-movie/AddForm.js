/** @jsx jsx */
import {jsx} from '@emotion/core'

import {Form} from '@rocketseat/unform'
import {UnFormInput, UnFormTextarea} from '../../ui/Input'
import {Button} from '../../ui/Button'
// import styles from '../../ui/styles'
import DatePicker from '../../components/DatePicker'

function AddForm() {
  function handleSubmit(data) {
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Movie title
        <UnFormInput type="text" name="title" placeholder="title" />
      </label>
      <label>
        Overview text
        <UnFormTextarea
          type="text"
          name="overview"
          placeholder="write movie description"
          rows="5"
        />
      </label>
      <label>
        Rating
        <UnFormInput
          type="number"
          step="0.1"
          name="rating"
          placeholder="rating"
        />
      </label>
      <label>
        Movie date
        <DatePicker name="date" placeholderText="Movie release date" />
      </label>
      <br />
      <div
        css={{
          display: 'flex',
          flexDirection: 'row-reverse',
        }}
      >
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  )
}

export default AddForm
