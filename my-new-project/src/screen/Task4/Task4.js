import { useState } from 'react'
import { Button, Text, View } from 'react-native'
function Task4() {
	const [val, setVal] = useState('')
	const [res, setRes] = useState(0)
	return (
		<>
			<Text>
				4. Создайтекомпонент простого калькулятора,который выполняеткоманды:+,-,
				*, /.
			</Text>
			<View style={{ flexDirection: 'row', gap: '10px' }}>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, i) => (
					<Text
						style={{ backgroundColor: 'pink', padding: '10px' }}
						key={i}
						onPress={() => setVal(val + el)}
					>
						{el}
					</Text>
				))}
			</View>
			<View style={{ flexDirection: 'row', gap: '10px' }}>
				{['+', '-', '*', '/'].map((el, i) => (
					<Text
						style={{ backgroundColor: 'pink', padding: '10px' }}
						key={i}
						onPress={() => setVal(val + el)}
					>
						{el}
					</Text>
				))}
			</View>

			<Button title='=' onPress={() => setRes(` = ${eval(val)}`)} />

			<Text>
				{' '}
				{val}
				{res}
			</Text>

			<Button
				title='Сбросить'
				onPress={() => {
					setVal(''), setRes('')
				}}
			/>
		</>
	)
}

export default Task4
