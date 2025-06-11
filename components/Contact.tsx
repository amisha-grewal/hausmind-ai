import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const onSubmit = (data: FormData) => console.log(data)

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-8">Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-4">
        <input type="text" {...register('name', { required: true })} placeholder="Name" className="w-full p-2 border rounded" />
        {errors.name && <span>Name is required</span>}
        <input type="email" {...register('email', { required: true })} placeholder="Email" className="w-full p-2 border rounded" />
        {errors.email && <span>Email is required</span>}
        <textarea {...register('message', { required: true })} placeholder="Message" className="w-full p-2 border rounded" />
        {errors.message && <span>Message is required</span>}
        <button type="submit" className="px-4 py-2 border rounded">Submit</button>
      </form>
    </section>
  )
}