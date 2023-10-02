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

export default Course