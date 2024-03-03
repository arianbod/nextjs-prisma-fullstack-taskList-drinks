import EditForm from '@/components/tasks/EditForm';
import { getTaskData } from '@/utils/actions';
import prisma from '@/utils/db';
import Link from 'next/link';
import React from 'react'



const SingleTaskPage = async ({ params }) => {
    const id = params.singleTaskId
    console.log();
    const data = await getTaskData(id)
    console.log(data);
    return (
        <div className='mb-16'>
            <Link href='/tasks' className='btn btn-accent capitalize'>back to tasks</Link>
            <EditForm {...data} />
        </div>
    )
}

export default SingleTaskPage