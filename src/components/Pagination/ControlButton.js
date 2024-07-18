import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const PaginationStyle = {
    display: "flex",
    justifyContent: "right",
    marginTop: 20,
    marginBottom: 20,
    gap: 10
};

const ControlButton = (props) => {
    return (
        <div style={PaginationStyle}>
            <ButtonGroup size="sm" aria-label="Basic example">
                <Button variant="primary" onClick={props.onClickPrevious}>Prev</Button>
                <Button variant="primary" onClick={props.onClickNext}>Next</Button>
            </ButtonGroup>
        </div>
    );
};

export default ControlButton