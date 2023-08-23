const Course = ({course}) => {
  
  console.log(course)
  return (
    <>
      <h1>{course.name}</h1>
      {course.parts.map(part => <li key={part.id}>
        {part.name} {part.exercises}
        </li>
        )}
     </>
  )
  
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App


