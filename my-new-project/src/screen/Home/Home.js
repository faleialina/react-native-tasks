import { Text } from 'react-native';

function Home({ navigation }) {
	return (
			<>
					<Text onPress={() => navigation.navigate('Task1')}>Перейти к 1 задаче</Text>
					<Text onPress={() => navigation.navigate('Task2')}>Перейти к 2 задаче</Text>
					<Text onPress={() => navigation.navigate('Task3')}>Перейти к 3 задаче</Text>
					<Text onPress={() => navigation.navigate('Task4')}>Перейти к 4 задаче</Text>
					<Text onPress={() => navigation.navigate('Task5')}>Перейти к 5 задаче</Text>
					<Text onPress={() => navigation.navigate('Task6')}>Перейти к 6 задаче</Text>
					<Text onPress={() => navigation.navigate('Task7')}>Перейти к 7 задаче</Text>
			</>
	);
}

export default Home;