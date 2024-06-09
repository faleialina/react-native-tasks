import { useState } from 'react'
import { Button, Text, TextInput } from 'react-native'

function Task1() {
	const [inp, setInp] = useState({})
	function isInp(name, value) {
		setInp({ ...inp, [name]: value })
	}
	function isShow() {
		console.log(inp)
	}

	return (
		<>
			<Text>
				1. Реализуйте форму для ввода почты и пароля. По клику на кнопку
				получите данныеизполейввода сиспользованиемuseState. Напишите для
				нихвалидацию. Вслучаеуспешноговводаотобразите вconsole.logсообщение
				"success".
			</Text>
			<TextInput
				placeholder='email'
				onChangeText={value => isInp('email', value)}
			></TextInput>
			<TextInput
				placeholder='pwd'
				onChangeText={value => isInp('pwd', value)}
			></TextInput>
			<Button title='click' onPress={isShow}></Button>
		</>
	)
}

export default Task1
