


const Course = ({courses}) => {

  
  
    
  return (
  <>
  {courses.map((course) => (
        <section key={course.id}>
          <h1>{course.name}</h1>
          <ul>
            {course.parts.map((part) => 
              <li key={part.id}>
                {part.name} {part.exercises}
              </li>
            )}
          </ul>
          <h3>total of {course.parts.reduce( (s, p) =>  s + p.exercises, 0)} exercises</h3>
        </section>
      ))}
  
  
  
  
  
  </>
  )
  
}



const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course course={courses} />
    </div>
  )
}
   

  
  



export default App


