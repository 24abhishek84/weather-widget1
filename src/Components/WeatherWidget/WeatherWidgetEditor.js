import React, {useState} from "react";
import {Input, Radio} from 'antd';
import "./WeatherWidgetEditor.css";

const WeatherWidgetEditor = ({setSettings, settings}) => {
  const [value, setValue] = useState(settings.temp);
  const [windValue, setWindValue] = useState(settings.wind);

  const tempOptions = ['C', 'F'];
  const windOptions = ['On', 'Off'];

  const onInputChange = e => {
    setSettings({...settings, title: e ? e.target.value : 'TITLE OF WIDGET' });
  };

  // on temperature radio change, set new preference
  const onTempChange = e => {
    setValue(e.target.value);
    setSettings({...settings, temp: e.target.value});
  };

  // on wind change, set new preference show/ hide
  const onWindChange = e => {
    setWindValue(e.target.value);
    setSettings({...settings, wind: e.target.value });
  };

  // re-usable radio
  // assuming that both radio groups have 2 options
  const radioGroup = ({title, options, values, onChange}) => (
    <>
      <div><span>{title}</span></div>
      <div className="element-spacing">
        <Radio.Group onChange={onChange} value={values}>
          <Radio value={options[0]}>{title === 'Temperature' ? `°${options[0]}` : options[0]}</Radio>
          <Radio value={options[1]} style={{marginLeft: '100px'}}>{title === 'Temperature' ? `°${options[1]}` : options[1]}</Radio>
        </Radio.Group>
      </div>
    </>
  );

  return (
    <div className='editor-div'>
      <div className='border-right'>
      <div style={{ marginBottom: "21px" }}>
        <span>Title</span>
        <Input onChange={onInputChange} className='editor-input' placeholder='Title of widget' />
      </div>
      <div className="radio-main">
        {radioGroup({title: 'Temperature', values: value, options: tempOptions, onChange: onTempChange})}
      </div>
      <div className="radio-main2">
        {radioGroup({title: 'Wind', values: windValue, options: windOptions, onChange: onWindChange})}
      </div>
      </div>
    </div>
  );
};

export default WeatherWidgetEditor;
