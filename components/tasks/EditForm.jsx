import { editTaskData } from '@/utils/actions';
import React from 'react';

const EditForm = ({ content, id, completed, createdAt }) => {
	return (
		<form
			action={editTaskData}
			className='max-w-sm p-12 border border-base-300 rounded-lg'>
			<input
				type='hidden'
				value={id}
				name='id'
			/>

			{/* content */}
			<span></span>
			<input
				type='text'
				required
				defaultValue={content}
				name='content'
				id='content'
				className='input input-bordered w-full'
			/>
			{/* completed */}
			<div className='form-control'>
				<label
					htmlFor='completed'
					className='label cursor-pointer'>
					<span className='label-text'>completed</span>
					<input
						type='checkbox'
						defaultChecked={completed}
						id='completed'
						name='completed'
						className='checkbox checkbox-primary checkbox-sm'
					/>
				</label>
			</div>
			<button
				className='btn btn-primary btn-block'
				type='submit'>
				save
			</button>
		</form>
	);
};

export default EditForm;
