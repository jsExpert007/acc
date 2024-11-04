import React, { useRef, useState } from 'react';
import './style.scss';
import { ContinueBtn } from 'src/Components';

export default function UploadMedia({
  onChangeRecipes
}) {

  const [photo, setPhoto] = useState("")

  const inputRef = useRef(null);

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      console.log("===e.target.files===", e.target.files)
      setPhoto(e.target.files[0])
      onChangeRecipes('media', e.target.files[0])
    }
  };

  const onUploadImg = () => {
    inputRef.current.click();
  };

  return (
    <div className="upload-media-component">
      <div className='upload-content mx-auto'>
        <div className='title'>Upload Video/Pic</div>
        <ContinueBtn
          btnText='Upload'
          className='upload-btn btn-shadow'
          onClick={onUploadImg}
        />
      </div>
      <div className='img-container'>
        {photo && <div className='media-title'>{photo.name}</div>}
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
