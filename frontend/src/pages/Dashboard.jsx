import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TeacherForm from '../components/TeacherForm'
import TeacherItem from '../components/TeacherItems'
import { getTeachers, reset } from '../features/teacher/teacherSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getTeachers())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])


  return (
    <>
      <section className='heading'>
        <h1>Admin </h1>
      </section>

      <TeacherForm />

      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <TeacherItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>No Teacher Found</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
