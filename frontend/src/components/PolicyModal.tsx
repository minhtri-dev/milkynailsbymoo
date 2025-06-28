const PolicyModal = ({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000073]">
      <div className="relative h-full max-h-full w-full max-w-full overflow-y-auto rounded-none bg-white p-8 shadow-lg md:h-auto md:max-h-[90vh] md:max-w-2xl md:rounded-xl">
        <button
          className="text-midnight absolute top-4 right-4 text-2xl hover:cursor-pointer"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h1 className="text-midnight my-6 text-center text-3xl font-bold">
          Policies
        </h1>
        <section className="mb-8">
          <h2 className="text-midnight mb-3 text-xl font-semibold">Booking</h2>
          <ul className="text-midnight list-inside list-disc space-y-2">
            <li>
              A{' '}
              <span className="font-semibold">$15 non-refundable deposit</span>{' '}
              must be paid to lock in your appointment (this will be deducted
              from your total on your appointment day).
            </li>
            <li>
              On weekend bookings, there will be a{' '}
              <span className="font-semibold">$15 surcharge</span>.
            </li>
            <li>
              As a beginner, sets may take a long time to complete (1-4 hours,
              depending on complexity). Please do not book on a tight schedule,
              as I do not want to rush your service.
            </li>
            <li>I do not allow guests, please arrive alone.</li>
            <li>
              Note my location (Cranbourne). This is a home-based salon, so
              please be mindful of my surroundings.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-midnight mb-3 text-xl font-semibold">
            Late and Cancellation Fees
          </h2>
          <ul className="text-midnight list-inside list-disc space-y-2">
            <li>
              If you are more than{' '}
              <span className="font-semibold">15 minutes late</span> to your
              scheduled appointment time, a{' '}
              <span className="font-semibold">$10 fee</span> will be applied.
            </li>
            <li>
              If you are over{' '}
              <span className="font-semibold">30 minutes late</span>, your
              appointment will be cancelled and considered a no show.
            </li>
            <li>
              No shows require a full payment of the original set to be allowed
              to rebook, and the current appointment will be cancelled.
            </li>
            <li>
              Cancellations must be made at least{' '}
              <span className="font-semibold">1 week in advance</span> of the
              appointment date.
            </li>
            <li>Late cancellations warrant the withholding of your deposit.</li>
          </ul>
        </section>
        <p className="text-midnight mt-10 text-center text-sm">
          By booking, you agree to have read these policies.
        </p>
      </div>
    </div>
  )
}

export default PolicyModal
