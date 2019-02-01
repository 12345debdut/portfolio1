// Render Prop
import React from 'react';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup, Label,Button} from 'reactstrap';
import PortInput from '../form/input';
import PortDate from '../form/Portdate';
const validateInput=(values)=>{
    let errors = {};
    Object.keys(values).forEach((key)=>{
        if(key!=="enddate"){
            if(!values[key]){
                errors[key]=`Field ${key} is reqired!`
            }
        }
    });
    const startDate=moment(values.startdate)
    const endDate=moment(values.enddate);
    if(startDate && endDate && endDate.isBefore(startDate)){
        errors.enddate='End Date cannot be before start date'
    }
        // if (!values.email) {
        //   errors.email = 'Required';
        // } else if (
        //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //   errors.email = 'Invalid email address';
        // }
        return errors;
}
const PortFolioCreateForm = (props) =>{ return(
  <div>
    <Formik
      initialValues={props.initialValues}
      validate={validateInput}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field 
            type="text" 
            name="title"
            label="Title" 
            className="form-control" 
            component={PortInput}
          />          
          <Field 
            type="text" 
            name="company" 
            label="Company" 
            className="form-control"
            component={PortInput}
          />
          <Field 
                type="text" 
                name="location" 
                label="Location" 
                className="form-control" 
                component={PortInput}
          />
          <Field 
            type="textarea" 
            name="position" 
            label="Position" 
            className="form-control" 
            component={PortInput}
          />
          <Field 
            type="textarea" 
            name="description" 
            label="Description" 
            className="form-control" 
            component={PortInput}
          />
          <Field 
            name="startdate" 
            label="Startdate" 
            initialDate={props.initialValues.startdate?props.initialValues.startdate:moment()}
            component={PortDate}
        />
        <Field 
            name="enddate" 
            label="Enddate" 
            initialDate={props.initialValues.enddate}
            component={PortDate}
            canBeDisabled={true}
      />
      {
        props.error &&
        <Alert color="danger">{props.error}</Alert>
      }
          <Button outline color="warning" size="lg" type="submit" disabled={isSubmitting}>
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
)};

export default PortFolioCreateForm;