import { createTask } from '@/utils/actions';

const TaskForm = () => {
	return (
		<form action={createTask}>
			<div className='join w-full'>
				<input
					type='text'
					className='input input-bordered join-item w-full'
					placeholder='type here'
					name='content'
					required
				/>
				<button
					type='submiit'
					className='btn btn-primary join-item capitalize'>
					create Task
				</button>
			</div>
		</form>
	);
};

export default TaskForm;
