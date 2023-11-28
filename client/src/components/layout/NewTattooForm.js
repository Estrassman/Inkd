import React, { useState, useEffect } from "react";
import _ from "lodash";
import Dropzone from "react-dropzone";

const NewTattooForm = () => {
  const [newImage, setNewImage] = useState(null);
  const [newTattoo, setNewTattoo] = useState({ image: "", userId: "" });

  const addTattoo = async (event) => {
    event.preventDefault();
    const newTattooBody = new FormData();
    newTattooBody.append("image", newImage);
    try {
      const response = await fetch("/api/v1/tattoos", {
        method: "POST",
        headers: {
          Accept: "image/jpeg",
        },
        body: newTattooBody,
      });
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`);
      }
      const body = await response.json();
      setNewTattoo({ ...newTattoo, image: body.tattoo.image });
    } catch (error) {
      console.error(`Error in addTattoo Fetch: ${error.message}`);
    }
  };

  let uploadImagePromptText = "Click Or Drag Here To Edit Tattoo Image";

  if (!_.isEmpty(newTattoo.image)) {
    uploadImagePromptText = "Click here to upload image, then click the button below to save!";
  }

  const handleImageUpload = (acceptedImage) => {
    setNewImage(acceptedImage[0]);
  };

  return (
    <form className="dropzone" onSubmit={addTattoo}>
      <Dropzone onDrop={handleImageUpload}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>{uploadImagePromptText}</p>
          </div>
        )}
      </Dropzone>
      <input type="submit" value="Save Selected Tattoo Image" />
    </form>
  );
};

export default NewTattooForm;
