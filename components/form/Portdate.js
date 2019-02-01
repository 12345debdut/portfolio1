import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { FormGroup, Label,Button} from 'reactstrap';
export default class PortDate extends Component {
constructor(props){
    super(props);
    const dateValue = props.initialDate ? moment(props.initialDate) : moment();
    const isHidden=props.initialDate?false:true;
    this.state={
      dateValue,
      isHidden
    };
    this.handleChange=this.handleChange.bind(this);
    this.toggle=this.toggle.bind(this);
}

  handleChange = dateValue => 
{
  const {setFieldValue,setFieldTouched}=this.props.form;
  const {name}=this.props.field;
  this.setState({ dateValue })
  setFieldTouched(name,true,true);
  setFieldValue(name,dateValue,true);
}
toggle(date){
  const {setFieldValue,setFieldTouched}=this.props.form;
  const {name}=this.props.field;
  this.setState({isHidden:!this.state.isHidden})
  setFieldTouched(name,true,true);
  setFieldValue(name,date,true);
}
  render() {
      const {canBeDisabled,label,field,form:{touched,errors}}=this.props;
      const {isHidden,dateValue} =this.state;
    return (
      <FormGroup>
      <Label>{label}</Label>
      <div className="input-group">
        {!isHidden && <DatePicker
          selected={dateValue}
          onChange={this.handleChange}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          maxDate={moment()}
          dropdownMode="select"
        />}
        </div>
        {canBeDisabled && !isHidden && <Button onClick={()=>{this.toggle(null)}}>disable</Button>}
        {canBeDisabled && isHidden && <Button onClick={()=>{
          this.toggle(dateValue)
        }}>Enable</Button>}
        {touched[field.name] &&
          errors[field.name] 
          && <div className="error">{errors[field.name]}</div>}
      </FormGroup>
    );
  }
}