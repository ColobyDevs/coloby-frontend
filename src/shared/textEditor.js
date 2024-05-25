import React, { useState, useContext } from "react";
import { Context } from "../context/context";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins/paragraph_format.min.js";
import "froala-editor/js/plugins/lists.min.js";
import FroalaEditorComponent from "react-froala-wysiwyg";



const TextEditor = () => {
  const { taskBoard, textEditorContent } = useContext(Context);
  const { taskInView, setTaskUpdate } = taskBoard;
  const {setEditorText} = textEditorContent

  const handleModelChange = (event) => {
    setTaskUpdate({ description: event, status: 'undone' });
    setEditorText(event)
  };

  let config = {
    heightMin: 100,
    heightMax: 100,
    width: 500,
    attribution: false,
    listAdvancedTypes: false,
    toolbarButtons: ["bold", "paragraphFormat", "formatOL", "formatUL"],
    placeholderText: "Edit me!",
    events: {
      initialized: function () {
        const instance = this;
        setEditorText(taskInView.description)
        instance.html.set(`${taskInView.description}`);
      },
    },
  };

  return (
    <>
      <FroalaEditorComponent
        onModelChange={handleModelChange}
        config={config}
      />
    </>
  );
};

export default TextEditor;
