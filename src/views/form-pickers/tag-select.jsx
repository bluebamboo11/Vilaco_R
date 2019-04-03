import React from 'react';


import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col
} from 'reactstrap';
import TagsInput from 'react-tagsinput';
import chroma from 'chroma-js';
import { colourOptions, groupedOptions } from './data.jsx';
import Select, { components } from 'react-select';
import 'react-tagsinput/react-tagsinput.css';
import Switch from 'react-bootstrap-switch';
import 'react-bootstrap-switch/dist/css/bootstrap3/react-bootstrap-switch.min.css';

/* ------------------------------------*/
/* For Select Plugin - (1)            */
/* ------------------------------------*/
const dot = (color = '#ccc') => ({
  'alignItems': 'center',
  ':before': {
    'backgroundColor': color,
    'borderRadius': 10,
    'content': '" "',
    'display': 'block',
    'marginRight': 8,
    'height': 10,
    'width': 10
  },
  'display': 'flex'

}),

  /* ------------------------------------*/
  /* For Select Plugin - (2)            */
  /* ------------------------------------*/
  colourStyles = {
    'control': styles => ({
      'backgroundColor': 'white',
      ...styles
    }),
    'input': styles => ({
      ...dot(),
      ...styles
    }),
    'multiValue': (styles, { data }) => {
      const color = chroma(data.color);

      return {
        ...styles,
        'backgroundColor': color.alpha(0.1).css()
      };
    },
    'multiValueLabel': (styles, { data }) => ({
      ...styles,
      'color': data.color
    }),
    'multiValueRemove': (styles, { data }) => ({
      ...styles,
      'color': data.color,
      ':hover': {
        'color': 'white',
        'backgroundColor': data.color
      }
    }),
    'option': (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);

      return {
        ...styles,
        'backgroundColor': isDisabled
          ? null
          : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
        'color': isDisabled
          ? '#ccc'
          : isSelected
            ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
            : data.color,
        'cursor': isDisabled ? 'not-allowed' : 'default'
      };
    },
    'placeholder': styles => ({
      ...dot(),
      ...styles
    }),
    'singleValue': (styles, { data }) => ({
      ...dot(data.color),
      ...styles
    })
  },

  /* ------------------------------------*/
  /* For Select Plugin - (3)            */
  /* ------------------------------------*/
  CustomClearText = () => 'clear all',
  ClearIndicator = props => {
    const { children = <CustomClearText />, getStyles, 'innerProps': { ref, ...restInnerProps } } = props;

    return (
      <div {...restInnerProps} ref={ref} style={getStyles('clearIndicator', props)}>
        <div style={{ 'padding': '0px 5px' }}>
          {children}
        </div>
      </div>
    );
  },

  ClearIndicatorStyles = (base, state) => ({
    ...base,
    'cursor': 'pointer',
    'color': state.isFocused ? 'blue' : 'black'
  }),


  /* ------------------------------------*/
  /* For Select Plugin - (4)            */
  /* ------------------------------------*/
  groupStyles = {
    'background': '#f2fcff',
    'border': `2px dotted ${colourOptions[2].color}`,
    'borderRadius': '5px'
  },

  Group = props => (
    <div style={groupStyles}>
      <components.Group {...props} />
    </div>
  ),

  /* ------------------------------------*/
  /* For Select Plugin - (5)            */
  /* ------------------------------------*/
  IndicatorsContainer = props => (
    <div style={{ 'background': colourOptions[2].color }}>
      <components.IndicatorsContainer {...props} />
    </div>
  ),

  /* ------------------------------------*/
  /* For Select Plugin - (6)            */
  /* ------------------------------------*/
  menuHeaderStyle = {
    'background': colourOptions[2].color,
    'color': 'white',
    'padding': '8px 12px'
  },

  MenuList = props => (
    <components.MenuList {...props}>
      <div style={menuHeaderStyle}>
        Custom Menu List
      </div>
      {props.children}
    </components.MenuList>
  ),

  /* ------------------------------------*/
  /* For Select Plugin - (7)            */
  /* ------------------------------------*/
  controlStyles = {
    'background': colourOptions[1].color,
    'borderRadius': '1px solid black',
    'color': 'white',
    'padding': '5px'
  },

  ControlComponent = props => (
    <div style={controlStyles}>
      {<p>Custom Control</p>}
      <components.Control {...props} />
    </div>
  );

