'use server';
import { redirect } from 'next/navigation';

import { saveMeal } from '@/lib/meals';

function isInvalidText(text: FormDataEntryValue | null) {
  return !text || (text as string).trim() === '';
}

export async function shareMeal(_prevState: any, formData: FormData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !(meal.creator_email as string)?.includes('@') ||
    !meal.image ||
    (meal.image as File).size === 0
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  await saveMeal(meal);
  redirect('/meals');
}