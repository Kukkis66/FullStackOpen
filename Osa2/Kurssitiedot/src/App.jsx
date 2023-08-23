


const Course = ({course}) => {

  const total = course.parts.reduce( (s, p) =>  s + p.exercises, 0)

  console.log(course)
  return (
    <>
      <h1>{course.name}</h1>
      {course.parts.map(part => <li key={part.id}>
        {part.name} {part.exercises}
        </li>

        )}
        <h3>total of {total} exercises</h3>
        

        

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


