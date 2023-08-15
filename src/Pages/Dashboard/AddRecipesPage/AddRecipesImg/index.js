import React, { useRef, useState } from 'react';
import './style.scss';
import EditIcon from "src/Assets/Images/Icons/edit-icon.svg";

export default function AddRecipesImg({
  title = ""
}) {

  const [photo, setPhoto] = useState("")

  const inputRef = useRef(null);

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      console.log("===e.target.files===", e.target.files)
      setPhoto(e.target.files[0])
    }
  };

  const onUploadImg = () => {
    inputRef.current.click();
  };

  return (
    <div className="add-recipes-img-component">
      <div className='center v-c'>
        <div className='title'>{title}</div>
        <img src={EditIcon} alt='edit-icon' className='edit-icon' onClick={onUploadImg} />
      </div>
      <div className='img-container'>
        {photo && (
          <img src={URL.createObjectURL(photo)} alt='upload' />
        )}
        <input
          ref={inputRef}
          className={"img-input"}
          type="file"
          id="input-file-upload"
          multiple={true}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
