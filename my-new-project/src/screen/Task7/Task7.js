import { useState } from 'react'
import { Button, Text } from 'react-native'
function Task7() {
	
	const [size, setSize] = useState(20)
	return (
		<>
			<Text style={{fontSize: size}}>
			7. Используйте useRef для хранения ссылки на тег h1 в HTML. Ваша задача: при первичном рендеринге отправить запрос на https://api.ipify.org/?format=json. Отобразите результат в textContentэлемента h1.
			</Text>
			<Button title='Увеличить' onPress={() => setSize(size + 1)} />
			<Button title='Уменьшить' onPress={() => setSize(size - 1)} />
		</>
	)
}

export default Task7
