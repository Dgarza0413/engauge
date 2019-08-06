import React from "react";
import { Form, Col, FormGroup, Checkbox } from "react-bootstrap";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components
export function StringInput(props) {
    return (
        <Form.Group>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type="text" name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
        </Form.Group>
    )
}

export function NumberInput(props) {
    return (
        <Form.Group>
            <Form.Label>{props.label}</Form.Label>
            <div className="number-group">
                <Form.Control type="number" name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} style={{width: props.width || "100%"}} />
                <p>{props.unit}</p>
            </div>
        </Form.Group>
    );
}

export function Select(props) {
    return (
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control as="select">
                {props.children}
            </Form.Control>
        </Form.Group>
    );
}

export function BoxInput(props) {
    return (
        <Form.Group>
            <Form.Label>{props.label}</Form.Label>
            <div className="mb-3">
                {props.children}
            </div>
        </Form.Group>
    );
}

// export function Checkbox(props) {

// }

// export default Input;

// export function Input(props) {
//   return (
//     <div className="form-group">
//       <input className="form-control" {...props} />
//     </div>
//   );
// }

// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

// export function FormBtn(props) {
//   return (
//     <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
//       {props.children}
//     </button>
//   );
// }
