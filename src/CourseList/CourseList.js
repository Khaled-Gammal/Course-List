import React,{Component,Fragment} from "react";

class CourseList extends Component{
    state={
        isEdit:false,
    }
    //render course item
    renderCourse=()=>{
        return(
            <li>
                <span>{this.props.details.name}</span>
                <button onClick={()=>{this.toggleState()}}>Edit Course</button>
                <button onClick={()=>{this.props.deleteCourse(this.props.index)}}>Delete Course</button>
            </li>
        )
    }
    //toggle state
    toggleState=()=>{
        let {isEdit}=this.state;
        this.setState({
            isEdit:!isEdit,
        })
    }
    updateItem=(e)=>{
        e.preventDefault();
        this.props.editCourse(this.props.index,this.input.value);
        this.toggleState();
    }
    //render update course
    renderUpdateCourse=()=>{
        return(
            <form onSubmit={this.updateItem}>
                <input type='text' ref={(v)=>{this.input=v}} placeholder='update your course' defaultValue={this.props.details.name}/>
                <button onClick={()=>this.props.editCourse()}>Update Course</button>
            </form>
        )
    }
    render(){
        let  {isEdit}=this.state;
        return(  
          
            <Fragment>
            {isEdit ? this.renderUpdateCourse() : this.renderCourse()}
            </Fragment>
          
        )
    }
}
export default CourseList;