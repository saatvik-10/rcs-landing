import { toast } from 'react-hot-toast'
import React from 'react'
import Button from '../ui/Button'
import { useRouter } from 'next/navigation'

function TicketCard({
    setTicketType,
    setTicketBookingOpen,
}: {
    setTicketType: (val: string) => void
    setTicketBookingOpen: (val: boolean) => void
}) {
    const router = useRouter()
    return (
        <div className="card w-full max-w-sm bg-white text-black p-5">
            <p className="font-bold text-4xl">
                LPU <br />
                Vertos Pass
            </p>
            <p className="mt-8 text-lg">
                For the students of Lovely Professional University.
            </p>

            <div className="mt-8 text-lg">
                <p className="text-primary">Includes: </p>
                <div className="flex flex-col gap-2">
                    <p>
                        - Welcome Kit Includes: 1 x Notepad-Pen, 1 x ID-Lanyard,
                        Stickers
                    </p>
                    <p> - Access to CTF</p>
                    <p> - 2 x Meals Provided</p>
                    <p> - Complimentry Swags</p>
                    <p> - Conference Attendee Certificate</p>
<<<<<<< HEAD
                </div>
            </div>
            <div className="button mt-8">
                <Button
                    size={'full'}
                    onClick={() => {
                        router.push(
                            `${process.env.NEXT_PUBLIC_PAYMENT_WEBSITE}/student_pass`
                        )
                    }}
                    className="bg-red-950"
                >
                    Rs. 250
                </Button>
            </div>
        </div>
    )
=======
              </div>
          </div>
          <div className="button mt-8 bg-primary">
              <Button size={'full'} >Coming Soon</Button>
          </div>
      </div>
  )
>>>>>>> f1d45627580b98e6969567d25a9e94c86d56d779
}

export default TicketCard
