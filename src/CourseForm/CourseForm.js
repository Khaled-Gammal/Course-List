import React from "react";

const CourseForm=(props)=>{
    return(

        <form onSubmit={props.addCourse}>
            <input type='text' required placeholder="Enter Your Course" value={props.currentValue} onChange={props.updateCourse}/>
            <button type="submit">Add Course</button>
        </form>
        
    )
}
export default CourseForm;