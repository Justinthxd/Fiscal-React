import React, { useState } from 'react';

const LinksFroms = ({ add }) => {

  const initValues = {
    url: '',
    name: '',
    description: '',
  };

  const [state, setState] = useState(initValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    add(state);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  return (
    <div className='col-4 mx-auto'>
      <form className='card card-body' onSubmit={handleSubmit}>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className='material-icons'>link</i>
          </div>
          <input type="text" className='form-control' placeholder='Https://' name='url' onChange={handleInputChange} />
        </div>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className='material-icons'>create</i>
          </div>
          <input type="text" className='form-control' placeholder='Name' name='name' onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <textarea className='form-control' placeholder='Description' name="description" rows="3" onChange={handleInputChange}></textarea>
        </div>
        <button className='btn btn-primary btn-block'>Save</button>
      </form>
    </div>
  );
}

export default LinksFroms;
