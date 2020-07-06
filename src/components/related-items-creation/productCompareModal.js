import React from 'react';
import apiMaster from '../../apiMaster';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class ProductCompareModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidUpdate(prevProps) {
    if (this.props.clicked !== prevProps.clicked) {
      this.setState({ visible: this.props.clicked });
    }
  }

  render() {
    if (this.state.visible) {
      return (
        <Modal
          className="card-modal"
          show={this.state.visible}
          animation={true}
          centered
        >
          <Modal.Title>Comparing</Modal.Title>
          <Modal.Body className="show-grid">
            <Container>
              <Row className="show-grid-row">
                <Col xs={6} md={4}>
                  <div>Current Product Name</div>
                </Col>
                <Col xs={6} md={4}></Col>
                <Col xs={6} md={4}>
                  <div>Compared Product Name</div>
                </Col>
              </Row>

              <Row className="show-grid-row">
                <Col xs={6} md={4}></Col>
                <Col xs={6} md={4}>
                  {this.props.characteristicsList.map((characteristic, i) => {
                    return (
                      <ul className="characteristics" key={i}>
                        {characteristic}
                      </ul>
                    );
                  })}
                </Col>
                <Col xs={6} md={4}></Col>
              </Row>
            </Container>
          </Modal.Body>
          <Button
            className="close-card-modal"
            variant="outline-danger"
            size="sm"
            onClick={this.props.handleClick}
          >
            Close
          </Button>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export default ProductCompareModal;
