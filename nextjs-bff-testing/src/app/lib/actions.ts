"use server";

import * as z from "zod";
import { NewMovie, saveMovie } from "../api/MovieApi";
import { revalidatePath } from "next/cache";

// Schema for validation
const MovieSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required' }),
  directorName: z
    .string()
    .min(1, { message: 'Director name is required' }),
  directorPhoneNo: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits' }),
  year: z
    .coerce.number()
    .min(1900)
    .max(new Date().getFullYear() + 5),
});

interface State {
  errors?: {
    title?: string[];
    directorName?: string[];
    directorPhoneNo?: string[];
    year?: string[];
  };
  values?: {
    title?: string;
    directorName?: string;
    directorPhoneNo?: string;
    year?: string;
  };
  message?: string | null;
}

export async function createMovie(
  previousState: State | undefined, // <-- allow undefined!
  formData: FormData
): Promise<State> {

  // const state = previousState ?? {};
  const movieFormData = Object.fromEntries(formData);
  const validateMovieForm = MovieSchema.safeParse(movieFormData);

  const getString = (value: FormDataEntryValue | null): string =>
    typeof value === "string" ? value : '';

  const title = getString(formData.get("title"));
  const directorName = getString(formData.get("directorName"));
  const directorPhoneNo = getString(formData.get("directorPhoneNo"));
  const yearStr = getString(formData.get("year"));
  const year = Number(yearStr) || 0;

  const movie: NewMovie = {
    title,
    director: {
      name: directorName,
      phoneNo: directorPhoneNo,
    },
    year,
  }

  if (!validateMovieForm.success) {
    //console.log('Error ',validateMovieForm.error)
    const formFieldErrors = validateMovieForm.error.flatten().fieldErrors;
    return {
      errors: {
        title: formFieldErrors?.title,
        directorName: formFieldErrors?.directorName,
        directorPhoneNo: formFieldErrors?.directorPhoneNo,
        year: formFieldErrors?.year,
      },
    };
  }
  else {
    await saveMovie(movie);
    revalidatePath("/movies");
    return {
      message: "Movie created successfully!",
    };
  }
}

// export async function createMovie(
//   previousState: State | undefined,
//   formData: FormData
// ): Promise<State | undefined> {
//   const state = previousState ?? {};
//
//   try {
//     // Validate form data
//     const validatedFields = MovieSchema.safeParse({
//       title: formData.get('title') ?? "",
//       directorName: formData.get('directorName') ?? "",
//       directorPhoneNo: formData.get('directorPhoneNo') ?? "",
//       year: formData.get('year')?.toString() ?? '',
//     });
//
//     if (!validatedFields.success) {
//       return {
//         errors: validatedFields.error.flatten().fieldErrors,
//         values: {
//           title: formData.get('title')?.toString() ?? '',
//           directorName: formData.get('directorName')?.toString() ?? '',
//           directorPhoneNo: formData.get('directorPhoneNo')?.toString() ?? '',
//           year: formData.get('year')?.toString() ?? '',
//         },
//         message: 'Missing or invalid fields. Failed to create movie.',
//       };
//     }
//
//     const {
//       title,
//       directorName,
//       directorPhoneNo,
//       year
//     } = validatedFields.data;
//
//     const movie: NewMovie = {
//       title,
//       director: {
//         name: directorName,
//         phoneNo: directorPhoneNo,
//       },
//       year,
//     };
//
//     console.log("previousState", state);
//     await saveMovie(movie);
//     // return { message: 'Movie created successfully!' };
//     revalidatePath("/movies");
//     return undefined;
//   } catch (error) {
//     console.error('Failed to create movie:', error);
//     return { message: 'Database Error: Failed to create movie.' };
//   }
// }
