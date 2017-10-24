import React,{Component} from 'react';
import {Field, reduxForm } from 'redux-form';

class PostsNew extends Component{

    renderField(field){
      return(
        <div className="form-group">
        <label>{field.label}</label>
            <input
            className ="form-control"
            type ="text"
            {...field.input}
            />
            {field.meta.touched ? field.meta.error: ''}
        </div>
      )
    }

onSubmit(values){
  console.log(values);
}


  render(){
    const {handleSubmit} =this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
        label ="Title for Posts"
        name ="title"
        component ={this.renderField}
        />
        <Field
        label ="Categories"
        name ="categories"
        component ={this.renderField}
        />

        <Field
        label ="Post Content"
        name ="content"
        component ={this.renderField}
        />

        <button className="btn btn-primary" type ="submit">Submit</button>
      </form>
    )
  }
}


function validate(values){

  const errors ={}

  if(!values.title){
    errors.title ="Enter the title";
  }

  if(!values.categories){
    errors.categories ="Enter the categories";
  }

  if(!values.content){
    errors.content ="Enter the content";
  }

return errors;
}

export default reduxForm({
  validate,
  form :'PostsNewForm '
})(PostsNew);
