import React from 'react';
import "../styles/editProfile.css";
import { IoReturnUpBackOutline } from "react-icons/io5";
import Profiletracker from '../components/layout/static/Profiletracker';
import { Select } from 'antd';

// Reusable select dropdown component
const SelectDropdown = ({ placeholder, options, width, onChange, onSearch }) => (
  <Select
    showSearch
    placeholder={placeholder}
    optionFilterProp="label"
    onChange={onChange}
    onSearch={onSearch}
    style={{ width }}
    options={options}
  />
);

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
].map(month => ({ value: month, label: month }));

const days = Array.from({ length: 31 }, (_, i) => ({
  value: i + 1,
  label: i + 1
}));

const years = Array.from({ length: 100 }, (_, i) => {
  const year = new Date().getFullYear() - i;
  return { value: year, label: year };
});

const EditProfile = () => {
  const onChange = value => {
    console.log(`selected ${value}`);
  };
  const onSearch = value => {
    console.log('search:', value);
  };

  return (
    <div className='player_kyc_body'>
      <div className="player_kyc_wrapper">
        <div className="back_card">
          <IoReturnUpBackOutline className='back_icon' />
        </div>
        <Profiletracker />
        <div className="edit_card">
          <div className="edit_card_top">
            <h4>Personal Data</h4>
          </div>
          <div className="edit_card_bottom">
            <div className="edit_input_container">
              <h4>Full name*</h4>
              <input type="text" placeholder='Michael Onyekachi' className='edit_input' />
            </div> 
            <div className="date_input_container">
              <h4>Date of birth*</h4>
              <div className="dob_card">
                <SelectDropdown 
                  placeholder="Month" 
                  options={months} 
                  width={110}
                  onChange={onChange}
                  onSearch={onSearch}
                />
                <SelectDropdown 
                  placeholder="Day" 
                  options={days} 
                  width={70}
                  onChange={onChange}
                  onSearch={onSearch}
                />
                <SelectDropdown 
                  placeholder="Year" 
                  options={years} 
                  width={90}
                  onChange={onChange}
                  onSearch={onSearch}
                />
              </div>
            </div>
            <div className="edit_input_container">
              <h4>Nationality*</h4>
              <input type="text" placeholder='Enter Nationality' className='edit_input' />
            </div>
            <div className="gender_input_container">
              <h4>Gender*</h4>
              <Select
                    showSearch
                    placeholder="Gender"
                    optionFilterProp="label"
                    onChange={onChange}
                    onSearch={onSearch}
                    style={{ width: '80%' }}
                    options={[
                    {
                        value: 'Male',
                        label: 'Male',
                    },
                    {
                        value: 'Female',
                        label: 'Female',
                    },
                    ]}
                />
            </div>
            <div className="height_input_container">
              <h4>Height (cm)*</h4>
              <input type="text" placeholder='Enter height' className='height_input' />
            </div>
            <div className="edit_input_container">
              <h4>Weight (cm)*</h4>
              <input type="text" placeholder='Enter weight' className='edit_input' />
            </div>
            <div className="edit_input_container">
              <h4>Preferred foot*</h4>
              <Select
                    showSearch
                    placeholder="Option"
                    optionFilterProp="label"
                    onChange={onChange}
                    onSearch={onSearch}
                    style={{ width: '80%' }}
                    options={[
                    {
                        value: 'option 1',
                        label: 'option 1',
                    },
                    {
                        value: 'option 2',
                        label: 'option 2',
                    },
                    ]}
                />
            </div>
          </div>
        </div>
        <div className="edit_card">
            <div className="edit_card_top">
                <h4>Contact Information</h4>
            </div>
            <div className="contact_card_bottom">
                <div className="contact_input_container">
                    <h4>Email address*</h4>
                    <input type="text" placeholder='Enter email address' className='contact_input' />
                </div>
                <div className="contact_input_container">
                    <h4>Phone number*</h4>
                    <input type="text" placeholder='Enter phone number' className='contact_input' />
                </div>
                <div className="contact_input_container">
                    <h4>Home Address*</h4>
                    <input type="text" placeholder='Enter house address' className='contact_input' />
                </div>
            </div>
        </div>
        <div className="edit_card">
            <div className="edit_card_top">
                <h4>Football Profile</h4>
            </div>
            <div className="contact_card_bottom">
                <div className="contact_input_container">
                    <h4>Primary position*</h4>
                    <input type="text" placeholder='input position' className='contact_input' />
                </div>
                <div className="contact_input_container">
                    <h4>Secondary position*</h4>
                    <input type="text" placeholder='Input position' className='contact_input' />
                </div>
                <div className="contact_input_container">
                    <h4>Current Club/Academy*</h4>
                    <input type="text" placeholder='Enter email address' className='contact_input' />
                </div>
            </div>
        </div>
        <div className="edit_card">
            <div className="edit_card_top">
                <h4>Medical & Fitness Information</h4>
            </div>
            <div className="contact_card_bottom">
                <div className="contact_input_container">
                    <h4>Do you follow a diet plan?*</h4>
                    <Select
                    showSearch
                    placeholder="Option"
                    optionFilterProp="label"
                    onChange={onChange}
                    onSearch={onSearch}
                    style={{ width: '80%' }}
                    options={[
                    {
                        value: 'Yes',
                        label: 'Yes',
                    },
                    {
                        value: 'No',
                        label: 'No',
                    },
                    ]}
                />
                </div>
            </div>
        </div>
        <div className="edit_card">
            <div className="edit_card_top">
                <h4>Coach Information</h4>
            </div>
            <div className="contact_card_bottom">
                <div className="contact_input_container">
                    <h4>Contact Info.*</h4>
                    <input type="text" placeholder='Enter email address' className='contact_input' />
                </div>
            </div>
        </div>
        <div className="edit_card">
            <div className="edit_card_top">
                <h4>Other Information</h4>
            </div>
            <div className="contact_card_bottom">
                <div className="contact_input_container">
                    <h4>Are you open to trials?*</h4>
                    <Select
                        showSearch
                        placeholder="Option"
                        optionFilterProp="label"
                        onChange={onChange}
                        onSearch={onSearch}
                        style={{ width: '80%' }}
                        options={[
                        {
                            value: 'Yes',
                            label: 'Yes',
                        },
                        {
                            value: 'No',
                            label: 'No',
                        },
                        ]}
                    />
                </div>
                <div className="contact_input_container">
                    <h4>Are you willing to relocate for opportunities?*</h4>
                    <Select
                        showSearch
                        placeholder="Option"
                        optionFilterProp="label"
                        onChange={onChange}
                        onSearch={onSearch}
                        style={{ width: '80%' }}
                        options={[
                        {
                            value: 'Yes',
                            label: 'Yes',
                        },
                        {
                            value: 'No',
                            label: 'No',
                        },
                        ]}
                    />
                </div>
            </div>
        </div>
        <button className='complete_cta'>Submit</button>
      </div>
    </div>
  );
};

export default EditProfile;
