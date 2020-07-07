import React, { Component } from 'react'

class AddGameForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fields: {
        name: '',
        datum: '',
        vreme: '',
        hala: ''
      }
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
// validacija


contactSubmit(e){
  e.preventDefault();

  if(this.handleValidation()){
     alert("Form submitted");
  }else{
     alert("Form has errors.")
  }

}

handleChange(field, e){         
  let fields = this.state.fields;
  fields[field] = e.target.value;        
  this.setState({fields});
}


// validacija kraj
  onInputChange (event) {
    const fields = this.state.fields
    fields[event.target.name] = event.target.value
    fields[event.target.datum] = event.target.value
    fields[event.target.vreme] = event.target.value
    fields[event.target.hala] = event.target.value
    this.setState({ fields })
  }

  handleSubmit (event) {
    this.props.addGame({ name: this.state.fields.name })
    this.props.addGame({ datum: this.state.fields.datum })
    this.props.addGame({ vreme: this.state.fields.vreme })
    this.props.addGame({ hala: this.state.fields.hala })
    this.setState({ fields: {
      name: '',
      datum: '',
      vreme: '',
      hala: ''
    }})
    document.getElementById("ul-id-wrapper").className = "wrapper";
    event.preventDefault()
  }

  render () {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit} id="myForm">
          Ime:<br />
          <input className="input-podaci" onChange={this.onInputChange} placeholder='Unesi ime' name='name' value={this.state.fields.name} type='text' />
          Datum:<br />
          <input onChange={this.onInputChange} placeholder='Unesi datum' name='datum' value={this.state.fields.datum} type='date' />
          Vreme:<br />
          <input onChange={this.onInputChange} placeholder='Unesi vreme' name='vreme' value={this.state.fields.vreme} type='time' />
          Hala:<br />
          <input onChange={this.onInputChange} placeholder='Unesi halu' name='hala' value={this.state.fields.hala} type='text' />
          <input type='submit' value='Add Game' />
        </form>
      </div>
    )
  }
}

export default AddGameForm
