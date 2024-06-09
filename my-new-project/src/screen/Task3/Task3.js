import { useState } from 'react'
import { Button, Text } from 'react-native'
function Task3() {
	
	const [size, setSize] = useState(20)
	return (
		<>
			<Text style={{fontSize: size}}>
				3. Cоздайте компонент, который предоставляет две кнопки: "Увеличить" и
				"Уменьшить". При нажатии на эти кнопки значение font-size изменяется
				соответствующим образом на+/–1px (useState).
			</Text>
			<Button title='Увеличить' onPress={() => setSize(size + 1)} />
			<Button title='Уменьшить' onPress={() => setSize(size - 1)} />
		</>
	)
}

export default Task3
