import styled from 'styled-components';
import db from '../db.json';
import Widget from'../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';



const Title = styled.h1`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.secondary}
`;

// const BackgroundImage = styled.div`
// 	background-image: url(${db.bg});
// 	flex: 1;
// 	background-size: cover;
// 	background-position: center;
// `;

export const QuizContainer = styled.div`
	width: 100%;
	max-width: 350px;
	padding-top: 45px;
	margin: auto 10%;
	@media screen and (max-width: 500px) {
		margin: auto;
		padding: 15px;
	}
`;
//teste
export default function Home() {
	return (
		<QuizBackground backgroundImage={db.bg} >
			<QuizContainer>
				<Widget>
					<Widget.Header>
						<h1>The Legend of Zelda</h1>
					</Widget.Header>
					<Widget.Content>
						<p>testando o texto</p>
					</Widget.Content>
				</Widget>
				<Widget>
					<Widget.Header>
						<h1> Quiz da galera</h1>
					</Widget.Header>
					<Widget.Content>
						<p>wcwerc wrvcwrevcwr werwrvc</p>
					</Widget.Content>
				</Widget>				
			</QuizContainer>
			<Footer />
			<GitHubCorner projectUrl="https://github.com/EversonFeltrin" />
		</QuizBackground>
	)
};
