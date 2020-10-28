import React from 'react';
import './App.css';
import { Container, AppDiv } from './styles'
import About from '../components/organisms/About'
import LoadingOverlay from '../components/organisms/LoadingOverlay'
import Menu from '../components/organisms/Menu'
import ThemeOption from '../components/organisms/ThemeOption'
import ScrollTopBtn from '../components/organisms/ScrollTopBtn'
import Skill from '../components/organisms/Skill'
import Education from '../components/organisms/Education'
import Experience from '../components/organisms/Experience'
import Portfolio from '../components/organisms/Portfolio'
import Interest from '../components/organisms/Interest'
import Contact from '../components/organisms/Contact'

const App: React.FC = () => {
  return (
    <AppDiv>
			<LoadingOverlay />
			<Menu />
      <ThemeOption />
			<ScrollTopBtn />
			<Container>
				<About />
				<Skill />
				<Education />
				<Experience />
				<Portfolio />
				<Interest />
				<Contact />
			</Container>
		</AppDiv>
  );
}

export default App;
