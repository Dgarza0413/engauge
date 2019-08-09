import React from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
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
        <div>
            <Form.Label>{props.label}</Form.Label>
            <InputGroup className="mb-3">
                <FormControl type="text" name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} style={{ borderRight: props.unit ? 0 : "1px solid #e6e7ec" }} />
                { props.unit && 
                    <InputGroup.Append>
                        <InputGroup.Text id="basic-addon2">{props.unit}</InputGroup.Text>
                    </InputGroup.Append> 
                }
                
            </InputGroup>
        </div>
        
    );
}

export function Select(props) {
    return (
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control as="select" name={props.name} value={props.value} onChange={props.onChange} >
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

export function TextBoxInput(props) {
    return (
        <Form.Group>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control as="textarea" rows="5" placeholder={props.placeholder} />
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
