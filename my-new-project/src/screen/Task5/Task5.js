import { useRef, useState } from 'react'
import { Button, Text } from 'react-native'
function Task5() {
	const inpRef = useRef(null)
	const [inp, setInp] = useState({})

	function isShow() {
		console.log('success')
	}

	return (
		<>
			<Text>
				5. Реализуйте форму для ввода почты и пароля. По клику на кнопку
				получите данные из полей ввода с использованием useRef.Напишите для них
				валидацию.В случае успешного ввода отобразите в console.log сообщение
				"success".
			</Text>
			<TextInput placeholder='email' ref={inpRef} />
			<TextInput placeholder='pwd' ref={inpRef} />
			<Button title='click' onPress={isShow}></Button>
		</>
	)
}

export default Task5
