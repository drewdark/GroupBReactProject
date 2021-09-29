import React from 'react';
import './AdminPanel.css';
import {Link} from 'react-router-dom';

const AdminPanel = () => (
  <div className="AdminPanel">
    <div class="ui vertical menu">
  <div class="ui dropdown item">
    Please select an operation:
    <i class="dropdown icon"></i>
    <div class="menu">
      <a class="item">Get details</a>
      <a class="item">Delete record</a>
      <a class="item">Update telephone number</a>
    </div>
  </div>
</div>
  </div>
);


export default AdminPanel;
