import { useDispatch } from 'react-redux'
import { deleteTeacher } from '../features/teacher/teacherSlice'

function TeacherItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteTeacher(goal._id))}>
        remove
      </button>
    </div>
  )
}

export default TeacherItem
