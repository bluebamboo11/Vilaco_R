import React from 'react';

import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  FormGroup,
  Input,
  Button,
  Form,
  Label
} from 'reactstrap';

class FormGrids extends React.Component {

  render() {
    return (
      <div>
        {/* --------------------------------------------------------------------------------*/}
        {/* Start Inner Div*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle className="border-bottom p-3">
            <i className="mdi mdi-select-all mr-2" />
            Horizontal Grid
          </CardTitle>
          <CardBody>
            <Form>
              <Row>
                <Col md="1">
                  <FormGroup>
                    <Input type="text" placeholder="1" />
                  </FormGroup>
                </Col>
                <Col md="11">
                  <FormGroup>
                    <Input type="text" placeholder="md-11" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <FormGroup>
                    <Input type="text" placeholder="md-2" />
                  </FormGroup>
                </Col>
                <Col md="10">
                  <FormGroup>
                    <Input type="text" placeholder="md-10" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Input type="text" placeholder="md-3" />
                  </FormGroup>
                </Col>
                <Col md="9">
                  <FormGroup>
                    <Input type="text" placeholder="md-9" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <FormGroup>
                    <Input type="text" placeholder="md-4" />
                  </FormGroup>
                </Col>
                <Col md="8">
                  <FormGroup>
                    <Input type="text" placeholder="md-8" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="5">
                  <FormGroup>
                    <Input type="text" placeholder="md-5" />
                  </FormGroup>
                </Col>
                <Col md="7">
                  <FormGroup>
                    <Input type="text" placeholder="md-7" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Input type="text" placeholder="md-6" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Input type="text" placeholder="md-6" />
                  </FormGroup>
                </Col>
              </Row>
              <div className="float-right">
                <Button color="primary" type="submit" className="mr-2">Submit</Button>
                <Button type="reset" color="danger">Reset</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Card>
          <CardTitle className="border-bottom p-3">
            <i className="mdi mdi-select-all mr-2" />
            Grid With Row Label
          </CardTitle>
          <CardBody>
            <Form>
              <Label>Row Label </Label>
              <Row>
                <Col md="1">
                  <FormGroup>
                    <Input type="text" placeholder="1" />
                  </FormGroup>
                </Col>
                <Col md="11">
                  <FormGroup>
                    <Input type="text" placeholder="md-11" />
                  </FormGroup>
                </Col>
              </Row>
              <Label>Row Label </Label>
              <Row>
                <Col md="2">
                  <FormGroup>
                    <Input type="text" placeholder="md-2" />
                  </FormGroup>
                </Col>
                <Col md="10">
                  <FormGroup>
                    <Input type="text" placeholder="md-10" />
                  </FormGroup>
                </Col>
              </Row>
              <Label>Row Label </Label>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Input type="text" placeholder="md-3" />
                  </FormGroup>
                </Col>
                <Col md="9">
                  <FormGroup>
                    <Input type="text" placeholder="md-9" />
                  </FormGroup>
                </Col>
              </Row>
              <Label>Row Label </Label>
              <Row>
                <Col md="4">
                  <FormGroup>
                    <Input type="text" placeholder="md-4" />
                  </FormGroup>
                </Col>
                <Col md="8">
                  <FormGroup>
                    <Input type="text" placeholder="md-8" />
                  </FormGroup>
                </Col>
              </Row>
              <Label>Row Label </Label>
              <Row>
                <Col md="5">
                  <FormGroup>
                    <Input type="text" placeholder="md-5" />
                  </FormGroup>
                </Col>
                <Col md="7">
                  <FormGroup>
                    <Input type="text" placeholder="md-7" />
                  </FormGroup>
                </Col>
              </Row>
              <Label>Row Label </Label>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Input type="text" placeholder="md-6" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Input type="text" placeholder="md-6" />
                  </FormGroup>
                </Col>
              </Row>
              <div className="float-right">
                <Button color="primary" type="submit" className="mr-2">Submit</Button>
                <Button type="reset" color="danger">Reset</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Card>
          <CardTitle className="border-bottom p-3">
            <i className="mdi mdi-select-all mr-2" />
            Grid With Label
          </CardTitle>
          <CardBody>
            <Form>
              <Row>
                <Col md="1">
                  <FormGroup>
                    <Label>Label </Label>
                    <Input type="text" placeholder="1" />
                  </FormGroup>
                </Col>
                <Col md="11">
                  <FormGroup>
                    <Label>Label </Label>
                    <Input type="text" placeholder="md-11" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <FormGroup>
                    <Label>Label </Label>
                    <Input type="text" placeholder="md-2" />
                  </FormGroup>
                </Col>
                <Col md="10">
                  <FormGroup>
                    <Label>Label </Label>
                    <Input type="text" placeholder="md-10" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormGroup>
                    <Label>Label </Label>
                    <Input type="text" placeholder="md-3" />
                  </FormGroup>
                </Col>
                <Col md="9">
                  <FormGroup>
                    <Label>Label </Label>
                    <Input type="text" placeholder="md-9" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <FormGroup>
                    <Label>Label </Label>
                    <Input type="text" placeholder="md-4" />
                  </FormGroup>
                </Col>
                <Col md="8">
                  <FormGroup>
                    <Label>Label </Label>
                    <Input type="text" placeholder="md-8" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="5">
                  <FormGroup>
                    <Label>Label </Label>
                    <Input type="text" placeholder="md-5" />
                  </FormGroup>
                </Col>
                <Col md="7">
                  <FormGroup>
                    <Label>Label </Label>
                    <Input type="text" placeholder="md-7" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormGroup>
                    <Label>Label </Label>
                    <Input type="text" placeholder="md-6" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label>Label </Label>
                    <Input type="text" placeholder="md-6" />
                  </FormGroup>
                </Col>
              </Row>
              <div className="float-right">
                <Button color="primary" type="submit" className="mr-2">Submit</Button>
                <Button type="reset" color="danger">Reset</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row>
          <Col md="6">
            <Card>
              <CardTitle className="border-bottom p-3">
                <i className="mdi mdi-select-all mr-2" />
                Right Offset
              </CardTitle>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Input type="text" placeholder="md-12" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="11">
                      <FormGroup>
                        <Input type="text" placeholder="md-11" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="10">
                      <FormGroup>
                        <Input type="text" placeholder="md-10" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="9">
                      <FormGroup>
                        <Input type="text" placeholder="md-9" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <Input type="text" placeholder="md-8" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="7">
                      <FormGroup>
                        <Input type="text" placeholder="md-7" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Input type="text" placeholder="md-6" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="5">
                      <FormGroup>
                        <Input type="text" placeholder="md-5" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <FormGroup>
                        <Input type="text" placeholder="md-4" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3">
                      <FormGroup>
                        <Input type="text" placeholder="md-3" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="2">
                      <FormGroup>
                        <Input type="text" placeholder="md-2" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="1">
                      <FormGroup>
                        <Input type="text" placeholder="md-1" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <div>
                    <Button color="primary" type="submit" className="mr-2">Submit</Button>
                    <Button type="reset" color="danger">Reset</Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardTitle className="border-bottom p-3">
                <i className="mdi mdi-select-all mr-2" />
                Left Offset
              </CardTitle>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Input type="text" placeholder="md-12" />
                      </FormGroup>
                    </Col>
                    <Col md={{
                      'offset': 1,
                      'size': 11
                    }}>
                      <FormGroup>
                        <Input type="text" placeholder="md-11, offset : 1" />
                      </FormGroup>
                    </Col>
                    <Col md={{
                      'offset': 2,
                      'size': 10
                    }}>
                      <FormGroup>
                        <Input type="text" placeholder="md-10, offset : 2" />
                      </FormGroup>
                    </Col>
                    <Col md={{
                      'offset': 3,
                      'size': 9
                    }}>
                      <FormGroup>
                        <Input type="text" placeholder="md-9, offset : 3" />
                      </FormGroup>
                    </Col>
                    <Col md={{
                      'offset': 4,
                      'size': 8
                    }}>
                      <FormGroup>
                        <Input type="text" placeholder="md-8, offset : 4" />
                      </FormGroup>
                    </Col>
                    <Col md={{
                      'offset': 5,
                      'size': 7
                    }}>
                      <FormGroup>
                        <Input type="text" placeholder="md-7, offset : 5" />
                      </FormGroup>
                    </Col>
                    <Col md={{
                      'offset': 6,
                      'size': 6
                    }}>
                      <FormGroup>
                        <Input type="text" placeholder="md-6, offset : 6" />
                      </FormGroup>
                    </Col>
                    <Col md={{
                      'offset': 7,
                      'size': 5
                    }}>
                      <FormGroup>
                        <Input type="text" placeholder="md-5, offset : 7" />
                      </FormGroup>
                    </Col>
                    <Col md={{
                      'offset': 8,
                      'size': 4
                    }}>
                      <FormGroup>
                        <Input type="text" placeholder="md-4, offset : 8" />
                      </FormGroup>
                    </Col>
                    <Col md={{
                      'offset': 9,
                      'size': 3
                    }}>
                      <FormGroup>
                        <Input type="text" placeholder="md-3, offset : 9" />
                      </FormGroup>
                    </Col>
                    <Col md={{
                      'offset': 10,
                      'size': 2
                    }}>
                      <FormGroup>
                        <Input type="text" placeholder="md-2, offset : 10" />
                      </FormGroup>
                    </Col>
                    <Col md={{
                      'offset': 11,
                      'size': 1
                    }}>
                      <FormGroup>
                        <Input type="text" placeholder="md-1, offset : 11" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="float-right">
                    <Button color="primary" type="submit" className="mr-2">Submit</Button>
                    <Button type="reset" color="danger">Reset</Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <CardTitle className="border-bottom p-3">
                <i className="mdi mdi-select-all mr-2" />
                Centered Input
              </CardTitle>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Input type="text" placeholder="md-12" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="10" className="m-auto">
                      <FormGroup>
                        <Input type="text" placeholder="md-10 ,m-auto" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8" className="m-auto">
                      <FormGroup>
                        <Input type="text" placeholder="md-8 ,m-auto" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6" className="m-auto">
                      <FormGroup>
                        <Input type="text" placeholder="md-6 ,m-auto" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" className="m-auto">
                      <FormGroup>
                        <Input type="text" placeholder="md-4 ,m-auto" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="2" className="m-auto">
                      <FormGroup>
                        <Input type="text" placeholder="md-2 ,m-auto" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" className="text-right">
                      <FormGroup>
                        <Label>Label</Label>
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Input type="text" placeholder="md-4" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3" className="text-right">
                      <FormGroup>
                        <Label>Label</Label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input type="text" placeholder="md-6" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="2" className="text-right">
                      <FormGroup>
                        <Label>Label</Label>
                      </FormGroup>
                    </Col>
                    <Col md="8">
                      <FormGroup>
                        <Input type="text" placeholder="md-8" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="1" className="text-right">
                      <FormGroup>
                        <Label>Label</Label>
                      </FormGroup>
                    </Col>
                    <Col md="10">
                      <FormGroup>
                        <Input type="text" placeholder="md-10" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="text-center">
                    <Button color="primary" type="submit" className="mr-2">Submit</Button>
                    <Button type="reset" color="danger">Reset</Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardTitle className="border-bottom p-3">
                <i className="mdi mdi-select-all mr-2" />
                Centered Input with Default label
              </CardTitle>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="12" className="m-auto">
                      <FormGroup>
                        <Label>Label</Label>
                        <Input type="text" placeholder="md-12, m-auto" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="10" className="m-auto">
                      <FormGroup>
                        <Label>Label</Label>
                        <Input type="text" placeholder="md-10, m-auto" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="9" className="m-auto">
                      <FormGroup>
                        <Label>Label</Label>
                        <Input type="text" placeholder="md-9, m-auto" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6" className="m-auto">
                      <FormGroup>
                        <Label>Label</Label>
                        <Input type="text" placeholder="md-6, m-auto" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4" className="m-auto">
                      <FormGroup>
                        <Label>Label</Label>
                        <Input type="text" placeholder="md-4, m-auto" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="2" className="m-auto">
                      <FormGroup>
                        <Label>Label</Label>
                        <Input type="text" placeholder="md-2, m-auto" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="text-center mt-4">
                    <Button color="primary" type="submit" className="mr-2">Submit</Button>
                    <Button type="reset" color="danger">Reset</Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Card>
          <CardTitle className="border-bottom p-3">
            <i className="mdi mdi-select-all mr-2" />
            Grid With Row Label
          </CardTitle>
          <CardBody>
            <Form>
              <Row>
                <Col lg="1">
                  <Label>Label</Label>
                </Col>
                <Col lg="11">
                  <Row>
                    <Col md="1">
                      <FormGroup>
                        <Input type="text" placeholder="md-1" />
                      </FormGroup>
                    </Col>
                    <Col md="11">
                      <FormGroup>
                        <Input type="text" placeholder="md-11" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col lg="1">
                  <Label>Label</Label>
                </Col>
                <Col lg="11">
                  <Row>
                    <Col md="2">
                      <FormGroup>
                        <Input type="text" placeholder="md-2" />
                      </FormGroup>
                    </Col>
                    <Col md="10">
                      <FormGroup>
                        <Input type="text" placeholder="md-10" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col lg="1">
                  <Label>Label</Label>
                </Col>
                <Col lg="11">
                  <Row>
                    <Col md="3">
                      <FormGroup>
                        <Input type="text" placeholder="md-3" />
                      </FormGroup>
                    </Col>
                    <Col md="9">
                      <FormGroup>
                        <Input type="text" placeholder="md-9" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col lg="1">
                  <Label>Label</Label>
                </Col>
                <Col lg="11">
                  <Row>
                    <Col md="4">
                      <FormGroup>
                        <Input type="text" placeholder="md-4" />
                      </FormGroup>
                    </Col>
                    <Col md="8">
                      <FormGroup>
                        <Input type="text" placeholder="md-8" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col lg="1">
                  <Label>Label</Label>
                </Col>
                <Col lg="11">
                  <Row>
                    <Col md="5">
                      <FormGroup>
                        <Input type="text" placeholder="md-5" />
                      </FormGroup>
                    </Col>
                    <Col md="7">
                      <FormGroup>
                        <Input type="text" placeholder="md-7" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col lg="1">
                  <Label>Label</Label>
                </Col>
                <Col lg="11">
                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Input type="text" placeholder="md-6" />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Input type="text" placeholder="md-6" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="float-right">
                <Button color="primary" type="submit" className="mr-2">Submit</Button>
                <Button type="reset" color="danger">Reset</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Card>
          <CardTitle className="border-bottom p-3">
            <i className="mdi mdi-select-all mr-2" />
            Grid With Inline Input Label
          </CardTitle>
          <CardBody>
            <Form>
              <Row>
                <Col md="2">
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <Input type="text" placeholder="md-2" />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Label>Label</Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md="10">
                  <Row>
                    <Col md="4" className="text-right">
                      <FormGroup>
                        <Label>Label</Label>
                      </FormGroup>
                    </Col>
                    <Col md="8">
                      <FormGroup>
                        <Input type="text" placeholder="md-10" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <Input type="text" placeholder="md-3" />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Label>Label</Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md="9">
                  <Row>
                    <Col md="4" className="text-right">
                      <FormGroup>
                        <Label>Label</Label>
                      </FormGroup>
                    </Col>
                    <Col md="8">
                      <FormGroup>
                        <Input type="text" placeholder="md-9" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <Input type="text" placeholder="md-4" />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Label>Label</Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md="8">
                  <Row>
                    <Col md="4" className="text-right">
                      <FormGroup>
                        <Label>Label</Label>
                      </FormGroup>
                    </Col>
                    <Col md="8">
                      <FormGroup>
                        <Input type="text" placeholder="md-8" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md="5">
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <Input type="text" placeholder="md-5" />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Label>Label</Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md="7">
                  <Row>
                    <Col md="4" className="text-right">
                      <FormGroup>
                        <Label>Label</Label>
                      </FormGroup>
                    </Col>
                    <Col md="8">
                      <FormGroup>
                        <Input type="text" placeholder="md-7" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <Input type="text" placeholder="md-6" />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Label>Label</Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <Row>
                    <Col md="4" className="text-right">
                      <FormGroup>
                        <Label>Label</Label>
                      </FormGroup>
                    </Col>
                    <Col md="8">
                      <FormGroup>
                        <Input type="text" placeholder="md-6" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="float-right">
                <Button color="primary" type="submit" className="mr-2">Submit</Button>
                <Button type="reset" color="danger">Reset</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Card>
          <CardTitle className="border-bottom p-3">
            <i className="mdi mdi-select-all mr-2" />
            Multiple Input With Default Label
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup><Label>Label</Label></FormGroup>
              <Row>
                <Col md="4">
                  <FormGroup>
                    <Input type="text" placeholder="First Input &amp; First Row" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" placeholder="First Input &amp; First Row" />
                  </FormGroup>
                </Col>
                <Col md="8">
                  <FormGroup>
                    <Input type="text" placeholder="Second Input &amp; First Row" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" placeholder="Second Input &amp; First Row" />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup><Label>Multiple width Input Label</Label></FormGroup>
              <Row>
                <Col md="7">
                  <FormGroup>
                    <Input type="text" placeholder="First Input &amp; First Row" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" placeholder="Second Input &amp; First Row" />
                  </FormGroup>
                </Col>
                <Col md="5">
                  <FormGroup>
                    <Input type="text" placeholder="First Input &amp; Second Row" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" placeholder="Second Input &amp; Second Row" />
                  </FormGroup>
                </Col>
              </Row>
              <div className="float-right">
                <Button color="primary" type="submit" className="mr-2">Submit</Button>
                <Button type="reset" color="danger">Reset</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Card>
          <CardTitle className="border-bottom p-3">
            <i className="mdi mdi-select-all mr-2" />
            Multiple Input With Inline Label
          </CardTitle>
          <CardBody>
            <Form>
              <Row>
                <Col md="2">
                  <FormGroup>
                    <Label>Label</Label>
                  </FormGroup>
                </Col>
                <Col md="10">
                  <Row>
                    <Col md="4">
                      <FormGroup>
                        <Input type="text" placeholder="First Input &amp; First Row" />
                      </FormGroup>
                      <FormGroup>
                        <Input type="text" placeholder="First Input &amp; Second Row" />
                      </FormGroup>
                    </Col>
                    <Col md="8">
                      <FormGroup>
                        <Input type="text" placeholder="Second Input &amp; First Row" />
                      </FormGroup>
                      <FormGroup>
                        <Input type="text" placeholder="Second Input &amp; Second Row" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md="2">
                  <FormGroup>
                    <Label>Multiple width Input Label</Label>
                  </FormGroup>
                </Col>
                <Col md="10">
                  <Row>
                    <Col md="7">
                      <FormGroup>
                        <Input type="text" placeholder="First Input &amp; First Row" />
                      </FormGroup>
                    </Col>
                    <Col md="5">
                      <FormGroup>
                        <Input type="text" placeholder="Second Input &amp; First Row" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <FormGroup>
                        <Input type="text" placeholder="First Input &amp; Second Row" />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <Input type="text" placeholder="Second Input &amp; Second Row" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="float-right">
                <Button color="primary" type="submit" className="mr-2">Submit</Button>
                <Button type="reset" color="danger">Reset</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        {/* --------------------------------------------------------------------------------*/}
        {/* End Inner Div*/}
        {/* --------------------------------------------------------------------------------*/}
      </div>
    );
  }
}

export default FormGrids;
