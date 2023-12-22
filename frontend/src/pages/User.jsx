import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import MementoForm from '../components/GoalForm'
import MementoItem from '../components/GoalItem'
import Spinner from '../components/Spinner'
import { getMementos, reset } from '../features/goals/goalSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { mementos, isLoading, isError, message } = useSelector(
    (state) => state.memento
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getMementos())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Memento Dashboard</p>
      </section>

      <MementoForm />

      <section className='content'>
        {mementos.length > 0 ? (
          <div className='mementos'>
            {mementos.map((memento) => (
              <mementoItem key={memento._id} memento={memento} />
            ))}
          </div>
        ) : (
          <h3>You have not set any Memes</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard