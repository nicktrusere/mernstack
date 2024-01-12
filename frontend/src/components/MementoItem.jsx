import { useDispatch } from 'react-redux'
import { deleteMemento } from '../memento/mementoRouter'

function MementoItem({ memento }) {
  const dispatch = useDispatch()

  return (
    <div className='memento'>
      <div>{new Date(memento.createdAt).toLocaleString('en-US')}</div>
      <h2>{memento.text}</h2>
      <button onClick={() => dispatch(deleteMemento(memento._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default MementoItem