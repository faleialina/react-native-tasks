import { useState } from 'react'
import { Button, Text, View } from 'react-native'
function Task2() {
	const [data, setData] = useState(['Component1', 'Component2', 'Component3'])
	const [flag, setFlag] = useState(false)
	const [text, setText] = useState('Component1')
	return (
		<>
			<Text>
				2. Создайте компонент выпадающего списка, который позволяет выбрать одно
				из несколькихзаранее определённых значенийпараметра.
			</Text>
			<Button title={text} onPress={() => setFlag(!flag)} />
			<View style={{ display: flag ? 'block' : 'none' }}>
                {data.map((el) => <Text onPress={() => {
                    setText(el)
                    setFlag(!flag)
                }} style={{ width: '100%', display: 'block' }}>{el}</Text>)}
            </View>
		</>
	)
}

export default Task2
