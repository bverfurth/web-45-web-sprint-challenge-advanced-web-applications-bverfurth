import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import React, { useEffect, useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import fetchColorService from "../services/fetchColorService";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchColorService(setColors);
  }, []);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    axiosWithAuth()
      .put(`/api/colors/${editColor.id}`, editColor)
      .then((res) => {
        setColors([...colors, res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
      .delete(`/api/colors/${colorToDelete.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <ColorList
        colors={colors}
        editing={editing}
        toggleEdit={toggleEdit}
        saveEdit={saveEdit}
        deleteColor={deleteColor}
      />
      <Bubbles colors={colors} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
