import React,{Component} from 'react';
import CourseForm from './CourseForm/CourseForm';
import CourseList from './CourseList/CourseList';
class App extends Component{
  state={
    courses:[
      {name:"HTML5"},
      {name:"CSS3"},
      {name:"JAVASCRIPT"},
      {name:"TYPESCRIPT"},
      {name:"REACT JS"},
    ],
    current:'',
  }

  //update course
  updateCourse=(e)=>{

    this.setState({
      current:e.target.value,
    })
    
  }

  //add course
  addCourse=(e)=>{
    e.preventDefault();
    let current=this.state.current;
    let courses=this.state.courses;
    courses.push({name:current})
   this.setState({
    courses:courses,
    current:'',
   })
  }
  //Delete course
  deleteCourse=(index)=>{
    let courses=this.state.courses;
    courses.splice(index,1);
    this.setState({
      courses:courses
    })
  }
  //Edite Course 
  editCourse=(index,value)=>{
    let courses=this.state.courses
    let course=courses[index];
        course['name']=value;
    this.setState({
      courses:courses
    })
  }
  render(){
    const {courses} = this.state;
    const courseList= courses.map((course,index)=>{
      return  <CourseList courses={courses} details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    })
    
    return(

      <section className='App'>
        <div className='container'>
          <h2>Course List</h2>
          <CourseForm currentValue={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
          <u>{ this.state.courses.length > 0 ? (courseList) : (<p>No Courses To Show! Please Add New Course.</p>)}</u> 
       </div>
      </section>
    )
  }
}

export default App;