class Tagselect extends React.Component {

  /* ------------------------------------*/
  /* For Tag - (1)                       */
  /* ------------------------------------*/
  constructor(props) {
    super(props);
    this.state = {
      'regularTags': [
        'MacOs',
        'Windows',
        'BeOS',
        'Linux'
      ]
    };
    this.handleRegularTags = this.handleRegularTags.bind(this);
  }

  handleRegularTags(regularTags) {
    this.setState({ regularTags });
  }

  render() {
    return <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Tags                                                                     */}
      {/* --------------------------------------------------------------------------------*/}
      <h4 className="mb-3">Tags</h4>
      <Row>
        <Col md="12">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-tag-multiple mr-2"></i>Tags
            </CardTitle>
            <CardBody className="border-top">
              <TagsInput
                value={this.state.regularTags}
                onChange={this.handleRegularTags}
                tagProps={{ 'className': 'react-tagsinput-tag bg-info text-white rounded' }}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Select and Mutiple Select Options                                        */}
      {/* --------------------------------------------------------------------------------*/}
      <h4 className="mb-3">Select and Mutiple Select Options</h4>
      <Row>
        <Col md="6">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-tag-multiple mr-2"></i>Customized Background Color Select
            </CardTitle>
            <CardBody className="border-top">
              <Select
                defaultValue={colourOptions[2]}
                label="Single select"
                options={colourOptions}
                styles={colourStyles}
              />
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-tag-multiple mr-2"></i>Customized Background Color Multi-Select
            </CardTitle>
            <CardBody className="border-top">
              <Select
                closeMenuOnSelect={false}
                defaultValue={[
                  colourOptions[0],
                  colourOptions[1]
                ]}
                isMulti
                options={colourOptions}
                styles={colourStyles}
              />
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-tag-multiple mr-2"></i>Custom Clear Indicator
            </CardTitle>
            <CardBody className="border-top">
              <Select
                closeMenuOnSelect={false}
                components={{ ClearIndicator }}
                styles={{ 'clearIndicator': ClearIndicatorStyles }}
                defaultValue={[
                  colourOptions[4],
                  colourOptions[5]
                ]}
                isMulti
                options={colourOptions}
              />
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-tag-multiple mr-2"></i>Custom Group
            </CardTitle>
            <CardBody className="border-top">
              <Select
                defaultValue={colourOptions[1]}
                options={groupedOptions}
                components={{ Group }}
              />
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-tag-multiple mr-2"></i>Custom Indicators Container
            </CardTitle>
            <CardBody className="border-top">
              <Select
                closeMenuOnSelect={false}
                components={{ IndicatorsContainer }}
                defaultValue={[
                  colourOptions[4],
                  colourOptions[5]
                ]}
                isMulti
                options={colourOptions}
              />
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-tag-multiple mr-2"></i>Menus
            </CardTitle>
            <CardBody className="border-top">
              <Select
                defaultValue={colourOptions[1]}
                options={groupedOptions}
                components={{ MenuList }}
              />
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-tag-multiple mr-2"></i>Custom Control
            </CardTitle>
            <CardBody className="border-top">
              <Select
                defaultValue={colourOptions[0]}
                isClearable
                components={{ 'Control': ControlComponent }}
                isSearchable
                name="color"
                options={colourOptions}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Switches                                                                 */}
      {/* --------------------------------------------------------------------------------*/}
      <h4 className="mb-3">Switches</h4>
      <Row>
        <Col md="4">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-tag-multiple mr-2"></i>Default Switch
            </CardTitle>
            <CardBody className="border-top">
              <Switch defaultValue={false} /> <Switch />
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-tag-multiple mr-2"></i>Simple Switch
            </CardTitle>
            <CardBody className="border-top">
              <Switch
                onText=""
                offText=""
                defaultValue={false}
              />
              <Switch onText="" offText="" />
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0">
              <i className="mdi mdi-tag-multiple mr-2"></i>Switch with Icons
            </CardTitle>
            <CardBody className="border-top">
              <Switch
                onText={<i className="ti-check" />}
                offText={
                  <i className="ti-close" />
                }
                defaultValue={false}
              />
              <Switch
                onText={<i className="ti-close" />}
                offText={
                  <i className="ti-check" />
                }
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* -------------------------------------------------------------------------------- */}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>;
  }
}

export default Tagselect;
