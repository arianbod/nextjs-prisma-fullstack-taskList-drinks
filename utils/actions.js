'use server'
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'
import { z } from 'zod'
export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
}
export const createTask = async (formData) => {
    const content = formData.get('content');
    await prisma.task.create({
        data: {
            content,
        },
    });
    revalidatePath('/tasks');
    console.log(content);
}

export const deleteTask = async (formData) => {
    const id = formData.get('id')
    await prisma.task.delete({
        where: { id }
    })
    revalidatePath('/tasks')
}
export const getTaskData = async (id) => {
    return await prisma.task.findUnique({
        where: { id }
    })
}

export const editTaskData = async (formData) => {
    const content = formData.get('content');
    const completed = formData.get('completed');
    const id = formData.get('id');

    await prisma.task.update({
        where: { id, },
        data: { content, completed: completed === 'on' ? true : false },
    })
    redirect('/tasks')
}

export const createTaskCustom = async (prevState, formData) => {
    // await new Promise((resolve => setTimeout(resolve, 3000)))
    const content = formData.get('content');
    const Task = z.object({
        content: z.string().min(5)
    })
    try {
        Task.parse({ content })
        await prisma.task.create({
            data: {
                content,
            },
        });
        revalidatePath('/tasks');
        return { message: 'success' }
    } catch (error) {
        console.log(error);
        return { message: error.message }
    }
}