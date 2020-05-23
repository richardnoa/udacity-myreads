import React from "react";
import SelectButton from "../../elements/selectButton/SelectButton";

function Book(props){
    return (
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage:
                  'url(' + props.backgroundImage + ')',
              }}
            />
            <SelectButton/>
          </div>
          <div className="book-title">{props.title}</div>
          <div className="book-authors">{props.author}</div>
        </div>
    );
}

export default Book;