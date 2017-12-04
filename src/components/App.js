import React, { Component, ReactDOM } from 'react'
import { Sidebar, Segment, Label, Button, Menu, Image, Icon, Header, Grid, Card, Loader, Divider, Container, Table } from 'semantic-ui-react'
import ScrollableAnchor from 'react-scrollable-anchor'
import { Parallax } from 'react-parallax';

const Chevron = (props) => (
	<a href={'#' + props.href} style={{ textAlign: 'bottom', marginBottom: 'auto', marginTop: 'auto', width: '100%', textAlign: 'center' }}><Icon link size='big' inverted name='chevron down' /></a>
);

const Title = (props) => (
	<div style={{ display: 'flex', flexDirection: 'column', background: 'url(./images/header.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', minHeight: '100%', width: '100%', textAlign: 'center', paddingTop: 70 }}>
		<Image src='./images/me.jpg' size='medium' circular centered />
		<h1 style={{ fontSize: '4em', color: 'white', backgroundColor: '#2c2d22' }}>Ari Purcell</h1>
		<div>
			<Label>Software Engineer</Label>&nbsp;
			<Label as='a' href="https://www.google.com/maps/place/Vancouver,+BC,+Canada"><Icon name='marker' /> Vancouver - Canada</Label>
		</div>

		<div style={{ marginTop: 10 }}>
			<a href="http://github.com/arrian"><Icon link size='big' inverted name='github square' /></a>
			<a href="http://instagram.com/aripurcell/"><Icon link size='big' inverted name='instagram' /></a>
			<a href="http://linkedin.com/in/arrianpurcell"><Icon link size='big' inverted name='linkedin square' /></a>
			<a href="http://youtube.com/user/ArrianPurcell"><Icon link size='big' inverted name='youtube square' /></a>
		</div>

		<Chevron href='about' />
	</div>
);

const Skill = (props) => (
	<Table.Row>
		<Table.Cell>
			{props.name}
		</Table.Cell>
		<Table.Cell>
			{props.labels.map(label => <Label key={label} size='small'>{label}</Label>)}
		</Table.Cell>
	</Table.Row>
);

const About = (props) => (
	<ScrollableAnchor id={'about'}>
		<div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#2c2d22', color: 'white', minHeight: '100%' }}>
			<Container text style={{ marginTop: 20 }}>
				<Header as='h2' inverted textAlign='center'><Icon name='circle user' size='mini' /> About</Header>
				<p>I am a full stack software engineer with a particular focus on building web experiences and interfaces that excite. I love solving problems and delivering creative solutions using a variety of technologies. During a normal day you would see me using a good mix of Javascript (using both Node and React), HTML and CSS for both small and large projects.</p>
				<p> My work experience has led me to build web applications for the e-commerce and health care sectors and my education has led me to research the impact of interfaces on user experiences. I hope to promote designing for usability.</p>

				<Header as='h3' inverted textAlign='center'>Skills</Header>

				<Divider inverted />

				<Table basic='very' celled inverted>
					<Table.Body>
						<Skill name='Languages' labels={['javascript', 'html', 'css', 'java', 'python', 'c++']}/>
						<Skill name='Platforms' labels={['macos', 'windows', 'linux', 'android', 'node']}/>
						<Skill name='Libraries' labels={['react', 'redux', 'angular', 'vue.js', 'jquery', 'd3.js', 'mocha', 'selenium']}/>
						<Skill name='Tools' labels={['git', 'docker', 'bamboo', 'jira', 'jenkins', 'vagrant', 'gradle', 'illustrator']}/>
					</Table.Body>
				</Table>

			</Container>
			<Chevron href='projects' />
			<br />
		</div>
	</ScrollableAnchor>
);

const ProjectHeader = (props) => (
	<a href={props.link}><Header as='h3'><Header.Content>{props.title} {props.link ? <Icon name='external share' /> : null}</Header.Content></Header></a>
);

