import React from "react";
import Search from "./Search";
import Notes from "./Notes";
import Add from "./Add";
import { useState } from "react";
import { useEffect } from "react";

const getLocalItems = () => {
  let list = localStorage.getItem("data");
  if (list) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return [];
  }
};

const WholeApp = () => {
  const [text, setText] = useState("");
  const [arr, setArr] = useState(getLocalItems());
  const [toggle, setToggle] = useState(true);
  const [isEdit, setIsEdit] = useState(null);

  const handleAdd = () => {
    if (!text) {
      alert("please fill data");
    } else if (text && !toggle) {
      setArr(
        arr.map((elem) => {
          if (elem.id === isEdit) {
            return { ...elem, carddata: text };
          }
          return elem;
        })
      );
      setToggle(true);
      setText("");
      setIsEdit(null);
    } else {
      const carddataobject = {
        id: Date.now().toString() + text,
        carddata: text,
      };

      setArr([...arr, carddataobject]);

      setText("");
    }
  };

  const handleDelete = (id) => {
    const updatedData = arr.filter((item) => item.id != id);
    setArr(updatedData);
  };

  const handleEdit = (id) => {
    const editdata = arr.find((elem) => {
      return elem.id === id;
    });
    setToggle(false);
    setText(editdata.carddata);
    setIsEdit(id);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(arr));
  }, [arr]);

  return (
    <div>
      <Search arr={arr} />
      <h3>
        Sorry not able to beautify the assignment due to some health related
        issues
      </h3>
      <Add
        text={text}
        toggle={toggle}
        handleAdd={handleAdd}
        setText={setText}
      />

      <Notes
        dataarr={arr}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default WholeApp;
