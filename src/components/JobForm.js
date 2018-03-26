import React from "react";

class JobForm extends React.Component {
  onSubmit = event => {
    event.preventDefault();
    const formData = new FormData(this.refs.form);
    const data = {
      title: formData.get("title"),
      pay: formData.get("pay"),
      description: formData.get("description"),
      interested: []
    };
    this.props.addJobListing(data);
    this.refs.form.reset();
  };
  render() {
    return (
      <aside className="side-bar">
        <h3>Add a Job</h3>
        <form ref="form" className="job-form" onSubmit={this.onSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" />
          <label htmlFor="pay">Compensation</label>
          <input type="text" name="pay" />
          <label htmlFor="description">Description</label>
          <textarea name="description" rows="8" cols="40" />
          <input type="submit" name="submit" value="Submit" />
        </form>
      </aside>
    );
  }
}
JobForm.defaultProps = {
  addJobListing: () => {}
};
export default JobForm;