const Project = (props) => (
		<Grid.Row color={props.color}>
			<Grid.Column width={3}>
				<a href={props.link}><Image src={props.image} size='medium' style={{ backgroundColor: 'rgb(210, 206, 203)', border: '2px solid black' }} circular /></a>
			</Grid.Column>
			<Grid.Column width={13}>
				{<ProjectHeader title={props.title} link={props.link} />}
				{props.description}
				<div style={{ marginTop: 16 }}>{(props.labels || []).map(label => <Label color='blue' key={label}>{label}</Label>)}</div>
			</Grid.Column>
	    </Grid.Row>
);

const Projects = (props) => (
	<ScrollableAnchor id={'projects'}>
		<div style={{ backgroundColor: '#E6E2DF' }}>
			<Container text style={{ paddingTop: 20 }}>
				<Header as='h2' textAlign='center'>Projects</Header>
				<Grid>
				  <Project title='Medicines' labels={['web application', 'java', 'javascript', 'html', 'css']} description='As part of a team at Orion Health, developed a patient-centric medication management solution. The solution has been implemented in a wide variety of clinical settings.' image='/images/project-02.svg' link='https://orionhealth.com/uk/products/medicines/' />
					<Project title='Planet Search' labels={['web application', 'javascript', 'react', 'redux']} description='Developed a web application for searching astronomical objects.' image='/images/project-05.svg' link='http://arrianpurcell.com/planet-search' />
					<Project title='Visualising a Live Coding Arts Process' labels={['research', 'publication', 'user study']} description='Published and presented the results of user studies undertaken in my final undergraduate year. The user studies investigated ways of communicating the programming process.' image='/images/project-03.svg' link='http://dl.acm.org/citation.cfm?id=2686634' />
					<Project title='Art and Understanding through Code Visualisation' labels={['research', 'publication', 'user study', 'c++', 'python']} description='Compiled an undergraduate thesis investigating methods of communicating the programming process through the use of visual cues.' image='/images/project-03.svg' link='https://github.com/arrian/research-project/blob/master/thesis/thesis.pdf' />
					<Project title='Code Graph' labels={['web application', 'javascript']} description='Developed a source code analysis tool and a web interface for examining the links between source code modules.' image='/images/project-04.svg' link='http://arrianpurcell.com/code-graph' />
					<Project title='Sony Camera Node API' labels={['javascript', 'api', 'photography']} description='Implemented a Javascript API for interacting with Sony cameras over WiFi.' image='/images/project-01.svg' link='https://github.com/arrian/sony-camera-js' />
					<Project title='LIFX Python API' labels={['python', 'api']} description='Implemented a Python API for controlling LIFX smart lightbulbs.' image='/images/project-06.svg' link='https://github.com/arrian/lifx-python' />
					<Project title='Social Landscape' labels={['mobile application', 'android', 'java']} description='As part of a university project, ported the "Social Landscape" iOS mobile app to the Android platform.' image='/images/project-07.svg' />
					<Project title='FHIR Validator' labels={['web application', 'javascript', 'fhir']} description='Implemented a Javascript validator for validating that resources conform to the HL7 FHIR specification.' image='/images/project-08.svg' link='https://github.com/arrian/fhir-validator-js' />
				</Grid>
				<br />
				<br />
			</Container>
		</div>
	</ScrollableAnchor>
);

class App extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
	<div style={{height: '100%'}}>
		<Title />
		<Parallax bgImage="images/new-york.jpg" strength={-100} bgStyle={{ backgroundPosition: 'top' }}><div style={{ height: 400 }}></div></Parallax>
		<About />
		<Parallax bgImage="images/stanley-park.jpg" strength={-100} bgStyle={{ backgroundPosition: 'top' }}><div style={{ height: 400 }}></div></Parallax>
		<Projects />
	</div>
    )
  }
}

export default App
