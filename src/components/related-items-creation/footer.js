import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { AiOutlineCopyright } from 'react-icons/ai';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidUpdate(prevProps) {}

  render() {
    if (this.state.visible) {
      return (
        <Modal
          className="product-card-modal"
          show={this.state.visible}
          animation={true}
          centered
        >
          <Modal.Title className="product-card-modal-title">
            Comparing
          </Modal.Title>
          <Modal.Body className="show-grid card-compare-modal-body">
            <Container>
              <Row className="show-grid-row">
                <Col xs={6} md={4}>
                  <strong>Title</strong>
                </Col>
                <Col xs={6} md={4}>
                  Title
                </Col>
                <Col xs={6} md={4}>
                  <strong>Title</strong>
                </Col>
              </Row>
              <Row className="show-grid-row">
                <Col xs={6} md={4}>
                  {this.props.clickData.map((action, i) => {
                    return (
                      <ul className="characteristics" key={i}>
                        {action.elementClicked}
                      </ul>
                    );
                  })}
                </Col>
                <Col xs={6} md={4}>
                  {this.props.clickData.map((action, i) => {
                    return (
                      <ul className="characteristics" key={i}>
                        {action.timeSinceVisited}
                      </ul>
                    );
                  })}
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Button
            id="close-button-card"
            variant="outline-danger"
            size="sm"
            onClick={() => {
              this.setState({ visible: false });
            }}
          >
            Close
          </Button>
        </Modal>
      );
    } else {
      return (
        <div>
          <span
            className="footer-admin"
            onClick={() => {
              this.setState({ visible: true });
            }}
          >
            Admin
          </span>
          Supernova <AiOutlineCopyright /> 2020
        </div>
      );
    }
  }
}

export default Footer;
