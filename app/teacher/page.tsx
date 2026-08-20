"use client"

import TeacherNavigation from '@/components/TeacherNavigation'
import PreviousTeachings from './[components]/PreviousTeachings'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import TeacherGreeting from './[components]/TeacherGreeting'
import { useRouter } from 'next/navigation'
import { UserAuth } from '../context/auth-context'
import { useEffect } from 'react'
import Link from 'next/link'


const TeacherPage = () => {
  const router = useRouter()
  const { verifyTeacherStatus } = UserAuth()
    
  const addTeacherHandler = () => {
    router.push("/teacher/new-teaching")
  }

  useEffect(() => {
    verifyTeacherStatus()
  }, [])
  return (
    <main className='flex flex-col justify-between items-center gap-3 md:gap-5'>
        <TeacherNavigation />
        <div className='w-full max-w-200'>
          <TeacherGreeting />
        <PreviousTeachings />
        <section className='w-full px-10 sm:max-2xl:px-0 my-8'>
            <Button className='w-full py-7 cursor-pointer' onClick={addTeacherHandler}><span>Add Teaching</span> <span><Plus /></span></Button>
        </section>
        <section className='w-full px-10 sm:max-2xl:px-0 my-10 space-y-4'>
            <h2 className='font-bold text-2xl w-full text-center'>Questions</h2>
            <Button className='w-full py-7 cursor-pointer' onClick={addTeacherHandler}><Link href="/teacher/new-question" className='w-full flex justify-center items-center gap-1 font-bold'><span>Add Question</span> <span><Plus /></span></Link></Button>
        </section>
        </div>
    </main>
  )
}

export default TeacherPage