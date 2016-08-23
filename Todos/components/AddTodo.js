import React, { PropTypes } from 'react'

const AddTodo = ({ handleSubmit }) => (
	<div>
		<form onSubmit={(e) => {
			e.preventDefault();
			if (!input.value.trim()) {
				return
			}

			handleSubmit(input.value);
			input.value = '';
		}}>
			<input type="text" placeholder="输入任务名" ref={node => input = node} />
			<button type="submit">add todo</button>
		</form>
	</div>
)

AddTodo.propTypes = {
	handleSubmit: PropTypes.func.isRequired
}

export default AddTodo